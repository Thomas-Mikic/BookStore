(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();var vh={exports:{}},oa={},Eh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Mv(){if(em)return Se;em=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.iterator;function F(V){return V===null||typeof V!="object"?null:(V=N&&V[N]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function j(V,B,oe){this.props=V,this.context=B,this.refs=X,this.updater=oe||z}j.prototype.isReactComponent={},j.prototype.setState=function(V,B){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,B,"setState")},j.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function de(){}de.prototype=j.prototype;function ve(V,B,oe){this.props=V,this.context=B,this.refs=X,this.updater=oe||z}var Ee=ve.prototype=new de;Ee.constructor=ve,Y(Ee,j.prototype),Ee.isPureReactComponent=!0;var Te=Array.isArray,qe=Object.prototype.hasOwnProperty,Ae={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(V,B,oe){var we,Ie={},Ce=null,Le=null;if(B!=null)for(we in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Ce=""+B.key),B)qe.call(B,we)&&!C.hasOwnProperty(we)&&(Ie[we]=B[we]);var Me=arguments.length-2;if(Me===1)Ie.children=oe;else if(1<Me){for(var Be=Array(Me),pt=0;pt<Me;pt++)Be[pt]=arguments[pt+2];Ie.children=Be}if(V&&V.defaultProps)for(we in Me=V.defaultProps,Me)Ie[we]===void 0&&(Ie[we]=Me[we]);return{$$typeof:i,type:V,key:Ce,ref:Le,props:Ie,_owner:Ae.current}}function A(V,B){return{$$typeof:i,type:V.type,key:B,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var B={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(oe){return B[oe]})}var O=/\/+/g;function S(V,B){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):B.toString(36)}function et(V,B,oe,we,Ie){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ce){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=we===""?"."+S(Le,0):we,Te(Ie)?(oe="",V!=null&&(oe=V.replace(O,"$&/")+"/"),et(Ie,B,oe,"",function(pt){return pt})):Ie!=null&&(k(Ie)&&(Ie=A(Ie,oe+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+V)),B.push(Ie)),1;if(Le=0,we=we===""?".":we+":",Te(V))for(var Me=0;Me<V.length;Me++){Ce=V[Me];var Be=we+S(Ce,Me);Le+=et(Ce,B,oe,Be,Ie)}else if(Be=F(V),typeof Be=="function")for(V=Be.call(V),Me=0;!(Ce=V.next()).done;)Ce=Ce.value,Be=we+S(Ce,Me++),Le+=et(Ce,B,oe,Be,Ie);else if(Ce==="object")throw B=String(V),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Pt(V,B,oe){if(V==null)return V;var we=[],Ie=0;return et(V,we,"","",function(Ce){return B.call(oe,Ce,Ie++)}),we}function Ct(V){if(V._status===-1){var B=V._result;B=B(),B.then(function(oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=oe)},function(oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=oe)}),V._status===-1&&(V._status=0,V._result=B)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},J={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ae};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Pt,forEach:function(V,B,oe){Pt(V,function(){B.apply(this,arguments)},oe)},count:function(V){var B=0;return Pt(V,function(){B++}),B},toArray:function(V){return Pt(V,function(B){return B})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=j,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=ve,Se.StrictMode=s,Se.Suspense=y,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Se.act=ee,Se.cloneElement=function(V,B,oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var we=Y({},V.props),Ie=V.key,Ce=V.ref,Le=V._owner;if(B!=null){if(B.ref!==void 0&&(Ce=B.ref,Le=Ae.current),B.key!==void 0&&(Ie=""+B.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(Be in B)qe.call(B,Be)&&!C.hasOwnProperty(Be)&&(we[Be]=B[Be]===void 0&&Me!==void 0?Me[Be]:B[Be])}var Be=arguments.length-2;if(Be===1)we.children=oe;else if(1<Be){Me=Array(Be);for(var pt=0;pt<Be;pt++)Me[pt]=arguments[pt+2];we.children=Me}return{$$typeof:i,type:V.type,key:Ie,ref:Ce,props:we,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=I,Se.createFactory=function(V){var B=I.bind(null,V);return B.type=V,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=k,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Ct}},Se.memo=function(V,B){return{$$typeof:v,type:V,compare:B===void 0?null:B}},Se.startTransition=function(V){var B=J.transition;J.transition={};try{V()}finally{J.transition=B}},Se.unstable_act=ee,Se.useCallback=function(V,B){return Ue.current.useCallback(V,B)},Se.useContext=function(V){return Ue.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Se.useEffect=function(V,B){return Ue.current.useEffect(V,B)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(V,B,oe){return Ue.current.useImperativeHandle(V,B,oe)},Se.useInsertionEffect=function(V,B){return Ue.current.useInsertionEffect(V,B)},Se.useLayoutEffect=function(V,B){return Ue.current.useLayoutEffect(V,B)},Se.useMemo=function(V,B){return Ue.current.useMemo(V,B)},Se.useReducer=function(V,B,oe){return Ue.current.useReducer(V,B,oe)},Se.useRef=function(V){return Ue.current.useRef(V)},Se.useState=function(V){return Ue.current.useState(V)},Se.useSyncExternalStore=function(V,B,oe){return Ue.current.useSyncExternalStore(V,B,oe)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var tm;function rd(){return tm||(tm=1,Eh.exports=Mv()),Eh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Fv(){if(nm)return oa;nm=1;var i=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,N={},F=null,z=null;v!==void 0&&(F=""+v),y.key!==void 0&&(F=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(N[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)N[w]===void 0&&(N[w]=y[w]);return{$$typeof:e,type:m,key:F,ref:z,props:N,_owner:a.current}}return oa.Fragment=t,oa.jsx=h,oa.jsxs=h,oa}var rm;function bv(){return rm||(rm=1,vh.exports=Fv()),vh.exports}var pe=bv(),rn=rd(),Xl={},wh={exports:{}},Qt={},Th={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Uv(){return im||(im=1,function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var V=ee-1>>>1,B=J[V];if(0<a(B,le))J[V]=le,J[ee]=B,ee=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var V=0,B=J.length,oe=B>>>1;V<oe;){var we=2*(V+1)-1,Ie=J[we],Ce=we+1,Le=J[Ce];if(0>a(Ie,ee))Ce<B&&0>a(Le,Ie)?(J[V]=Le,J[Ce]=ee,V=Ce):(J[V]=Ie,J[we]=ee,V=we);else if(Ce<B&&0>a(Le,ee))J[V]=Le,J[Ce]=ee,V=Ce;else break e}}return le}function a(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,N=null,F=3,z=!1,Y=!1,X=!1,j=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(J){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=J)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function Te(J){if(X=!1,Ee(J),!Y)if(t(y)!==null)Y=!0,Ct(qe);else{var le=t(v);le!==null&&Ue(Te,le.startTime-J)}}function qe(J,le){Y=!1,X&&(X=!1,de(I),I=-1),z=!0;var ee=F;try{for(Ee(le),N=t(y);N!==null&&(!(N.expirationTime>le)||J&&!D());){var V=N.callback;if(typeof V=="function"){N.callback=null,F=N.priorityLevel;var B=V(N.expirationTime<=le);le=i.unstable_now(),typeof B=="function"?N.callback=B:N===t(y)&&s(y),Ee(le)}else s(y);N=t(y)}if(N!==null)var oe=!0;else{var we=t(v);we!==null&&Ue(Te,we.startTime-le),oe=!1}return oe}finally{N=null,F=ee,z=!1}}var Ae=!1,C=null,I=-1,A=5,k=-1;function D(){return!(i.unstable_now()-k<A)}function O(){if(C!==null){var J=i.unstable_now();k=J;var le=!0;try{le=C(!0,J)}finally{le?S():(Ae=!1,C=null)}}else Ae=!1}var S;if(typeof ve=="function")S=function(){ve(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Pt=et.port2;et.port1.onmessage=O,S=function(){Pt.postMessage(null)}}else S=function(){j(O,0)};function Ct(J){C=J,Ae||(Ae=!0,S())}function Ue(J,le){I=j(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,Ct(qe))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return F},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(F){case 1:case 2:case 3:var le=3;break;default:le=F}var ee=F;F=le;try{return J()}finally{F=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=F;F=J;try{return le()}finally{F=ee}},i.unstable_scheduleCallback=function(J,le,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,J={id:w++,callback:le,priorityLevel:J,startTime:ee,expirationTime:B,sortIndex:-1},ee>V?(J.sortIndex=ee,e(v,J),t(y)===null&&J===t(v)&&(X?(de(I),I=-1):X=!0,Ue(Te,ee-V))):(J.sortIndex=B,e(y,J),Y||z||(Y=!0,Ct(qe))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var le=F;return function(){var ee=F;F=le;try{return J.apply(this,arguments)}finally{F=ee}}}}(Ih)),Ih}var sm;function jv(){return sm||(sm=1,Th.exports=Uv()),Th.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Bv(){if(om)return Qt;om=1;var i=rd(),e=jv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},N={};function F(n){return y.call(N,n)?!0:y.call(w,n)?!1:v.test(n)?N[n]=!0:(w[n]=!0,!1)}function z(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,o,c){if(r===null||typeof r>"u"||z(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,o,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];j[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(de,ve);j[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(de,ve);j[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(de,ve);j[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,r,o,c){var d=j.hasOwnProperty(r)?j[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,o,d,c)&&(o=null),c||d===null?F(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function B(n){if(V===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var oe=!1;function we(n,r){if(!n||oe)return"";oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var c=b}Reflect.construct(n,[],r)}else{try{r.call()}catch(b){c=b}n.call(r.prototype)}else{try{throw Error()}catch(b){c=b}n()}}catch(b){if(b&&c&&typeof b.stack=="string"){for(var d=b.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{oe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case Ae:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case Ct:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=Be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Zn(n){n._valueTracker||(n._valueTracker=pt(n))}function Xi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function hi(n,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ji(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=Me(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ho(n,r){r=r.checked,r!=null&&Ee(n,"checked",r,!1)}function fo(n,r){ho(n,r);var o=Me(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Zi(n,r.type,o):r.hasOwnProperty("defaultValue")&&Zi(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ma(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Zi(n,r,o){(r!=="number"||kr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var er=Array.isArray;function tr(n,r,o,c){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Me(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function po(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function es(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(er(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Me(o)}}function ts(n,r){var o=Me(r.value),c=Me(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function mo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nr,go=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=nr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pr(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fi=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(n){fi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),di[r]=di[n]})});function yo(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||di.hasOwnProperty(n)&&di[n]?(""+r).trim():r+"px"}function _o(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=yo(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var vo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eo(n,r){if(r){if(vo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function wo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function ns(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rs=null,on=null,Ln=null;function is(n){if(n=Wo(n)){if(typeof rs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),rs(n.stateNode,n.type,r))}}function Mn(n){on?Ln?Ln.push(n):Ln=[n]:on=n}function To(){if(on){var n=on,r=Ln;if(Ln=on=null,is(n),r)for(n=0;n<r.length;n++)is(r[n])}}function mi(n,r){return n(r)}function Io(){}var rr=!1;function So(n,r,o){if(rr)return n(r,o);rr=!0;try{return mi(n,r,o)}finally{rr=!1,(on!==null||Ln!==null)&&(Io(),To())}}function tt(n,r){var o=n.stateNode;if(o===null)return null;var c=dl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ss=!1;if(m)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){ss=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{ss=!1}function gi(n,r,o,c,d,p,_,T,R){var b=Array.prototype.slice.call(arguments,3);try{r.apply(o,b)}catch(H){this.onError(H)}}var yi=!1,os=null,_n=!1,Ao=null,Ku={onError:function(n){yi=!0,os=n}};function as(n,r,o,c,d,p,_,T,R){yi=!1,os=null,gi.apply(Ku,arguments)}function Fa(n,r,o,c,d,p,_,T,R){if(as.apply(this,arguments),yi){if(yi){var b=os;yi=!1,os=null}else throw Error(t(198));_n||(_n=!0,Ao=b)}}function vn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function _i(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function En(n){if(vn(n)!==n)throw Error(t(188))}function ba(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return En(d),n;if(p===c)return En(d),r;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===o){_=!0,o=d,c=p;break}if(T===c){_=!0,c=d,o=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===o){_=!0,o=p,c=d;break}if(T===c){_=!0,c=p,o=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Ro(n){return n=ba(n),n!==null?ls(n):null}function ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ls(n);if(r!==null)return r;n=n.sibling}return null}var us=e.unstable_scheduleCallback,ko=e.unstable_cancelCallback,Ua=e.unstable_shouldYield,Gu=e.unstable_requestPaint,ze=e.unstable_now,ja=e.unstable_getCurrentPriorityLevel,vi=e.unstable_ImmediatePriority,Cr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,Po=e.unstable_LowPriority,Ba=e.unstable_IdlePriority,Ei=null,Yt=null;function za(n){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ei,n,void 0,(n.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ha,Co=Math.log,$a=Math.LN2;function Ha(n){return n>>>=0,n===0?32:31-(Co(n)/$a|0)|0}var cs=64,hs=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wi(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~d;T!==0?c=Nr(T):(p&=_,p!==0&&(c=Nr(p)))}else _=o&~d,_!==0?c=Nr(_):p!==0&&(c=Nr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-bt(r),d=1<<o,c|=n[o],r&=~d;return c}function Qu(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-bt(p),T=1<<_,R=d[_];R===-1?((T&o)===0||(T&c)!==0)&&(d[_]=Qu(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function Xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ti(){var n=cs;return cs<<=1,(cs&4194240)===0&&(cs=64),n}function Dr(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Vr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bt(r),n[r]=o}function je(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-bt(o),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Or(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-bt(o),d=1<<c;d&r|n[c]&r&&(n[c]|=r),o&=~d}}var ke=0;function xr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wa,ds,qa,Ka,Ga,No=!1,Fn=[],Et=null,wn=null,Tn=null,Lr=new Map,ln=new Map,bn=[],Yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function zt(n,r,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Wo(r),r!==null&&ds(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Xu(n,r,o,c,d){switch(r){case"focusin":return Et=zt(Et,n,r,o,c,d),!0;case"dragenter":return wn=zt(wn,n,r,o,c,d),!0;case"mouseover":return Tn=zt(Tn,n,r,o,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,zt(Lr.get(p)||null,n,r,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,zt(ln.get(p)||null,n,r,o,c,d)),!0}return!1}function Ya(n){var r=ki(n.target);if(r!==null){var o=vn(r);if(o!==null){if(r=o.tag,r===13){if(r=_i(o),r!==null){n.blockedOn=r,Ga(n.priority,function(){qa(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=fs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);pi=c,o.target.dispatchEvent(c),pi=null}else return r=Wo(o),r!==null&&ds(r),n.blockedOn=o,!1;r.shift()}return!0}function Ii(n,r,o){sr(n)&&o.delete(r)}function Xa(){No=!1,Et!==null&&sr(Et)&&(Et=null),wn!==null&&sr(wn)&&(wn=null),Tn!==null&&sr(Tn)&&(Tn=null),Lr.forEach(Ii),ln.forEach(Ii)}function In(n,r){n.blockedOn===r&&(n.blockedOn=null,No||(No=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xa)))}function Sn(n){function r(d){return In(d,n)}if(0<Fn.length){In(Fn[0],n);for(var o=1;o<Fn.length;o++){var c=Fn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&In(Et,n),wn!==null&&In(wn,n),Tn!==null&&In(Tn,n),Lr.forEach(r),ln.forEach(r),o=0;o<bn.length;o++)c=bn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<bn.length&&(o=bn[0],o.blockedOn===null);)Ya(o),o.blockedOn===null&&bn.shift()}var or=Te.ReactCurrentBatchConfig,Mr=!0;function Ke(n,r,o,c){var d=ke,p=or.transition;or.transition=null;try{ke=1,Do(n,r,o,c)}finally{ke=d,or.transition=p}}function Ju(n,r,o,c){var d=ke,p=or.transition;or.transition=null;try{ke=4,Do(n,r,o,c)}finally{ke=d,or.transition=p}}function Do(n,r,o,c){if(Mr){var d=fs(n,r,o,c);if(d===null)uc(n,r,c,Si,o),Qa(n,c);else if(Xu(d,n,r,o,c))c.stopPropagation();else if(Qa(n,c),r&4&&-1<Yu.indexOf(n)){for(;d!==null;){var p=Wo(d);if(p!==null&&Wa(p),p=fs(n,r,o,c),p===null&&uc(n,r,c,Si,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else uc(n,r,c,null,o)}}var Si=null;function fs(n,r,o,c){if(Si=null,n=ns(c),n=ki(n),n!==null)if(r=vn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=_i(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Si=n,null}function Vo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ja()){case vi:return 1;case Cr:return 4;case an:case Po:return 16;case Ba:return 536870912;default:return 16}default:return 16}}var Jt=null,ps=null,$t=null;function Oo(){if($t)return $t;var n,r=ps,o=r.length,c,d="value"in Jt?Jt.value:Jt.textContent,p=d.length;for(n=0;n<o&&r[n]===d[n];n++);var _=o-n;for(c=1;c<=_&&r[o-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function ms(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Un(){return!0}function xo(){return!1}function wt(n){function r(o,c,d,p,_){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Un:xo,this.isPropagationStopped=xo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=wt(An),jn=ee({},An,{view:0,detail:0}),Zu=wt(jn),ys,ar,Fr,Ai=ee({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(ys=n.screenX-Fr.screenX,ar=n.screenY-Fr.screenY):ar=ys=0,Fr=n),ys)},movementY:function(n){return"movementY"in n?n.movementY:ar}}),_s=wt(Ai),Lo=ee({},Ai,{dataTransfer:0}),Ja=wt(Lo),vs=ee({},jn,{relatedTarget:0}),Es=wt(vs),Za=ee({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),lr=wt(Za),el=ee({},An,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tl=wt(el),nl=ee({},An,{data:0}),Mo=wt(nl),ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function il(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=rl[n])?!!r[n]:!1}function Bn(){return il}var l=ee({},jn,{key:function(n){if(n.key){var r=ws[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=wt(l),g=ee({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=wt(g),x=ee({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),U=wt(x),Q=ee({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=wt(Q),ut=ee({},Ai,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=wt(ut),mt=[9,13,27,32],it=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var Zt=m&&"TextEvent"in window&&!un,Ri=m&&(!it||un&&8<un&&11>=un),Ts=" ",Kd=!1;function Gd(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function O_(n,r){switch(n){case"compositionend":return Qd(r);case"keypress":return r.which!==32?null:(Kd=!0,Ts);case"textInput":return n=r.data,n===Ts&&Kd?null:n;default:return null}}function x_(n,r){if(Is)return n==="compositionend"||!it&&Gd(n,r)?(n=Oo(),$t=ps=Jt=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ri&&r.locale!=="ko"?null:r.data;default:return null}}var L_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!L_[n.type]:r==="textarea"}function Xd(n,r,o,c){Mn(c),r=ul(r,"onChange"),0<r.length&&(o=new gs("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Fo=null,bo=null;function M_(n){gf(n,0)}function sl(n){var r=Ps(n);if(Xi(r))return n}function F_(n,r){if(n==="change")return r}var Jd=!1;if(m){var ec;if(m){var tc="oninput"in document;if(!tc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),tc=typeof Zd.oninput=="function"}ec=tc}else ec=!1;Jd=ec&&(!document.documentMode||9<document.documentMode)}function ef(){Fo&&(Fo.detachEvent("onpropertychange",tf),bo=Fo=null)}function tf(n){if(n.propertyName==="value"&&sl(bo)){var r=[];Xd(r,bo,n,ns(n)),So(M_,r)}}function b_(n,r,o){n==="focusin"?(ef(),Fo=r,bo=o,Fo.attachEvent("onpropertychange",tf)):n==="focusout"&&ef()}function U_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(bo)}function j_(n,r){if(n==="click")return sl(r)}function B_(n,r){if(n==="input"||n==="change")return sl(r)}function z_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Rn=typeof Object.is=="function"?Object.is:z_;function Uo(n,r){if(Rn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!y.call(r,d)||!Rn(n[d],r[d]))return!1}return!0}function nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rf(n,r){var o=nf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=nf(o)}}function sf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?sf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function of(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=kr(n.document)}return r}function nc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function $_(n){var r=of(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&sf(o.ownerDocument.documentElement,o)){if(c!==null&&nc(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=rf(o,p);var _=rf(o,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var H_=m&&"documentMode"in document&&11>=document.documentMode,Ss=null,rc=null,jo=null,ic=!1;function af(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ic||Ss==null||Ss!==kr(c)||(c=Ss,"selectionStart"in c&&nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),jo&&Uo(jo,c)||(jo=c,c=ul(rc,"onSelect"),0<c.length&&(r=new gs("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=Ss)))}function ol(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var As={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},sc={},lf={};m&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function al(n){if(sc[n])return sc[n];if(!As[n])return n;var r=As[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in lf)return sc[n]=r[o];return n}var uf=al("animationend"),cf=al("animationiteration"),hf=al("animationstart"),df=al("transitionend"),ff=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(n,r){ff.set(n,r),u(r,[n])}for(var oc=0;oc<pf.length;oc++){var ac=pf[oc],W_=ac.toLowerCase(),q_=ac[0].toUpperCase()+ac.slice(1);br(W_,"on"+q_)}br(uf,"onAnimationEnd"),br(cf,"onAnimationIteration"),br(hf,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(df,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function mf(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,Fa(c,r,void 0,n),n.currentTarget=null}function gf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,b=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;mf(d,T,b),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,b=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;mf(d,T,b),p=R}}}if(_n)throw n=Ao,_n=!1,Ao=null,n}function He(n,r){var o=r[mc];o===void 0&&(o=r[mc]=new Set);var c=n+"__bubble";o.has(c)||(yf(r,n,2,!1),o.add(c))}function lc(n,r,o){var c=0;r&&(c|=4),yf(o,n,c,r)}var ll="_reactListening"+Math.random().toString(36).slice(2);function zo(n){if(!n[ll]){n[ll]=!0,s.forEach(function(o){o!=="selectionchange"&&(K_.has(o)||lc(o,!1,n),lc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ll]||(r[ll]=!0,lc("selectionchange",!1,r))}}function yf(n,r,o,c){switch(Vo(r)){case 1:var d=Ke;break;case 4:d=Ju;break;default:d=Do}o=d.bind(null,r,o,n),d=void 0,!ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function uc(n,r,o,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=ki(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}So(function(){var b=p,H=ns(o),K=[];e:{var $=ff.get(n);if($!==void 0){var Z=gs,ne=n;switch(n){case"keypress":if(ms(o)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":ne="focus",Z=Es;break;case"focusout":ne="blur",Z=Es;break;case"beforeblur":case"afterblur":Z=Es;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=_s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Ja;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case uf:case cf:case hf:Z=lr;break;case df:Z=Fe;break;case"scroll":Z=Zu;break;case"wheel":Z=Ne;break;case"copy":case"cut":case"paste":Z=tl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var re=(r&4)!==0,nt=!re&&n==="scroll",L=re?$!==null?$+"Capture":null:$;re=[];for(var P=b,M;P!==null;){M=P;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,L!==null&&(G=tt(P,L),G!=null&&re.push($o(P,G,M)))),nt)break;P=P.return}0<re.length&&($=new Z($,ne,null,o,H),K.push({event:$,listeners:re}))}}if((r&7)===0){e:{if($=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",$&&o!==pi&&(ne=o.relatedTarget||o.fromElement)&&(ki(ne)||ne[ur]))break e;if((Z||$)&&($=H.window===H?H:($=H.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(ne=o.relatedTarget||o.toElement,Z=b,ne=ne?ki(ne):null,ne!==null&&(nt=vn(ne),ne!==nt||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(Z=null,ne=b),Z!==ne)){if(re=_s,G="onMouseLeave",L="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(re=E,G="onPointerLeave",L="onPointerEnter",P="pointer"),nt=Z==null?$:Ps(Z),M=ne==null?$:Ps(ne),$=new re(G,P+"leave",Z,o,H),$.target=nt,$.relatedTarget=M,G=null,ki(H)===b&&(re=new re(L,P+"enter",ne,o,H),re.target=M,re.relatedTarget=nt,G=re),nt=G,Z&&ne)t:{for(re=Z,L=ne,P=0,M=re;M;M=Rs(M))P++;for(M=0,G=L;G;G=Rs(G))M++;for(;0<P-M;)re=Rs(re),P--;for(;0<M-P;)L=Rs(L),M--;for(;P--;){if(re===L||L!==null&&re===L.alternate)break t;re=Rs(re),L=Rs(L)}re=null}else re=null;Z!==null&&_f(K,$,Z,re,!1),ne!==null&&nt!==null&&_f(K,nt,ne,re,!0)}}e:{if($=b?Ps(b):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var se=F_;else if(Yd($))if(Jd)se=B_;else{se=U_;var ue=b_}else(Z=$.nodeName)&&Z.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(se=j_);if(se&&(se=se(n,b))){Xd(K,se,o,H);break e}ue&&ue(n,$,b),n==="focusout"&&(ue=$._wrapperState)&&ue.controlled&&$.type==="number"&&Zi($,"number",$.value)}switch(ue=b?Ps(b):window,n){case"focusin":(Yd(ue)||ue.contentEditable==="true")&&(Ss=ue,rc=b,jo=null);break;case"focusout":jo=rc=Ss=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,af(K,o,H);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":af(K,o,H)}var ce;if(it)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Is?Gd(n,o)&&(fe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(Ri&&o.locale!=="ko"&&(Is||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Is&&(ce=Oo()):(Jt=H,ps="value"in Jt?Jt.value:Jt.textContent,Is=!0)),ue=ul(b,fe),0<ue.length&&(fe=new Mo(fe,n,null,o,H),K.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=Qd(o),ce!==null&&(fe.data=ce)))),(ce=Zt?O_(n,o):x_(n,o))&&(b=ul(b,"onBeforeInput"),0<b.length&&(H=new Mo("onBeforeInput","beforeinput",null,o,H),K.push({event:H,listeners:b}),H.data=ce))}gf(K,r)})}function $o(n,r,o){return{instance:n,listener:r,currentTarget:o}}function ul(n,r){for(var o=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,o),p!=null&&c.unshift($o(n,p,d)),p=tt(n,r),p!=null&&c.push($o(n,p,d))),n=n.return}return c}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _f(n,r,o,c,d){for(var p=r._reactName,_=[];o!==null&&o!==c;){var T=o,R=T.alternate,b=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&b!==null&&(T=b,d?(R=tt(o,p),R!=null&&_.unshift($o(o,R,T))):d||(R=tt(o,p),R!=null&&_.push($o(o,R,T)))),o=o.return}_.length!==0&&n.push({event:r,listeners:_})}var G_=/\r\n?/g,Q_=/\u0000|\uFFFD/g;function vf(n){return(typeof n=="string"?n:""+n).replace(G_,`
`).replace(Q_,"")}function cl(n,r,o){if(r=vf(r),vf(n)!==r&&o)throw Error(t(425))}function hl(){}var cc=null,hc=null;function dc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,Y_=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(n){return Ef.resolve(null).then(n).catch(J_)}:fc;function J_(n){setTimeout(function(){throw n})}function pc(n,r){var o=r,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Sn(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Sn(r)}function Ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function wf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ks=Math.random().toString(36).slice(2),zn="__reactFiber$"+ks,Ho="__reactProps$"+ks,ur="__reactContainer$"+ks,mc="__reactEvents$"+ks,Z_="__reactListeners$"+ks,ev="__reactHandles$"+ks;function ki(n){var r=n[zn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[ur]||o[zn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=wf(n);n!==null;){if(o=n[zn])return o;n=wf(n)}return r}n=o,o=n.parentNode}return null}function Wo(n){return n=n[zn]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[Ho]||null}var gc=[],Cs=-1;function jr(n){return{current:n}}function We(n){0>Cs||(n.current=gc[Cs],gc[Cs]=null,Cs--)}function $e(n,r){Cs++,gc[Cs]=n.current,n.current=r}var Br={},Nt=jr(Br),Ht=jr(!1),Pi=Br;function Ns(n,r){var o=n.type.contextTypes;if(!o)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function fl(){We(Ht),We(Nt)}function Tf(n,r,o){if(Nt.current!==Br)throw Error(t(168));$e(Nt,r),$e(Ht,o)}function If(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},o,c)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,Pi=Nt.current,$e(Nt,n),$e(Ht,Ht.current),!0}function Sf(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=If(n,r,Pi),c.__reactInternalMemoizedMergedChildContext=n,We(Ht),We(Nt),$e(Nt,n)):We(Ht),$e(Ht,o)}var cr=null,ml=!1,yc=!1;function Af(n){cr===null?cr=[n]:cr.push(n)}function tv(n){ml=!0,Af(n)}function zr(){if(!yc&&cr!==null){yc=!0;var n=0,r=ke;try{var o=cr;for(ke=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}cr=null,ml=!1}catch(d){throw cr!==null&&(cr=cr.slice(n+1)),us(vi,zr),d}finally{ke=r,yc=!1}}return null}var Ds=[],Vs=0,gl=null,yl=0,cn=[],hn=0,Ci=null,hr=1,dr="";function Ni(n,r){Ds[Vs++]=yl,Ds[Vs++]=gl,gl=n,yl=r}function Rf(n,r,o){cn[hn++]=hr,cn[hn++]=dr,cn[hn++]=Ci,Ci=n;var c=hr;n=dr;var d=32-bt(c)-1;c&=~(1<<d),o+=1;var p=32-bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,hr=1<<32-bt(r)+d|o<<d|c,dr=p+n}else hr=1<<p|o<<d|c,dr=n}function _c(n){n.return!==null&&(Ni(n,1),Rf(n,1,0))}function vc(n){for(;n===gl;)gl=Ds[--Vs],Ds[Vs]=null,yl=Ds[--Vs],Ds[Vs]=null;for(;n===Ci;)Ci=cn[--hn],cn[hn]=null,dr=cn[--hn],cn[hn]=null,hr=cn[--hn],cn[hn]=null}var en=null,tn=null,Ge=!1,kn=null;function kf(n,r){var o=mn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Pf(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,en=n,tn=Ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,en=n,tn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ci!==null?{id:hr,overflow:dr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=mn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,en=n,tn=null,!0):!1;default:return!1}}function Ec(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wc(n){if(Ge){var r=tn;if(r){var o=r;if(!Pf(n,r)){if(Ec(n))throw Error(t(418));r=Ur(o.nextSibling);var c=en;r&&Pf(n,r)?kf(c,o):(n.flags=n.flags&-4097|2,Ge=!1,en=n)}}else{if(Ec(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,en=n}}}function Cf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;en=n}function _l(n){if(n!==en)return!1;if(!Ge)return Cf(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!dc(n.type,n.memoizedProps)),r&&(r=tn)){if(Ec(n))throw Nf(),Error(t(418));for(;r;)kf(n,r),r=Ur(r.nextSibling)}if(Cf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){tn=Ur(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}tn=null}}else tn=en?Ur(n.stateNode.nextSibling):null;return!0}function Nf(){for(var n=tn;n;)n=Ur(n.nextSibling)}function Os(){tn=en=null,Ge=!1}function Tc(n){kn===null?kn=[n]:kn.push(n)}var nv=Te.ReactCurrentBatchConfig;function qo(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Df(n){var r=n._init;return r(n._payload)}function Vf(n){function r(L,P){if(n){var M=L.deletions;M===null?(L.deletions=[P],L.flags|=16):M.push(P)}}function o(L,P){if(!n)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function c(L,P){for(L=new Map;P!==null;)P.key!==null?L.set(P.key,P):L.set(P.index,P),P=P.sibling;return L}function d(L,P){return L=Yr(L,P),L.index=0,L.sibling=null,L}function p(L,P,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<P?(L.flags|=2,P):M):(L.flags|=2,P)):(L.flags|=1048576,P)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,P,M,G){return P===null||P.tag!==6?(P=fh(M,L.mode,G),P.return=L,P):(P=d(P,M),P.return=L,P)}function R(L,P,M,G){var se=M.type;return se===C?H(L,P,M.props.children,G,M.key):P!==null&&(P.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Ct&&Df(se)===P.type)?(G=d(P,M.props),G.ref=qo(L,P,M),G.return=L,G):(G=$l(M.type,M.key,M.props,null,L.mode,G),G.ref=qo(L,P,M),G.return=L,G)}function b(L,P,M,G){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=ph(M,L.mode,G),P.return=L,P):(P=d(P,M.children||[]),P.return=L,P)}function H(L,P,M,G,se){return P===null||P.tag!==7?(P=bi(M,L.mode,G,se),P.return=L,P):(P=d(P,M),P.return=L,P)}function K(L,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return P=fh(""+P,L.mode,M),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case qe:return M=$l(P.type,P.key,P.props,null,L.mode,M),M.ref=qo(L,null,P),M.return=L,M;case Ae:return P=ph(P,L.mode,M),P.return=L,P;case Ct:var G=P._init;return K(L,G(P._payload),M)}if(er(P)||le(P))return P=bi(P,L.mode,M,null),P.return=L,P;vl(L,P)}return null}function $(L,P,M,G){var se=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:T(L,P,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:return M.key===se?R(L,P,M,G):null;case Ae:return M.key===se?b(L,P,M,G):null;case Ct:return se=M._init,$(L,P,se(M._payload),G)}if(er(M)||le(M))return se!==null?null:H(L,P,M,G,null);vl(L,M)}return null}function Z(L,P,M,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(M)||null,T(P,L,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case qe:return L=L.get(G.key===null?M:G.key)||null,R(P,L,G,se);case Ae:return L=L.get(G.key===null?M:G.key)||null,b(P,L,G,se);case Ct:var ue=G._init;return Z(L,P,M,ue(G._payload),se)}if(er(G)||le(G))return L=L.get(M)||null,H(P,L,G,se,null);vl(P,G)}return null}function ne(L,P,M,G){for(var se=null,ue=null,ce=P,fe=P=0,_t=null;ce!==null&&fe<M.length;fe++){ce.index>fe?(_t=ce,ce=null):_t=ce.sibling;var Oe=$(L,ce,M[fe],G);if(Oe===null){ce===null&&(ce=_t);break}n&&ce&&Oe.alternate===null&&r(L,ce),P=p(Oe,P,fe),ue===null?se=Oe:ue.sibling=Oe,ue=Oe,ce=_t}if(fe===M.length)return o(L,ce),Ge&&Ni(L,fe),se;if(ce===null){for(;fe<M.length;fe++)ce=K(L,M[fe],G),ce!==null&&(P=p(ce,P,fe),ue===null?se=ce:ue.sibling=ce,ue=ce);return Ge&&Ni(L,fe),se}for(ce=c(L,ce);fe<M.length;fe++)_t=Z(ce,L,fe,M[fe],G),_t!==null&&(n&&_t.alternate!==null&&ce.delete(_t.key===null?fe:_t.key),P=p(_t,P,fe),ue===null?se=_t:ue.sibling=_t,ue=_t);return n&&ce.forEach(function(Xr){return r(L,Xr)}),Ge&&Ni(L,fe),se}function re(L,P,M,G){var se=le(M);if(typeof se!="function")throw Error(t(150));if(M=se.call(M),M==null)throw Error(t(151));for(var ue=se=null,ce=P,fe=P=0,_t=null,Oe=M.next();ce!==null&&!Oe.done;fe++,Oe=M.next()){ce.index>fe?(_t=ce,ce=null):_t=ce.sibling;var Xr=$(L,ce,Oe.value,G);if(Xr===null){ce===null&&(ce=_t);break}n&&ce&&Xr.alternate===null&&r(L,ce),P=p(Xr,P,fe),ue===null?se=Xr:ue.sibling=Xr,ue=Xr,ce=_t}if(Oe.done)return o(L,ce),Ge&&Ni(L,fe),se;if(ce===null){for(;!Oe.done;fe++,Oe=M.next())Oe=K(L,Oe.value,G),Oe!==null&&(P=p(Oe,P,fe),ue===null?se=Oe:ue.sibling=Oe,ue=Oe);return Ge&&Ni(L,fe),se}for(ce=c(L,ce);!Oe.done;fe++,Oe=M.next())Oe=Z(ce,L,fe,Oe.value,G),Oe!==null&&(n&&Oe.alternate!==null&&ce.delete(Oe.key===null?fe:Oe.key),P=p(Oe,P,fe),ue===null?se=Oe:ue.sibling=Oe,ue=Oe);return n&&ce.forEach(function(Lv){return r(L,Lv)}),Ge&&Ni(L,fe),se}function nt(L,P,M,G){if(typeof M=="object"&&M!==null&&M.type===C&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:e:{for(var se=M.key,ue=P;ue!==null;){if(ue.key===se){if(se=M.type,se===C){if(ue.tag===7){o(L,ue.sibling),P=d(ue,M.props.children),P.return=L,L=P;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Ct&&Df(se)===ue.type){o(L,ue.sibling),P=d(ue,M.props),P.ref=qo(L,ue,M),P.return=L,L=P;break e}o(L,ue);break}else r(L,ue);ue=ue.sibling}M.type===C?(P=bi(M.props.children,L.mode,G,M.key),P.return=L,L=P):(G=$l(M.type,M.key,M.props,null,L.mode,G),G.ref=qo(L,P,M),G.return=L,L=G)}return _(L);case Ae:e:{for(ue=M.key;P!==null;){if(P.key===ue)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){o(L,P.sibling),P=d(P,M.children||[]),P.return=L,L=P;break e}else{o(L,P);break}else r(L,P);P=P.sibling}P=ph(M,L.mode,G),P.return=L,L=P}return _(L);case Ct:return ue=M._init,nt(L,P,ue(M._payload),G)}if(er(M))return ne(L,P,M,G);if(le(M))return re(L,P,M,G);vl(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,P!==null&&P.tag===6?(o(L,P.sibling),P=d(P,M),P.return=L,L=P):(o(L,P),P=fh(M,L.mode,G),P.return=L,L=P),_(L)):o(L,P)}return nt}var xs=Vf(!0),Of=Vf(!1),El=jr(null),wl=null,Ls=null,Ic=null;function Sc(){Ic=Ls=wl=null}function Ac(n){var r=El.current;We(El),n._currentValue=r}function Rc(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Ms(n,r){wl=n,Ic=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Ic!==n)if(n={context:n,memoizedValue:r,next:null},Ls===null){if(wl===null)throw Error(t(308));Ls=n,wl.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return r}var Di=null;function kc(n){Di===null?Di=[n]:Di.push(n)}function xf(n,r,o,c){var d=r.interleaved;return d===null?(o.next=o,kc(r)):(o.next=d.next,d.next=o),r.interleaved=o,fr(n,c)}function fr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var $r=!1;function Pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,fr(n,o)}return d=c.interleaved,d===null?(r.next=r,kc(c)):(r.next=d.next,d.next=r),c.interleaved=r,fr(n,o)}function Tl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Or(n,o)}}function Mf(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=_:p=p.next=_,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Il(n,r,o,c){var d=n.updateQueue;$r=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,b=R.next;R.next=null,_===null?p=b:_.next=b,_=R;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=b:T.next=b,H.lastBaseUpdate=R))}if(p!==null){var K=d.baseState;_=0,H=b=R=null,T=p;do{var $=T.lane,Z=T.eventTime;if((c&$)===$){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ne=n,re=T;switch($=r,Z=o,re.tag){case 1:if(ne=re.payload,typeof ne=="function"){K=ne.call(Z,K,$);break e}K=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,$=typeof ne=="function"?ne.call(Z,K,$):ne,$==null)break e;K=ee({},K,$);break e;case 2:$r=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,$=d.effects,$===null?d.effects=[T]:$.push(T))}else Z={eventTime:Z,lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(b=H=Z,R=K):H=H.next=Z,_|=$;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;$=T,T=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(H===null&&(R=K),d.baseState=R,d.firstBaseUpdate=b,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);xi|=_,n.lanes=_,n.memoizedState=K}}function Ff(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ko={},$n=jr(Ko),Go=jr(Ko),Qo=jr(Ko);function Vi(n){if(n===Ko)throw Error(t(174));return n}function Cc(n,r){switch($e(Qo,r),$e(Go,n),$e($n,Ko),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}We($n),$e($n,r)}function Fs(){We($n),We(Go),We(Qo)}function bf(n){Vi(Qo.current);var r=Vi($n.current),o=lt(r,n.type);r!==o&&($e(Go,n),$e($n,o))}function Nc(n){Go.current===n&&(We($n),We(Go))}var Ye=jr(0);function Sl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Dc=[];function Vc(){for(var n=0;n<Dc.length;n++)Dc[n]._workInProgressVersionPrimary=null;Dc.length=0}var Al=Te.ReactCurrentDispatcher,Oc=Te.ReactCurrentBatchConfig,Oi=0,Xe=null,ct=null,gt=null,Rl=!1,Yo=!1,Xo=0,rv=0;function Dt(){throw Error(t(321))}function xc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Rn(n[o],r[o]))return!1;return!0}function Lc(n,r,o,c,d,p){if(Oi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Al.current=n===null||n.memoizedState===null?av:lv,n=o(c,d),Yo){p=0;do{if(Yo=!1,Xo=0,25<=p)throw Error(t(301));p+=1,gt=ct=null,r.updateQueue=null,Al.current=uv,n=o(c,d)}while(Yo)}if(Al.current=Cl,r=ct!==null&&ct.next!==null,Oi=0,gt=ct=Xe=null,Rl=!1,r)throw Error(t(300));return n}function Mc(){var n=Xo!==0;return Xo=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Xe.memoizedState=gt=n:gt=gt.next=n,gt}function fn(){if(ct===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=gt===null?Xe.memoizedState:gt.next;if(r!==null)gt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},gt===null?Xe.memoizedState=gt=n:gt=gt.next=n}return gt}function Jo(n,r){return typeof r=="function"?r(n):r}function Fc(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,b=p;do{var H=b.lane;if((Oi&H)===H)R!==null&&(R=R.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),c=b.hasEagerState?b.eagerState:n(c,b.action);else{var K={lane:H,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};R===null?(T=R=K,_=c):R=R.next=K,Xe.lanes|=H,xi|=H}b=b.next}while(b!==null&&b!==p);R===null?_=c:R.next=T,Rn(c,r.memoizedState)||(qt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,xi|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function bc(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Rn(p,r.memoizedState)||(qt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,c]}function Uf(){}function jf(n,r){var o=Xe,c=fn(),d=r(),p=!Rn(c.memoizedState,d);if(p&&(c.memoizedState=d,qt=!0),c=c.queue,Uc($f.bind(null,o,c,n),[n]),c.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(o.flags|=2048,Zo(9,zf.bind(null,o,c,d,r),void 0,null),yt===null)throw Error(t(349));(Oi&30)!==0||Bf(o,r,d)}return d}function Bf(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function zf(n,r,o,c){r.value=o,r.getSnapshot=c,Hf(r)&&Wf(n)}function $f(n,r,o){return o(function(){Hf(r)&&Wf(n)})}function Hf(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Rn(n,o)}catch{return!0}}function Wf(n){var r=fr(n,1);r!==null&&Dn(r,n,1,-1)}function qf(n){var r=Hn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},r.queue=n,n=n.dispatch=ov.bind(null,Xe,n),[r.memoizedState,n]}function Zo(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function Kf(){return fn().memoizedState}function kl(n,r,o,c){var d=Hn();Xe.flags|=n,d.memoizedState=Zo(1|r,o,void 0,c===void 0?null:c)}function Pl(n,r,o,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&xc(c,_.deps)){d.memoizedState=Zo(r,o,p,c);return}}Xe.flags|=n,d.memoizedState=Zo(1|r,o,p,c)}function Gf(n,r){return kl(8390656,8,n,r)}function Uc(n,r){return Pl(2048,8,n,r)}function Qf(n,r){return Pl(4,2,n,r)}function Yf(n,r){return Pl(4,4,n,r)}function Xf(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Jf(n,r,o){return o=o!=null?o.concat([n]):null,Pl(4,4,Xf.bind(null,r,n),o)}function jc(){}function Zf(n,r){var o=fn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&xc(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function ep(n,r){var o=fn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&xc(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function tp(n,r,o){return(Oi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=o):(Rn(o,r)||(o=Ti(),Xe.lanes|=o,xi|=o,n.baseState=!0),r)}function iv(n,r){var o=ke;ke=o!==0&&4>o?o:4,n(!0);var c=Oc.transition;Oc.transition={};try{n(!1),r()}finally{ke=o,Oc.transition=c}}function np(){return fn().memoizedState}function sv(n,r,o){var c=Gr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},rp(n))ip(r,o);else if(o=xf(n,r,o,c),o!==null){var d=Bt();Dn(o,n,c,d),sp(o,r,c)}}function ov(n,r,o){var c=Gr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(rp(n))ip(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,o);if(d.hasEagerState=!0,d.eagerState=T,Rn(T,_)){var R=r.interleaved;R===null?(d.next=d,kc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}o=xf(n,r,d,c),o!==null&&(d=Bt(),Dn(o,n,c,d),sp(o,r,c))}}function rp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function ip(n,r){Yo=Rl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function sp(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Or(n,o)}}var Cl={readContext:dn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},av={readContext:dn,useCallback:function(n,r){return Hn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:Gf,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,kl(4194308,4,Xf.bind(null,r,n),o)},useLayoutEffect:function(n,r){return kl(4194308,4,n,r)},useInsertionEffect:function(n,r){return kl(4,2,n,r)},useMemo:function(n,r){var o=Hn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=Hn();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=sv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Hn();return n={current:n},r.memoizedState=n},useState:qf,useDebugValue:jc,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=qf(!1),r=n[0];return n=iv.bind(null,n[1]),Hn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Xe,d=Hn();if(Ge){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),yt===null)throw Error(t(349));(Oi&30)!==0||Bf(c,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,Gf($f.bind(null,c,p,n),[n]),c.flags|=2048,Zo(9,zf.bind(null,c,p,o,r),void 0,null),o},useId:function(){var n=Hn(),r=yt.identifierPrefix;if(Ge){var o=dr,c=hr;o=(c&~(1<<32-bt(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=Xo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=rv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},lv={readContext:dn,useCallback:Zf,useContext:dn,useEffect:Uc,useImperativeHandle:Jf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:ep,useReducer:Fc,useRef:Kf,useState:function(){return Fc(Jo)},useDebugValue:jc,useDeferredValue:function(n){var r=fn();return tp(r,ct.memoizedState,n)},useTransition:function(){var n=Fc(Jo)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Uf,useSyncExternalStore:jf,useId:np,unstable_isNewReconciler:!1},uv={readContext:dn,useCallback:Zf,useContext:dn,useEffect:Uc,useImperativeHandle:Jf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:ep,useReducer:bc,useRef:Kf,useState:function(){return bc(Jo)},useDebugValue:jc,useDeferredValue:function(n){var r=fn();return ct===null?r.memoizedState=n:tp(r,ct.memoizedState,n)},useTransition:function(){var n=bc(Jo)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Uf,useSyncExternalStore:jf,useId:np,unstable_isNewReconciler:!1};function Pn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Bc(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:ee({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Nl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=Bt(),d=Gr(n),p=pr(c,d);p.payload=r,o!=null&&(p.callback=o),r=Hr(n,p,d),r!==null&&(Dn(r,n,d,c),Tl(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=Bt(),d=Gr(n),p=pr(c,d);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Hr(n,p,d),r!==null&&(Dn(r,n,d,c),Tl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Bt(),c=Gr(n),d=pr(o,c);d.tag=2,r!=null&&(d.callback=r),r=Hr(n,d,c),r!==null&&(Dn(r,n,c,o),Tl(r,n,c))}};function op(n,r,o,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Uo(o,c)||!Uo(d,p):!0}function ap(n,r,o){var c=!1,d=Br,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=Wt(r)?Pi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Ns(n,d):Br),r=new r(o,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function lp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Nl.enqueueReplaceState(r,r.state,null)}function zc(n,r,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Pc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=Wt(r)?Pi:Nt.current,d.context=Ns(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Bc(n,r,p,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Nl.enqueueReplaceState(d,d.state,null),Il(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,r){try{var o="",c=r;do o+=Ie(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function $c(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Hc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function up(n,r,o){o=pr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Fl||(Fl=!0,sh=c),Hc(n,r)},o}function cp(n,r,o){o=pr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;o.payload=function(){return c(d)},o.callback=function(){Hc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Hc(n,r),typeof c!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function hp(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new cv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(d.add(o),n=Sv.bind(null,n,r,o),r.then(n,n))}function dp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function fp(n,r,o,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=pr(-1,1),r.tag=2,Hr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var hv=Te.ReactCurrentOwner,qt=!1;function jt(n,r,o,c){r.child=n===null?Of(r,null,o,c):xs(r,n.child,o,c)}function pp(n,r,o,c,d){o=o.render;var p=r.ref;return Ms(r,d),c=Lc(n,r,o,c,p,d),o=Mc(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Ge&&o&&_c(r),r.flags|=1,jt(n,r,c,d),r.child)}function mp(n,r,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!dh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,gp(n,r,p,c,d)):(n=$l(o.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(o=o.compare,o=o!==null?o:Uo,o(_,c)&&n.ref===r.ref)return mr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function gp(n,r,o,c,d){if(n!==null){var p=n.memoizedProps;if(Uo(p,c)&&n.ref===r.ref)if(qt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return r.lanes=n.lanes,mr(n,r,d)}return Wc(n,r,o,c,d)}function yp(n,r,o){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(js,nn),nn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(js,nn),nn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,$e(js,nn),nn|=c}else p!==null?(c=p.baseLanes|o,r.memoizedState=null):c=o,$e(js,nn),nn|=c;return jt(n,r,d,o),r.child}function _p(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Wc(n,r,o,c,d){var p=Wt(o)?Pi:Nt.current;return p=Ns(r,p),Ms(r,d),o=Lc(n,r,o,c,p,d),c=Mc(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Ge&&c&&_c(r),r.flags|=1,jt(n,r,o,d),r.child)}function vp(n,r,o,c,d){if(Wt(o)){var p=!0;pl(r)}else p=!1;if(Ms(r,d),r.stateNode===null)Vl(n,r),ap(r,o,c),zc(r,o,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,b=o.contextType;typeof b=="object"&&b!==null?b=dn(b):(b=Wt(o)?Pi:Nt.current,b=Ns(r,b));var H=o.getDerivedStateFromProps,K=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==b)&&lp(r,_,c,b),$r=!1;var $=r.memoizedState;_.state=$,Il(r,c,_,d),R=r.memoizedState,T!==c||$!==R||Ht.current||$r?(typeof H=="function"&&(Bc(r,o,H,c),R=r.memoizedState),(T=$r||op(r,o,T,c,$,R,b))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=b,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Lf(n,r),T=r.memoizedProps,b=r.type===r.elementType?T:Pn(r.type,T),_.props=b,K=r.pendingProps,$=_.context,R=o.contextType,typeof R=="object"&&R!==null?R=dn(R):(R=Wt(o)?Pi:Nt.current,R=Ns(r,R));var Z=o.getDerivedStateFromProps;(H=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||$!==R)&&lp(r,_,c,R),$r=!1,$=r.memoizedState,_.state=$,Il(r,c,_,d);var ne=r.memoizedState;T!==K||$!==ne||Ht.current||$r?(typeof Z=="function"&&(Bc(r,o,Z,c),ne=r.memoizedState),(b=$r||op(r,o,b,c,$,ne,R)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ne,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ne,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ne),_.props=c,_.state=ne,_.context=R,c=b):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),c=!1)}return qc(n,r,o,c,p,d)}function qc(n,r,o,c,d,p){_p(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Sf(r,o,!1),mr(n,r,p);c=r.stateNode,hv.current=r;var T=_&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=xs(r,n.child,null,p),r.child=xs(r,null,T,p)):jt(n,r,T,p),r.memoizedState=c.state,d&&Sf(r,o,!0),r.child}function Ep(n){var r=n.stateNode;r.pendingContext?Tf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Tf(n,r.context,!1),Cc(n,r.containerInfo)}function wp(n,r,o,c,d){return Os(),Tc(d),r.flags|=256,jt(n,r,o,c),r.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Gc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tp(n,r,o){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return wc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Hl(_,c,0,null),n=bi(n,c,o,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Gc(o),r.memoizedState=Kc,n):Qc(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return dv(n,r,_,c,T,d,o);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Yr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Yr(T,p):(p=bi(p,_,o,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Gc(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~o,r.memoizedState=Kc,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function Qc(n,r){return r=Hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Dl(n,r,o,c){return c!==null&&Tc(c),xs(r,n.child,null,o),n=Qc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function dv(n,r,o,c,d,p,_){if(o)return r.flags&256?(r.flags&=-257,c=$c(Error(t(422))),Dl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Hl({mode:"visible",children:c.children},d,0,null),p=bi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&xs(r,n.child,null,_),r.child.memoizedState=Gc(_),r.memoizedState=Kc,p);if((r.mode&1)===0)return Dl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=$c(p,c,void 0),Dl(n,r,_,c)}if(T=(_&n.childLanes)!==0,qt||T){if(c=yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,fr(n,d),Dn(c,n,d,-1))}return hh(),c=$c(Error(t(421))),Dl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Av.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,tn=Ur(d.nextSibling),en=r,Ge=!0,kn=null,n!==null&&(cn[hn++]=hr,cn[hn++]=dr,cn[hn++]=Ci,hr=n.id,dr=n.overflow,Ci=r),r=Qc(r,c.children),r.flags|=4096,r)}function Ip(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Rc(n.return,r,o)}function Yc(n,r,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Sp(n,r,o){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,r,c.children,o),c=Ye.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,o,r);else if(n.tag===19)Ip(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&Sl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Yc(r,!1,d,o,p);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Sl(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Yc(r,!0,o,null,p);break;case"together":Yc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Vl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function mr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),xi|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Yr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Yr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function fv(n,r,o){switch(r.tag){case 3:Ep(r),Os();break;case 5:bf(r);break;case 1:Wt(r.type)&&pl(r);break;case 4:Cc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(El,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Tp(n,r,o):($e(Ye,Ye.current&1),n=mr(n,r,o),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Sp(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,yp(n,r,o)}return mr(n,r,o)}var Ap,Xc,Rp,kp;Ap=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xc=function(){},Rp=function(n,r,o,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Vi($n.current);var p=null;switch(o){case"input":d=hi(n,d),c=hi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=po(n,d),c=po(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=hl)}Eo(o,c);var _;o=null;for(b in d)if(!c.hasOwnProperty(b)&&d.hasOwnProperty(b)&&d[b]!=null)if(b==="style"){var T=d[b];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(a.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in c){var R=c[b];if(T=d!=null?d[b]:void 0,c.hasOwnProperty(b)&&R!==T&&(R!=null||T!=null))if(b==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(o||(o={}),o[_]=R[_])}else o||(p||(p=[]),p.push(b,o)),o=R;else b==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(b,R)):b==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(b,""+R):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(a.hasOwnProperty(b)?(R!=null&&b==="onScroll"&&He("scroll",n),p||T===R||(p=[])):(p=p||[]).push(b,R))}o&&(p=p||[]).push("style",o);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},kp=function(n,r,o,c){o!==c&&(r.flags|=4)};function ea(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function pv(n,r,o){var c=r.pendingProps;switch(vc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Wt(r.type)&&fl(),Vt(r),null;case 3:return c=r.stateNode,Fs(),We(Ht),We(Nt),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,kn!==null&&(lh(kn),kn=null))),Xc(n,r),Vt(r),null;case 5:Nc(r);var d=Vi(Qo.current);if(o=r.type,n!==null&&r.stateNode!=null)Rp(n,r,o,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Vi($n.current),_l(r)){c=r.stateNode,o=r.type;var p=r.memoizedProps;switch(c[zn]=r,c[Ho]=p,n=(r.mode&1)!==0,o){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<Bo.length;d++)He(Bo[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":Ji(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":es(c,p),He("invalid",c)}Eo(o,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&cl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&cl(c.textContent,T,n),d=["children",""+T]):a.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&He("scroll",c)}switch(o){case"input":Zn(c),Ma(c,p,!0);break;case"textarea":Zn(c),mo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=hl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(o,{is:c.is}):(n=_.createElement(o),o==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,o),n[zn]=r,n[Ho]=c,Ap(n,r,!1,!1),r.stateNode=n;e:{switch(_=wo(o,c),o){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<Bo.length;d++)He(Bo[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":Ji(n,c),d=hi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),He("invalid",n);break;case"textarea":es(n,c),d=po(n,c),He("invalid",n);break;default:d=c}Eo(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?_o(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&go(n,R)):p==="children"?typeof R=="string"?(o!=="textarea"||R!=="")&&Pr(n,R):typeof R=="number"&&Pr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?R!=null&&p==="onScroll"&&He("scroll",n):R!=null&&Ee(n,p,R,_))}switch(o){case"input":Zn(n),Ma(n,c,!1);break;case"textarea":Zn(n),mo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?tr(n,!!c.multiple,p,!1):c.defaultValue!=null&&tr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=hl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)kp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=Vi(Qo.current),Vi($n.current),_l(r)){if(c=r.stateNode,o=r.memoizedProps,c[zn]=r,(p=c.nodeValue!==o)&&(n=en,n!==null))switch(n.tag){case 3:cl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(c.nodeValue,o,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[zn]=r,r.stateNode=c}return Vt(r),null;case 13:if(We(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&tn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Nf(),Os(),r.flags|=98560,p=!1;else if(p=_l(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[zn]=r}else Os(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else kn!==null&&(lh(kn),kn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ye.current&1)!==0?ht===0&&(ht=3):hh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Fs(),Xc(n,r),n===null&&zo(r.stateNode.containerInfo),Vt(r),null;case 10:return Ac(r.type._context),Vt(r),null;case 17:return Wt(r.type)&&fl(),Vt(r),null;case 19:if(We(Ye),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ea(p,!1);else{if(ht!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Sl(n),_!==null){for(r.flags|=128,ea(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)p=o,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&ze()>Bs&&(r.flags|=128,c=!0,ea(p,!1),r.lanes=4194304)}else{if(!c)if(n=Sl(_),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Vt(r),null}else 2*ze()-p.renderingStartTime>Bs&&o!==1073741824&&(r.flags|=128,c=!0,ea(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(o=p.last,o!==null?o.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=ze(),r.sibling=null,o=Ye.current,$e(Ye,c?o&1|2:o&1),r):(Vt(r),null);case 22:case 23:return ch(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(nn&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function mv(n,r){switch(vc(r),r.tag){case 1:return Wt(r.type)&&fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Fs(),We(Ht),We(Nt),Vc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Nc(r),null;case 13:if(We(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Os()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Ye),null;case 4:return Fs(),null;case 10:return Ac(r.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Ol=!1,Ot=!1,gv=typeof WeakSet=="function"?WeakSet:Set,te=null;function Us(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Ze(n,r,c)}else o.current=null}function Jc(n,r,o){try{o()}catch(c){Ze(n,r,c)}}var Pp=!1;function yv(n,r){if(cc=Mr,n=of(),nc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var _=0,T=-1,R=-1,b=0,H=0,K=n,$=null;t:for(;;){for(var Z;K!==o||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(R=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)$=K,K=Z;for(;;){if(K===n)break t;if($===o&&++b===d&&(T=_),$===p&&++H===c&&(R=_),(Z=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=Z}o=T===-1||R===-1?null:{start:T,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(hc={focusedElem:n,selectionRange:o},Mr=!1,te=r;te!==null;)if(r=te,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,te=n;else for(;te!==null;){r=te;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var re=ne.memoizedProps,nt=ne.memoizedState,L=r.stateNode,P=L.getSnapshotBeforeUpdate(r.elementType===r.type?re:Pn(r.type,re),nt);L.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Ze(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,te=n;break}te=r.return}return ne=Pp,Pp=!1,ne}function ta(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Jc(r,o,p)}d=d.next}while(d!==c)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function Zc(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Cp(n){var r=n.alternate;r!==null&&(n.alternate=null,Cp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[zn],delete r[Ho],delete r[mc],delete r[Z_],delete r[ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function eh(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=hl));else if(c!==4&&(n=n.child,n!==null))for(eh(n,r,o),n=n.sibling;n!==null;)eh(n,r,o),n=n.sibling}function th(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(th(n,r,o),n=n.sibling;n!==null;)th(n,r,o),n=n.sibling}var Tt=null,Cn=!1;function Wr(n,r,o){for(o=o.child;o!==null;)Vp(n,r,o),o=o.sibling}function Vp(n,r,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ei,o)}catch{}switch(o.tag){case 5:Ot||Us(o,r);case 6:var c=Tt,d=Cn;Tt=null,Wr(n,r,o),Tt=c,Cn=d,Tt!==null&&(Cn?(n=Tt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(Cn?(n=Tt,o=o.stateNode,n.nodeType===8?pc(n.parentNode,o):n.nodeType===1&&pc(n,o),Sn(n)):pc(Tt,o.stateNode));break;case 4:c=Tt,d=Cn,Tt=o.stateNode.containerInfo,Cn=!0,Wr(n,r,o),Tt=c,Cn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Jc(o,r,_),d=d.next}while(d!==c)}Wr(n,r,o);break;case 1:if(!Ot&&(Us(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(T){Ze(o,r,T)}Wr(n,r,o);break;case 21:Wr(n,r,o);break;case 22:o.mode&1?(Ot=(c=Ot)||o.memoizedState!==null,Wr(n,r,o),Ot=c):Wr(n,r,o);break;default:Wr(n,r,o)}}function Op(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new gv),r.forEach(function(c){var d=Rv.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Nn(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Tt=T.stateNode,Cn=!1;break e;case 3:Tt=T.stateNode.containerInfo,Cn=!0;break e;case 4:Tt=T.stateNode.containerInfo,Cn=!0;break e}T=T.return}if(Tt===null)throw Error(t(160));Vp(p,_,d),Tt=null,Cn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(b){Ze(d,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)xp(r,n),r=r.sibling}function xp(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(r,n),Wn(n),c&4){try{ta(3,n,n.return),xl(3,n)}catch(re){Ze(n,n.return,re)}try{ta(5,n,n.return)}catch(re){Ze(n,n.return,re)}}break;case 1:Nn(r,n),Wn(n),c&512&&o!==null&&Us(o,o.return);break;case 5:if(Nn(r,n),Wn(n),c&512&&o!==null&&Us(o,o.return),n.flags&32){var d=n.stateNode;try{Pr(d,"")}catch(re){Ze(n,n.return,re)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=o!==null?o.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&ho(d,p),wo(T,_);var b=wo(T,p);for(_=0;_<R.length;_+=2){var H=R[_],K=R[_+1];H==="style"?_o(d,K):H==="dangerouslySetInnerHTML"?go(d,K):H==="children"?Pr(d,K):Ee(d,H,K,b)}switch(T){case"input":fo(d,p);break;case"textarea":ts(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?tr(d,!!p.multiple,Z,!1):$!==!!p.multiple&&(p.defaultValue!=null?tr(d,!!p.multiple,p.defaultValue,!0):tr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ho]=p}catch(re){Ze(n,n.return,re)}}break;case 6:if(Nn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(re){Ze(n,n.return,re)}}break;case 3:if(Nn(r,n),Wn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(re){Ze(n,n.return,re)}break;case 4:Nn(r,n),Wn(n);break;case 13:Nn(r,n),Wn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ih=ze())),c&4&&Op(n);break;case 22:if(H=o!==null&&o.memoizedState!==null,n.mode&1?(Ot=(b=Ot)||H,Nn(r,n),Ot=b):Nn(r,n),Wn(n),c&8192){if(b=n.memoizedState!==null,(n.stateNode.isHidden=b)&&!H&&(n.mode&1)!==0)for(te=n,H=n.child;H!==null;){for(K=te=H;te!==null;){switch($=te,Z=$.child,$.tag){case 0:case 11:case 14:case 15:ta(4,$,$.return);break;case 1:Us($,$.return);var ne=$.stateNode;if(typeof ne.componentWillUnmount=="function"){c=$,o=$.return;try{r=c,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(re){Ze(c,o,re)}}break;case 5:Us($,$.return);break;case 22:if($.memoizedState!==null){Fp(K);continue}}Z!==null?(Z.return=$,te=Z):Fp(K)}H=H.sibling}e:for(H=null,K=n;;){if(K.tag===5){if(H===null){H=K;try{d=K.stateNode,b?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,R=K.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=yo("display",_))}catch(re){Ze(n,n.return,re)}}}else if(K.tag===6){if(H===null)try{K.stateNode.nodeValue=b?"":K.memoizedProps}catch(re){Ze(n,n.return,re)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;H===K&&(H=null),K=K.return}H===K&&(H=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Nn(r,n),Wn(n),c&4&&Op(n);break;case 21:break;default:Nn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Np(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Pr(d,""),c.flags&=-33);var p=Dp(n);th(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Dp(n);eh(n,T,_);break;default:throw Error(t(161))}}catch(R){Ze(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function _v(n,r,o){te=n,Lp(n)}function Lp(n,r,o){for(var c=(n.mode&1)!==0;te!==null;){var d=te,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ol;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=Ol;var b=Ot;if(Ol=_,(Ot=R)&&!b)for(te=d;te!==null;)_=te,R=_.child,_.tag===22&&_.memoizedState!==null?bp(d):R!==null?(R.return=_,te=R):bp(d);for(;p!==null;)te=p,Lp(p),p=p.sibling;te=d,Ol=T,Ot=b}Mp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,te=p):Mp(n)}}function Mp(n){for(;te!==null;){var r=te;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||xl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(o===null)c.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:Pn(r.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Ff(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ff(r,_,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&o.focus();break;case"img":R.src&&(o.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var H=b.memoizedState;if(H!==null){var K=H.dehydrated;K!==null&&Sn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&Zc(r)}catch($){Ze(r,r.return,$)}}if(r===n){te=null;break}if(o=r.sibling,o!==null){o.return=r.return,te=o;break}te=r.return}}function Fp(n){for(;te!==null;){var r=te;if(r===n){te=null;break}var o=r.sibling;if(o!==null){o.return=r.return,te=o;break}te=r.return}}function bp(n){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{xl(4,r)}catch(R){Ze(r,o,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Ze(r,d,R)}}var p=r.return;try{Zc(r)}catch(R){Ze(r,p,R)}break;case 5:var _=r.return;try{Zc(r)}catch(R){Ze(r,_,R)}}}catch(R){Ze(r,r.return,R)}if(r===n){te=null;break}var T=r.sibling;if(T!==null){T.return=r.return,te=T;break}te=r.return}}var vv=Math.ceil,Ll=Te.ReactCurrentDispatcher,nh=Te.ReactCurrentOwner,pn=Te.ReactCurrentBatchConfig,Ve=0,yt=null,st=null,It=0,nn=0,js=jr(0),ht=0,na=null,xi=0,Ml=0,rh=0,ra=null,Kt=null,ih=0,Bs=1/0,gr=null,Fl=!1,sh=null,qr=null,bl=!1,Kr=null,Ul=0,ia=0,oh=null,jl=-1,Bl=0;function Bt(){return(Ve&6)!==0?ze():jl!==-1?jl:jl=ze()}function Gr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&It!==0?It&-It:nv.transition!==null?(Bl===0&&(Bl=Ti()),Bl):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Vo(n.type)),n)}function Dn(n,r,o,c){if(50<ia)throw ia=0,oh=null,Error(t(185));Vr(n,o,c),((Ve&2)===0||n!==yt)&&(n===yt&&((Ve&2)===0&&(Ml|=o),ht===4&&Qr(n,It)),Gt(n,c),o===1&&Ve===0&&(r.mode&1)===0&&(Bs=ze()+500,ml&&zr()))}function Gt(n,r){var o=n.callbackNode;ir(n,r);var c=wi(n,n===yt?It:0);if(c===0)o!==null&&ko(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&ko(o),r===1)n.tag===0?tv(jp.bind(null,n)):Af(jp.bind(null,n)),X_(function(){(Ve&6)===0&&zr()}),o=null;else{switch(xr(c)){case 1:o=vi;break;case 4:o=Cr;break;case 16:o=an;break;case 536870912:o=Ba;break;default:o=an}o=Gp(o,Up.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Up(n,r){if(jl=-1,Bl=0,(Ve&6)!==0)throw Error(t(327));var o=n.callbackNode;if(zs()&&n.callbackNode!==o)return null;var c=wi(n,n===yt?It:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=zl(n,c);else{r=c;var d=Ve;Ve|=2;var p=zp();(yt!==n||It!==r)&&(gr=null,Bs=ze()+500,Mi(n,r));do try{Tv();break}catch(T){Bp(n,T)}while(!0);Sc(),Ll.current=p,Ve=d,st!==null?r=0:(yt=null,It=0,r=ht)}if(r!==0){if(r===2&&(d=Xt(n),d!==0&&(c=d,r=ah(n,d))),r===1)throw o=na,Mi(n,0),Qr(n,c),Gt(n,ze()),o;if(r===6)Qr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Ev(d)&&(r=zl(n,c),r===2&&(p=Xt(n),p!==0&&(c=p,r=ah(n,p))),r===1))throw o=na,Mi(n,0),Qr(n,c),Gt(n,ze()),o;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Fi(n,Kt,gr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=ih+500-ze(),10<r)){if(wi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=fc(Fi.bind(null,n,Kt,gr),r);break}Fi(n,Kt,gr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vv(c/1960))-c,10<c){n.timeoutHandle=fc(Fi.bind(null,n,Kt,gr),c);break}Fi(n,Kt,gr);break;case 5:Fi(n,Kt,gr);break;default:throw Error(t(329))}}}return Gt(n,ze()),n.callbackNode===o?Up.bind(null,n):null}function ah(n,r){var o=ra;return n.current.memoizedState.isDehydrated&&(Mi(n,r).flags|=256),n=zl(n,r),n!==2&&(r=Kt,Kt=o,r!==null&&lh(r)),n}function lh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function Ev(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!Rn(p(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~rh,r&=~Ml,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-bt(r),c=1<<o;n[o]=-1,r&=~c}}function jp(n){if((Ve&6)!==0)throw Error(t(327));zs();var r=wi(n,0);if((r&1)===0)return Gt(n,ze()),null;var o=zl(n,r);if(n.tag!==0&&o===2){var c=Xt(n);c!==0&&(r=c,o=ah(n,c))}if(o===1)throw o=na,Mi(n,0),Qr(n,r),Gt(n,ze()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Fi(n,Kt,gr),Gt(n,ze()),null}function uh(n,r){var o=Ve;Ve|=1;try{return n(r)}finally{Ve=o,Ve===0&&(Bs=ze()+500,ml&&zr())}}function Li(n){Kr!==null&&Kr.tag===0&&(Ve&6)===0&&zs();var r=Ve;Ve|=1;var o=pn.transition,c=ke;try{if(pn.transition=null,ke=1,n)return n()}finally{ke=c,pn.transition=o,Ve=r,(Ve&6)===0&&zr()}}function ch(){nn=js.current,We(js)}function Mi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Y_(o)),st!==null)for(o=st.return;o!==null;){var c=o;switch(vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&fl();break;case 3:Fs(),We(Ht),We(Nt),Vc();break;case 5:Nc(c);break;case 4:Fs();break;case 13:We(Ye);break;case 19:We(Ye);break;case 10:Ac(c.type._context);break;case 22:case 23:ch()}o=o.return}if(yt=n,st=n=Yr(n.current,null),It=nn=r,ht=0,na=null,rh=Ml=xi=0,Kt=ra=null,Di!==null){for(r=0;r<Di.length;r++)if(o=Di[r],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}o.pending=c}Di=null}return n}function Bp(n,r){do{var o=st;try{if(Sc(),Al.current=Cl,Rl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Rl=!1}if(Oi=0,gt=ct=Xe=null,Yo=!1,Xo=0,nh.current=null,o===null||o.return===null){ht=1,na=r,st=null;break}e:{var p=n,_=o.return,T=o,R=r;if(r=It,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var b=R,H=T,K=H.tag;if((H.mode&1)===0&&(K===0||K===11||K===15)){var $=H.alternate;$?(H.updateQueue=$.updateQueue,H.memoizedState=$.memoizedState,H.lanes=$.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=dp(_);if(Z!==null){Z.flags&=-257,fp(Z,_,T,p,r),Z.mode&1&&hp(p,b,r),r=Z,R=b;var ne=r.updateQueue;if(ne===null){var re=new Set;re.add(R),r.updateQueue=re}else ne.add(R);break e}else{if((r&1)===0){hp(p,b,r),hh();break e}R=Error(t(426))}}else if(Ge&&T.mode&1){var nt=dp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),fp(nt,_,T,p,r),Tc(bs(R,T));break e}}p=R=bs(R,T),ht!==4&&(ht=2),ra===null?ra=[p]:ra.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=up(p,R,r);Mf(p,L);break e;case 1:T=R;var P=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(qr===null||!qr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=cp(p,T,r);Mf(p,G);break e}}p=p.return}while(p!==null)}Hp(o)}catch(se){r=se,st===o&&o!==null&&(st=o=o.return);continue}break}while(!0)}function zp(){var n=Ll.current;return Ll.current=Cl,n===null?Cl:n}function hh(){(ht===0||ht===3||ht===2)&&(ht=4),yt===null||(xi&268435455)===0&&(Ml&268435455)===0||Qr(yt,It)}function zl(n,r){var o=Ve;Ve|=2;var c=zp();(yt!==n||It!==r)&&(gr=null,Mi(n,r));do try{wv();break}catch(d){Bp(n,d)}while(!0);if(Sc(),Ve=o,Ll.current=c,st!==null)throw Error(t(261));return yt=null,It=0,ht}function wv(){for(;st!==null;)$p(st)}function Tv(){for(;st!==null&&!Ua();)$p(st)}function $p(n){var r=Kp(n.alternate,n,nn);n.memoizedProps=n.pendingProps,r===null?Hp(n):st=r,nh.current=null}function Hp(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=pv(o,r,nn),o!==null){st=o;return}}else{if(o=mv(o,r),o!==null){o.flags&=32767,st=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function Fi(n,r,o){var c=ke,d=pn.transition;try{pn.transition=null,ke=1,Iv(n,r,o,c)}finally{pn.transition=d,ke=c}return null}function Iv(n,r,o,c){do zs();while(Kr!==null);if((Ve&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(je(n,p),n===yt&&(st=yt=null,It=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||bl||(bl=!0,Gp(an,function(){return zs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=pn.transition,pn.transition=null;var _=ke;ke=1;var T=Ve;Ve|=4,nh.current=null,yv(n,o),xp(o,n),$_(hc),Mr=!!cc,hc=cc=null,n.current=o,_v(o),Gu(),Ve=T,ke=_,pn.transition=p}else n.current=o;if(bl&&(bl=!1,Kr=n,Ul=d),p=n.pendingLanes,p===0&&(qr=null),za(o.stateNode),Gt(n,ze()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Fl)throw Fl=!1,n=sh,sh=null,n;return(Ul&1)!==0&&n.tag!==0&&zs(),p=n.pendingLanes,(p&1)!==0?n===oh?ia++:(ia=0,oh=n):ia=0,zr(),null}function zs(){if(Kr!==null){var n=xr(Ul),r=pn.transition,o=ke;try{if(pn.transition=null,ke=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,Ul=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,te=n.current;te!==null;){var p=te,_=p.child;if((te.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var b=T[R];for(te=b;te!==null;){var H=te;switch(H.tag){case 0:case 11:case 15:ta(8,H,p)}var K=H.child;if(K!==null)K.return=H,te=K;else for(;te!==null;){H=te;var $=H.sibling,Z=H.return;if(Cp(H),H===b){te=null;break}if($!==null){$.return=Z,te=$;break}te=Z}}}var ne=p.alternate;if(ne!==null){var re=ne.child;if(re!==null){ne.child=null;do{var nt=re.sibling;re.sibling=null,re=nt}while(re!==null)}}te=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,te=_;else e:for(;te!==null;){if(p=te,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ta(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,te=L;break e}te=p.return}}var P=n.current;for(te=P;te!==null;){_=te;var M=_.child;if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,te=M;else e:for(_=P;te!==null;){if(T=te,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:xl(9,T)}}catch(se){Ze(T,T.return,se)}if(T===_){te=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,te=G;break e}te=T.return}}if(Ve=d,zr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ei,n)}catch{}c=!0}return c}finally{ke=o,pn.transition=r}}return!1}function Wp(n,r,o){r=bs(o,r),r=up(n,r,1),n=Hr(n,r,1),r=Bt(),n!==null&&(Vr(n,1,r),Gt(n,r))}function Ze(n,r,o){if(n.tag===3)Wp(n,n,o);else for(;r!==null;){if(r.tag===3){Wp(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qr===null||!qr.has(c))){n=bs(o,n),n=cp(r,n,1),r=Hr(r,n,1),n=Bt(),r!==null&&(Vr(r,1,n),Gt(r,n));break}}r=r.return}}function Sv(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&o,yt===n&&(It&o)===o&&(ht===4||ht===3&&(It&130023424)===It&&500>ze()-ih?Mi(n,0):rh|=o),Gt(n,r)}function qp(n,r){r===0&&((n.mode&1)===0?r=1:(r=hs,hs<<=1,(hs&130023424)===0&&(hs=4194304)));var o=Bt();n=fr(n,r),n!==null&&(Vr(n,r,o),Gt(n,o))}function Av(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),qp(n,o)}function Rv(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),qp(n,o)}var Kp;Kp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)qt=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return qt=!1,fv(n,r,o);qt=(n.flags&131072)!==0}else qt=!1,Ge&&(r.flags&1048576)!==0&&Rf(r,yl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Vl(n,r),n=r.pendingProps;var d=Ns(r,Nt.current);Ms(r,o),d=Lc(null,r,c,n,d,o);var p=Mc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,pl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Pc(r),d.updater=Nl,r.stateNode=d,d._reactInternals=r,zc(r,c,n,o),r=qc(null,r,c,!0,p,o)):(r.tag=0,Ge&&p&&_c(r),jt(null,r,d,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Vl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Pv(c),n=Pn(c,n),d){case 0:r=Wc(null,r,c,n,o);break e;case 1:r=vp(null,r,c,n,o);break e;case 11:r=pp(null,r,c,n,o);break e;case 14:r=mp(null,r,c,Pn(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),Wc(n,r,c,d,o);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),vp(n,r,c,d,o);case 3:e:{if(Ep(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Lf(n,r),Il(r,c,null,o);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=bs(Error(t(423)),r),r=wp(n,r,c,o,d);break e}else if(c!==d){d=bs(Error(t(424)),r),r=wp(n,r,c,o,d);break e}else for(tn=Ur(r.stateNode.containerInfo.firstChild),en=r,Ge=!0,kn=null,o=Of(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Os(),c===d){r=mr(n,r,o);break e}jt(n,r,c,o)}r=r.child}return r;case 5:return bf(r),n===null&&wc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,dc(c,d)?_=null:p!==null&&dc(c,p)&&(r.flags|=32),_p(n,r),jt(n,r,_,o),r.child;case 6:return n===null&&wc(r),null;case 13:return Tp(n,r,o);case 4:return Cc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=xs(r,null,c,o):jt(n,r,c,o),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),pp(n,r,c,d,o);case 7:return jt(n,r,r.pendingProps,o),r.child;case 8:return jt(n,r,r.pendingProps.children,o),r.child;case 12:return jt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,$e(El,c._currentValue),c._currentValue=_,p!==null)if(Rn(p.value,_)){if(p.children===d.children&&!Ht.current){r=mr(n,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=pr(-1,o&-o),R.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var H=b.pending;H===null?R.next=R:(R.next=H.next,H.next=R),b.pending=R}}p.lanes|=o,R=p.alternate,R!==null&&(R.lanes|=o),Rc(p.return,o,r),T.lanes|=o;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),Rc(_,o,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}jt(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ms(r,o),d=dn(d),c=c(d),r.flags|=1,jt(n,r,c,o),r.child;case 14:return c=r.type,d=Pn(c,r.pendingProps),d=Pn(c.type,d),mp(n,r,c,d,o);case 15:return gp(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),Vl(n,r),r.tag=1,Wt(c)?(n=!0,pl(r)):n=!1,Ms(r,o),ap(r,c,d),zc(r,c,d,o),qc(null,r,c,!0,n,o);case 19:return Sp(n,r,o);case 22:return yp(n,r,o)}throw Error(t(156,r.tag))};function Gp(n,r){return us(n,r)}function kv(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,o,c){return new kv(n,r,o,c)}function dh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pv(n){if(typeof n=="function")return dh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Pt)return 14}return 2}function Yr(n,r){var o=n.alternate;return o===null?(o=mn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function $l(n,r,o,c,d,p){var _=2;if(c=n,typeof n=="function")dh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case C:return bi(o.children,d,p,r);case I:_=8,d|=8;break;case A:return n=mn(12,o,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,o,r,d),n.elementType=S,n.lanes=p,n;case et:return n=mn(19,o,r,d),n.elementType=et,n.lanes=p,n;case Ue:return Hl(o,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case D:_=9;break e;case O:_=11;break e;case Pt:_=14;break e;case Ct:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,o,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function bi(n,r,o,c){return n=mn(7,n,c,r),n.lanes=o,n}function Hl(n,r,o,c){return n=mn(22,n,c,r),n.elementType=Ue,n.lanes=o,n.stateNode={isHidden:!1},n}function fh(n,r,o){return n=mn(6,n,null,r),n.lanes=o,n}function ph(n,r,o){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Cv(n,r,o,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dr(0),this.expirationTimes=Dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function mh(n,r,o,c,d,p,_,T,R){return n=new Cv(n,r,o,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(p),n}function Nv(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function Qp(n){if(!n)return Br;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Wt(o))return If(n,o,r)}return r}function Yp(n,r,o,c,d,p,_,T,R){return n=mh(o,c,!0,n,d,p,_,T,R),n.context=Qp(null),o=n.current,c=Bt(),d=Gr(o),p=pr(c,d),p.callback=r??null,Hr(o,p,d),n.current.lanes=d,Vr(n,d,c),Gt(n,c),n}function Wl(n,r,o,c){var d=r.current,p=Bt(),_=Gr(d);return o=Qp(o),r.context===null?r.context=o:r.pendingContext=o,r=pr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(d,r,_),n!==null&&(Dn(n,d,_,p),Tl(n,d,_)),_}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function gh(n,r){Xp(n,r),(n=n.alternate)&&Xp(n,r)}function Dv(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function yh(n){this._internalRoot=n}Kl.prototype.render=yh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},Kl.prototype.unmount=yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Li(function(){Wl(null,n,null,null)}),r[ur]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ka();n={blockedOn:null,target:n,priority:r};for(var o=0;o<bn.length&&r!==0&&r<bn[o].priority;o++);bn.splice(o,0,n),o===0&&Ya(n)}};function _h(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function Vv(n,r,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var b=ql(_);p.call(b)}}var _=Yp(r,c,n,0,null,!1,!1,"",Zp);return n._reactRootContainer=_,n[ur]=_.current,zo(n.nodeType===8?n.parentNode:n),Li(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var b=ql(R);T.call(b)}}var R=mh(n,0,!1,null,null,!1,!1,"",Zp);return n._reactRootContainer=R,n[ur]=R.current,zo(n.nodeType===8?n.parentNode:n),Li(function(){Wl(r,R,o,c)}),R}function Ql(n,r,o,c,d){var p=o._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=ql(_);T.call(R)}}Wl(r,_,n,d)}else _=Vv(o,r,n,d,c);return ql(_)}Wa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Nr(r.pendingLanes);o!==0&&(Or(r,o|1),Gt(r,ze()),(Ve&6)===0&&(Bs=ze()+500,zr()))}break;case 13:Li(function(){var c=fr(n,1);if(c!==null){var d=Bt();Dn(c,n,1,d)}}),gh(n,1)}},ds=function(n){if(n.tag===13){var r=fr(n,134217728);if(r!==null){var o=Bt();Dn(r,n,134217728,o)}gh(n,134217728)}},qa=function(n){if(n.tag===13){var r=Gr(n),o=fr(n,r);if(o!==null){var c=Bt();Dn(o,n,r,c)}gh(n,r)}},Ka=function(){return ke},Ga=function(n,r){var o=ke;try{return ke=n,r()}finally{ke=o}},rs=function(n,r,o){switch(r){case"input":if(fo(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var d=dl(c);if(!d)throw Error(t(90));Xi(c),fo(c,d)}}}break;case"textarea":ts(n,o);break;case"select":r=o.value,r!=null&&tr(n,!!o.multiple,r,!1)}},mi=uh,Io=Li;var Ov={usingClientEntryPoint:!1,Events:[Wo,Ps,dl,Mn,To,uh]},sa={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ro(n),n===null?null:n.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Ei=Yl.inject(xv),Yt=Yl}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov,Qt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_h(r))throw Error(t(200));return Nv(n,r,null,o)},Qt.createRoot=function(n,r){if(!_h(n))throw Error(t(299));var o=!1,c="",d=Jp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=mh(n,1,!1,null,null,o,!1,c,d),n[ur]=r.current,zo(n.nodeType===8?n.parentNode:n),new yh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ro(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Li(n)},Qt.hydrate=function(n,r,o){if(!Gl(r))throw Error(t(200));return Ql(null,n,r,!0,o)},Qt.hydrateRoot=function(n,r,o){if(!_h(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",_=Jp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=Yp(r,null,n,1,o??null,d,!1,p,_),n[ur]=r.current,zo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new Kl(r)},Qt.render=function(n,r,o){if(!Gl(r))throw Error(t(200));return Ql(null,n,r,!1,o)},Qt.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(t(40));return n._reactRootContainer?(Li(function(){Ql(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},Qt.unstable_batchedUpdates=uh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!Gl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ql(n,r,o,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var am;function zv(){if(am)return wh.exports;am=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),wh.exports=Bv(),wh.exports}var lm;function $v(){if(lm)return Xl;lm=1;var i=zv();return Xl.createRoot=i.createRoot,Xl.hydrateRoot=i.hydrateRoot,Xl}var Hv=$v(),um={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Wv=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[t++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const u=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,w=u>>2,N=(u&3)<<4|m>>4;let F=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(F=64)),s.push(t[w],t[N],t[F],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(vg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Wv(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const u=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const v=a<i.length?t[i.charAt(a)]:64;++a;const N=a<i.length?t[i.charAt(a)]:64;if(++a,u==null||m==null||v==null||N==null)throw new qv;const F=u<<2|m>>4;if(s.push(F),v!==64){const z=m<<4&240|v>>2;if(s.push(z),N!==64){const Y=v<<6&192|N;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kv=function(i){const e=vg(i);return Eg.encodeByteArray(e,!0)},fu=function(i){return Kv(i).replace(/\./g,"")},wg=function(i){try{return Eg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qv=()=>Gv().__FIREBASE_DEFAULTS__,Yv=()=>{if(typeof process>"u"||typeof um>"u")return;const i=um.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Xv=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&wg(i[1]);return e&&JSON.parse(e)},Nu=()=>{try{return Qv()||Yv()||Xv()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Tg=i=>{var e,t;return(t=(e=Nu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Jv=i=>{const e=Tg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ig=()=>{var i;return(i=Nu())===null||i===void 0?void 0:i.config},Sg=i=>{var e;return(e=Nu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function eE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[fu(JSON.stringify(t)),fu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function nE(){var i;const e=(i=Nu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function sE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oE(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function aE(){return!nE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lE(){try{return typeof indexedDB=="object"}catch{return!1}}function uE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=cE,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?hE(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Rr(a,m,s)}}function hE(i,e){return i.replace(dE,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const dE=/\{\$([^}]+)}/g;function fE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function pu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const u=i[a],h=e[a];if(cm(u)&&cm(h)){if(!pu(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function cm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pE(i,e){const t=new mE(i,e);return t.subscribe.bind(t)}class mE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");gE(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Sh),a.error===void 0&&(a.error=Sh),a.complete===void 0&&(a.complete=Sh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Sh(){}/**
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
 */function sn(i){return i&&i._delegate?i._delegate:i}class Hi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class yE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Zv;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vE(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(a,u);const h=this.instances.get(a);return h&&e(h,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_E(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _E(i){return i===Ui?void 0:i}function vE(i){return i.instantiationMode==="EAGER"}/**
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
 */class EE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const wE={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},TE=Pe.INFO,IE={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},SE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=IE[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=TE,this._logHandler=SE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const AE=(i,e)=>e.some(t=>i instanceof t);let hm,dm;function RE(){return hm||(hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kE(){return dm||(dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,Lh=new WeakMap,Rg=new WeakMap,Ah=new WeakMap,sd=new WeakMap;function PE(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ri(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ag.set(t,i)}).catch(()=>{}),sd.set(e,i),e}function CE(i){if(Lh.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Lh.set(i,e)}let Mh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Lh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Rg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ri(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function NE(i){Mh=i(Mh)}function DE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Rh(this),e,...t);return Rg.set(s,e.sort?e.sort():[e]),ri(s)}:kE().includes(i)?function(...e){return i.apply(Rh(this),e),ri(Ag.get(this))}:function(...e){return ri(i.apply(Rh(this),e))}}function VE(i){return typeof i=="function"?DE(i):(i instanceof IDBTransaction&&CE(i),AE(i,RE())?new Proxy(i,Mh):i)}function ri(i){if(i instanceof IDBRequest)return PE(i);if(Ah.has(i))return Ah.get(i);const e=VE(i);return e!==i&&(Ah.set(i,e),sd.set(e,i)),e}const Rh=i=>sd.get(i);function OE(i,e,{blocked:t,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(i,e),m=ri(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ri(h.result),y.oldVersion,y.newVersion,ri(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const xE=["get","getKey","getAll","getAllKeys","count"],LE=["put","add","delete","clear"],kh=new Map;function fm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(kh.get(e))return kh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=LE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||xE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),a&&y.done]))[0]};return kh.set(e,u),u}NE(i=>({...i,get:(e,t,s)=>fm(e,t)||i.get(e,t,s),has:(e,t)=>!!fm(e,t)||i.has(e,t)}));/**
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
 */class ME{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function FE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",pm="0.10.13";/**
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
 */const Tr=new id("@firebase/app"),bE="@firebase/app-compat",UE="@firebase/analytics-compat",jE="@firebase/analytics",BE="@firebase/app-check-compat",zE="@firebase/app-check",$E="@firebase/auth",HE="@firebase/auth-compat",WE="@firebase/database",qE="@firebase/data-connect",KE="@firebase/database-compat",GE="@firebase/functions",QE="@firebase/functions-compat",YE="@firebase/installations",XE="@firebase/installations-compat",JE="@firebase/messaging",ZE="@firebase/messaging-compat",ew="@firebase/performance",tw="@firebase/performance-compat",nw="@firebase/remote-config",rw="@firebase/remote-config-compat",iw="@firebase/storage",sw="@firebase/storage-compat",ow="@firebase/firestore",aw="@firebase/vertexai-preview",lw="@firebase/firestore-compat",uw="firebase",cw="10.14.1";/**
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
 */const bh="[DEFAULT]",hw={[Fh]:"fire-core",[bE]:"fire-core-compat",[jE]:"fire-analytics",[UE]:"fire-analytics-compat",[zE]:"fire-app-check",[BE]:"fire-app-check-compat",[$E]:"fire-auth",[HE]:"fire-auth-compat",[WE]:"fire-rtdb",[qE]:"fire-data-connect",[KE]:"fire-rtdb-compat",[GE]:"fire-fn",[QE]:"fire-fn-compat",[YE]:"fire-iid",[XE]:"fire-iid-compat",[JE]:"fire-fcm",[ZE]:"fire-fcm-compat",[ew]:"fire-perf",[tw]:"fire-perf-compat",[nw]:"fire-rc",[rw]:"fire-rc-compat",[iw]:"fire-gcs",[sw]:"fire-gcs-compat",[ow]:"fire-fst",[lw]:"fire-fst-compat",[aw]:"fire-vertex","fire-js":"fire-js",[uw]:"fire-js-all"};/**
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
 */const mu=new Map,dw=new Map,Uh=new Map;function mm(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ys(i){const e=i.name;if(Uh.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,i);for(const t of mu.values())mm(t,i);for(const t of dw.values())mm(t,i);return!0}function od(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function _r(i){return i.settings!==void 0}/**
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
 */const fw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new Aa("app","Firebase",fw);/**
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
 */class pw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const so=cw;function kg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bh,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ii.create("bad-app-name",{appName:String(a)});if(t||(t=Ig()),!t)throw ii.create("no-options");const u=mu.get(a);if(u){if(pu(t,u.options)&&pu(s,u.config))return u;throw ii.create("duplicate-app",{appName:a})}const h=new EE(a);for(const y of Uh.values())h.addComponent(y);const m=new pw(t,s,h);return mu.set(a,m),m}function Pg(i=bh){const e=mu.get(i);if(!e&&i===bh&&Ig())return kg();if(!e)throw ii.create("no-app",{appName:i});return e}function si(i,e,t){var s;let a=(s=hw[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const u=a.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${a}" with version "${e}":`];u&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}Ys(new Hi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const mw="firebase-heartbeat-database",gw=1,ga="firebase-heartbeat-store";let Ph=null;function Cg(){return Ph||(Ph=OE(mw,gw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ga)}catch(t){console.warn(t)}}}}).catch(i=>{throw ii.create("idb-open",{originalErrorMessage:i.message})})),Ph}async function yw(i){try{const t=(await Cg()).transaction(ga),s=await t.objectStore(ga).get(Ng(i));return await t.done,s}catch(e){if(e instanceof Rr)Tr.warn(e.message);else{const t=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(t.message)}}}async function gm(i,e){try{const s=(await Cg()).transaction(ga,"readwrite");await s.objectStore(ga).put(e,Ng(i)),await s.done}catch(t){if(t instanceof Rr)Tr.warn(t.message);else{const s=ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tr.warn(s.message)}}}function Ng(i){return`${i.name}!${i.options.appId}`}/**
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
 */const _w=1024,vw=30*24*60*60*1e3;class Ew{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=ym();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=vw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ym(),{heartbeatsToSend:s,unsentEntries:a}=ww(this._heartbeatsCache.heartbeats),u=fu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Tr.warn(t),""}}}function ym(){return new Date().toISOString().substring(0,10)}function ww(i,e=_w){const t=[];let s=i.slice();for(const a of i){const u=t.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),_m(t)>e){u.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),_m(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lE()?uE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function _m(i){return fu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Iw(i){Ys(new Hi("platform-logger",e=>new ME(e),"PRIVATE")),Ys(new Hi("heartbeat",e=>new Ew(e),"PRIVATE")),si(Fh,pm,i),si(Fh,pm,"esm2017"),si("fire-js","")}Iw("");var Sw="firebase",Aw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si(Sw,Aw,"app");function ad(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rw=Dg,Vg=new Aa("auth","Firebase",Dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new id("@firebase/auth");function kw(i,...e){gu.logLevel<=Pe.WARN&&gu.warn(`Auth (${so}): ${i}`,...e)}function iu(i,...e){gu.logLevel<=Pe.ERROR&&gu.error(`Auth (${so}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(i,...e){throw ud(i,...e)}function On(i,...e){return ud(i,...e)}function ld(i,e,t){const s=Object.assign(Object.assign({},Rw()),{[e]:t});return new Aa("auth","Firebase",s).create(e,{appName:i.name})}function zi(i){return ld(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pw(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yn(i,"argument-error"),ld(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ud(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Vg.create(i,...e)}function me(i,e,...t){if(!i)throw ud(e,...t)}function vr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw iu(e),new Error(e)}function Ir(i,e){i||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Cw(){return vm()==="http:"||vm()==="https:"}function vm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cw()||iE()||"connection"in navigator)?navigator.onLine:!0}function Dw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=tE()||sE()}get(){return Nw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=new ka(3e4,6e4);function hd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function oo(i,e,t,s,a={}){return xg(i,a,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ra(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return rE()||(v.referrerPolicy="no-referrer"),Og.fetch()(Lg(i,i.config.apiHost,t,m),v)})}async function xg(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Vw),e);try{const a=new Lw(i),u=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Jl(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Jl(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Jl(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw ld(i,w,v);Yn(i,w)}}catch(a){if(a instanceof Rr)throw a;Yn(i,"network-request-failed",{message:String(a)})}}async function xw(i,e,t,s,a={}){const u=await oo(i,e,t,s,a);return"mfaPendingCredential"in u&&Yn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Lg(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?cd(i.config,a):`${i.config.apiScheme}://${a}`}class Lw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),Ow.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jl(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=On(i,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(i,e){return oo(i,"POST","/v1/accounts:delete",e)}async function Mg(i,e){return oo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fw(i,e=!1){const t=sn(i),s=await t.getIdToken(e),a=dd(s);me(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:a,token:s,authTime:ha(Ch(a.auth_time)),issuedAtTime:ha(Ch(a.iat)),expirationTime:ha(Ch(a.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ch(i){return Number(i)*1e3}function dd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return iu("JWT malformed, contained fewer than 3 sections"),null;try{const a=wg(t);return a?JSON.parse(a):(iu("Failed to decode base64 JWT payload"),null)}catch(a){return iu("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Em(i){const e=dd(i);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&bw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function bw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yu(i){var e;const t=i.auth,s=await i.getIdToken(),a=await ya(i,Mg(t,{idToken:s}));me(a==null?void 0:a.users.length,t,"internal-error");const u=a.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Fg(u.providerUserInfo):[],m=Bw(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,N={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Bh(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,N)}async function jw(i){const e=sn(i);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bw(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Fg(i){return i.map(e=>{var{providerId:t}=e,s=ad(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(i,e){const t=await xg(i,{},async()=>{const s=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,h=Lg(i,a,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Og.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $w(i,e){return oo(i,"POST","/v2/accounts:revokeToken",hd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Em(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:u}=await zw(e,t);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:u}=t,h=new qs;return s&&(me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(me(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),u&&(me(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qs,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(i,e){me(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,u=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Bh(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ya(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fw(this,e)}reload(){return jw(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await yu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_r(this.auth.app))return Promise.reject(zi(this.auth));const e=await this.getIdToken();return await ya(this,Mw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,u,h,m,y,v,w;const N=(s=t.displayName)!==null&&s!==void 0?s:void 0,F=(a=t.email)!==null&&a!==void 0?a:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,j=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,de=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ve=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Ee,emailVerified:Te,isAnonymous:qe,providerData:Ae,stsTokenManager:C}=t;me(Ee&&C,e,"internal-error");const I=qs.fromJSON(this.name,C);me(typeof Ee=="string",e,"internal-error"),Jr(N,e.name),Jr(F,e.name),me(typeof Te=="boolean",e,"internal-error"),me(typeof qe=="boolean",e,"internal-error"),Jr(z,e.name),Jr(Y,e.name),Jr(X,e.name),Jr(j,e.name),Jr(de,e.name),Jr(ve,e.name);const A=new Er({uid:Ee,auth:e,email:F,emailVerified:Te,displayName:N,isAnonymous:qe,photoURL:Y,phoneNumber:z,tenantId:X,stsTokenManager:I,createdAt:de,lastLoginAt:ve});return Ae&&Array.isArray(Ae)&&(A.providerData=Ae.map(k=>Object.assign({},k))),j&&(A._redirectEventId=j),A}static async _fromIdTokenResponse(e,t,s=!1){const a=new qs;a.updateFromServerResponse(t);const u=new Er({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await yu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];me(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?Fg(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),m=new qs;m.updateFromIdToken(s);const y=new Er({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Bh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Map;function wr(i){Ir(i instanceof Function,"Expected a class definition");let e=wm.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wm.set(i,e),e)}/**
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
 */class bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bg.type="NONE";const Tm=bg;/**
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
 */function su(i,e,t){return`firebase:${i}:${e}:${t}`}class Ks{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=su(this.userKey,a.apiKey,u),this.fullPersistenceKey=su("persistence",a.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ks(wr(Tm),e,s);const a=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=a[0]||wr(Tm);const h=su(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const N=Er._fromJSON(e,w);v!==u&&(m=N),u=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Ks(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Ks(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hg(e))return"Blackberry";if(Wg(e))return"Webos";if(jg(e))return"Safari";if((e.includes("chrome/")||Bg(e))&&!e.includes("edge/"))return"Chrome";if($g(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ug(i=Ft()){return/firefox\//i.test(i)}function jg(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bg(i=Ft()){return/crios\//i.test(i)}function zg(i=Ft()){return/iemobile/i.test(i)}function $g(i=Ft()){return/android/i.test(i)}function Hg(i=Ft()){return/blackberry/i.test(i)}function Wg(i=Ft()){return/webos/i.test(i)}function fd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Hw(i=Ft()){var e;return fd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ww(){return oE()&&document.documentMode===10}function qg(i=Ft()){return fd(i)||$g(i)||Wg(i)||Hg(i)||/windows phone/i.test(i)||zg(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(i,e=[]){let t;switch(i){case"Browser":t=Im(Ft());break;case"Worker":t=`${Im(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${so}/${s}`}/**
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
 */class qw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Kw(i,e={}){return oo(i,"GET","/v2/passwordPolicy",hd(i,e))}/**
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
 */const Gw=6;class Qw{constructor(e){var t,s,a,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:Gw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sm(this),this.idTokenSubscription=new Sm(this),this.beforeStateQueue=new qw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mg(this,{idToken:e}),s=await Er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_r(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(a=y.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_r(this.app))return Promise.reject(zi(this));const t=e?sn(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _r(this.app)?Promise.reject(zi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _r(this.app)?Promise.reject(zi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kw(this),t=new Qw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Aa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await $w(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Du(i){return sn(i)}class Sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=pE(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xw(i){pd=i}function Jw(i){return pd.loadJS(i)}function Zw(){return pd.gapiScript}function e0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(i,e){const t=od(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),u=t.getOptions();if(pu(u,e??{}))return a;Yn(a,"already-initialized")}return t.initialize({options:e})}function n0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function r0(i,e,t){const s=Du(i);me(s._canInitEmulator,s,"emulator-config-failed"),me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=Gg(e),{host:h,port:m}=i0(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})}),s0()}function Gg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function i0(i){const e=Gg(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:Am(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Am(h)}}}function Am(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function s0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,t){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(i,e){return xw(i,"POST","/v1/accounts:signInWithIdp",hd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="http://localhost";class Wi extends Qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,u=ad(t,["providerId","signInMethod"]);if(!s||!a)return null;const h=new Wi(s,a);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Gs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Gs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gs(e,t)}buildRequest(){const e={requestUri:o0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ra(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Pa{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return yr.credential(t,s)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Pa{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Pa{constructor(){super("twitter.com")}static credential(e,t){return Wi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ti.credential(t,s)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const u=await Er._fromIdTokenResponse(e,s,a),h=Rm(s);return new Xs({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Rm(s);return new Xs({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Rm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends Rr{constructor(e,t,s,a){var u;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new _u(e,t,s,a)}}function Yg(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(i,u,e,s):u})}async function a0(i,e,t=!1){const s=await ya(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Xs._forOperation(i,"link",s)}/**
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
 */async function l0(i,e,t=!1){const{auth:s}=i;if(_r(s.app))return Promise.reject(zi(s));const a="reauthenticate";try{const u=await ya(i,Yg(s,a,e,i),t);me(u.idToken,s,"internal-error");const h=dd(u.idToken);me(h,s,"internal-error");const{sub:m}=h;return me(i.uid===m,s,"user-mismatch"),Xs._forOperation(i,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Yn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(i,e,t=!1){if(_r(i.app))return Promise.reject(zi(i));const s="signIn",a=await Yg(i,s,e),u=await Xs._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(u.user),u}function c0(i,e,t,s){return sn(i).onIdTokenChanged(e,t,s)}function h0(i,e,t){return sn(i).beforeAuthStateChanged(e,t)}function d0(i,e,t,s){return sn(i).onAuthStateChanged(e,t,s)}function f0(i){return sn(i).signOut()}const vu="__sak";/**
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
 */class Xg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=1e3,m0=10;class Jg extends Xg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);Ww()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,m0):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},p0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jg.type="LOCAL";const g0=Jg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Xg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zg.type="SESSION";const ey=Zg;/**
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
 */function y0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Vu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:u}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await y0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class _0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=gd("",20);a.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(N){const F=N;if(F.data.eventId===v)switch(F.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(F.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function v0(i){qn().location.href=i}/**
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
 */function ty(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function E0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function T0(){return ty()?self:null}/**
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
 */const ny="firebaseLocalStorageDb",I0=1,Eu="firebaseLocalStorage",ry="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ou(i,e){return i.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function S0(){const i=indexedDB.deleteDatabase(ny);return new Ca(i).toPromise()}function zh(){const i=indexedDB.open(ny,I0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Eu,{keyPath:ry})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Eu)?e(s):(s.close(),await S0(),e(await zh()))})})}async function km(i,e,t){const s=Ou(i,!0).put({[ry]:e,value:t});return new Ca(s).toPromise()}async function A0(i,e){const t=Ou(i,!1).get(e),s=await new Ca(t).toPromise();return s===void 0?null:s.value}function Pm(i,e){const t=Ou(i,!0).delete(e);return new Ca(t).toPromise()}const R0=800,k0=3;class iy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>k0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ty()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vu._getInstance(T0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await E0(),!this.activeServiceWorker)return;this.sender=new _0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await km(e,vu,"1"),await Pm(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>km(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>A0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=Ou(a,!1).getAll();return new Ca(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iy.type="LOCAL";const P0=iy;new ka(3e4,6e4);/**
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
 */function sy(i,e){return e?wr(e):(me(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class yd extends Qg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function C0(i){return u0(i.auth,new yd(i),i.bypassAuthState)}function N0(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),l0(t,new yd(i),i.bypassAuthState)}async function D0(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),a0(t,new yd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C0;case"linkViaPopup":case"linkViaRedirect":return D0;case"reauthViaPopup":case"reauthViaRedirect":return N0;default:Yn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new ka(2e3,1e4);async function O0(i,e,t){if(_r(i.app))return Promise.reject(On(i,"operation-not-supported-in-this-environment"));const s=Du(i);Pw(i,e,md);const a=sy(s,t);return new ji(s,"signInViaPopup",e,a).executeNotNull()}class ji extends oy{constructor(e,t,s,a,u){super(e,t,a,u),this.provider=s,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V0.get())};e()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="pendingRedirect",ou=new Map;class L0 extends oy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ou.get(this.auth._key());if(!e){try{const s=await M0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ou.set(this.auth._key(),e)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M0(i,e){const t=U0(e),s=b0(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function F0(i,e){ou.set(i._key(),e)}function b0(i){return wr(i._redirectPersistence)}function U0(i){return su(x0,i.config.apiKey,i.name)}async function j0(i,e,t=!1){if(_r(i.app))return Promise.reject(zi(i));const s=Du(i),a=sy(s,e),h=await new L0(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=10*60*1e3;class z0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ay(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(On(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cm(e))}saveEventToCache(e){this.cachedEventUids.add(Cm(e)),this.lastProcessedEventTime=Date.now()}}function Cm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ay({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $0(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ay(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(i,e={}){return oo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function K0(i){if(i.config.emulator)return;const{authorizedDomains:e}=await H0(i);for(const t of e)try{if(G0(t))return}catch{}Yn(i,"unauthorized-domain")}function G0(i){const e=jh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!q0.test(t))return!1;if(W0.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const Q0=new ka(3e4,6e4);function Nm(){const i=qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Y0(i){return new Promise((e,t)=>{var s,a,u;function h(){Nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nm(),t(On(i,"network-request-failed"))},timeout:Q0.get()})}if(!((a=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((u=qn().gapi)===null||u===void 0)&&u.load)h();else{const m=e0("iframefcb");return qn()[m]=()=>{gapi.load?h():t(On(i,"network-request-failed"))},Jw(`${Zw()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw au=null,e})}let au=null;function X0(i){return au=au||Y0(i),au}/**
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
 */const J0=new ka(5e3,15e3),Z0="__/auth/iframe",eT="emulator/auth/iframe",tT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rT(i){const e=i.config;me(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?cd(e,eT):`https://${i.config.authDomain}/${Z0}`,s={apiKey:e.apiKey,appName:i.name,v:so},a=nT.get(i.config.apiHost);a&&(s.eid=a);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ra(s).slice(1)}`}async function iT(i){const e=await X0(i),t=qn().gapi;return me(t,i,"internal-error"),e.open({where:document.body,url:rT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tT,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const h=On(i,"network-request-failed"),m=qn().setTimeout(()=>{u(h)},J0.get());function y(){qn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const sT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oT=500,aT=600,lT="_blank",uT="http://localhost";class Dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cT(i,e,t,s=oT,a=aT){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},sT),{width:s.toString(),height:a.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=Bg(v)?lT:t),Ug(v)&&(e=e||uT,y.scrollbars="yes");const w=Object.entries(y).reduce((F,[z,Y])=>`${F}${z}=${Y},`,"");if(Hw(v)&&m!=="_self")return hT(e||"",m),new Dm(null);const N=window.open(e||"",m,w);me(N,i,"popup-blocked");try{N.focus()}catch{}return new Dm(N)}function hT(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const dT="__/auth/handler",fT="emulator/auth/handler",pT=encodeURIComponent("fac");async function Vm(i,e,t,s,a,u){me(i.config.authDomain,i,"auth-domain-config-required"),me(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:so,eventId:a};if(e instanceof md){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",fE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,N]of Object.entries({}))h[w]=N}if(e instanceof Pa){const w=e.getScopes().filter(N=>N!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${pT}=${encodeURIComponent(y)}`:"";return`${mT(i)}?${Ra(m).slice(1)}${v}`}function mT({config:i}){return i.emulator?cd(i,fT):`https://${i.authDomain}/${dT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="webStorageSupport";class gT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ey,this._completeRedirectFn=j0,this._overrideRedirectResult=F0}async _openPopup(e,t,s,a){var u;Ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Vm(e,t,s,jh(),a);return cT(e,h,gd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const u=await Vm(e,t,s,jh(),a);return v0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:u}=this.eventManagers[t];return a?Promise.resolve(a):(Ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await iT(e),s=new z0(e);return t.register("authEvent",a=>(me(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Nh,{type:Nh},a=>{var u;const h=(u=a==null?void 0:a[0])===null||u===void 0?void 0:u[Nh];h!==void 0&&t(!!h),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=K0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qg()||jg()||fd()}}const yT=gT;var Om="@firebase/auth",xm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ET(i){Ys(new Hi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kg(i)},v=new Yw(s,a,u,y);return n0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ys(new Hi("auth-internal",e=>{const t=Du(e.getProvider("auth").getImmediate());return(s=>new _T(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(Om,xm,vT(i)),si(Om,xm,"esm2017")}/**
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
 */const wT=5*60,TT=Sg("authIdTokenMaxAge")||wT;let Lm=null;const IT=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>TT)return;const a=t==null?void 0:t.token;Lm!==a&&(Lm=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ly(i=Pg()){const e=od(i,"auth");if(e.isInitialized())return e.getImmediate();const t=t0(i,{popupRedirectResolver:yT,persistence:[P0,g0,ey]}),s=Sg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=IT(u.toString());h0(t,h,()=>h(t.currentUser)),c0(t,m=>h(m))}}const a=Tg("auth");return a&&r0(t,`http://${a}`),t}function ST(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Xw({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const u=On("internal-error");u.customData=a,t(u)},s.type="text/javascript",s.charset="UTF-8",ST().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ET("Browser");var Mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,uy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function A(){}A.prototype=I.prototype,C.D=I.prototype,C.prototype=new A,C.prototype.constructor=C,C.C=function(k,D,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[D].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)k[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)k[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=C.g[0],A=C.g[1],D=C.g[2];var O=C.g[3],S=I+(O^A&(D^O))+k[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+k[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+k[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+k[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+k[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+k[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+k[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+k[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+k[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+k[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+k[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+k[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+k[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+k[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+k[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+k[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^O&(A^D))+k[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+k[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+k[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+k[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+k[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+k[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+k[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+k[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+k[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+k[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+k[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+k[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+k[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+k[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+k[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+k[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^O)+k[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+k[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+k[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+k[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+k[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+k[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+k[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+k[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+k[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+k[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+k[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+k[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+k[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+k[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+k[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+k[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~O))+k[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+k[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+k[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+k[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+k[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+k[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+k[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+k[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+k[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+k[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+k[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+k[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+k[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+k[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+k[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+O&4294967295}s.prototype.u=function(C,I){I===void 0&&(I=C.length);for(var A=I-this.blockSize,k=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=A;)a(this,C,O),O+=this.blockSize;if(typeof C=="string"){for(;O<I;)if(k[D++]=C.charCodeAt(O++),D==this.blockSize){a(this,k),D=0;break}}else for(;O<I;)if(k[D++]=C[O++],D==this.blockSize){a(this,k),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;var A=8*this.o;for(I=C.length-8;I<C.length;++I)C[I]=A&255,A/=256;for(this.u(C),C=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)C[A++]=this.g[I]>>>k&255;return C};function u(C,I){var A=m;return Object.prototype.hasOwnProperty.call(A,C)?A[C]:A[C]=I(C)}function h(C,I){this.h=I;for(var A=[],k=!0,D=C.length-1;0<=D;D--){var O=C[D]|0;k&&O==I||(A[D]=O,k=!1)}this.g=A}var m={};function y(C){return-128<=C&&128>C?u(C,function(I){return new h([I|0],0>I?-1:0)}):new h([C|0],0>C?-1:0)}function v(C){if(isNaN(C)||!isFinite(C))return N;if(0>C)return j(v(-C));for(var I=[],A=1,k=0;C>=A;k++)I[k]=C/A|0,A*=4294967296;return new h(I,0)}function w(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return j(w(C.substring(1),I));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),k=N,D=0;D<C.length;D+=8){var O=Math.min(8,C.length-D),S=parseInt(C.substring(D,D+O),I);8>O?(O=v(Math.pow(I,O)),k=k.j(O).add(v(S))):(k=k.j(A),k=k.add(v(S)))}return k}var N=y(0),F=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-j(this).m();for(var C=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);C+=(0<=k?k:4294967296+k)*I,I*=4294967296}return C},i.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(Y(this))return"0";if(X(this))return"-"+j(this).toString(C);for(var I=v(Math.pow(C,6)),A=this,k="";;){var D=Te(A,I).g;A=de(A,D.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(C);if(A=D,Y(A))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},i.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function Y(C){if(C.h!=0)return!1;for(var I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function X(C){return C.h==-1}i.l=function(C){return C=de(this,C),X(C)?-1:Y(C)?0:1};function j(C){for(var I=C.g.length,A=[],k=0;k<I;k++)A[k]=~C.g[k];return new h(A,~C.h).add(F)}i.abs=function(){return X(this)?j(this):this},i.add=function(C){for(var I=Math.max(this.g.length,C.g.length),A=[],k=0,D=0;D<=I;D++){var O=k+(this.i(D)&65535)+(C.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);k=S>>>16,O&=65535,S&=65535,A[D]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function de(C,I){return C.add(j(I))}i.j=function(C){if(Y(this)||Y(C))return N;if(X(this))return X(C)?j(this).j(j(C)):j(j(this).j(C));if(X(C))return j(this.j(j(C)));if(0>this.l(z)&&0>C.l(z))return v(this.m()*C.m());for(var I=this.g.length+C.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<C.g.length;D++){var O=this.i(k)>>>16,S=this.i(k)&65535,et=C.i(D)>>>16,Pt=C.i(D)&65535;A[2*k+2*D]+=S*Pt,ve(A,2*k+2*D),A[2*k+2*D+1]+=O*Pt,ve(A,2*k+2*D+1),A[2*k+2*D+1]+=S*et,ve(A,2*k+2*D+1),A[2*k+2*D+2]+=O*et,ve(A,2*k+2*D+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function ve(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function Ee(C,I){this.g=C,this.h=I}function Te(C,I){if(Y(I))throw Error("division by zero");if(Y(C))return new Ee(N,N);if(X(C))return I=Te(j(C),I),new Ee(j(I.g),j(I.h));if(X(I))return I=Te(C,j(I)),new Ee(j(I.g),I.h);if(30<C.g.length){if(X(C)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=F,k=I;0>=k.l(C);)A=qe(A),k=qe(k);var D=Ae(A,1),O=Ae(k,1);for(k=Ae(k,2),A=Ae(A,2);!Y(k);){var S=O.add(k);0>=S.l(C)&&(D=D.add(A),O=S),k=Ae(k,1),A=Ae(A,1)}return I=de(C,D.j(I)),new Ee(D,I)}for(D=N;0<=C.l(I);){for(A=Math.max(1,Math.floor(C.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=v(A),S=O.j(I);X(S)||0<S.l(C);)A-=k,O=v(A),S=O.j(I);Y(O)&&(O=F),D=D.add(O),C=de(C,S)}return new Ee(D,C)}i.A=function(C){return Te(this,C).h},i.and=function(C){for(var I=Math.max(this.g.length,C.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&C.i(k);return new h(A,this.h&C.h)},i.or=function(C){for(var I=Math.max(this.g.length,C.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|C.i(k);return new h(A,this.h|C.h)},i.xor=function(C){for(var I=Math.max(this.g.length,C.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^C.i(k);return new h(A,this.h^C.h)};function qe(C){for(var I=C.g.length+1,A=[],k=0;k<I;k++)A[k]=C.i(k)<<1|C.i(k-1)>>>31;return new h(A,C.h)}function Ae(C,I){var A=I>>5;I%=32;for(var k=C.g.length-A,D=[],O=0;O<k;O++)D[O]=0<I?C.i(O+A)>>>I|C.i(O+A+1)<<32-I:C.i(O+A);return new h(D,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,uy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,$i=h}).apply(typeof Mm<"u"?Mm:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cy,la,hy,lu,$h,dy,fy,py;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var x=l[E];if(!(x in g))break e;g=g[x]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,x={next:function(){if(!E&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}a("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function N(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,E),l.apply(f,x)}}return function(){return l.apply(f,arguments)}}function F(l,f,g){return F=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:N,F.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Y(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,x,U){for(var Q=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Q[Fe-2]=arguments[Fe];return f.prototype[x].apply(E,Q)}}function X(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function j(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const x=l.length||0,U=E.length||0;l.length=x+U;for(let Q=0;Q<U;Q++)l[x+Q]=E[Q]}else l.push(E)}}class de{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(l){return/^[\s\xa0]*$/.test(l)}function Ee(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var qe=Ee().indexOf("Gecko")!=-1&&!(Ee().toLowerCase().indexOf("webkit")!=-1&&Ee().indexOf("Edge")==-1)&&!(Ee().indexOf("Trident")!=-1||Ee().indexOf("MSIE")!=-1)&&Ee().indexOf("Edge")==-1;function Ae(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function C(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let g,E;for(let x=1;x<arguments.length;x++){E=arguments[x];for(g in E)l[g]=E[g];for(let U=0;U<A.length;U++)g=A[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=Pt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new de(()=>new Ct,l=>l.reset());class Ct{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,le=new et,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ie(l,f){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(qe){e:{try{Te(f.nodeName);var x=!0;break e}catch{}x=!1}x||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ce[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}Y(Ie,oe);var Ce={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,g,E,x){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=x,this.key=++Me,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Zn(l){this.src=l,this.g={},this.h=0}Zn.prototype.add=function(l,f,g,E,x){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Q=kr(l,f,E,x);return-1<Q?(f=l[Q],g||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,x),f.fa=g,l.push(f)),f};function Xi(l,f){var g=f.type;if(g in l.g){var E=l.g[g],x=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=x)&&Array.prototype.splice.call(E,x,1),U&&(pt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function kr(l,f,g,E){for(var x=0;x<l.length;++x){var U=l[x];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return x}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),Ji={};function ho(l,f,g,E,x){if(Array.isArray(f)){for(var U=0;U<f.length;U++)ho(l,f[U],g,E,x);return null}return g=mo(g),l&&l[Le]?l.K(f,g,v(E)?!!E.capture:!1,x):fo(l,f,g,!1,E,x)}function fo(l,f,g,E,x,U){if(!f)throw Error("Invalid event type");var Q=v(x)?!!x.capture:!!x,Fe=es(l);if(Fe||(l[hi]=Fe=new Zn(l)),g=Fe.add(f,g,E,Q,U),g.proxy)return g;if(E=Ma(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)we||(x=Q),x===void 0&&(x=!1),l.addEventListener(f.toString(),E,x);else if(l.attachEvent)l.attachEvent(tr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ma(){function l(g){return f.call(l.src,l.listener,g)}const f=po;return l}function Zi(l,f,g,E,x){if(Array.isArray(f))for(var U=0;U<f.length;U++)Zi(l,f[U],g,E,x);else E=v(E)?!!E.capture:!!E,g=mo(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=kr(U,g,E,x),-1<g&&(pt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=es(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,g,E,x)),(g=-1<l?f[l]:null)&&er(g))}function er(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])Xi(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(tr(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=es(f))?(Xi(g,l),g.h==0&&(g.src=null,f[hi]=null)):pt(l)}}}function tr(l){return l in Ji?Ji[l]:Ji[l]="on"+l}function po(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&er(l),l=g.call(E,f)}return l}function es(l){return l=l[hi],l instanceof Zn?l:null}var ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(l){return typeof l=="function"?l:(l[ts]||(l[ts]=function(f){return l.handleEvent(f)}),l[ts])}function at(){B.call(this),this.i=new Zn(this),this.M=this,this.F=null}Y(at,B),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,g,E){Zi(this,l,f,g,E)};function lt(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new oe(f,l);else if(f instanceof oe)f.target=f.target||l;else{var x=f;f=new oe(E,l),k(f,x)}if(x=!0,g)for(var U=g.length-1;0<=U;U--){var Q=f.g=g[U];x=nr(Q,E,!0,f)&&x}if(Q=f.g=l,x=nr(Q,E,!0,f)&&x,x=nr(Q,E,!1,f)&&x,g)for(U=0;U<g.length;U++)Q=f.g=g[U],x=nr(Q,E,!1,f)&&x}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)pt(g[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},at.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function nr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var x=!0,U=0;U<f.length;++U){var Q=f[U];if(Q&&!Q.da&&Q.capture==g){var Fe=Q.listener,ut=Q.ha||Q.src;Q.fa&&Xi(l.i,Q),x=Fe.call(ut,E)!==!1&&x}}return x&&!E.defaultPrevented}function go(l,f,g){if(typeof l=="function")g&&(l=F(l,g));else if(l&&typeof l.handleEvent=="function")l=F(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Pr(l){l.g=go(()=>{l.g=null,l.i&&(l.i=!1,Pr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class di extends B{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Pr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(l){B.call(this),this.h=l,this.g={}}Y(fi,B);var yo=[];function _o(l){Ae(l.g,function(f,g){this.g.hasOwnProperty(g)&&er(f)},l),l.g={}}fi.prototype.N=function(){fi.aa.N.call(this),_o(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vo=m.JSON.stringify,Eo=m.JSON.parse,wo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function pi(){}pi.prototype.h=null;function ns(l){return l.h||(l.h=l.i())}function rs(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ln(){oe.call(this,"d")}Y(Ln,oe);function is(){oe.call(this,"c")}Y(is,oe);var Mn={},To=null;function mi(){return To=To||new at}Mn.La="serverreachability";function Io(l){oe.call(this,Mn.La,l)}Y(Io,oe);function rr(l){const f=mi();lt(f,new Io(f))}Mn.STAT_EVENT="statevent";function So(l,f){oe.call(this,Mn.STAT_EVENT,l),this.stat=f}Y(So,oe);function tt(l){const f=mi();lt(f,new So(f,l))}Mn.Ma="timingevent";function ss(l,f){oe.call(this,Mn.Ma,l),this.size=f}Y(ss,oe);function yn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function yi(l,f,g,E,x,U){l.info(function(){if(l.g)if(U)for(var Q="",Fe=U.split("&"),ut=0;ut<Fe.length;ut++){var Ne=Fe[ut].split("=");if(1<Ne.length){var mt=Ne[0];Ne=Ne[1];var it=mt.split("_");Q=2<=it.length&&it[1]=="type"?Q+(mt+"="+Ne+"&"):Q+(mt+"=redacted&")}}else Q=null;else Q=U;return"XMLHTTP REQ ("+E+") [attempt "+x+"]: "+f+`
`+g+`
`+Q})}function os(l,f,g,E,x,U,Q){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+x+"]: "+f+`
`+g+`
`+U+" "+Q})}function _n(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ku(l,g)+(E?" "+E:"")})}function Ao(l,f){l.info(function(){return"TIMEOUT: "+f})}gi.prototype.info=function(){};function Ku(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var x=E[1];if(Array.isArray(x)&&!(1>x.length)){var U=x[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Q=1;Q<x.length;Q++)x[Q]=""}}}}return vo(g)}catch{return f}}var as={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function _i(){}Y(_i,pi),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},vn=new _i;function En(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var Ro={},ls={};function us(l,f,g){l.L=1,l.v=Or(Xt(f)),l.m=g,l.P=!0,ko(l,null)}function ko(l,f){l.F=Date.now(),ze(l),l.A=Xt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Lr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new ba,l.g=nl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new di(F(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(yo[0]=x.toString()),x=yo);for(var U=0;U<x.length;U++){var Q=ho(g,x[U],E||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),rr(),yi(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Oo(this.g)))){this.J||it!=4||f==7||(f==8||0>=un?rr(3):rr(2)),vi(this);var g=this.g.Z();this.X=g;t:if(Ua(this)){var E=Oo(this.g);l="";var x=E.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Cr(this);var Q="";break t}this.h.i=new m.TextDecoder}for(f=0;f<x;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==x-1)});E.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=g==200,os(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ut=this.g;if((Fe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(Fe)){var Ne=Fe;break t}}Ne=null}if(g=Ne)_n(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Po(this,g);else{this.o=!1,this.s=3,tt(12),an(this),Cr(this);break e}}if(this.P){g=!0;let Zt;for(;!this.J&&this.C<Q.length;)if(Zt=Gu(this,Q),Zt==ls){it==4&&(this.s=4,tt(14),g=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Ro){this.s=4,tt(15),_n(this.i,this.l,Q,"[Invalid Chunk]"),g=!1;break}else _n(this.i,this.l,Zt,null),Po(this,Zt);if(Ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Q.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)_n(this.i,this.l,Q,"[Invalid Chunked Response]"),an(this),Cr(this);else if(0<Q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Lo(mt),mt.M=!0,tt(11))}}else _n(this.i,this.l,Q,null),Po(this,Q);it==4&&an(this),this.o&&!this.J&&(it==4?Es(this.j,this):(this.o=!1,ze(this)))}else ms(this.g),g==400&&0<Q.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),an(this),Cr(this)}}}catch{}finally{}};function Ua(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Gu(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?ls:(g=Number(f.substring(g,E)),isNaN(g)?Ro:(E+=1,E+g>f.length?ls:(f=f.slice(E,E+g),l.C=E+g,f)))}En.prototype.cancel=function(){this.J=!0,an(this)};function ze(l){l.S=Date.now()+l.I,ja(l,l.I)}function ja(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=yn(F(l.ba,l),f)}function vi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ao(this.i,this.A),this.L!=2&&(rr(),tt(17)),an(this),this.s=2,Cr(this)):ja(this,this.S-l)};function Cr(l){l.j.G==0||l.J||Es(l.j,l)}function an(l){vi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,_o(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Po(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||bt(g.h,l))){if(!l.K&&bt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var x=E;if(x[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)vs(g),An(g);else break e;_s(g),tt(18)}}else g.za=x[1],0<g.za-g.T&&37500>x[2]&&g.F&&g.v==0&&!g.C&&(g.C=yn(F(g.Za,g),6e3));if(1>=za(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else lr(g,11)}else if((l.K||g.g==l)&&vs(g),!ve(f))for(x=g.Da.g.parse(f),f=0;f<x.length;f++){let Ne=x[f];if(g.T=Ne[0],Ne=Ne[1],g.G==2)if(Ne[0]=="c"){g.K=Ne[1],g.ia=Ne[2];const mt=Ne[3];mt!=null&&(g.la=mt,g.j.info("VER="+g.la));const it=Ne[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const un=Ne[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Zt=l.g;if(Zt){const Ri=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var U=E.h;U.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Co(U,U.h),U.h=null))}if(E.D){const Ts=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ts&&(E.ya=Ts,je(E.I,E.D,Ts))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Q=l;if(E.qa=tl(E,E.J?E.ia:null,E.W),Q.K){$a(E.h,Q);var Fe=Q,ut=E.L;ut&&(Fe.I=ut),Fe.B&&(vi(Fe),ze(Fe)),E.g=Q}else Ai(E);0<g.i.length&&jn(g)}else Ne[0]!="stop"&&Ne[0]!="close"||lr(g,7);else g.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?lr(g,7):wt(g):Ne[0]!="noop"&&g.l&&g.l.ta(Ne),g.v=0)}}rr(4)}catch{}}var Ba=class{constructor(l,f){this.g=l,this.map=f}};function Ei(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function za(l){return l.h?1:l.g?l.g.size:0}function bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Co(l,f){l.g?l.g.add(f):l.h=f}function $a(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ei.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ha(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return X(l.i)}function cs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function hs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=hs(l),E=cs(l),x=E.length,U=0;U<x;U++)f.call(void 0,E[U],g&&g[U],l)}var wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qu(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),x=null;if(0<=E){var U=l[g].substring(0,E);x=l[g].substring(E+1)}else U=l[g];f(U,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ir(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ir){this.h=l.h,Ti(this,l.j),this.o=l.o,this.g=l.g,Dr(this,l.s),this.l=l.l;var f=l.i,g=new Fn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Vr(this,g),this.m=l.m}else l&&(f=String(l).match(wi))?(this.h=!1,Ti(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),Dr(this,f[4]),this.l=ke(f[5]||"",!0),Vr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}ir.prototype.toString=function(){var l=[],f=this.j;f&&l.push(xr(f,ds,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(xr(f,ds,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(xr(g,g.charAt(0)=="/"?Ka:qa,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",xr(g,No)),l.join("")};function Xt(l){return new ir(l)}function Ti(l,f,g){l.j=g?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Dr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vr(l,f,g){f instanceof Fn?(l.i=f,bn(l.i,l.h)):(g||(f=xr(f,Ga)),l.i=new Fn(f,l.h))}function je(l,f,g){l.i.set(f,g)}function Or(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Wa),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ds=/[#\/\?@]/g,qa=/[#\?:]/g,Ka=/[#\?]/g,Ga=/[#\?@]/g,No=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&Qu(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Fn.prototype,i.add=function(l,f){Et(this),this.i=null,l=ln(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function wn(l,f){Et(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return Et(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(g,E){g.forEach(function(x){l.call(f,x,E,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const x=l[E];for(let U=0;U<x.length;U++)g.push(f[E])}return g},i.V=function(l){Et(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Et(this),this.i=null,l=ln(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,g){wn(l,f),0<g.length&&(l.i=null,l.g.set(ln(l,f),X(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var x=U;Q[E]!==""&&(x+="="+encodeURIComponent(String(Q[E]))),l.push(x)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function bn(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(g,E){var x=E.toLowerCase();E!=x&&(wn(this,E),Lr(this,x,g))},l)),l.j=f}function Yu(l,f){const g=new gi;if(m.Image){const E=new Image;E.onload=z(zt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=z(zt,g,"TestLoadImage: error",!1,f,E),E.onabort=z(zt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(zt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Qa(l,f){const g=new gi,E=new AbortController,x=setTimeout(()=>{E.abort(),zt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(x),U.ok?zt(g,"TestPingServer: ok",!0,f):zt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(x),zt(g,"TestPingServer: error",!1,f)})}function zt(l,f,g,E,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),E(g)}catch{}}function Xu(){this.g=new wo}function Ya(l,f,g){const E=g||"";try{Nr(l,function(x,U){let Q=x;v(x)&&(Q=vo(x)),f.push(E+U+"="+encodeURIComponent(Q))})}catch(x){throw f.push(E+"type="+encodeURIComponent("_badmap")),x}}function sr(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(sr,pi),sr.prototype.g=function(){return new Ii(this.l,this.j)},sr.prototype.i=function(l){return function(){return l}}({});function Ii(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(Ii,at),i=Ii.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xa(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xa(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?In(this):Sn(this),this.readyState==3&&Xa(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,In(this))},i.Qa=function(l){this.g&&(this.response=l,In(this))},i.ga=function(){this.g&&In(this)};function In(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function or(l){let f="";return Ae(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Mr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=or(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):je(l,f,g))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Ke,at);var Ju=/^https?$/i,Do=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?ns(this.o):ns(vn),this.g.onreadystatechange=F(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Si(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var x in E)g.set(x,E[x]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),x=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Do,f,void 0))||E||x||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Q]of g)this.g.setRequestHeader(U,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Si(this,U)}};function Si(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,fs(l),Jt(l)}function fs(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),Jt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jt(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Vo(this):this.bb())},i.bb=function(){Vo(this)};function Vo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)go(l.Ea,0,l);else if(lt(l,"readystatechange"),$t(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Q===0){var x=String(l.D).match(wi)[1]||null;!x&&m.self&&m.self.location&&(x=m.self.location.protocol.slice(0,-1)),E=!Ju.test(x?x.toLowerCase():"")}g=E}if(g)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",fs(l)}}finally{Jt(l)}}}}function Jt(l,f){if(l.g){ps(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{g.onreadystatechange=E}catch{}}}function ps(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Eo(f)}};function Oo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ms(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ve(l[E]))continue;var g=D(l[E]);const x=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[x]||[];f[x]=U,U.push(g)}C(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function xo(l){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,l),this.cb=Un("retryDelaySeedMs",1e4,l),this.Wa=Un("forwardChannelMaxRetries",2,l),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(l&&l.concurrentRequestLimit),this.Da=new Xu,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=xo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=tl(this,null,this.W),jn(this)};function wt(l){if(gs(l),l.G==3){var f=l.U++,g=Xt(l.I);if(je(g,"SID",l.K),je(g,"RID",f),je(g,"TYPE","terminate"),ar(l,g),f=new En(l,l.j,f),f.L=2,f.v=Or(Xt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=nl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ze(f)}el(l)}function An(l){l.g&&(Lo(l),l.g.cancel(),l.g=null)}function gs(l){An(l),l.u&&(m.clearTimeout(l.u),l.u=null),vs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function jn(l){if(!Yt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),le.add(f,l),l.B=0}}function Zu(l,f){return za(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=yn(F(l.Ga,l,f),Za(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new En(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(x.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Fr(this,x,f),g=Xt(this.I),je(g,"RID",l),je(g,"CVER",22),this.D&&je(g,"X-HTTP-Session-Id",this.D),ar(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(or(U)))+"&"+f:this.m&&Mr(g,this.m,U)),Co(this.h,x),this.Ua&&je(g,"TYPE","init"),this.P?(je(g,"$req",f),je(g,"SID","null"),x.T=!0,us(x,g,null)):us(x,g,f),this.G=2}}else this.G==3&&(l?ys(this,l):this.i.length==0||Yt(this.h)||ys(this))};function ys(l,f){var g;f?g=f.l:g=l.U++;const E=Xt(l.I);je(E,"SID",l.K),je(E,"RID",g),je(E,"AID",l.T),ar(l,E),l.m&&l.o&&Mr(E,l.m,l.o),g=new En(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Co(l.h,g),us(g,E,f)}function ar(l,f){l.H&&Ae(l.H,function(g,E){je(f,E,g)}),l.l&&Nr({},function(g,E){je(f,E,g)})}function Fr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?F(l.l.Na,l.l,l):null;e:{var x=l.i;let U=-1;for(;;){const Q=["count="+g];U==-1?0<g?(U=x[0].g,Q.push("ofs="+U)):U=0:Q.push("ofs="+U);let Fe=!0;for(let ut=0;ut<g;ut++){let Ne=x[ut].g;const mt=x[ut].map;if(Ne-=U,0>Ne)U=Math.max(0,x[ut].g-100),Fe=!1;else try{Ya(mt,Q,"req"+Ne+"_")}catch{E&&E(mt)}}if(Fe){E=Q.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Ai(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),le.add(f,l),l.v=0}}function _s(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=yn(F(l.Fa,l),Za(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=yn(F(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),An(this),Ja(this))};function Lo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Ja(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Xt(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),ar(l,f),l.m&&l.o&&Mr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Or(Xt(f)),g.m=null,g.P=!0,ko(g,l)}i.Za=function(){this.C!=null&&(this.C=null,An(this),_s(this),tt(19))};function vs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Es(l,f){var g=null;if(l.g==f){vs(l),Lo(l),l.g=null;var E=2}else if(bt(l.h,f))g=f.D,$a(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var x=l.B;E=mi(),lt(E,new ss(E,g)),jn(l)}else Ai(l);else if(x=f.s,x==3||x==0&&0<f.X||!(E==1&&Zu(l,f)||E==2&&_s(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),x){case 1:lr(l,5);break;case 4:lr(l,10);break;case 3:lr(l,6);break;default:lr(l,2)}}}function Za(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function lr(l,f){if(l.j.info("Error code "+f),f==2){var g=F(l.fb,l),E=l.Xa;const x=!E;E=new ir(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ti(E,"https"),Or(E),x?Yu(E.toString(),g):Qa(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),el(l),gs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function el(l){if(l.G=0,l.ka=[],l.l){const f=Ha(l.h);(f.length!=0||l.i.length!=0)&&(j(l.ka,f),j(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function tl(l,f,g){var E=g instanceof ir?Xt(g):new ir(g);if(E.g!="")f&&(E.g=f+"."+E.g),Dr(E,E.s);else{var x=m.location;E=x.protocol,f=f?f+"."+x.hostname:x.hostname,x=+x.port;var U=new ir(null);E&&Ti(U,E),f&&(U.g=f),x&&Dr(U,x),g&&(U.l=g),E=U}return g=l.D,f=l.ya,g&&f&&je(E,g,f),je(E,"VER",l.la),ar(l,E),E}function nl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new sr({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mo(){}i=Mo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ws(){}ws.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){at.call(this),this.g=new xo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ve(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}Y(Ut,at),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){wt(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=vo(l),l=g);f.i.push(new Ba(f.Ya++,l)),f.G==3&&jn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,Ut.aa.N.call(this)};function rl(l){Ln.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(rl,Ln);function il(){is.call(this),this.status=1}Y(il,is);function Bn(l){this.g=l}Y(Bn,Mo),Bn.prototype.ua=function(){lt(this.g,"a")},Bn.prototype.ta=function(l){lt(this.g,new rl(l))},Bn.prototype.sa=function(l){lt(this.g,new il)},Bn.prototype.ra=function(){lt(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,py=function(){return new ws},fy=function(){return mi()},dy=Mn,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,lu=as,Fa.COMPLETE="complete",hy=Fa,rs.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",at.prototype.listen=at.prototype.K,la=rs,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,cy=Ke}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});const Fm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new id("@firebase/firestore");function aa(){return qi.logLevel}function ie(i,...e){if(qi.logLevel<=Pe.DEBUG){const t=e.map(_d);qi.debug(`Firestore (${ao}): ${i}`,...t)}}function Sr(i,...e){if(qi.logLevel<=Pe.ERROR){const t=e.map(_d);qi.error(`Firestore (${ao}): ${i}`,...t)}}function Js(i,...e){if(qi.logLevel<=Pe.WARN){const t=e.map(_d);qi.warn(`Firestore (${ao}): ${i}`,...t)}}function _d(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(i="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+i;throw Sr(e),new Error(e)}function be(i,e){i||ge()}function _e(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class RT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kT{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new oi,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new oi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new my(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Lt(e)}}class PT{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CT{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new PT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const a=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>a(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?a(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new NT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=VT(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<t&&(s+=e.charAt(a[u]%e.length))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function Zs(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new ft(0,0))}static max(){return new ye(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(),s===void 0?s=e.length-t:s>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return _a.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _a?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const u=e.get(a),h=t.get(a);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qe extends _a{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const OT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends _a{construct(e,t,s){return new At(e,t,s)}static isValidIdentifier(e){return OT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const t=[];let s="",a=0;const u=()=>{if(s.length===0)throw new ae(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ae(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ae(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new ae(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(t)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}function xT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=ye.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new li(a,he.empty(),e)}function LT(i){return new li(i.readTime,i.key,-1)}class li{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new li(ye.min(),he.empty(),-1)}static max(){return new li(ye.max(),he.empty(),-1)}}function MT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==FT)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,s)=>{t(e)})}static reject(e){return new W((t,s)=>{s(e)})}static waitFor(e){return new W((t,s)=>{let a=0,u=0,h=!1;e.forEach(m=>{++a,m.next(()=>{++u,h&&u===a&&t()},y=>s(y))}),h=!0,u===a&&t()})}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next(a=>a?W.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,u)=>{s.push(t.call(this,a,u))}),this.waitFor(s)}static mapArray(e,t){return new W((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>a(w))}})}static doWhile(e,t){return new W((s,a)=>{const u=()=>{e()===!0?t().next(()=>{u()},a):s()};u()})}}function UT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Da(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class vd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vd.oe=-1;function xu(i){return i==null}function wu(i){return i===0&&1/i==-1/0}function jT(i){return typeof i=="number"&&Number.isInteger(i)&&!wu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function lo(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function yy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,a,u){this.key=e,this.value=t,this.color=s??St.RED,this.left=a??St.EMPTY,this.right=u??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,u){return new St(e??this.key,t??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,t,s),null):u===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return St.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,s,a,u){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Um(this.data.getIterator())}getIteratorFrom(e){return new Um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class Um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Rt(At.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class _y extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new _y("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const BT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(i){if(be(!!i),typeof i=="string"){let e=0;const t=BT.exec(i);if(be(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ki(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wd(i){const e=i.mapValue.fields.__previous_value__;return Ed(e)?wd(e):e}function va(i){const e=ui(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,s,a,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}class Ea{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={mapValue:{}};function Gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ed(i)?4:HT(i)?9007199254740991:$T(i)?10:11:ge()}function Xn(i,e){if(i===e)return!0;const t=Gi(i);if(t!==Gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return va(i).isEqual(va(e));case 3:return function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=ui(a.timestampValue),m=ui(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,u){return Ki(a.bytesValue).isEqual(Ki(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,u){return rt(a.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(a.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(a,u){if("integerValue"in a&&"integerValue"in u)return rt(a.integerValue)===rt(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=rt(a.doubleValue),m=rt(u.doubleValue);return h===m?wu(h)===wu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return Zs(i.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(bm(h)!==bm(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Xn(h[y],m[y])))return!1;return!0}(i,e);default:return ge()}}function wa(i,e){return(i.values||[]).find(t=>Xn(t,e))!==void 0}function eo(i,e){if(i===e)return 0;const t=Gi(i),s=Gi(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return jm(i.timestampValue,e.timestampValue);case 4:return jm(va(i),va(e));case 5:return xe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=Ki(u),y=Ki(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=xe(m[v],y[v]);if(w!==0)return w}return xe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=xe(rt(u.latitude),rt(h.latitude));return m!==0?m:xe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Bm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const N=u.fields||{},F=h.fields||{},z=(m=N.value)===null||m===void 0?void 0:m.arrayValue,Y=(y=F.value)===null||y===void 0?void 0:y.arrayValue,X=xe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=Y==null?void 0:Y.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:Bm(z,Y)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===tu.mapValue&&h===tu.mapValue)return 0;if(u===tu.mapValue)return 1;if(h===tu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let N=0;N<y.length&&N<w.length;++N){const F=xe(y[N],w[N]);if(F!==0)return F;const z=eo(m[y[N]],v[w[N]]);if(z!==0)return z}return xe(y.length,w.length)}(i.mapValue,e.mapValue);default:throw ge()}}function jm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=ui(i),s=ui(e),a=xe(t.seconds,s.seconds);return a!==0?a:xe(t.nanos,s.nanos)}function Bm(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const u=eo(t[a],s[a]);if(u)return u}return xe(t.length,s.length)}function to(i){return Hh(i)}function Hh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=ui(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Ki(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const u of t.values||[])a?a=!1:s+=",",s+=Hh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${Hh(t.fields[h])}`;return a+"}"}(i.mapValue):ge()}function Wh(i){return!!i&&"integerValue"in i}function Td(i){return!!i&&"arrayValue"in i}function zm(i){return!!i&&"nullValue"in i}function $m(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function uu(i){return!!i&&"mapValue"in i}function $T(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function da(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return lo(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=da(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=da(i.arrayValue.values[t]);return e}return Object.assign({},i)}function HT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(t)}setAll(e){let t=At.emptyPath(),s={},a=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=da(h):a.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,a)}delete(e){const t=this.field(e.popLast());uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];uu(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){lo(t,(a,u)=>e[a]=u);for(const a of s)delete e[a]}clone(){return new gn(da(this.value))}}function vy(i){const e=[];return lo(i.fields,(t,s)=>{const a=new At([t]);if(uu(s)){const u=vy(s.mapValue).fields;if(u.length===0)e.push(a);else for(const h of u)e.push(a.child(h))}else e.push(a)}),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,a,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,ye.min(),ye.min(),ye.min(),gn.empty(),0)}static newFoundDocument(e,t,s,a){return new Mt(e,1,t,ye.min(),s,a,0)}static newNoDocument(e,t){return new Mt(e,2,t,ye.min(),ye.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,ye.min(),ye.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tu{constructor(e,t){this.position=e,this.inclusive=t}}function Hm(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const u=e[a],h=i.position[a];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Xn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Iu{constructor(e,t="asc"){this.field=e,this.dir=t}}function WT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Ey{}class dt extends Ey{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new KT(e,t,s):t==="array-contains"?new YT(e,s):t==="in"?new XT(e,s):t==="not-in"?new JT(e,s):t==="array-contains-any"?new ZT(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new GT(e,s):new QT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(eo(t,this.value)):t!==null&&Gi(this.value)===Gi(t)&&this.matchesComparison(eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends Ey{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Jn(e,t)}matches(e){return wy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wy(i){return i.op==="and"}function Ty(i){return qT(i)&&wy(i)}function qT(i){for(const e of i.filters)if(e instanceof Jn)return!1;return!0}function qh(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+to(i.value);if(Ty(i))return i.filters.map(e=>qh(e)).join(",");{const e=i.filters.map(t=>qh(t)).join(",");return`${i.op}(${e})`}}function Iy(i,e){return i instanceof dt?function(s,a){return a instanceof dt&&s.op===a.op&&s.field.isEqual(a.field)&&Xn(s.value,a.value)}(i,e):i instanceof Jn?function(s,a){return a instanceof Jn&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((u,h,m)=>u&&Iy(h,a.filters[m]),!0):!1}(i,e):void ge()}function Sy(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${to(t.value)}`}(i):i instanceof Jn?function(t){return t.op.toString()+" {"+t.getFilters().map(Sy).join(" ,")+"}"}(i):"Filter"}class KT extends dt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class GT extends dt{constructor(e,t){super(e,"in",t),this.keys=Ay("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class QT extends dt{constructor(e,t){super(e,"not-in",t),this.keys=Ay("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ay(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class YT extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Td(t)&&wa(t.arrayValue,this.value)}}class XT extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wa(this.value.arrayValue,t)}}class JT extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wa(this.value.arrayValue,t)}}class ZT extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Td(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>wa(this.value.arrayValue,s))}}/**
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
 */class eI{constructor(e,t=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function qm(i,e=null,t=[],s=[],a=null,u=null,h=null){return new eI(i,e,t,s,a,u,h)}function Id(i){const e=_e(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>qh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),xu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>to(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>to(s)).join(",")),e.ue=t}return e.ue}function Sd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!WT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Iy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Wm(i.startAt,e.startAt)&&Wm(i.endAt,e.endAt)}function Kh(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t=null,s=[],a=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tI(i,e,t,s,a,u,h,m){return new Lu(i,e,t,s,a,u,h,m)}function Ry(i){return new Lu(i)}function Km(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function nI(i){return i.collectionGroup!==null}function fa(i){const e=_e(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Rt(At.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Iu(u,s))}),t.has(At.keyField().canonicalString())||e.ce.push(new Iu(At.keyField(),s))}return e.ce}function Kn(i){const e=_e(i);return e.le||(e.le=rI(e,fa(i))),e.le}function rI(i,e){if(i.limitType==="F")return qm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const u=a.dir==="desc"?"asc":"desc";return new Iu(a.field,u)});const t=i.endAt?new Tu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Tu(i.startAt.position,i.startAt.inclusive):null;return qm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Gh(i,e,t){return new Lu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Mu(i,e){return Sd(Kn(i),Kn(e))&&i.limitType===e.limitType}function ky(i){return`${Id(Kn(i))}|lt:${i.limitType}`}function $s(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Sy(a)).join(", ")}]`),xu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>to(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>to(a)).join(",")),`Target(${s})`}(Kn(i))}; limitType=${i.limitType})`}function Fu(i,e){return e.isFoundDocument()&&function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,a){for(const u of fa(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(h,m,y){const v=Hm(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,fa(s),a)||s.endAt&&!function(h,m,y){const v=Hm(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,fa(s),a))}(i,e)}function iI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Py(i){return(e,t)=>{let s=!1;for(const a of fa(i)){const u=sI(a,e,t);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function sI(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?eo(y,v):ge()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){lo(this.inner,(t,s)=>{for(const[a,u]of s)e(a,u)})}isEmpty(){return yy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new Je(he.comparator);function Ar(){return oI}const Cy=new Je(he.comparator);function ua(...i){let e=Cy;for(const t of i)e=e.insert(t.key,t);return e}function Ny(i){let e=Cy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Bi(){return pa()}function Dy(){return pa()}function pa(){return new uo(i=>i.toString(),(i,e)=>i.isEqual(e))}const aI=new Je(he.comparator),lI=new Rt(he.comparator);function Re(...i){let e=lI;for(const t of i)e=e.add(t);return e}const uI=new Rt(xe);function cI(){return uI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function Vy(i){return{integerValue:""+i}}function hI(i,e){return jT(e)?Vy(e):Ad(i,e)}/**
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
 */class bu{constructor(){this._=void 0}}function dI(i,e,t){return i instanceof Su?function(a,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&Ed(u)&&(u=wd(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Ta?xy(i,e):i instanceof Ia?Ly(i,e):function(a,u){const h=Oy(a,u),m=Gm(h)+Gm(a.Pe);return Wh(h)&&Wh(a.Pe)?Vy(m):Ad(a.serializer,m)}(i,e)}function fI(i,e,t){return i instanceof Ta?xy(i,e):i instanceof Ia?Ly(i,e):t}function Oy(i,e){return i instanceof Au?function(s){return Wh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Su extends bu{}class Ta extends bu{constructor(e){super(),this.elements=e}}function xy(i,e){const t=My(e);for(const s of i.elements)t.some(a=>Xn(a,s))||t.push(s);return{arrayValue:{values:t}}}class Ia extends bu{constructor(e){super(),this.elements=e}}function Ly(i,e){let t=My(e);for(const s of i.elements)t=t.filter(a=>!Xn(a,s));return{arrayValue:{values:t}}}class Au extends bu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Gm(i){return rt(i.integerValue||i.doubleValue)}function My(i){return Td(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function pI(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Ta&&a instanceof Ta||s instanceof Ia&&a instanceof Ia?Zs(s.elements,a.elements,Xn):s instanceof Au&&a instanceof Au?Xn(s.Pe,a.Pe):s instanceof Su&&a instanceof Su}(i.transform,e.transform)}class mI{constructor(e,t){this.version=e,this.transformResults=t}}class Gn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Uu{}function Fy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Rd(i.key,Gn.none()):new Va(i.key,i.data,Gn.none());{const t=i.data,s=gn.empty();let a=new Rt(At.comparator);for(let u of e.fields)if(!a.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new Qi(i.key,s,new Vn(a.toArray()),Gn.none())}}function gI(i,e,t){i instanceof Va?function(a,u,h){const m=a.value.clone(),y=Ym(a.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Qi?function(a,u,h){if(!cu(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Ym(a.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(by(a)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ma(i,e,t,s){return i instanceof Va?function(u,h,m,y){if(!cu(u.precondition,h))return m;const v=u.value.clone(),w=Xm(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Qi?function(u,h,m,y){if(!cu(u.precondition,h))return m;const v=Xm(u.fieldTransforms,y,h),w=h.data;return w.setAll(by(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(N=>N.field))}(i,e,t,s):function(u,h,m){return cu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function yI(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),u=Oy(s.transform,a||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function Qm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Zs(s,a,(u,h)=>pI(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Va extends Uu{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Qi extends Uu{constructor(e,t,s,a,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function by(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Ym(i,e,t){const s=new Map;be(i.length===t.length);for(let a=0;a<t.length;a++){const u=i[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,fI(h,m,t[a]))}return s}function Xm(i,e,t){const s=new Map;for(const a of i){const u=a.transform,h=t.data.field(a.field);s.set(a.field,dI(u,h,e))}return s}class Rd extends Uu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _I extends Uu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&gI(u,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ma(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ma(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Dy();return this.mutations.forEach(a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(a.key)?null:m;const y=Fy(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(ye.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(t,s)=>Qm(t,s))&&Zs(this.baseMutations,e.baseMutations,(t,s)=>Qm(t,s))}}class kd{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){be(e.mutations.length===s.length);let a=function(){return aI}();const u=e.mutations;for(let h=0;h<u.length;h++)a=a.insert(u[h].key,s[h].version);return new kd(e,t,s,a)}}/**
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
 */class EI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,De;function TI(i){switch(i){default:return ge();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Uy(i){if(i===void 0)return Sr("GRPC error has no .code"),q.UNKNOWN;switch(i){case ot.OK:return q.OK;case ot.CANCELLED:return q.CANCELLED;case ot.UNKNOWN:return q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return q.INTERNAL;case ot.UNAVAILABLE:return q.UNAVAILABLE;case ot.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ot.NOT_FOUND:return q.NOT_FOUND;case ot.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ot.ABORTED:return q.ABORTED;case ot.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ot.DATA_LOSS:return q.DATA_LOSS;default:return ge()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function II(){return new TextEncoder}/**
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
 */const SI=new $i([4294967295,4294967295],0);function Jm(i){const e=II().encode(i),t=new uy;return t.update(e),new Uint8Array(t.digest())}function Zm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new $i([t,s],0),new $i([a,u],0)]}class Pd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ca(`Invalid padding: ${t}`);if(s<0)throw new ca(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ca(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ca(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=$i.fromNumber(this.Ie)}Ee(e,t,s){let a=e.add(t.multiply($i.fromNumber(s)));return a.compare(SI)===1&&(a=new $i([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Jm(e),[s,a]=Zm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,a,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Pd(u,a,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ie===0)return;const t=Jm(e),[s,a]=Zm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,a,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,s,a,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ju(ye.min(),a,new Je(xe),Ar(),Re())}}class Oa{constructor(e,t,s,a,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Oa(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,s,a){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=a}}class jy{constructor(e,t){this.targetId=e,this.me=t}}class By{constructor(e,t,s=kt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class eg{constructor(){this.fe=0,this.ge=ng(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ge()}}),new Oa(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=ng()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=tg(),this.Qe=new Je(xe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,a)=>{this.ze(a)&&t(a)})}He(e){const t=e.targetId,s=e.me.count,a=this.Je(t);if(a){const u=a.target;if(Kh(u))if(s===0){const h=new he(u.path);this.Ue(t,h,Mt.newNoDocument(h,ye.min()))}else be(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),y=m?this.Xe(m,e,h):1;if(y!==0){this.je(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=t;let h,m;try{h=Ki(s).toUint8Array()}catch(y){if(y instanceof _y)return Js("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Pd(h,a,u)}catch(y){return Js(y instanceof ca?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let a=0;return s.forEach(u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),a++)}),a}rt(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Je(h);if(m){if(u.current&&Kh(m.target)){const y=new he(m.target.path);this.ke.get(y)!==null||this.it(h,y)||this.Ue(h,y,Mt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Re();this.qe.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Je(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const a=new ju(e,t,this.Qe,this.ke,s);return this.ke=Ar(),this.qe=tg(),this.Qe=new Je(xe),a}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const a=this.Ge(e);this.it(e,t)?a.Fe(t,1):a.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new eg,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Rt(xe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new eg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function tg(){return new Je(he.comparator)}function ng(){return new Je(he.comparator)}const RI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PI={and:"AND",or:"OR"};class CI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qh(i,e){return i.useProto3Json||xu(e)?e:{value:e}}function Ru(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function NI(i,e){return Ru(i,e.toTimestamp())}function Qn(i){return be(!!i),ye.fromTimestamp(function(t){const s=ui(t);return new ft(s.seconds,s.nanos)}(i))}function Cd(i,e){return Yh(i,e).canonicalString()}function Yh(i,e){const t=function(a){return new Qe(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function $y(i){const e=Qe.fromString(i);return be(Gy(e)),e}function Xh(i,e){return Cd(i.databaseId,e.path)}function Dh(i,e){const t=$y(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(Wy(t))}function Hy(i,e){return Cd(i.databaseId,e)}function DI(i){const e=$y(i);return e.length===4?Qe.emptyPath():Wy(e)}function Jh(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Wy(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function rg(i,e,t){return{name:Xh(i,e),fields:t.value.mapValue.fields}}function VI(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),kt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?q.UNKNOWN:Uy(v.code);return new ae(w,v.message||"")}(h);t=new By(s,a,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Dh(i,s.document.name),u=Qn(s.document.updateTime),h=s.document.createTime?Qn(s.document.createTime):ye.min(),m=new gn({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(a,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new hu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Dh(i,s.document),u=s.readTime?Qn(s.readTime):ye.min(),h=Mt.newNoDocument(a,u),m=s.removedTargetIds||[];t=new hu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Dh(i,s.document),u=s.removedTargetIds||[];t=new hu([],u,a,null)}else{if(!("filter"in e))return ge();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,h=new wI(a,u),m=s.targetId;t=new jy(m,h)}}return t}function OI(i,e){let t;if(e instanceof Va)t={update:rg(i,e.key,e.value)};else if(e instanceof Rd)t={delete:Xh(i,e.key)};else if(e instanceof Qi)t={update:rg(i,e.key,e.data),updateMask:zI(e.fieldMask)};else{if(!(e instanceof _I))return ge();t={verify:Xh(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Su)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ta)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ia)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Au)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw ge()}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,u){return u.updateTime!==void 0?{updateTime:NI(a,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ge()}(i,e.precondition)),t}function xI(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(a,u){let h=a.updateTime?Qn(a.updateTime):Qn(u);return h.isEqual(ye.min())&&(h=Qn(u)),new mI(h,a.transformResults||[])}(t,e))):[]}function LI(i,e){return{documents:[Hy(i,e.path)]}}function MI(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Hy(i,a);const u=function(v){if(v.length!==0)return Ky(Jn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(F){return{field:Hs(F.field),direction:UI(F.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Qh(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{_t:t,parent:a}}function FI(i){let e=DI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(N){const F=qy(N);return F instanceof Jn&&Ty(F)?F.getFilters():[F]}(t.where));let h=[];t.orderBy&&(h=function(N){return N.map(F=>function(Y){return new Iu(Ws(Y.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Y.direction))}(F))}(t.orderBy));let m=null;t.limit&&(m=function(N){let F;return F=typeof N=="object"?N.value:N,xu(F)?null:F}(t.limit));let y=null;t.startAt&&(y=function(N){const F=!!N.before,z=N.values||[];return new Tu(z,F)}(t.startAt));let v=null;return t.endAt&&(v=function(N){const F=!N.before,z=N.values||[];return new Tu(z,F)}(t.endAt)),tI(e,a,h,u,m,"F",y,v)}function bI(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qy(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ws(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ws(t.unaryFilter.field);return dt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ws(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ws(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(Ws(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Jn.create(t.compositeFilter.filters.map(s=>qy(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ge()}}(t.compositeFilter.op))}(i):ge()}function UI(i){return RI[i]}function jI(i){return kI[i]}function BI(i){return PI[i]}function Hs(i){return{fieldPath:i.canonicalString()}}function Ws(i){return At.fromServerFormat(i.fieldPath)}function Ky(i){return i instanceof dt?function(t){if(t.op==="=="){if($m(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NAN"}};if(zm(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($m(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NOT_NAN"}};if(zm(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(t.field),op:jI(t.op),value:t.value}}}(i):i instanceof Jn?function(t){const s=t.getFilters().map(a=>Ky(a));return s.length===1?s[0]:{compositeFilter:{op:BI(t.op),filters:s}}}(i):ge()}function zI(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gy(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,s,a,u=ye.min(),h=ye.min(),m=kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.ct=e}}function HI(i){const e=FI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Gh(e,e.limit,"L"):e}/**
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
 */class WI{constructor(){this.un=new qI}addToCollectionParentIndex(e,t){return this.un.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(li.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(li.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class qI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Rt(Qe.comparator),u=!a.has(s);return this.index[t]=a.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Rt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new no(0)}static kn(){return new no(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.changes=new uo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class GI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&ma(s.mutation,a,Vn.empty(),ft.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const a=Bi();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(u=>{let h=ua();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Bi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const a=[];return s.forEach(u=>{t.has(u)||a.push(u)}),this.documentOverlayCache.getOverlays(e,a).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,a){let u=Ar();const h=pa(),m=function(){return pa()}();return t.forEach((y,v)=>{const w=s.get(v.key);a.has(v.key)&&(w===void 0||w.mutation instanceof Qi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),ma(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var N;return m.set(v,new GI(w,(N=h.get(v))!==null&&N!==void 0?N:null))}),m))}recalculateAndSaveOverlays(e,t){const s=pa();let a=new Je((h,m)=>h-m),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Vn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const N=(a.get(m.batchId)||Re()).add(y);a=a.insert(m.batchId,N)})}).next(()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,N=Dy();w.forEach(F=>{if(!u.has(F)){const z=Fy(t.get(F),s.get(F));z!==null&&N.set(F,z),u=u.add(F)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,N))}return W.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-u.size):W.resolve(Bi());let m=-1,y=u;return h.next(v=>W.forEach(v,(w,N)=>(m<N.largestBatchId&&(m=N.largestBatchId),u.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next(F=>{y=y.insert(w,F)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Re())).next(w=>({batchId:m,changes:Ny(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let a=ua();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const u=t.collectionGroup;let h=ua();return this.indexManager.getCollectionParents(e,u).next(m=>W.forEach(m,y=>{const v=function(N,F){return new Lu(F,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next(w=>{w.forEach((N,F)=>{h=h.insert(N,F)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,a))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=ua();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&ma(w.mutation,v,Vn.empty(),ft.now()),Fu(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return W.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Qn(a.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(a){return{name:a.name,query:HI(a.bundledQuery),readTime:Qn(a.readTime)}}(t)),W.resolve()}}/**
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
 */class XI{constructor(){this.overlays=new Je(he.comparator),this.Ir=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Bi();return W.forEach(t,a=>this.getOverlay(e,a).next(u=>{u!==null&&s.set(a,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,u)=>{this.ht(e,t,u)}),W.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Ir.get(s);return a!==void 0&&(a.forEach(u=>this.overlays=this.overlays.remove(u)),this.Ir.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const a=Bi(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&a.set(y.getKey(),y)}return W.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Bi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Bi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=a)););return W.resolve(m)}ht(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.Ir.get(a.largestBatchId).delete(s.key);this.Ir.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new EI(t,s));let u=this.Ir.get(t);u===void 0&&(u=Re(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
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
 */class JI{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.Tr=new Rt(vt.Er),this.dr=new Rt(vt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new vt(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new he(new Qe([])),s=new vt(t,e),a=new vt(t,e+1),u=[];return this.dr.forEachInRange([s,a],h=>{this.Vr(h),u.push(h.key)}),u}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new he(new Qe([])),s=new vt(t,e),a=new vt(t,e+1);let u=Re();return this.dr.forEachInRange([s,a],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new vt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return he.comparator(e.key,t.key)||xe(e.wr,t.wr)}static Ar(e,t){return xe(e.wr,t.wr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Rt(vt.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vI(u,t,s,a);this.mutationQueue.push(h);for(const m of a)this.br=this.br.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.vr(s),u=a<0?0:a;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),a=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,a],h=>{const m=this.Dr(h.wr);u.push(m)}),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Rt(xe);return t.forEach(a=>{const u=new vt(a,0),h=new vt(a,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],m=>{s=s.add(m.wr)})}),W.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new vt(new he(u),0);let m=new Rt(xe);return this.br.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.wr)),!0)},h),W.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach(s=>{const a=this.Dr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){be(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return W.forEach(t.mutations,a=>{const u=new vt(a.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new vt(t,0),a=this.br.firstAfterOrEqual(s);return W.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.Mr=e,this.docs=function(){return new Je(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),u=a?a.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach(a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Mt.newInvalidDocument(a))}),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let u=Ar();const h=t.path,m=new he(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||MT(LT(w),s)<=0||(a.has(w.key)||Fu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,a){ge()}Or(e,t){return W.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new tS(this)}getSize(e){return W.resolve(this.size)}}class tS extends KI{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.cr.addEntry(e,a)):this.cr.removeEntry(s)}),W.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.persistence=e,this.Nr=new uo(t=>Id(t),Sd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nd,this.targetCount=0,this.kr=no.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,a)=>t(a)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),W.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new no(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Kn(t),W.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let a=0;const u=[];return this.Nr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),W.waitFor(u).next(()=>a)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const a=this.persistence.referenceDelegate,u=[];return a&&t.forEach(h=>{u.push(a.markPotentiallyOrphaned(e,h))}),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.qr={},this.overlays={},this.Qr=new vd(0),this.Kr=!1,this.Kr=!0,this.$r=new JI,this.referenceDelegate=e(this),this.Ur=new nS(this),this.indexManager=new WI,this.remoteDocumentCache=function(a){return new eS(a)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new $I(t),this.Gr=new YI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new ZI(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const a=new iS(this.Qr.next());return this.referenceDelegate.zr(),s(a).next(u=>this.referenceDelegate.jr(a).next(()=>u)).toPromise().then(u=>(a.raiseOnCommittedEvent(),u))}Hr(e,t){return W.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class iS extends bT{constructor(e){super(),this.currentSequenceNumber=e}}class Dd{constructor(e){this.persistence=e,this.Jr=new Nd,this.Yr=null}static Zr(e){return new Dd(e)}get Xr(){if(this.Yr)return this.Yr;throw ge()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),W.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(a=>this.Xr.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(u=>this.Xr.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,s=>{const a=he.fromPath(s);return this.ei(e,a).next(u=>{u||t.removeEntry(a,ye.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return W.or([()=>W.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=a}static Wi(e,t){let s=Re(),a=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new Vd(e,t.fromCache,s,a)}}/**
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
 */class sS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return aE()?8:UT(Ft())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,a){const u={result:null};return this.Yi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.Zi(e,t,a,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new sS;return this.Xi(e,t,h).next(m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)})}).next(()=>u.result)}es(e,t,s,a){return s.documentReadCount<this.ji?(aa()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",$s(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(aa()<=Pe.DEBUG&&ie("QueryEngine","Query:",$s(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.Hi*a?(aa()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",$s(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(t))):W.resolve())}Yi(e,t){if(Km(t))return W.resolve(null);let s=Kn(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Gh(t,null,"F"),s=Kn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Re(...u);return this.Ji.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.ts(t,m);return this.ns(t,v,h,y.readTime)?this.Yi(e,Gh(t,null,"F")):this.rs(e,v,t,y)}))})))}Zi(e,t,s,a){return Km(t)||a.isEqual(ye.min())?W.resolve(null):this.Ji.getDocuments(e,s).next(u=>{const h=this.ts(t,u);return this.ns(t,h,s,a)?W.resolve(null):(aa()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),$s(t)),this.rs(e,h,t,xT(a,-1)).next(m=>m))})}ts(e,t){let s=new Rt(Py(e));return t.forEach((a,u)=>{Fu(e,u)&&(s=s.add(u))}),s}ns(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}Xi(e,t,s){return aa()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",$s(t)),this.Ji.getDocumentsMatchingQuery(e,t,li.min(),s)}rs(e,t,s,a){return this.Ji.getDocumentsMatchingQuery(e,s,a).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,s,a){this.persistence=e,this.ss=t,this.serializer=a,this.os=new Je(xe),this._s=new uo(u=>Id(u),Sd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function lS(i,e,t,s){return new aS(i,e,t,s)}async function Qy(i,e){const t=_e(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(u=>(a=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Re();for(const v of a){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({hs:v,removedBatchIds:h,addedBatchIds:m}))})})}function uS(i,e){const t=_e(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const N=v.batch,F=N.keys();let z=W.resolve();return F.forEach(Y=>{z=z.next(()=>w.getEntry(y,Y)).next(X=>{const j=v.docVersions.get(Y);be(j!==null),X.version.compareTo(j)<0&&(N.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),w.addEntry(X)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(y,N))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Yy(i){const e=_e(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function cS(i,e){const t=_e(i),s=e.snapshotVersion;let a=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});a=t.os;const m=[];e.targetChanges.forEach((w,N)=>{const F=a.get(N);if(!F)return;m.push(t.Ur.removeMatchingKeys(u,w.removedDocuments,N).next(()=>t.Ur.addMatchingKeys(u,w.addedDocuments,N)));let z=F.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(N)!==null?z=z.withResumeToken(kt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),a=a.insert(N,z),function(X,j,de){return X.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=3e8?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0}(F,z,w)&&m.push(t.Ur.updateTargetData(u,z))});let y=Ar(),v=Re();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(hS(u,h,e.documentUpdates).next(w=>{y=w.Ps,v=w.Is})),!s.isEqual(ye.min())){const w=t.Ur.getLastRemoteSnapshotVersion(u).next(N=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return W.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.os=a,u))}function hS(i,e,t){let s=Re(),a=Re();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Ar();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(ye.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Ps:h,Is:a}})}function dS(i,e){const t=_e(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function fS(i,e){const t=_e(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ur.getTargetData(s,e).next(u=>u?(a=u,W.resolve(a)):t.Ur.allocateTargetId(s).next(h=>(a=new ni(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.os.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function Zh(i,e,t){const s=_e(i),a=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,a))}catch(h){if(!Da(h))throw h;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(a.target)}function ig(i,e,t){const s=_e(i);let a=ye.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const N=_e(y),F=N._s.get(w);return F!==void 0?W.resolve(N.os.get(F)):N.Ur.getTargetData(v,w)}(s,h,Kn(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.ss.getDocumentsMatchingQuery(h,e,t?a:ye.min(),t?u:Re())).next(m=>(pS(s,iI(e),m),{documents:m,Ts:u})))}function pS(i,e,t){let s=i.us.get(e)||ye.min();t.forEach((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.us.set(e,s)}class sg{constructor(){this.activeTargetIds=cI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mS{constructor(){this.so=new sg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gS{_o(e){}shutdown(){}}/**
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
 */class og{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nu=null;function Vh(){return nu===null?nu=function(){return 268435456+Math.round(2147483648*Math.random())}():nu++,"0x"+nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class vS extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${a}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${u}`}get Fo(){return!1}Mo(t,s,a,u,h){const m=Vh(),y=this.xo(t,s.toUriEncodedString());ie("RestConnection",`Sending RPC '${t}' ${m}:`,y,a);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,y,v,a).then(w=>(ie("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw Js("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",a),w})}Lo(t,s,a,u,h,m){return this.Mo(t,s,a,u,h)}Oo(t,s,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),a&&a.headers.forEach((u,h)=>t[h]=u)}xo(t,s){const a=yS[t];return`${this.Do}/v1/${s}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,a){const u=Vh();return new Promise((h,m)=>{const y=new cy;y.setWithCredentials(!0),y.listenOnce(hy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case lu.NO_ERROR:const w=y.getResponseJson();ie(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case lu.TIMEOUT:ie(xt,`RPC '${e}' ${u} timed out`),m(new ae(q.DEADLINE_EXCEEDED,"Request time out"));break;case lu.HTTP_ERROR:const N=y.getStatus();if(ie(xt,`RPC '${e}' ${u} failed with status:`,N,"response text:",y.getResponseText()),N>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const z=F==null?void 0:F.error;if(z&&z.status&&z.message){const Y=function(j){const de=j.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(de)>=0?de:q.UNKNOWN}(z.status);m(new ae(Y,z.message))}else m(new ae(q.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ae(q.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ie(xt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(a);ie(xt,`RPC '${e}' ${u} sending request:`,a),y.send(t,"POST",v,s,15)})}Bo(e,t,s){const a=Vh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=py(),m=fy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Oo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ie(xt,`Creating RPC '${e}' stream ${a}: ${w}`,y);const N=h.createWebChannel(w,y);let F=!1,z=!1;const Y=new _S({Io:j=>{z?ie(xt,`Not sending because RPC '${e}' stream ${a} is closed:`,j):(F||(ie(xt,`Opening RPC '${e}' stream ${a} transport.`),N.open(),F=!0),ie(xt,`RPC '${e}' stream ${a} sending:`,j),N.send(j))},To:()=>N.close()}),X=(j,de,ve)=>{j.listen(de,Ee=>{try{ve(Ee)}catch(Te){setTimeout(()=>{throw Te},0)}})};return X(N,la.EventType.OPEN,()=>{z||(ie(xt,`RPC '${e}' stream ${a} transport opened.`),Y.yo())}),X(N,la.EventType.CLOSE,()=>{z||(z=!0,ie(xt,`RPC '${e}' stream ${a} transport closed`),Y.So())}),X(N,la.EventType.ERROR,j=>{z||(z=!0,Js(xt,`RPC '${e}' stream ${a} transport errored:`,j),Y.So(new ae(q.UNAVAILABLE,"The operation could not be completed")))}),X(N,la.EventType.MESSAGE,j=>{var de;if(!z){const ve=j.data[0];be(!!ve);const Ee=ve,Te=Ee.error||((de=Ee[0])===null||de===void 0?void 0:de.error);if(Te){ie(xt,`RPC '${e}' stream ${a} received error:`,Te);const qe=Te.status;let Ae=function(A){const k=ot[A];if(k!==void 0)return Uy(k)}(qe),C=Te.message;Ae===void 0&&(Ae=q.INTERNAL,C="Unknown error status: "+qe+" with message "+Te.message),z=!0,Y.So(new ae(Ae,C)),N.close()}else ie(xt,`RPC '${e}' stream ${a} received:`,ve),Y.bo(ve)}}),X(m,dy.STAT_EVENT,j=>{j.stat===$h.PROXY?ie(xt,`RPC '${e}' stream ${a} detected buffering proxy`):j.stat===$h.NOPROXY&&ie(xt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{Y.wo()},0),Y}}function Oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(i){return new CI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t,s=1e3,a=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=a,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),a=Math.max(0,t-s);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,a,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,s,a,u,h,m,y){this.ui=e,this.Ho=s,this.Jo=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Xy(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.Yo===t&&this.P_(s,a)},s=>{e(()=>{const a=new ae(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(a)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(a=>{s(()=>this.I_(a))}),this.stream.onMessage(a=>{s(()=>++this.e_==1?this.E_(a):this.onNext(a))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ES extends Jy{constructor(e,t,s,a,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=VI(this.serializer,e),s=function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?Qn(h.readTime):ye.min()}(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=Jh(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=Kh(y)?{documents:LI(u,y)}:{query:MI(u,y)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=zy(u,h.resumeToken);const v=Qh(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Ru(u,h.snapshotVersion.toTimestamp());const v=Qh(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=bI(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=Jh(this.serializer),t.removeTarget=e,this.a_(t)}}class wS extends Jy{constructor(e,t,s,a,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=xI(e.writeResults,e.commitTime),s=Qn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=Jh(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>OI(this.serializer,s))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends class{}{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.y_=!1}w_(){if(this.y_)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Mo(e,Yh(t,s),a,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(q.UNKNOWN,u.toString())})}Lo(e,t,s,a,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Lo(e,Yh(t,s),a,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(q.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class IS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sr(t),this.D_=!1):ie("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,t,s,a,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o(h=>{s.enqueueAndForget(async()=>{Yi(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(y){const v=_e(y);v.L_.add(4),await xa(v),v.q_.set("Unknown"),v.L_.delete(4),await zu(v)}(this))})}),this.q_=new IS(s,a)}}async function zu(i){if(Yi(i))for(const e of i.B_)await e(!0)}async function xa(i){for(const e of i.B_)await e(!1)}function Zy(i,e){const t=_e(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Md(t)?Ld(t):co(t).r_()&&xd(t,e))}function Od(i,e){const t=_e(i),s=co(t);t.N_.delete(e),s.r_()&&e_(t,e),t.N_.size===0&&(s.r_()?s.o_():Yi(t)&&t.q_.set("Unknown"))}function xd(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}co(i).A_(e)}function e_(i,e){i.Q_.xe(e),co(i).R_(e)}function Ld(i){i.Q_=new AI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),co(i).start(),i.q_.v_()}function Md(i){return Yi(i)&&!co(i).n_()&&i.N_.size>0}function Yi(i){return _e(i).L_.size===0}function t_(i){i.Q_=void 0}async function AS(i){i.q_.set("Online")}async function RS(i){i.N_.forEach((e,t)=>{xd(i,e)})}async function kS(i,e){t_(i),Md(i)?(i.q_.M_(e),Ld(i)):i.q_.set("Unknown")}async function PS(i,e,t){if(i.q_.set("Online"),e instanceof By&&e.state===2&&e.cause)try{await async function(a,u){const h=u.cause;for(const m of u.targetIds)a.N_.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.N_.delete(m),a.Q_.removeTarget(m))}(i,e)}catch(s){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ku(i,s)}else if(e instanceof hu?i.Q_.Ke(e):e instanceof jy?i.Q_.He(e):i.Q_.We(e),!t.isEqual(ye.min()))try{const s=await Yy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.N_.get(v);w&&u.N_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.N_.get(y);if(!w)return;u.N_.set(y,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),e_(u,y);const N=new ni(w.target,y,v,w.sequenceNumber);xd(u,N)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ie("RemoteStore","Failed to raise snapshot:",s),await ku(i,s)}}async function ku(i,e,t){if(!Da(e))throw e;i.L_.add(1),await xa(i),i.q_.set("Offline"),t||(t=()=>Yy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await zu(i)})}function n_(i,e){return e().catch(t=>ku(i,t,e))}async function $u(i){const e=_e(i),t=ci(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;CS(e);)try{const a=await dS(e.localStore,s);if(a===null){e.O_.length===0&&t.o_();break}s=a.batchId,NS(e,a)}catch(a){await ku(e,a)}r_(e)&&i_(e)}function CS(i){return Yi(i)&&i.O_.length<10}function NS(i,e){i.O_.push(e);const t=ci(i);t.r_()&&t.V_&&t.m_(e.mutations)}function r_(i){return Yi(i)&&!ci(i).n_()&&i.O_.length>0}function i_(i){ci(i).start()}async function DS(i){ci(i).p_()}async function VS(i){const e=ci(i);for(const t of i.O_)e.m_(t.mutations)}async function OS(i,e,t){const s=i.O_.shift(),a=kd.from(s,e,t);await n_(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await $u(i)}async function xS(i,e){e&&ci(i).V_&&await async function(s,a){if(function(h){return TI(h)&&h!==q.ABORTED}(a.code)){const u=s.O_.shift();ci(s).s_(),await n_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,a)),await $u(s)}}(i,e),r_(i)&&i_(i)}async function ag(i,e){const t=_e(i);t.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const s=Yi(t);t.L_.add(3),await xa(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await zu(t)}async function LS(i,e){const t=_e(i);e?(t.L_.delete(2),await zu(t)):e||(t.L_.add(2),await xa(t),t.q_.set("Unknown"))}function co(i){return i.K_||(i.K_=function(t,s,a){const u=_e(t);return u.w_(),new ES(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)}(i.datastore,i.asyncQueue,{Eo:AS.bind(null,i),Ro:RS.bind(null,i),mo:kS.bind(null,i),d_:PS.bind(null,i)}),i.B_.push(async e=>{e?(i.K_.s_(),Md(i)?Ld(i):i.q_.set("Unknown")):(await i.K_.stop(),t_(i))})),i.K_}function ci(i){return i.U_||(i.U_=function(t,s,a){const u=_e(t);return u.w_(),new wS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DS.bind(null,i),mo:xS.bind(null,i),f_:VS.bind(null,i),g_:OS.bind(null,i)}),i.B_.push(async e=>{e?(i.U_.s_(),await $u(i)):(await i.U_.stop(),i.O_.length>0&&(ie("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,s,a,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,u){const h=Date.now()+s,m=new Fd(e,t,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bd(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),Da(i))return new ae(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=ua(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Qs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.W_=new Je(he.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ge():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}}class ro{constructor(e,t,s,a,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,a,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new ro(e,t,Qs.emptySet(t),h,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FS{constructor(){this.queries=ug(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const a=_e(t),u=a.queries;a.queries=ug(),u.forEach((h,m)=>{for(const y of m.j_)y.onError(s)})})(this,new ae(q.ABORTED,"Firestore shutting down"))}}function ug(){return new uo(i=>ky(i),Mu)}async function bS(i,e){const t=_e(i);let s=3;const a=e.query;let u=t.queries.get(a);u?!u.H_()&&e.J_()&&(s=2):(u=new MS,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(a,!0);break;case 1:u.z_=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=bd(h,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&Ud(t)}async function US(i,e){const t=_e(i),s=e.query;let a=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?a=e.J_()?0:1:!u.H_()&&e.J_()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function jS(i,e){const t=_e(i);let s=!1;for(const a of e){const u=a.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(a)&&(s=!0);h.z_=a}}s&&Ud(t)}function BS(i,e,t){const s=_e(i),a=s.queries.get(e);if(a)for(const u of a.j_)u.onError(t);s.queries.delete(e)}function Ud(i){i.Y_.forEach(e=>{e.next()})}var ed,cg;(cg=ed||(ed={})).ea="default",cg.Cache="cache";class zS{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new ro(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ed.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.key=e}}class o_{constructor(e){this.key=e}}class $S{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Re(),this.mutatedKeys=Re(),this.Aa=Py(e),this.Ra=new Qs(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new lg,a=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((w,N)=>{const F=a.get(w),z=Fu(this.query,N)?N:null,Y=!!F&&this.mutatedKeys.has(F.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let j=!1;F&&z?F.data.isEqual(z.data)?Y!==X&&(s.track({type:3,doc:z}),j=!0):this.ga(F,z)||(s.track({type:2,doc:z}),j=!0,(y&&this.Aa(z,y)>0||v&&this.Aa(z,v)<0)&&(m=!0)):!F&&z?(s.track({type:0,doc:z}),j=!0):F&&!z&&(s.track({type:1,doc:F}),j=!0,(y||v)&&(m=!0)),j&&(z?(h=h.add(z),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((w,N)=>function(z,Y){const X=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return X(z)-X(Y)}(w.type,N.type)||this.Aa(w.doc,N.doc)),this.pa(s),a=a!=null&&a;const m=t&&!a?this.ya():[],y=this.da.size===0&&this.current&&!a?1:0,v=y!==this.Ea;return this.Ea=y,h.length!==0||v?{snapshot:new ro(this.query,e.Ra,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new lg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Re(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const t=[];return e.forEach(s=>{this.da.has(s)||t.push(new o_(s))}),this.da.forEach(s=>{e.has(s)||t.push(new s_(s))}),t}ba(e){this.Ta=e.Ts,this.da=Re();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ro.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class HS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class WS{constructor(e){this.key=e,this.va=!1}}class qS{constructor(e,t,s,a,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new uo(m=>ky(m),Mu),this.Ma=new Map,this.xa=new Set,this.Oa=new Je(he.comparator),this.Na=new Map,this.La=new Nd,this.Ba={},this.ka=new Map,this.qa=no.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function KS(i,e,t=!0){const s=d_(i);let a;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.Da()):a=await a_(s,e,t,!0),a}async function GS(i,e){const t=d_(i);await a_(t,e,!0,!1)}async function a_(i,e,t,s){const a=await fS(i.localStore,Kn(e)),u=a.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await QS(i,e,u,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&Zy(i.remoteStore,a),m}async function QS(i,e,t,s,a){i.Ka=(N,F,z)=>async function(X,j,de,ve){let Ee=j.view.ma(de);Ee.ns&&(Ee=await ig(X.localStore,j.query,!1).then(({documents:C})=>j.view.ma(C,Ee)));const Te=ve&&ve.targetChanges.get(j.targetId),qe=ve&&ve.targetMismatches.get(j.targetId)!=null,Ae=j.view.applyChanges(Ee,X.isPrimaryClient,Te,qe);return dg(X,j.targetId,Ae.wa),Ae.snapshot}(i,N,F,z);const u=await ig(i.localStore,e,!0),h=new $S(e,u.Ts),m=h.ma(u.documents),y=Oa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),v=h.applyChanges(m,i.isPrimaryClient,y);dg(i,t,v.wa);const w=new HS(e,t,h);return i.Fa.set(e,w),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function YS(i,e,t){const s=_e(i),a=s.Fa.get(e),u=s.Ma.get(a.targetId);if(u.length>1)return s.Ma.set(a.targetId,u.filter(h=>!Mu(h,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Zh(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Od(s.remoteStore,a.targetId),td(s,a.targetId)}).catch(Na)):(td(s,a.targetId),await Zh(s.localStore,a.targetId,!0))}async function XS(i,e){const t=_e(i),s=t.Fa.get(e),a=t.Ma.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Od(t.remoteStore,s.targetId))}async function JS(i,e,t){const s=sA(i);try{const a=await function(h,m){const y=_e(h),v=ft.now(),w=m.reduce((z,Y)=>z.add(Y.key),Re());let N,F;return y.persistence.runTransaction("Locally write mutations","readwrite",z=>{let Y=Ar(),X=Re();return y.cs.getEntries(z,w).next(j=>{Y=j,Y.forEach((de,ve)=>{ve.isValidDocument()||(X=X.add(de))})}).next(()=>y.localDocuments.getOverlayedDocuments(z,Y)).next(j=>{N=j;const de=[];for(const ve of m){const Ee=yI(ve,N.get(ve.key).overlayedDocument);Ee!=null&&de.push(new Qi(ve.key,Ee,vy(Ee.value.mapValue),Gn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,de,m)}).next(j=>{F=j;const de=j.applyToLocalDocumentSet(N,X);return y.documentOverlayCache.saveOverlays(z,j.batchId,de)})}).then(()=>({batchId:F.batchId,changes:Ny(N)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(h,m,y){let v=h.Ba[h.currentUser.toKey()];v||(v=new Je(xe)),v=v.insert(m,y),h.Ba[h.currentUser.toKey()]=v}(s,a.batchId,t),await La(s,a.changes),await $u(s.remoteStore)}catch(a){const u=bd(a,"Failed to persist write");t.reject(u)}}async function l_(i,e){const t=_e(i);try{const s=await cS(t.localStore,e);e.targetChanges.forEach((a,u)=>{const h=t.Na.get(u);h&&(be(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?h.va=!0:a.modifiedDocuments.size>0?be(h.va):a.removedDocuments.size>0&&(be(h.va),h.va=!1))}),await La(t,s,e)}catch(s){await Na(s)}}function hg(i,e,t){const s=_e(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Fa.forEach((u,h)=>{const m=h.view.Z_(e);m.snapshot&&a.push(m.snapshot)}),function(h,m){const y=_e(h);y.onlineState=m;let v=!1;y.queries.forEach((w,N)=>{for(const F of N.j_)F.Z_(m)&&(v=!0)}),v&&Ud(y)}(s.eventManager,e),a.length&&s.Ca.d_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZS(i,e,t){const s=_e(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Na.get(e),u=a&&a.key;if(u){let h=new Je(he.comparator);h=h.insert(u,Mt.newNoDocument(u,ye.min()));const m=Re().add(u),y=new ju(ye.min(),new Map,new Je(xe),h,m);await l_(s,y),s.Oa=s.Oa.remove(u),s.Na.delete(e),jd(s)}else await Zh(s.localStore,e,!1).then(()=>td(s,e,t)).catch(Na)}async function eA(i,e){const t=_e(i),s=e.batch.batchId;try{const a=await uS(t.localStore,e);c_(t,s,null),u_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await La(t,a)}catch(a){await Na(a)}}async function tA(i,e,t){const s=_e(i);try{const a=await function(h,m){const y=_e(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(N=>(be(N!==null),w=N.keys(),y.mutationQueue.removeMutationBatch(v,N))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);c_(s,e,t),u_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await La(s,a)}catch(a){await Na(a)}}function u_(i,e){(i.ka.get(e)||[]).forEach(t=>{t.resolve()}),i.ka.delete(e)}function c_(i,e,t){const s=_e(i);let a=s.Ba[s.currentUser.toKey()];if(a){const u=a.get(e);u&&(t?u.reject(t):u.resolve(),a=a.remove(e)),s.Ba[s.currentUser.toKey()]=a}}function td(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach(s=>{i.La.containsKey(s)||h_(i,s)})}function h_(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(Od(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),jd(i))}function dg(i,e,t){for(const s of t)s instanceof s_?(i.La.addReference(s.key,e),nA(i,s)):s instanceof o_?(ie("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||h_(i,s.key)):ge()}function nA(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(ie("SyncEngine","New document in limbo: "+t),i.xa.add(s),jd(i))}function jd(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new he(Qe.fromString(e)),s=i.qa.next();i.Na.set(s,new WS(t)),i.Oa=i.Oa.insert(t,s),Zy(i.remoteStore,new ni(Kn(Ry(t.path)),s,"TargetPurposeLimboResolution",vd.oe))}}async function La(i,e,t){const s=_e(i),a=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach((m,y)=>{h.push(s.Ka(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const N=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,N?"current":"not-current")}if(v){a.push(v);const N=Vd.Wi(y.targetId,v);u.push(N)}}))}),await Promise.all(h),s.Ca.d_(a),await async function(y,v){const w=_e(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",N=>W.forEach(v,F=>W.forEach(F.$i,z=>w.persistence.referenceDelegate.addReference(N,F.targetId,z)).next(()=>W.forEach(F.Ui,z=>w.persistence.referenceDelegate.removeReference(N,F.targetId,z)))))}catch(N){if(!Da(N))throw N;ie("LocalStore","Failed to update sequence numbers: "+N)}for(const N of v){const F=N.targetId;if(!N.fromCache){const z=w.os.get(F),Y=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(Y);w.os=w.os.insert(F,X)}}}(s.localStore,u))}async function rA(i,e){const t=_e(i);if(!t.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const s=await Qy(t.localStore,e);t.currentUser=e,function(u,h){u.ka.forEach(m=>{m.forEach(y=>{y.reject(new ae(q.CANCELLED,h))})}),u.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await La(t,s.hs)}}function iA(i,e){const t=_e(i),s=t.Na.get(e);if(s&&s.va)return Re().add(s.key);{let a=Re();const u=t.Ma.get(e);if(!u)return a;for(const h of u){const m=t.Fa.get(h);a=a.unionWith(m.view.Va)}return a}}function d_(i){const e=_e(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=l_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZS.bind(null,e),e.Ca.d_=jS.bind(null,e.eventManager),e.Ca.$a=BS.bind(null,e.eventManager),e}function sA(i){const e=_e(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tA.bind(null,e),e}class Pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return lS(this.persistence,new oS,e.initialUser,this.serializer)}Ga(e){return new rS(Dd.Zr,this.serializer)}Wa(e){return new mS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pu.provider={build:()=>new Pu};class nd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rA.bind(null,this.syncEngine),await LS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FS}()}createDatastore(e){const t=Bu(e.databaseInfo.databaseId),s=function(u){return new vS(u)}(e.databaseInfo);return function(u,h,m,y){return new TS(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,u,h,m){return new SS(s,a,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>hg(this.syncEngine,t,0),function(){return og.D()?new og:new gS}())}createSyncEngine(e,t){return function(a,u,h,m,y,v,w){const N=new qS(a,u,h,m,y,v);return w&&(N.Qa=!0),N}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const u=_e(a);ie("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await xa(u),u.k_.shutdown(),u.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nd.provider={build:()=>new nd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t,s,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Lt.UNAUTHENTICATED,this.clientId=gy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ie("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ie("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=bd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xh(i,e){i.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Qy(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function fg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await lA(i);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>ag(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>ag(e.remoteStore,a)),i._onlineComponents=e}async function lA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await xh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Js("Error using user provided cache. Falling back to memory cache: "+t),await xh(i,new Pu)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await xh(i,new Pu);return i._offlineComponents}async function f_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await fg(i,i._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await fg(i,new nd))),i._onlineComponents}function uA(i){return f_(i).then(e=>e.syncEngine)}async function cA(i){const e=await f_(i),t=e.eventManager;return t.onListen=KS.bind(null,e.syncEngine),t.onUnlisten=YS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XS.bind(null,e.syncEngine),t}function hA(i,e,t={}){const s=new oi;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new oA({next:F=>{w.Za(),h.enqueueAndForget(()=>US(u,N)),F.fromCache&&y.source==="server"?v.reject(new ae(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(F)},error:F=>v.reject(F)}),N=new zS(m,w,{includeMetadataChanges:!0,_a:!0});return bS(u,N)}(await cA(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function p_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(i,e,t){if(!t)throw new ae(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function dA(i,e,t,s){if(e===!0&&s===!0)throw new ae(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function mg(i){if(!he.isDocumentKey(i))throw new ae(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function gg(i){if(he.isDocumentKey(i))throw new ae(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Bd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ge()}function Sa(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bd(i);throw new ae(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new AT;switch(s.type){case"firstParty":return new CT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=pg.get(t);s&&(ie("ComponentProvider","Removing Datastore"),pg.delete(t),s.terminate())}(this),Promise.resolve()}}function fA(i,e,t,s={}){var a;const u=(i=Sa(i,Hu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=eE(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ae(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(v)}i._authCredentials=new RT(new my(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wu(this.firestore,e,this._query)}}class xn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}}class ai extends Wu{constructor(e,t,s){super(e,t,Ry(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new he(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function g_(i,e,...t){if(i=sn(i),m_("collection","path",e),i instanceof Hu){const s=Qe.fromString(e,...t);return gg(s),new ai(i,null,s)}{if(!(i instanceof xn||i instanceof ai))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return gg(s),new ai(i.firestore,null,s)}}function y_(i,e,...t){if(i=sn(i),arguments.length===1&&(e=gy.newId()),m_("doc","path",e),i instanceof Hu){const s=Qe.fromString(e,...t);return mg(s),new xn(i,null,new he(s))}{if(!(i instanceof xn||i instanceof ai))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return mg(s),new xn(i.firestore,i instanceof ai?i.converter:null,new he(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Xy(this,"async_queue_retry"),this.Vu=()=>{const s=Oh();s&&ie("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Oh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Oh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new oi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Da(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const a=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Sr("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const a=Fd.createAndSchedule(this,e,t,s,u=>this.yu(u));return this.Tu.push(a),a}fu(){this.Eu&&ge()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class qu extends Hu{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new _g,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _g(e),this._firestoreClient=void 0,await e}}}function pA(i,e){const t=typeof i=="object"?i:Pg(),s=typeof i=="string"?i:"(default)",a=od(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=Jv("firestore");u&&fA(a,...u)}return a}function __(i){if(i._terminated)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||mA(i),i._firestoreClient}function mA(i){var e,t,s;const a=i._freezeSettings(),u=function(m,y,v,w){return new zT(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,p_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new aA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new io(kt.fromBase64String(e))}catch(t){throw new ae(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new io(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class Hd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=/^__.*__$/;class yA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Va(e,this.data,t,this.fieldTransforms)}}function E_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Wd{constructor(e,t,s,a,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Fu({path:s,xu:!1});return a.Ou(e),a}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Fu({path:s,xu:!1});return a.vu(),a}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Cu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(E_(this.Cu)&&gA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _A{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Bu(e)}Qu(e,t,s,a=!1){return new Wd({Cu:e,methodName:t,qu:s,path:At.emptyPath(),xu:!1,ku:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vA(i){const e=i._freezeSettings(),t=Bu(i._databaseId);return new _A(i._databaseId,!!e.ignoreUndefinedProperties,t)}function EA(i,e,t,s,a,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,a);S_("Data must be an object, but it was:",h,s);const m=T_(s,h);let y,v;if(u.merge)y=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const N of u.mergeFields){const F=wA(e,N,t);if(!h.contains(F))throw new ae(q.INVALID_ARGUMENT,`Field '${F}' is specified in your field mask but missing from your input data.`);IA(w,F)||w.push(F)}y=new Vn(w),v=h.fieldTransforms.filter(N=>y.covers(N.field))}else y=null,v=h.fieldTransforms;return new yA(new gn(m),y,v)}function w_(i,e){if(I_(i=sn(i)))return S_("Unsupported field value:",e,i),T_(i,e);if(i instanceof v_)return function(s,a){if(!E_(a.Cu))throw a.Bu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,a){const u=[];let h=0;for(const m of s){let y=w_(m,a.Lu(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,a){if((s=sn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hI(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Ru(a.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ru(a.serializer,u)}}if(s instanceof $d)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof io)return{bytesValue:zy(a.serializer,s._byteString)};if(s instanceof xn){const u=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw a.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Cd(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Hd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.Bu("VectorValues must only contain numeric values.");return Ad(m.serializer,y)})}}}}}}(s,a);throw a.Bu(`Unsupported field value: ${Bd(s)}`)}(i,e)}function T_(i,e){const t={};return yy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lo(i,(s,a)=>{const u=w_(a,e.Mu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function I_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof $d||i instanceof io||i instanceof xn||i instanceof v_||i instanceof Hd)}function S_(i,e,t){if(!I_(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=Bd(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function wA(i,e,t){if((e=sn(e))instanceof zd)return e._internalPath;if(typeof e=="string")return A_(i,e);throw Cu("Field path arguments must be of type string or ",i,!1,void 0,t)}const TA=new RegExp("[~\\*/\\[\\]]");function A_(i,e,t){if(e.search(TA)>=0)throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new zd(...e.split("."))._internalPath}catch{throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Cu(i,e,t,s,a){const u=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new ae(q.INVALID_ARGUMENT,m+i+y)}function IA(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,s,a,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(k_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SA extends R_{data(){return super.data()}}function k_(i,e){return typeof e=="string"?A_(i,e):e instanceof zd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RA{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return lo(e,(a,u)=>{s[a]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,a;const u=(a=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(h=>rt(h.doubleValue));return new Hd(u)}convertGeoPoint(e){return new $d(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=wd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(va(e));default:return null}}convertTimestamp(e){const t=ui(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);be(Gy(s));const a=new Ea(s.get(1),s.get(3)),u=new he(s.popFirst(5));return a.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PA extends R_{constructor(e,t,s,a,u,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(k_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class du extends PA{data(e={}){return super.data(e)}}class CA{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ru(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new du(this._firestore,this._userDataWriter,s.key,s,new ru(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,u){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map(m=>{const y=new du(a._firestore,a._userDataWriter,m.doc.key,m.doc,new ru(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new du(a._firestore,a._userDataWriter,m.doc.key,m.doc,new ru(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:NA(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function NA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}class DA extends RA{constructor(e){super(),this.firestore=e}convertBytes(e){return new io(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,t)}}function VA(i){i=Sa(i,Wu);const e=Sa(i.firestore,qu),t=__(e),s=new DA(e);return AA(i._query),hA(t,i._query).then(a=>new CA(e,s,i,a))}function OA(i){return P_(Sa(i.firestore,qu),[new Rd(i._key,Gn.none())])}function xA(i,e){const t=Sa(i.firestore,qu),s=y_(i),a=kA(i.converter,e);return P_(t,[EA(vA(i.firestore),"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,Gn.exists(!1))]).then(()=>s)}function P_(i,e){return function(s,a){const u=new oi;return s.asyncQueue.enqueueAndForget(async()=>JS(await uA(s),a,u)),u.promise}(__(i),e)}(function(e,t=!0){(function(a){ao=a})(so),Ys(new Hi("firestore",(s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new qu(new kT(s.getProvider("auth-internal")),new DT(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ae(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ea(v.options.projectId,w)}(h,a),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),si(Fm,"4.7.3",e),si(Fm,"4.7.3","esm2017")})();const LA={apiKey:"AIzaSyBuyO0TJ6PSssYZjUwvLJrTMTVHavB_0n0",authDomain:"bookstore-c42b9.firebaseapp.com",projectId:"bookstore-c42b9",storageBucket:"bookstore-c42b9.firebasestorage.app",messagingSenderId:"436887994001",appId:"1:436887994001:web:667fb333ddd5019d830930",measurementId:"G-H2SM799P21"},C_=kg(LA),N_=ly(C_),qd=pA(C_),MA=new yr,FA=async()=>{try{return(await O0(N_,MA)).user}catch(i){throw console.error("Error signing in with Google:",i),i}},bA=async()=>{try{await f0(N_)}catch(i){throw console.error("Error signing out:",i),i}},UA=async i=>{try{const e={title:i.title,author:i.author,price:Number(i.price)};return(await xA(g_(qd,"books"),e)).id}catch(e){throw console.error("Error adding document:",e),e}},jA=async i=>{try{await OA(y_(qd,"books",i))}catch(e){throw console.error("Error deleting document:",e),e}},D_=()=>{const[i,e]=rn.useState(null);return rn.useEffect(()=>{const t=ly(),s=d0(t,e);return()=>s()},[]),{user:i}},BA=()=>{const{user:i}=D_(),e=()=>{FA()},t=()=>{bA()};return pe.jsx("div",{children:i?pe.jsx("button",{onClick:t,className:"login-button",children:"Logout"}):pe.jsx("button",{onClick:e,className:"login-button",children:"Login with Google"})})},zA=()=>{const[i,e]=rn.useState([]),t=async()=>{try{const h=(await VA(g_(qd,"books"))).docs.map(m=>{const y=m.data();return{id:m.id,title:y.title,author:y.author,price:Number(y.price)}});console.log("isRealdoing?",h),e(h)}catch(u){throw console.error("Error refreshing books:",u),u}};return rn.useEffect(()=>{t()},[]),{books:i,addBook:async u=>{try{await UA(u),await t()}catch(h){throw console.error("Error adding book:",h),h}},deleteBook:async u=>{try{window.confirm("Are you sure you want to delete this book? This action cannot be undone.")&&(await jA(u),await t())}catch(h){throw console.error("Error deleting book:",h),h}}}},V_=({isOpen:i,onClose:e,onAddBook:t})=>{const[s,a]=rn.useState(""),[u,h]=rn.useState(""),[m,y]=rn.useState(""),v=async w=>{if(w.preventDefault(),s&&u&&m)try{const N={title:s,author:u,price:Number(m)};await t(N),a(""),h(""),y(""),e()}catch(N){console.error("Error adding book:",N)}};return rn.useEffect(()=>{i||(a(""),h(""),y(""))},[i]),i?pe.jsx("div",{className:"modal-overlay",children:pe.jsxs("div",{className:"modal",children:[pe.jsx("h2",{children:"Add New Book"}),pe.jsx("button",{className:"close-btn",onClick:e,children:"×"}),pe.jsxs("form",{onSubmit:v,className:"add-book-form",children:[pe.jsxs("div",{className:"form-group",children:[pe.jsx("label",{children:"Title:"}),pe.jsx("input",{type:"text",value:s,onChange:w=>a(w.target.value),required:!0})]}),pe.jsxs("div",{className:"form-group",children:[pe.jsx("label",{children:"Author:"}),pe.jsx("input",{type:"text",value:u,onChange:w=>h(w.target.value),required:!0})]}),pe.jsxs("div",{className:"form-group",children:[pe.jsx("label",{children:"Price:"}),pe.jsx("input",{type:"number",value:m,onChange:w=>y(w.target.value),required:!0})]}),pe.jsxs("div",{className:"form-buttons",children:[pe.jsx("button",{type:"submit",className:"add-btn",children:"Add Book"}),pe.jsx("button",{type:"button",onClick:e,className:"cancel-btn",children:"Cancel"})]})]})]})}):null},$A=({searchTerm:i,books:e,addBook:t,deleteBook:s,itemsPerPage:a=10})=>{const[u,h]=rn.useState(!1),[m,y]=rn.useState(1);console.log("BooksList received books:",e);const v=e.filter(j=>j.title.toLowerCase().includes(i.toLowerCase())||j.author.toLowerCase().includes(i.toLowerCase())),w=Math.ceil(v.length/a),N=m*a,F=N-a,z=v.slice(F,N),Y=async j=>{try{await t(j),h(!1)}catch(de){throw console.error("Error adding book:",de),de}},X=async j=>{try{await s(j)}catch(de){throw console.error("Error deleting book:",de),de}};return pe.jsxs("div",{className:"books-list",children:[pe.jsx(V_,{isOpen:u,onClose:()=>h(!1),onAddBook:Y}),v.length>0?pe.jsxs(pe.Fragment,{children:[pe.jsx("div",{className:"books-grid",children:z.map((j,de)=>pe.jsxs("div",{className:"book-item",children:[pe.jsxs("span",{children:[de+F+1,". ",j.title," by ",j.author," - $",j.price]}),pe.jsx("button",{onClick:()=>X(j.id),className:"delete-btn",children:"Delete"})]},j.id))}),pe.jsxs("div",{className:"pagination",children:[pe.jsx("button",{onClick:()=>y(j=>Math.max(1,j-1)),disabled:m===1,className:"pagination-btn",children:"Previous"}),pe.jsxs("span",{className:"page-info",children:["Page ",m," of ",w]}),pe.jsx("button",{onClick:()=>y(j=>Math.min(w,j+1)),disabled:m===w,className:"pagination-btn",children:"Next"})]})]}):pe.jsx("div",{className:"no-books",children:i?"No books found":"No books yet"})]})};function HA(){const{user:i}=D_(),[e,t]=rn.useState(""),[s,a]=rn.useState(!1),{books:u,addBook:h,deleteBook:m}=zA(),y=async v=>{await h(v),a(!1)};return pe.jsxs("div",{className:"App",children:[pe.jsx("h1",{children:"Book Store"}),i&&pe.jsxs("div",{className:"books-header",children:[pe.jsx("div",{children:pe.jsx("input",{type:"text",className:"search-bar",placeholder:"Search books...",value:e,onChange:v=>t(v.target.value)})}),pe.jsx("div",{children:pe.jsx("button",{className:"add-book-btn",onClick:()=>a(!0),children:"Add Book"})})]}),i&&pe.jsxs(pe.Fragment,{children:[pe.jsx(V_,{isOpen:s,onClose:()=>a(!1),onAddBook:y}),pe.jsx($A,{searchTerm:e,books:u,addBook:h,deleteBook:m})]}),!i&&pe.jsx(BA,{})]})}Hv.createRoot(document.getElementById("root")).render(pe.jsx(rn.StrictMode,{children:pe.jsx(HA,{})}));

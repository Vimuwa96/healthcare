!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Ribble",[],t):"object"==typeof exports?exports.Ribble=t():e.Ribble=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=!1,i=Object.defineProperty({},"passive",{get:function(){n=!0}});try{window.addEventListener("test",null,i)}catch(e){}function s(e,t,o=["mousedown","touchstart"]){o=Array.isArray(o)?o:[o];for(let s of o)e.addEventListener(s,o=>{switch(s){case"mousedown":0===o.button&&r(o,e,t);break;default:r(o,e,t)}},!!n&&i)}function r(e,t,{duration:o=400,zIndex:s="9999",bgColor:r="currentColor",maxOpacity:l="0.4",easing:d="cubic-bezier(0.4, 0, 0.2, 1)"}={}){let a=t,p=e.type,u=+window.getComputedStyle(a).borderWidth.replace("px",""),c=a.getBoundingClientRect(),y=c.left,f=c.top,m=a.offsetWidth,h=a.offsetHeight,b=e.clientX-y,g=e.clientY-f,x=Math.max(b,m-b),v=Math.max(g,h-g),w=window.getComputedStyle(a),R=Math.sqrt(x*x+v*v),L=u>0?u:0,C=document.createElement("div"),E=document.createElement("div");E.className="ripple-container",C.className="ripple",C.style.marginTop="0px",C.style.marginLeft="0px",C.style.width="1px",C.style.height="1px",C.style.opacity="0.2",C.style.transform="scale(0)",C.style.transition=`transform ${o}ms ${d}, opacity ${o}ms ${d}`,C.style.borderRadius="50%",C.style.pointerEvents="none",C.style.position="relative",C.style.zIndex=s,C.style.backgroundColor=r,E.style.position="absolute",E.style.left=0-L+"px",E.style.top=0-L+"px",E.style.height="0",E.style.width="0",E.style.pointerEvents="none",E.style.overflow="hidden";let T=a.style.position.length>0?a.style.position:window.getComputedStyle(a).position;"relative"!==T&&(a.style.position="relative"),E.appendChild(C),a.appendChild(E),C.style.marginLeft=b+"px",C.style.marginTop=g+"px",E.style.width=m+"px",E.style.height=h+"px",E.style.borderTopLeftRadius=w.borderTopLeftRadius,E.style.borderTopRightRadius=w.borderTopRightRadius,E.style.borderBottomLeftRadius=w.borderBottomLeftRadius,E.style.borderBottomRightRadius=w.borderBottomRightRadius,C.style.width=2*R+"px",C.style.height=2*R+"px",C.style.marginLeft=b-R+"px",C.style.marginTop=g-R+"px",setTimeout(function(){C.style.opacity=l,C.style.transform="scale(1)"},0);let j=function e(n){t.removeEventListener("mouseup",e,!1),t.removeEventListener("touchend",e,!1),C.style.opacity="0",setTimeout(function(){E.parentNode.removeChild(E)},o),setTimeout(function(){let e=!0;for(let t=0;t<a.childNodes.length;t++)"ripple-container"===a.childNodes[t].className&&(e=!1);e&&(a.style.position="static"!==T?T:"")},o)},O="mousedown"===p?"mouseup":"touchstart"===p&&"touchend";O?t.addEventListener(O,j,!!n&&i):j()}t.default={name:"ribble",bind(e,t){let o=["mousedown","touchstart"],n=Object.keys(t.modifiers);o=n.length?n:o,s(e,t.value,o)},attachEvent:s}}]).default});
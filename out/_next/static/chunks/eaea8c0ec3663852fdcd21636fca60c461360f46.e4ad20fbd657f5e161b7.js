(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,n,t){e.exports=t("nOHt")},"5Yp1":function(e,n,t){"use strict";var r=t("nKUr"),a=t("YFqc"),o=t.n(a),i=function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:"My portfolio"})}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.a,{href:"/history",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:"History"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.a,{href:"/github",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:"Github"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.a,{href:"/curriculum.pdf",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:"CV"})})})]})})]})})},s=t("q1tI"),c=t("20a2"),l=t("Mj6V"),u=t.n(l);n.a=function(e){var n=e.children,t=e.title,a=e.footer,o=void 0===a||a,l=e.dark,f=Object(c.useRouter)();return Object(s.useEffect)((function(){var e=function(){return u.a.start()};return f.events.on("routeChangeStart",e),f.events.on("routeChangeComplete",(function(){return u.a.done()})),function(){f.events.off("routeChangeStart",e)}}),[]),Object(r.jsxs)("div",{className:l&&"bg-dark",children:[Object(r.jsx)(i,{}),Object(r.jsxs)("main",{className:"container py-4",children:[t&&Object(r.jsx)("h1",{className:"text-center ".concat(l&&"text-light"),children:t}),n]}),o&&Object(r.jsx)("footer",{className:"bg-dark text-light text-center",children:Object(r.jsxs)("div",{className:"container p-4",children:[Object(r.jsx)("h1",{children:"\xa9 Santiago Varela Portfolio"}),Object(r.jsxs)("p",{children:["2000 - ",(new Date).getFullYear()]}),Object(r.jsx)("p",{children:"All rights reserved."})]})})]})}},Mj6V:function(e,n,t){var r,a;void 0===(a="function"===typeof(r=function(){var e={version:"0.2.0"},n=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function t(e,n,t){return e<n?n:e>t?t:e}function r(e){return 100*(-1+e)}function a(e,t,a){var o;return(o="translate3d"===n.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+t+"ms "+a,o}e.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(n[t]=r);return this},e.status=null,e.set=function(r){var s=e.isStarted();r=t(r,n.minimum,1),e.status=1===r?null:r;var c=e.render(!s),l=c.querySelector(n.barSelector),u=n.speed,f=n.easing;return c.offsetWidth,o((function(t){""===n.positionUsing&&(n.positionUsing=e.getPositioningCSS()),i(l,a(r,u,f)),1===r?(i(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){i(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){e.remove(),t()}),u)}),u)):setTimeout(t,u)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var t=function(){setTimeout((function(){e.status&&(e.trickle(),t())}),n.trickleSpeed)};return n.trickle&&t(),this},e.done=function(n){return n||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(n){var r=e.status;return r?("number"!==typeof n&&(n=(1-r)*t(Math.random()*r,.1,.95)),r=t(r+n,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*n.trickleRate)},function(){var n=0,t=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&e.start(),n++,t++,r.always((function(){0===--t?(n=0,e.done()):e.set((n-t)/n)})),this):this}}(),e.render=function(t){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var a=document.createElement("div");a.id="nprogress",a.innerHTML=n.template;var o,s=a.querySelector(n.barSelector),l=t?"-100":r(e.status||0),u=document.querySelector(n.parent);return i(s,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),n.showSpinner||(o=a.querySelector(n.spinnerSelector))&&f(o),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(a),a},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(n.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var o=function(){var e=[];function n(){var t=e.shift();t&&t(n)}return function(t){e.push(t),1==e.length&&n()}}(),i=function(){var e=["Webkit","O","Moz","ms"],n={};function t(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,n){return n.toUpperCase()}))}function r(n){var t=document.body.style;if(n in t)return n;for(var r,a=e.length,o=n.charAt(0).toUpperCase()+n.slice(1);a--;)if((r=e[a]+o)in t)return r;return n}function a(e){return e=t(e),n[e]||(n[e]=r(e))}function o(e,n,t){n=a(n),e.style[n]=t}return function(e,n){var t,r,a=arguments;if(2==a.length)for(t in n)void 0!==(r=n[t])&&n.hasOwnProperty(t)&&o(e,t,r);else o(e,a[1],a[2])}}();function s(e,n){return("string"==typeof e?e:u(e)).indexOf(" "+n+" ")>=0}function c(e,n){var t=u(e),r=t+n;s(t,n)||(e.className=r.substring(1))}function l(e,n){var t,r=u(e);s(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?r.call(n,t,n,e):r)||(e.exports=a)},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var o=a(t("q1tI")),i=t("elyg"),s=t("nOHt"),c=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),a=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,i.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],s=t[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=o.Children.only(v),y=j&&"object"===typeof j&&j.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),x=r(O,2),N=x[0],k=x[1],S=o.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);(0,o.useEffect)((function(){var e=k&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,d,p,{locale:r})}),[p,d,k,g,n,t]);var M={ref:S,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:c,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,p,m,h,b,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var C="undefined"!==typeof g?g:t&&t.locale,E=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,C,t&&t.locales,t&&t.domainLocales);M.href=E||(0,i.addBasePath)((0,i.addLocale)(p,C,t&&t.defaultLocale))}return o.default.cloneElement(j,M)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t("q1tI"),o=t("0G5g"),i="undefined"!==typeof IntersectionObserver;var s=new Map}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+x2M":function(t,e,n){t.exports=n("xhtX")},"/kj5":function(t,e,n){},"287B":function(t,e,n){},"4M6O":function(t,e,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var r=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||t.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,e),c&&t.apply(o,i)}},e.isReactElement=a,e.shallowComparison=function(t,e){var n,r=new Set(Object.keys(t).concat(Object.keys(e)));return 0!==(n=[]).concat.apply(n,(0,o.default)(r)).filter((function(n){return t[n]!==e[n]&&!a(t[n])})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function a(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},"8+s/":function(t,e,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},"B/BP":function(t,e,n){},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"Bu+0":function(t,e,n){},CqB2:function(t,e,n){},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Emuw:function(t,e,n){},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},NrHJ:function(t,e,n){},ORnI:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("VUT9"));e.Disqus=o.default;var i=r(n("qASQ"));e.CommentCount=i.default;var a=r(n("vAJ3"));e.CommentEmbed=a.default;var c=o.default;e.default=c},PApT:function(t,e,n){},QyEk:function(t,e,n){},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},VUT9:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),c=r(n("q1tI")),u=r(n("17x9")),s=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="misterdaniels",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,s.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.DISQUS&&window.document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.shortname,(0,s.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body))},n.cleanInstance=function(){(0,s.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:76,columnNumber:7}}))},e}(c.default.Component);e.default=l,l.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string})}},WAzQ:function(t,e,n){},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),p=n("7ljp"),d=p.useMDXComponents,m=p.mdx,h=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,i=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),c=d(n),u=h(e),l=f.useMemo((function(){if(!o)return null;var t=s({React:f,mdx:m},u),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return f.createElement(l,s({components:c},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},purq:function(t,e,n){},qASQ:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),c=r(n("q1tI")),u=r(n("17x9")),s=n("4M6O"),l=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),f=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="misterdaniels",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,s.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,s.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,r=(0,i.default)(t,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),n)},e}(c.default.Component);e.default=f,f.defaultProps={placeholder:"..."},f.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string}},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ht}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,i,a,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),b=n.n(h),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(w).map((function(t){return w[t]})),"charset"),j="cssText",T="href",S="http-equiv",C="innerHTML",E="itemprop",A="name",I="property",P="rel",q="src",k="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",M="defer",_="encodeSpecialCharacters",N="onChangeClientState",R="titleTemplate",L=Object.keys(x).reduce((function(t,e){return t[x[e]]=e,t}),{}),B=[w.NOSCRIPT,w.SCRIPT,w.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Q=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},V=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},X=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(t){var e=Z(t,w.TITLE),n=Z(t,R);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,D);return e||r||void 0},K=function(t){return Z(t,N)||function(){}},Y=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return W({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},J=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+U(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==C&&c!==j&&c!==E||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=b()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(w.BODY,r),ut(w.HTML,o),ct(f,p);var d={baseTag:st(w.BASE,n),linkTags:st(w.LINK,i),metaTags:st(w.META,a),noscriptTags:st(w.NOSCRIPT,c),scriptTags:st(w.SCRIPT,s),styleTags:st(w.STYLE,l)},m={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,m,h)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(w.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[x[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=ft(n,r),[m.a.createElement(w.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+X(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case y:case g:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=x[t]||t;if(n===C||n===j){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),m.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===C||t===j)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+X(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(w.BASE,e,r),bodyAttributes:pt(y,n,r),htmlAttributes:pt(g,o,r),link:pt(w.LINK,i,r),meta:pt(w.META,a,r),noscript:pt(w.NOSCRIPT,c,r),script:pt(w.SCRIPT,u,r),style:pt(w.STYLE,s,r),title:pt(w.TITLE,{title:f,titleAttributes:p},r)}},mt=l()((function(t){return{baseTag:G([T,k],t),bodyAttributes:Y(y,t),defer:Z(t,M),encode:Z(t,_),htmlAttributes:Y(g,t),linkTags:J(w.LINK,[P,T],t),metaTags:J(w.META,[A,O,S,I,E],t),noscriptTags:J(w.NOSCRIPT,[C],t),onChangeClientState:K(t),scriptTags:J(w.SCRIPT,[q,C],t),styleTags:J(w.STYLE,[j],t),title:z(t),titleAttributes:Y(v,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),ht=(o=mt,a=i=function(t){function e(){return H(this,e),V(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return W({},r,((e={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case w.TITLE:return W({},o,((e={})[r.type]=a,e.titleAttributes=W({},i),e));case w.BODY:return W({},o,{bodyAttributes:W({},i)});case w.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((n={})[r.type]=W({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=W({},e);return Object.keys(t).forEach((function(e){var r;n=W({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return m.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=Q(t,["children"]),r=W({},n);return e&&(r=this.mapChildrenToProps(e,r)),m.a.createElement(o,r)},F(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(m.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ht.renderStatic=ht.rewind}).call(this,n("yLpj"))},uSbf:function(t,e,n){},vAJ3:function(t,e,n){"use strict";n("xfY5"),n("a1Th"),n("Btvt");var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("VbXa")),i=r(n("q1tI")),a=r(n("17x9")),c=function(t){function e(){return t.apply(this,arguments)||this}(0,o.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},e}(i.default.Component);e.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},xhtX:function(t,e,n){"use strict";function r(t){return" "===t||"\n"===t||"\r"===t||"\t"===t}t.exports=function(t,e){var n,o,i=0,a=0,c=t.length-1;for((e=e||{}).wordsPerMinute=e.wordsPerMinute||200,n=e.wordBound||r;n(t[a]);)a++;for(;n(t[c]);)c--;for(o=a;o<=c;){for(;o<=c&&!n(t[o]);o++);for(i++;o<=c&&n(t[o]);o++);}var u=i/e.wordsPerMinute,s=60*u*1e3;return{text:Math.ceil(u.toFixed(2))+" min read",minutes:u,time:s,words:i}}},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R})),n.d(e,"blogQuery",(function(){return L}));n("KKXr");var r=n("q1tI"),o=n.n(r),i=n("qhky"),a=n("Wbzz"),c=n("YwZP"),u=n("7ljp"),s=n("A2+M"),l=n("Ji2X"),f=n("ORnI");n("/SS/"),n("hHhE");function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var m=function(t){function e(){return p(this,e),d(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this._updateIframeContent()},e.prototype.componentDidUpdate=function(t,e){this._updateIframeContent()},e.prototype._defineUrl=function(){var t=this.props,e=t.id,n=t.file;return"https://gist.github.com/"+e+".js"+(n?"?file="+n:"")},e.prototype._updateIframeContent=function(){var t=this.props,e=t.id,n=t.file,r=this.iframeNode,o=r.document;r.contentDocument?o=r.contentDocument:r.contentWindow&&(o=r.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+e+"-"+n:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},e.prototype.render=function(){var t=this,e=this.props,n=e.id,r=e.file;return o.a.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},e}(o.a.PureComponent),h=n("NIcq"),b=n("ma3e"),y=n("+x2M"),g=n.n(y),v=(n("pVhd"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("B/BP"),n("qKvR")),w=function(t){return Object(v.a)("h1",t)},O=(n("uSbf"),function(t){return Object(v.a)("h2",t)}),j=(n("PApT"),function(t){return Object(v.a)("h3",t)}),T=(n("NrHJ"),function(t){return Object(v.a)("h4",t)}),S=(n("purq"),{H1:w,H2:O,H3:j,H4:T}),C=(n("QyEk"),function(t){return Object(v.a)("p",t)}),E=(n("WAzQ"),function(t){return Object(v.a)("a",t)}),A=(n("Emuw"),{P:C,A:E}),I=(n("287B"),function(t){return Object(v.a)("div",{className:"image"},Object(v.a)("img",t),Object(v.a)("small",null,"Qualquer coisa"))});n("91GP"),n("Bu+0");function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var q=function(t){return Object(v.a)("div",{className:"iframe"},Object(v.a)("iframe",P({},t,{width:"600",height:"400",frameborder:"0",allowfullscreen:!0,class:"video"})),Object(v.a)("small",null,"Qualquer coisa"))},k=(n("CqB2"),{Img:I,Iframe:q});function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=D(D(D({},S),A),k),N=n("Rnav");n("/kj5");function R(t){var e=t.data,n=e.mdx,r=e.allMdx.edges,o={Gist:m,h1:_.H1,h2:_.H2,h3:_.H3,h4:_.H4,p:_.P,iframe:_.Iframe,img:_.Img},p={url:"http://misterdaniels.github.io"+n.frontmatter.path,identifier:n.frontmatter.id,title:n.frontmatter.title},d=g()(n.body),y=n.frontmatter.tags.split(",");return Object(v.a)("div",null,Object(v.a)(l.a,{maxWidth:"lg"},Object(v.a)(N.a,{hasLogo:!0,hasMenu:!1}),Object(v.a)("div",{id:"content"},Object(v.a)(i.a,{title:"DEV MisterDaniels - "+n.frontmatter.title}),Object(v.a)("div",{className:"blog-post"},Object(v.a)("div",{className:"head"},Object(v.a)("h1",{className:"title"},n.frontmatter.title),Object(v.a)("div",{className:"sub-title"},Object(v.a)("h2",{className:"border-separate"},n.frontmatter.category),Object(v.a)("h2",null,new Date(n.frontmatter.date).toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"})," por",Object(v.a)("a",{href:n.frontmatter.authorUrl,target:"_blank",rel:"noopener noreferrer"},n.frontmatter.author)),Object(v.a)("span",{onClick:function(t){t.preventDefault(),Object(c.navigate)("#comments")}},Object(v.a)(h.f,{size:14,color:"#000000"}),Object(v.a)(f.CommentCount,{config:p,placeholder:"..."}))),Object(v.a)("div",{className:"tools"},Object(v.a)("p",null,"Compartilhe:"),Object(v.a)("a",{href:"https://facebook.com/sharer/sharer.php?u=http://misterdaniels.github.io/blog"+n.frontmatter.path,target:"_blank",rel:"noopener noreferrer"},Object(v.a)(b.j,{size:26,color:"#000000"})),Object(v.a)("a",{href:"https://twitter.com/home?status=http://misterdaniels.github.io/blog"+n.frontmatter.path,target:"_blank",rel:"noopener noreferrer"},Object(v.a)(b.z,{size:26,color:"#000000"})),Object(v.a)("a",{href:"https://linkedin.com/shareArticle?mini=true&url=http://misterdaniels.github.io/blog"+n.frontmatter.path,target:"_blank",rel:"noopener noreferrer"},Object(v.a)(b.r,{size:26,color:"#000000"})),Object(v.a)("span",{className:"time"},Object(v.a)(b.c,{size:14,color:"#ffffff"}),Object(v.a)("p",null,Math.ceil(d.minutes)," min")))),Object(v.a)("div",{className:"body"},Object(v.a)(u.MDXProvider,{components:o},Object(v.a)(s.MDXRenderer,{className:"body"},n.body))))),Object(v.a)("div",{id:"navigation"},Object(v.a)("div",{className:"tags"},y.length>0&&Object(v.a)("p",null,"Tags:"),y.map((function(t,e){return Object(v.a)("span",{className:"badge",key:e},Object(v.a)("p",null,t))}))),Object(v.a)("div",{className:"suggestion"},Object(v.a)(a.a,{to:r[0].node.frontmatter.path},Object(v.a)("div",{className:"before"},Object(v.a)(h.c,{size:60,color:"#F55547"}),Object(v.a)("div",null,Object(v.a)("h1",null,"Recomendo esse"),Object(v.a)("p",null,r[0].node.frontmatter.title)))),Object(v.a)(a.a,{to:r[1].node.frontmatter.path},Object(v.a)("div",{className:"next"},Object(v.a)("div",null,Object(v.a)("h1",null,"Ou que tal esse"),Object(v.a)("p",null,r[1].node.frontmatter.title)),Object(v.a)(h.d,{size:60,color:"#F55547"}))))),Object(v.a)("div",{id:"comments"},Object(v.a)(f.Disqus,{config:p}))))}var L="2050209314"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-10fd9b2e55210f0e3a44.js.map
!function(t){"function"==typeof define&&define.amd?define(t):window.purl=t()}(function(){var o={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href",embed:"src",object:"data"},i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],e={anchor:"fragment"},s={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},u=/^[0-9]+$/;function c(t,r){if(0===t[r].length)return t[r]={};var e={};for(var a in t[r])e[a]=t[r][a];return t[r]=e}function f(t,r,e){if(~r.indexOf("]")){!function t(r,e,a,n){var o=r.shift();if(o){var i=e[a]=e[a]||[];"]"==o?d(i)?""!==n&&i.push(n):"object"==typeof i?i[function(t){var r=[];for(var e in t)t.hasOwnProperty(e)&&r.push(e);return r}(i).length]=n:i=e[a]=[e[a],n]:(~o.indexOf("]")&&(o=o.substr(0,o.length-1)),!u.test(o)&&d(i)&&(i=c(e,a)),t(r,i,o,n))}else d(e[a])?e[a].push(n):"object"==typeof e[a]?e[a]=n:void 0===e[a]?e[a]=n:e[a]=[e[a],n]}(r.split("["),t,"base",e)}else{if(!u.test(r)&&d(t.base)){var a={};for(var n in t.base)a[n]=t.base[n];t.base=a}""!==r&&(o=t.base,s=e,void 0===(f=o[i=r])?o[i]=s:d(f)?f.push(s):o[i]=[f,s])}var o,i,s,f;return t}function h(t){return function(t,r){var e=0,a=t.length>>0,n=arguments[2];for(;e<a;)e in t&&(n=r.call(void 0,n,t[e],e,t)),++e;return n}(String(t).split(/&|;/),function(t,r){try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(t){}var e=r.indexOf("="),a=function(t){for(var r,e,a=t.length,n=0;n<a;++n)if("]"==(e=t[n])&&(r=!1),"["==e&&(r=!0),"="==e&&!r)return n}(r),n=r.substr(0,a||e),o=r.substr(a||e,r.length);return o=o.substr(o.indexOf("=")+1,o.length),""===n&&(n=r,o=""),f(t,n,o)},{base:{}}).base}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function p(t,r){return 1===arguments.length&&!0===t&&(r=!0,t=void 0),r=r||!1,{data:function(t,r){for(var e=decodeURI(t),a=s[r?"strict":"loose"].exec(e),n={attr:{},param:{},seg:{}},o=14;o--;)n.attr[i[o]]=a[o]||"";return n.param.query=h(n.attr.query),n.param.fragment=h(n.attr.fragment),n.seg.path=n.attr.path.replace(/^\/+|\/+$/g,"").split("/"),n.seg.fragment=n.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),n.attr.base=n.attr.host?(n.attr.protocol?n.attr.protocol+"://"+n.attr.host:n.attr.host)+(n.attr.port?":"+n.attr.port:""):"",n}(t=t||window.location.toString(),r),attr:function(t){return void 0!==(t=e[t]||t)?this.data.attr[t]:this.data.attr},param:function(t){return void 0!==t?this.data.param.query[t]:this.data.param.query},fparam:function(t){return void 0!==t?this.data.param.fragment[t]:this.data.param.fragment},segment:function(t){return void 0===t?this.data.seg.path:(t=t<0?this.data.seg.path.length+t:t-1,this.data.seg.path[t])},fsegment:function(t){return void 0===t?this.data.seg.fragment:(t=t<0?this.data.seg.fragment.length+t:t-1,this.data.seg.fragment[t])}}}return p.jQuery=function(n){null!=n&&(n.fn.url=function(t){var r,e,a="";return this.length&&(a=n(this).attr((r=this[0],void 0!==(e=r.tagName)?o[e.toLowerCase()]:e))||""),p(a,t)},n.url=p)},p.jQuery(window.jQuery),p});
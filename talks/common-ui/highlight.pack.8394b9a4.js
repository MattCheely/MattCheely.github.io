parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"H9Ad":[function(require,module,exports) {
var define;
var e;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){var n="object"==("undefined"==typeof window?"undefined":t(window))&&window||"object"==("undefined"==typeof self?"undefined":t(self))&&self;n&&(n.hljs=r({}),"function"==typeof e&&e.amd&&e([],function(){return n.hljs}))}(function(e){var t=[],r=Object.keys,n={},a={},i=/^(no-?highlight|plain|text)$/i,c=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,s={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",relevance:"r",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},l="</span>",u={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b(e){return e.nodeName.toLowerCase()}function p(e,t){var r=e&&e.exec(t);return r&&0===r.index}function d(e){return i.test(e)}function g(e){var t,r={},n=Array.prototype.slice.call(arguments,1);for(t in e)r[t]=e[t];return n.forEach(function(e){for(t in e)r[t]=e[t]}),r}function E(e){var t=[];return function e(r,n){for(var a=r.firstChild;a;a=a.nextSibling)3===a.nodeType?n+=a.nodeValue.length:1===a.nodeType&&(t.push({event:"start",offset:n,node:a}),n=e(a,n),b(a).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:a}));return n}(e,0),t}function m(e){if(s&&!e.langApiRestored){for(var t in e.langApiRestored=!0,s)e[t]&&(e[s[t]]=e[t]);(e.c||[]).concat(e.v||[]).forEach(m)}}function h(e){function t(e){return e&&e.source||e}function n(r,n){return new RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}!function a(i,c){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var o={},s=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");o[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof i.k?s("keyword",i.k):r(i.k).forEach(function(e){s(e,i.k[e])}),i.k=o}i.lR=n(i.l||/\w+/,!0),c&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=n(i.b),i.endSameAsBegin&&(i.e=i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=n(i.e)),i.tE=t(i.e)||"",i.eW&&c.tE&&(i.tE+=(i.e?"|":"")+c.tE)),i.i&&(i.iR=n(i.i)),null==i.r&&(i.r=1),i.c||(i.c=[]),i.c=Array.prototype.concat.apply([],i.c.map(function(e){return(t="self"===e?i:e).v&&!t.cached_variants&&(t.cached_variants=t.v.map(function(e){return g(t,{v:null},e)})),t.cached_variants||t.eW&&[g(t)]||[t];var t})),i.c.forEach(function(e){a(e,i)}),i.starts&&a(i.starts,c);var l=i.c.map(function(e){return e.bK?"\\.?(?:"+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=l.length?n(function(e,r){for(var n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,i="",c=0;c<e.length;c++){var o=a,s=t(e[c]);for(0<c&&(i+="|");0<s.length;){var l=n.exec(s);if(null==l){i+=s;break}i+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?i+="\\"+String(Number(l[1])+o):(i+=l[0],"("==l[0]&&a++)}}return i}(l),!0):{exec:function(){return null}}}}(e)}function N(e,t,r,a){function i(e,t,r,n){var a='<span class="'+(n?"":u.classPrefix);return(a+=e+'">')+t+(r?"":l)}function c(){m+=null!=g.sL?function(){var e="string"==typeof g.sL;if(e&&!n[g.sL])return f(M);var t=e?N(g.sL,M,!0,E[g.sL]):R(M,g.sL.length?g.sL:void 0);return 0<g.r&&(v+=t.r),e&&(E[g.sL]=t.top),i(t.language,t.value,!1,!0)}():function(){var e,t,r,n,a,c,o;if(!g.k)return f(M);for(n="",t=0,g.lR.lastIndex=0,r=g.lR.exec(M);r;)n+=f(M.substring(t,r.index)),a=g,c=r,o=b.cI?c[0].toLowerCase():c[0],(e=a.k.hasOwnProperty(o)&&a.k[o])?(v+=e[1],n+=i(e[0],f(r[0]))):n+=f(r[0]),t=g.lR.lastIndex,r=g.lR.exec(M);return n+f(M.substr(t))}(),M=""}function o(e){m+=e.cN?i(e.cN,"",!0):"",g=Object.create(e,{parent:{value:g}})}function s(e,t){if(M+=e,null==t)return c(),0;var n=function(e,t){var r,n,a;for(r=0,n=t.c.length;r<n;r++)if(p(t.c[r].bR,e))return t.c[r].endSameAsBegin&&(t.c[r].eR=(a=t.c[r].bR.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),t.c[r]}(t,g);if(n)return n.skip?M+=t:(n.eB&&(M+=t),c(),n.rB||n.eB||(M=t)),o(n),n.rB?0:t.length;var a,i=function e(t,r){if(p(t.eR,r)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.eW)return e(t.parent,r)}(g,t);if(i){var s=g;for(s.skip?M+=t:(s.rE||s.eE||(M+=t),c(),s.eE&&(M=t));g.cN&&(m+=l),g.skip||g.sL||(v+=g.r),(g=g.parent)!==i.parent;);return i.starts&&(i.endSameAsBegin&&(i.starts.eR=i.eR),o(i.starts)),s.rE?0:t.length}if(a=t,!r&&p(g.iR,a))throw new Error('Illegal lexeme "'+t+'" for mode "'+(g.cN||"<unnamed>")+'"');return M+=t,t.length||1}var b=C(e);if(!b)throw new Error('Unknown language: "'+e+'"');h(b);var d,g=a||b,E={},m="";for(d=g;d!==b;d=d.parent)d.cN&&(m=i(d.cN,"",!0)+m);var M="",v=0;try{for(var y,_,w=0;g.t.lastIndex=w,y=g.t.exec(t);)_=s(t.substring(w,y.index),y[0]),w=y.index+_;for(s(t.substr(w)),d=g;d.parent;d=d.parent)d.cN&&(m+=l);return{r:v,value:m,language:e,top:g}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:f(t)};throw e}}function R(e,t){t=t||u.languages||r(n);var a={r:0,value:f(e)},i=a;return t.filter(C).filter(_).forEach(function(t){var r=N(t,e,!1);r.language=t,r.r>i.r&&(i=r),r.r>a.r&&(i=a,a=r)}),i.language&&(a.second_best=i),a}function M(e){return u.tabReplace||u.useBR?e.replace(o,function(e,t){return u.useBR&&"\n"===e?"<br>":u.tabReplace?t.replace(/\t/g,u.tabReplace):""}):e}function v(e){var r,n,i,o,s,l,p,g,m,h,v=function(e){var t,r,n,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",r=c.exec(i))return C(r[1])?r[1]:"no-highlight";for(t=0,n=(i=i.split(/\s+/)).length;t<n;t++)if(d(a=i[t])||C(a))return a}(e);d(v)||(u.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):r=e,s=r.textContent,i=v?N(v,s,!0):R(s),(n=E(r)).length&&((o=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,r,n){var a=0,i="",c=[];function o(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function s(e){i+="<"+b(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+f(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){i+="</"+b(e)+">"}function u(e){("start"===e.event?s:l)(e.node)}for(;e.length||r.length;){var p=o();if(i+=f(n.substring(a,p[0].offset)),a=p[0].offset,p===e){for(c.reverse().forEach(l);u(p.splice(0,1)[0]),(p=o())===e&&p.length&&p[0].offset===a;);c.reverse().forEach(s)}else"start"===p[0].event?c.push(p[0].node):c.pop(),u(p.splice(0,1)[0])}return i+f(n.substr(a))}(n,E(o),s)),i.value=M(i.value),e.innerHTML=i.value,e.className=(l=e.className,p=v,g=i.language,m=p?a[p]:g,h=[l.trim()],l.match(/\bhljs\b/)||h.push("hljs"),-1===l.indexOf(m)&&h.push(m),h.join(" ").trim()),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r}))}function y(){if(!y.called){y.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,v)}}function C(e){return e=(e||"").toLowerCase(),n[e]||n[a[e]]}function _(e){var t=C(e);return t&&!t.disableAutodetect}return e.highlight=N,e.highlightAuto=R,e.fixMarkup=M,e.highlightBlock=v,e.configure=function(e){u=g(u,e)},e.initHighlighting=y,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",y,!1),addEventListener("load",y,!1)},e.registerLanguage=function(t,r){var i=n[t]=r(e);m(i),i.aliases&&i.aliases.forEach(function(e){a[e]=t})},e.listLanguages=function(){return r(n)},e.getLanguage=C,e.autoDetection=_,e.inherit=g,e.IR=e.IDENT_RE="[a-zA-Z]\\w*",e.UIR=e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NR=e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.CNR=e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR=e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RSR=e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE=e.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",r:0},e.ASM=e.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM=e.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM=e.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=e.COMMENT=function(t,r,n){var a=e.inherit({cN:"comment",b:t,e:r,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C_LINE_COMMENT_MODE=e.C("//","$"),e.CBCM=e.C_BLOCK_COMMENT_MODE=e.C("/\\*","\\*/"),e.HCM=e.HASH_COMMENT_MODE=e.C("#","$"),e.NM=e.NUMBER_MODE={cN:"number",b:e.NR,r:0},e.CNM=e.C_NUMBER_MODE={cN:"number",b:e.CNR,r:0},e.BNM=e.BINARY_NUMBER_MODE={cN:"number",b:e.BNR,r:0},e.CSSNM=e.CSS_NUMBER_MODE={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM=e.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM=e.TITLE_MODE={cN:"title",b:e.IR,r:0},e.UTM=e.UNDERSCORE_TITLE_MODE={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("elm",function(e){var t={v:[e.C("--","$"),e.C("{-","-}",{c:["self"]})]},r={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n={b:"\\(",e:"\\)",i:'"',c:[{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},t]};return{k:"let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",c:[{bK:"port effect module",e:"exposing",k:"port effect module where command subscription exposing",c:[n,t],i:"\\W\\.|;"},{b:"import",e:"$",k:"import as exposing",c:[n,t],i:"\\W\\.|;"},{b:"type",e:"$",k:"type alias",c:[r,n,{b:"{",e:"}",c:n.c},t]},{bK:"infix infixl infixr",e:"$",c:[e.CNM,t]},{b:"port",e:"$",k:"port",c:[t]},{cN:"string",b:"'\\\\?.",e:"'",i:"."},e.QSM,e.CNM,r,e.inherit(e.TM,{b:"^[_a-z][\\w']*"}),t,{b:"->|<-"}],i:/;/}}),hljs.registerLanguage("typescript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},n={cN:"meta",b:"@"+t},a={b:"\\(",e:/\)/,k:r,c:["self",e.QSM,e.ASM,e.NM]},i={cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:[e.CLCM,e.CBCM,n,a]};return{aliases:["ts"],k:r,c:[{cN:"meta",b:/^\s*['"]use strict['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+e.IR+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:e.IR},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:["self",e.CLCM,e.CBCM]}]}]}],r:0},{cN:"function",b:"function",e:/[\{;]/,eE:!0,k:r,c:["self",e.inherit(e.TM,{b:t}),i],i:/%/,r:0},{bK:"constructor",e:/\{/,eE:!0,c:["self",i]},{b:/module\./,k:{built_in:"module"},r:0},{bK:"module",e:/\{/,eE:!0},{bK:"interface",e:/\{/,eE:!0,k:"interface extends"},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},n,a]}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,{cN:"string",b:/'/,e:/'/},t]}}),hljs.registerLanguage("xml",function(e){var t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"meta",b:/<\?xml/,e:/\?>/,r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0},{b:'b"',e:'"',skip:!0},{b:"b'",e:"'",skip:!0},e.inherit(e.ASM,{i:null,cN:null,c:null,skip:!0}),e.inherit(e.QSM,{i:null,cN:null,c:null,skip:!0})]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}}),hljs.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:r,c:[]},i={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,i,n,e.RM];var c=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:r,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,i,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:c}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:c}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor get set",e:/\{/,eE:!0}],i:/#(?!!)/}});
},{}]},{},["H9Ad"], null)
//# sourceMappingURL=highlight.pack.8394b9a4.js.map
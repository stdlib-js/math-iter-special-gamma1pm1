// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,w,"$1e"),t=s.call(t,b,"e"),t=s.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,v,"e-0$1"),r.alternate&&(t=s.call(t,y,"$1."),t=s.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function N(r){var n,e,t,o,a,f,c,l,s,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)f+=t;else{if(n=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(a)?String(t.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=h(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,e,t,i;for(e=[],i=0,t=O.exec(r);t;)(n=r.slice(i,O.lastIndex-t[0].length)).length&&e.push(n),e.push(S(t)),i=O.lastIndex,t=O.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function U(r){var n,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[x(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return N.apply(null,n)}var F,I=Object.prototype,T=I.toString,k=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,n)||G.call(r,n)?(t=r.__proto__,r.__proto__=I,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&k&&k.call(r,n,e.get),a&&V&&V.call(r,n,e.set),r};var L=F;function $(r,n,e){L(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,n){return null!=r&&R.call(r,n)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=W()?function(r){var n,e,t;if(null==r)return B.call(r);e=r[Y],n=Z(r,Y);try{r[Y]=void 0}catch(n){return B.call(r)}return t=B.call(r),n?r[Y]=e:delete r[Y],t}:function(r){return B.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,nr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},tr="object"==typeof er?er:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(nr)return nr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(fr,"REGEXP",cr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var n,e,t,i;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(n=cr.exec(t.toString()))return n[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var e,t;if(!lr(n))return!1;if(0===(e=n.length))return!1;for(t=0;t<e;t++)if(!1===r(n[t]))return!1;return!0}}(sr));var vr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?pr(r).toLowerCase():n};function yr(r){return"function"===vr(r)}function gr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var wr=W();function hr(r){return"object"==typeof r&&(r instanceof dr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function mr(r){return gr(r)||hr(r)}$(mr,"isPrimitive",gr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=yr(Object.getPrototypeOf)?Er:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Nr=Ar;var Or=Object.prototype;function Sr(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(n=function(r){return null==r?null:(r=_r(r),Nr(r))}(r),!n||!Z(r,"constructor")&&Z(n,"constructor")&&yr(n.constructor)&&"[object Function]"===q(n.constructor)&&Z(n,"isPrototypeOf")&&yr(n.isPrototypeOf)&&(n===Or||function(r){var n;for(n in r)if(!Z(r,n))return!1;return!0}(r)))}function xr(r,n,e){var t,i,o,a,u,f;if(f=typeof(u=r),null===u||"object"!==f&&"function"!==f||!yr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(n))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",n));if(t={invalid:NaN},arguments.length>2&&(o=function(r,n){return Sr(n)?(Z(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",n))}(t,e),o))throw o;return $(i={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:gr(e.value)?n(e.value):t.invalid,done:!1}})),$(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&yr(r[jr])&&$(i,jr,(function(){return xr(r[jr](),n,t)})),i}function Ur(r){return r!=r}var Fr=Math.floor;function Ir(r){return Fr(r)===r}var Tr=dr.NEGATIVE_INFINITY;function kr(r){return Math.abs(r)}var Vr=2147483647,Pr=2146435072,Gr="function"==typeof Uint32Array;var Lr="function"==typeof Uint32Array?Uint32Array:null;var $r,Cr="function"==typeof Uint32Array?Uint32Array:void 0;$r=function(){var r,n,e;if("function"!=typeof Lr)return!1;try{n=new Lr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(Gr&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Hr=$r,Mr="function"==typeof Float64Array;var Wr="function"==typeof Float64Array?Float64Array:null;var Br,Rr="function"==typeof Float64Array?Float64Array:void 0;Br=function(){var r,n,e;if("function"!=typeof Wr)return!1;try{n=new Wr([1,3.14,-3.14,NaN]),e=n,r=(Mr&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Zr=Br,Xr="function"==typeof Uint8Array;var Yr="function"==typeof Uint8Array?Uint8Array:null;var qr,zr="function"==typeof Uint8Array?Uint8Array:void 0;qr=function(){var r,n,e;if("function"!=typeof Yr)return!1;try{n=new Yr(n=[1,3.14,-3.14,256,257]),e=n,r=(Xr&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var Dr=qr,Jr="function"==typeof Uint16Array;var Kr="function"==typeof Uint16Array?Uint16Array:null;var Qr,rn="function"==typeof Uint16Array?Uint16Array:void 0;Qr=function(){var r,n,e;if("function"!=typeof Kr)return!1;try{n=new Kr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Jr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var nn,en={uint16:Qr,uint8:Dr};(nn=new en.uint16(1))[0]=4660;var tn=52===new en.uint8(nn.buffer)[0],on=!0===tn?1:0,an=new Zr(1),un=new Hr(an.buffer);function fn(r){return an[0]=r,un[on]}function cn(r,n){var e,t,i,o;return i=(o=r*r)*o,t=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(e=.5*o))+(1-i-e+(o*t-r*n))}var ln=-.16666666666666632,sn=.00833333333332249,pn=-.0001984126982985795,vn=27557313707070068e-22,yn=-2.5050760253406863e-8,gn=1.58969099521155e-10;function dn(r,n){var e,t,i;return e=sn+(i=r*r)*(pn+i*vn)+i*(i*i)*(yn+i*gn),t=i*r,0===n?r+t*(ln+i*e):r-(i*(.5*n-t*e)-n-t*ln)}var bn,wn,hn=1048575,mn=!0===tn?0:1,jn=new Zr(1),An=new Hr(jn.buffer);!0===tn?(bn=1,wn=0):(bn=0,wn=1);var _n={HIGH:bn,LOW:wn},En=new Zr(1),Nn=new Hr(En.buffer),On=_n.HIGH,Sn=_n.LOW;function xn(r,n){return Nn[On]=r,Nn[Sn]=n,En[0]}var Un=Number.POSITIVE_INFINITY,Fn=1023,In=1023,Tn=-1023,kn=-1074;function Vn(r){return r===Un||r===Tr}var Pn,Gn,Ln=2147483648;!0===tn?(Pn=1,Gn=0):(Pn=0,Gn=1);var $n={HIGH:Pn,LOW:Gn},Cn=new Zr(1),Hn=new Hr(Cn.buffer),Mn=$n.HIGH,Wn=$n.LOW;function Bn(r,n,e,t){return Cn[0]=r,n[t]=Hn[Mn],n[t+e]=Hn[Wn],n}function Rn(r){return Bn(r,[0,0],1,0)}$(Rn,"assign",Bn);var Zn=[0,0];function Xn(r,n){var e,t;return Rn.assign(r,Zn,1,0),e=Zn[0],e&=Vr,t=fn(n),xn(e|=t&=Ln,Zn[1])}var Yn=22250738585072014e-324,qn=4503599627370496;function zn(r,n,e,t){return Ur(r)||Vn(r)?(n[t]=r,n[t+e]=0,n):0!==r&&kr(r)<Yn?(n[t]=r*qn,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}$((function(r){return zn(r,[0,0],1,0)}),"assign",zn);var Dn=2220446049250313e-31,Jn=2148532223,Kn=[0,0],Qn=[0,0];function re(r,n){var e,t;return 0===n||0===r||Ur(r)||Vn(r)?r:(zn(r,Kn,1,0),r=Kn[0],n+=Kn[1],n+=function(r){var n=fn(r);return(n=(n&Pr)>>>20)-Fn|0}(r),n<kn?Xn(0,r):n>In?r<0?Tr:Un:(n<=Tn?(n+=52,t=Dn):t=1,Rn.assign(r,Qn,1,0),e=Qn[0],e&=Jn,t*xn(e|=n+Fn<<20,Qn[1])))}function ne(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ie=16777216,oe=5.960464477539063e-8,ae=ne(20),ue=ne(20),fe=ne(20),ce=ne(20);function le(r,n,e,t,i,o,a,u,f){var c,l,s,p,v,y,g,d,b;for(p=o,b=t[e],d=e,v=0;d>0;v++)l=oe*b|0,ce[v]=b-ie*l|0,b=t[d-1]+l,d-=1;if(b=re(b,i),b-=8*Fr(.125*b),b-=g=0|b,s=0,i>0?(g+=v=ce[e-1]>>24-i,ce[e-1]-=v<<24-i,s=ce[e-1]>>23-i):0===i?s=ce[e-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,c=0,v=0;v<e;v++)d=ce[v],0===c?0!==d&&(c=1,ce[v]=16777216-d):ce[v]=16777215-d;if(i>0)switch(i){case 1:ce[e-1]&=8388607;break;case 2:ce[e-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=re(1,i)))}if(0===b){for(d=0,v=e-1;v>=o;v--)d|=ce[v];if(0===d){for(y=1;0===ce[o-y];y++);for(v=e+1;v<=e+y;v++){for(f[u+v]=ee[a+v],l=0,d=0;d<=u;d++)l+=r[d]*f[u+(v-d)];t[v]=l}return le(r,n,e+=y,t,i,o,a,u,f)}}if(0===b)for(e-=1,i-=24;0===ce[e];)e-=1,i-=24;else(b=re(b,-i))>=ie?(l=oe*b|0,ce[e]=b-ie*l|0,i+=24,ce[e+=1]=l):ce[e]=0|b;for(l=re(1,i),v=e;v>=0;v--)t[v]=l*ce[v],l*=oe;for(v=e;v>=0;v--){for(l=0,y=0;y<=p&&y<=e-v;y++)l+=te[y]*t[v+y];fe[e-v]=l}for(l=0,v=e;v>=0;v--)l+=fe[v];for(n[0]=0===s?l:-l,l=fe[0]-l,v=1;v<=e;v++)l+=fe[v];return n[1]=0===s?l:-l,7&g}function se(r,n,e,t){var i,o,a,u,f,c,l;for(4,(o=(e-3)/24|0)<0&&(o=0),u=e-24*(o+1),c=o-(a=t-1),l=a+4,f=0;f<=l;f++)ae[f]=c<0?0:ee[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*ae[a+(f-c)];ue[f]=i}return 4,le(r,n,4,ue,u,4,o,a,ae)}var pe=Math.round,ve=.6366197723675814,ye=1.5707963267341256,ge=6077100506506192e-26,de=6077100506303966e-26,be=20222662487959506e-37,we=20222662487111665e-37,he=84784276603689e-45,me=2047;function je(r,n,e){var t,i,o,a,u;return o=r-(t=pe(r*ve))*ye,a=t*ge,u=n>>20|0,e[0]=o-a,u-(fn(e[0])>>20&me)>16&&(a=t*be-((i=o)-(o=i-(a=t*de))-a),e[0]=o-a,u-(fn(e[0])>>20&me)>49&&(a=t*he-((i=o)-(o=i-(a=t*we))-a),e[0]=o-a)),e[1]=o-e[0]-a,t}var Ae=0,_e=16777216,Ee=1.5707963267341256,Ne=6077100506506192e-26,Oe=2*Ne,Se=3*Ne,xe=4*Ne,Ue=598523,Fe=1072243195,Ie=1073928572,Te=1074752122,ke=1074977148,Ve=1075183036,Pe=1075388923,Ge=1075594811,Le=1094263291,$e=[0,0,0],Ce=[0,0];function He(r,n){var e,t,i,o,a,u,f;if((i=fn(r)&Vr|0)<=Fe)return n[0]=r,n[1]=0,0;if(i<=Te)return(i&hn)===Ue?je(r,i,n):i<=Ie?r>0?(f=r-Ee,n[0]=f-Ne,n[1]=f-n[0]-Ne,1):(f=r+Ee,n[0]=f+Ne,n[1]=f-n[0]+Ne,-1):r>0?(f=r-2*Ee,n[0]=f-Oe,n[1]=f-n[0]-Oe,2):(f=r+2*Ee,n[0]=f+Oe,n[1]=f-n[0]+Oe,-2);if(i<=Ge)return i<=Ve?i===ke?je(r,i,n):r>0?(f=r-3*Ee,n[0]=f-Se,n[1]=f-n[0]-Se,3):(f=r+3*Ee,n[0]=f+Se,n[1]=f-n[0]+Se,-3):i===Pe?je(r,i,n):r>0?(f=r-4*Ee,n[0]=f-xe,n[1]=f-n[0]-xe,4):(f=r+4*Ee,n[0]=f+xe,n[1]=f-n[0]+xe,-4);if(i<Le)return je(r,i,n);if(i>=Pr)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return jn[0]=r,An[mn]}(r),f=xn(i-((t=(i>>20)-1046)<<20|0),e),a=0;a<2;a++)$e[a]=0|f,f=(f-$e[a])*_e;for($e[2]=f,o=3;$e[o-1]===Ae;)o-=1;return u=se($e,Ce,t,o),r<0?(n[0]=-Ce[0],n[1]=-Ce[1],-u):(n[0]=Ce[0],n[1]=Ce[1],u)}var Me=1072243195,We=1045430272,Be=[0,0];var Re=3.141592653589793,Ze=2.5066282746310007;function Xe(r){return Ir(r/2)}function Ye(r){return Xe(r>0?r-1:r+1)}var qe=Math.sqrt,ze=!0===tn?0:1,De=new Zr(1),Je=new Hr(De.buffer);function Ke(r,n){return De[0]=r,Je[ze]=n>>>0,De[0]}function Qe(r){return 0|r}var rt=1072693247,nt=1e300,et=1e-300;var tt=!0===tn?1:0,it=new Zr(1),ot=new Hr(it.buffer);function at(r,n){return it[0]=r,ot[tt]=n>>>0,it[0]}var ut=1048575,ft=1048576,ct=1072693248,lt=536870912,st=524288,pt=20,vt=9007199254740992,yt=.9617966939259756,gt=.9617967009544373,dt=-7.028461650952758e-9,bt=[1,1.5],wt=[0,.5849624872207642],ht=[0,1.350039202129749e-8];var mt=1.4426950408889634,jt=1.4426950216293335,At=1.9259629911266175e-8;var _t=.6931471805599453;var Et=1048576,Nt=1071644672,Ot=20,St=.6931471824645996,xt=-1.904654299957768e-9;var Ut=1072693247,Ft=1105199104,It=1139802112,Tt=1083179008,kt=1072693248,Vt=1083231232,Pt=3230714880,Gt=31,Lt=1e300,$t=1e-300,Ct=8008566259537294e-32,Ht=[0,0],Mt=[0,0];function Wt(r,n){var e,t,i,o,a,u,f,c,l,s,p,v,y,g;if(Ur(r)||Ur(n))return NaN;if(Rn.assign(n,Ht,1,0),a=Ht[0],0===Ht[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return qe(r);if(-.5===n)return 1/qe(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Vn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:kr(r)<1==(n===Un)?0:Un}(r,n)}if(Rn.assign(r,Ht,1,0),o=Ht[0],0===Ht[1]){if(0===o)return function(r,n){return n===Tr?Un:n===Un?0:n>0?Ye(n)?r:0:Ye(n)?Xn(Un,r):Un}(r,n);if(1===r)return 1;if(-1===r&&Ye(n))return-1;if(Vn(r))return r===Tr?Wt(-0,-n):n<0?0:Un}if(r<0&&!1===Ir(n))return(r-r)/(r-r);if(i=kr(r),e=o&Vr|0,t=a&Vr|0,f=a>>>Gt|0,u=(u=o>>>Gt|0)&&Ye(n)?-1:1,t>Ft){if(t>It)return function(r,n){return(fn(r)&Vr)<=rt?n<0?nt*nt:et*et:n>0?nt*nt:et*et}(r,n);if(e<Ut)return 1===f?u*Lt*Lt:u*$t*$t;if(e>kt)return 0===f?u*Lt*Lt:u*$t*$t;p=function(r,n){var e,t,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*At-o*mt)-((t=Ke(t=(a=jt*i)+u,0))-a),r[0]=t,r[1]=e,r}(Mt,i)}else p=function(r,n,e){var t,i,o,a,u,f,c,l,s,p,v,y,g,d,b,w,h,m,j,A,_;return m=0,e<ft&&(m-=53,e=fn(n*=vt)),m+=(e>>pt)-Fn|0,e=(j=e&ut|0)|ct|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,e-=ft),a=Ke(i=(w=(n=at(n,e))-(c=bt[A]))*(h=1/(n+c)),0),t=(e>>1|lt)+st,f=at(0,t+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Ke(f=3+(o=a*a)+(b+=(u=h*(w-a*f-a*(n-(f-c))))*(a+i)),0),s=Ke(s=(w=a*f)+(h=u*f+(b-(f-3-o))*i),0),p=gt*s,g=(v=dt*s+(h-(s-w))*yt+ht[A])-((y=Ke(y=p+v+(l=wt[A])+(d=m),0))-d-l-p),r[0]=y,r[1]=g,r}(Mt,i,e);if(v=(s=(n-(c=Ke(n,0)))*p[0]+n*p[1])+(l=c*p[0]),Rn.assign(v,Ht,1,0),y=Qe(Ht[0]),g=Qe(Ht[1]),y>=Tt){if(0!=(y-Tt|g))return u*Lt*Lt;if(s+Ct>v-l)return u*Lt*Lt}else if((y&Vr)>=Vt){if(0!=(y-Pt|g))return u*$t*$t;if(s<=v-l)return u*$t*$t}return v=function(r,n,e){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&Vr|0)>>Ot)-Fn|0,c=0,l>Nt&&(i=at(0,((c=r+(Et>>s+1)>>>0)&~(hn>>(s=((c&Vr)>>Ot)-Fn|0)))>>>0),c=(c&hn|Et)>>Ot-s>>>0,r<0&&(c=-c),n-=i),r=Qe(r=fn(f=1-((f=(o=(i=Ke(i=e+n,0))*St)+(a=(e-(i-n))*_t+i*xt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Ot>>>0)>>Ot<=0?re(f,c):at(f,r)}(y,l,s),u*v}var Bt=Math.ceil;function Rt(r){return r<0?Bt(r):Fr(r)}var Zt=.6931471803691238,Xt=1.9082149292705877e-10,Yt=1.4426950408889634,qt=709.782712893384,zt=-745.1332191019411,Dt=1/(1<<28),Jt=-Dt;function Kt(r){var n;return Ur(r)||r===Un?r:r===Tr?0:r>qt?Un:r<zt?0:r>Jt&&r<Dt?1+r:function(r,n,e){var t,i,o,a;return re(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-(n=Rt(r<0?Yt*r-.5:Yt*r+.5))*Zt,n*Xt,n)}var Qt=143.01608;function ri(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Kt(r),e=r>Qt?(t=Wt(r,.5*r-.25))*(t/e):Wt(r,r-.5)/e,Ze*e*n}var ni=.5772156649015329;function ei(r,n){return n/((1+ni*r)*r)}function ti(r){var n,e,t,i;if(Ir(r)&&r<0||r===Tr||Ur(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Tr}(r)?Tr:Un;if(r>171.61447887182297)return Un;if(r<-170.5674972726612)return 0;if((e=kr(r))>33)return r>=0?ri(r):(n=0==(1&(t=Fr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=fn(r),(n&=Vr)<=Me)return n<We?r:dn(r,0);if(n>=Pr)return NaN;switch(3&He(r,Be)){case 0:return dn(Be[0],Be[1]);case 1:return cn(Be[0],Be[1]);case 2:return-dn(Be[0],Be[1]);default:return-cn(Be[0],Be[1])}}(Re*i),n*Re/(kr(i)*ri(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ei(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ei(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var ii=.34657359027997264;var oi=709.782712893384,ai=.6931471803691238,ui=1.9082149292705877e-10,fi=1.4426950408889634,ci=38.816242111356935,li=1.0397207708399179;function si(r){var n,e,t,i,o,a,u,f,c,l,s,p,v;if(r===Un||Ur(r))return r;if(r===Tr)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=ci){if(t)return-1;if(f>=oi)return Un}if(a=0|fn(f),f>ii)f<li?t?(i=r+ai,o=-ui,v=-1):(i=r-ai,o=ui,v=1):(v=t?fi*r-.5:fi*r+.5,i=r-(s=v|=0)*ai,o=s*ui),l=i-(r=i-o)-o;else{if(a<1016070144)return r;v=0}return u=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(s=3-u*n))/(6-r*s)),0===v?r-(r*p-c):(e=xn(Fn+v<<20,0),p=r*(p-l)-l,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=at(f,i=fn(f)+(v<<20)|0):f*=e,f-1):(s=1,v<20?f=(s=at(s,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(s=at(s,i=Fn-v<<20|0))),f+=1),f*=e))}var pi=.6931471803691238,vi=1.9082149292705877e-10,yi=.41421356237309503,gi=-.2928932188134525,di=1.862645149230957e-9,bi=5551115123125783e-32,wi=9007199254740992,hi=.6666666666666666;var mi=.6931471803691238,ji=1.9082149292705877e-10,Ai=0x40000000000000,_i=.3333333333333333,Ei=1048575,Ni=2146435072,Oi=1048576,Si=1072693248;function xi(r){var n,e,t,i,o,a,u,f,c,l,s,p;return 0===r?Tr:Ur(r)||r<0?NaN:(o=0,(e=fn(r))<Oi&&(o-=54,e=fn(r*=Ai)),e>=Ni?r+r:(o+=(e>>20)-Fn|0,o+=(f=(e&=Ei)+614244&1048576|0)>>20|0,u=(r=at(r,e|f^Si))-1,(Ei&2+e)<3?0===u?0===o?0:o*mi+o*ji:(a=u*u*(.5-_i*u),0===o?u-a:o*mi-(a-o*ji-u)):(f=e-398458|0,c=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-l*(n+a)):o*mi-(n-(l*(n+a)+o*ji)-u)):0===o?u-l*(u-a):o*mi-(l*(u-a)-o*ji-u))))}var Ui=2220446049250313e-31;var Fi=.15896368026733398,Ii=.5281534194946289,Ti=.45201730728149414;function ki(r,n,e){var t,i,o,a,u,f,c;if(r<Ui)return-xi(r);if(0===n||0===e)return 0;if(i=0,r>2){if(r>=3){do{e-=1,i+=xi(r-=1)}while(r>=3);e=r-2}return a=0===(u=e)?-.01803556856784494:((u<0?-u:u)<=1?(f=u*(.02512664961998968+u*(.049410315156753225+u*(.0172491608709614+u*(u*(u*(0*u-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+u*(1.962029871977952+u*(1.4801966942423133+u*(.5413914320717209+u*(.09885042511280101+u*(.008213096746488934+u*(.00022493629192211576+-2.2335276320861708e-7*u))))))):(f=0+(u=1/u)*(u*(u*(u*(.0172491608709614+u*(.049410315156753225+u*(.02512664961998968+-.01803556856784494*u)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=u*(.00022493629192211576+u*(.008213096746488934+u*(.09885042511280101+u*(.5413914320717209+u*(1.4801966942423133+u*(1.962029871977952+1*u))))))-2.2335276320861708e-7),f/c),i+=(o=e*(r+1))*Fi+o*a}return r<1&&(i+=-xi(r),e=n,n=r,r+=1),r<=1.5?(o=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),i+=(t=n*e)*Ii+t*o):(o=e*n,a=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),i+=o*Ti+o*a)}function Vi(r){return Ur(r)?NaN:r<0?r<-.5?ti(1+r)-1:si(-function(r){var n,e,t,i,o,a,u,f,c,l;if(r<-1||Ur(r))return NaN;if(-1===r)return Tr;if(r===Un)return r;if(0===r)return r;if(l=1,(t=r<0?-r:r)<yi){if(t<di)return t<bi?r:r-r*r*.5;r>gi&&(l=0,i=r,e=1)}return 0!==l&&(t<wi?(o=(l=((e=fn(c=1+r))>>20)-Fn)>0?1-(c-r):r-(c-1),o/=c):(l=((e=fn(c=r))>>20)-Fn,o=0),(e&=1048575)<434334?c=at(c,1072693248|e):(l+=1,c=at(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?l*pi+(o+=l*vi):l*pi-((f=n*(1-hi*i))-(l*vi+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(n-a*(n+f)):l*pi-(n-(a*(n+f)+(l*vi+o))-i))}(r)+ki(r+2,r+1,r)):r<2?si(ki(r+1,r,r-1)):ti(1+r)-1}function Pi(r){return xr(r,Vi)}export{Pi as default};
//# sourceMappingURL=mod.js.map

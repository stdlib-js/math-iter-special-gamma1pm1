// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var n,t,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,a=parseInt(t,10),!isFinite(a)){if(!e(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(t=(-a).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=a.toString(n),a||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,h,"$1e"),t=s.call(t,b,"e"),t=s.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,v,"e-0$1"),r.alternate&&(t=s.call(t,y,"$1."),t=s.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var j=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function N(r){var n,e,t,o,u,f,c,l,s,p,v,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if("string"==typeof(t=r[l]))f+=t;else{if(n=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,A(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=a(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!A(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(u)?String(t.arg):j(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,e,t,i;for(e=[],i=0,t=O.exec(r);t;)(n=r.slice(i,O.lastIndex-t[0].length)).length&&e.push(n),e.push(S(t)),i=O.lastIndex,t=O.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function U(r){var n,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[x(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return N.apply(null,n)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,n)||G.call(r,n)?(t=r.__proto__,r.__proto__=F,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&k&&k.call(r,n,e.get),u&&V&&V.call(r,n,e.set),r};var L=T;function $(r,n,e){L(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function Z(r,n){return null!=r&&R.call(r,n)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=W()?function(r){var n,e,t;if(null==r)return B.call(r);e=r[Y],n=Z(r,Y);try{r[Y]=void 0}catch(n){return B.call(r)}return t=B.call(r),n?r[Y]=e:delete r[Y],t}:function(r){return B.call(r)},z=Boolean,D=Boolean.prototype.toString,J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,nr="object"==typeof window?window:null,er="object"==typeof globalThis?globalThis:null,tr=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=tr.document&&tr.document.childNodes,or=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var ar=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",ar);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function cr(r){return null!==r&&"object"==typeof r}function lr(r){var n,e,t,i;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(n=ar.exec(t.toString()))return n[1]}return cr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}$(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var e,t;if(!fr(n))return!1;if(0===(e=n.length))return!1;for(t=0;t<e;t++)if(!1===r(n[t]))return!1;return!0}}(cr));var sr="function"==typeof C||"object"==typeof or||"function"==typeof ir?function(r){return lr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?lr(r).toLowerCase():n};function pr(r){return"function"===sr(r)}function vr(r){return"number"==typeof r}var yr=Number,dr=yr.prototype.toString,gr=W();function br(r){return"object"==typeof r&&(r instanceof yr||(gr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function hr(r){return vr(r)||br(r)}$(hr,"isPrimitive",vr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Nr(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(n=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!n||!Z(r,"constructor")&&Z(n,"constructor")&&pr(n.constructor)&&"[object Function]"===q(n.constructor)&&Z(n,"isPrototypeOf")&&pr(n.isPrototypeOf)&&(n===Er||function(r){var n;for(n in r)if(!Z(r,n))return!1;return!0}(r)))}function Or(r,n,e){var t,i,o,u,a,f;if(f=typeof(a=r),null===a||"object"!==f&&"function"!==f||!pr(a.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(n))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",n));if(t={invalid:NaN},arguments.length>2&&(o=function(r,n){return Nr(n)?(Z(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",n))}(t,e),o))throw o;return $(i={},"next",(function(){var e;return u?{done:!0}:(e=r.next()).done?(u=!0,e):{value:vr(e.value)?n(e.value):t.invalid,done:!1}})),$(i,"return",(function(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(i,mr,(function(){return Or(r[mr](),n,t)})),i}function Sr(r){return r!=r}var xr=Math.floor;function Ur(r){return xr(r)===r}var Tr=yr.NEGATIVE_INFINITY;function Fr(r){return Math.abs(r)}var Ir,kr=2147483647,Vr=2146435072,Pr="function"==typeof Uint32Array,Gr="function"==typeof Uint32Array?Uint32Array:null,Lr="function"==typeof Uint32Array?Uint32Array:void 0;Ir=function(){var r,n,e;if("function"!=typeof Gr)return!1;try{n=new Gr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r,Cr=Ir,Hr="function"==typeof Float64Array,Mr="function"==typeof Float64Array?Float64Array:null,Wr="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var r,n,e;if("function"!=typeof Mr)return!1;try{n=new Mr([1,3.14,-3.14,NaN]),e=n,r=(Hr&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br,Rr=$r,Zr="function"==typeof Uint8Array,Xr="function"==typeof Uint8Array?Uint8Array:null,Yr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,n,e;if("function"!=typeof Xr)return!1;try{n=new Xr(n=[1,3.14,-3.14,256,257]),e=n,r=(Zr&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr,zr=Br,Dr="function"==typeof Uint16Array,Jr="function"==typeof Uint16Array?Uint16Array:null,Kr="function"==typeof Uint16Array?Uint16Array:void 0;qr=function(){var r,n,e;if("function"!=typeof Jr)return!1;try{n=new Jr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Dr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,rn={uint16:qr,uint8:zr};(Qr=new rn.uint16(1))[0]=4660;var nn=52===new rn.uint8(Qr.buffer)[0],en=!0===nn?1:0,tn=new Rr(1),on=new Cr(tn.buffer);function un(r){return tn[0]=r,on[en]}function an(r,n){var e,t,i,o;return i=(o=r*r)*o,t=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(e=.5*o))+(1-i-e+(o*t-r*n))}var fn=-.16666666666666632,cn=.00833333333332249,ln=-.0001984126982985795,sn=27557313707070068e-22,pn=-2.5050760253406863e-8,vn=1.58969099521155e-10;function yn(r,n){var e,t,i;return e=cn+(i=r*r)*(ln+i*sn)+i*(i*i)*(pn+i*vn),t=i*r,0===n?r+t*(fn+i*e):r-(i*(.5*n-t*e)-n-t*fn)}var dn,gn,bn=1048575,hn=!0===nn?0:1,wn=new Rr(1),mn=new Cr(wn.buffer);!0===nn?(dn=1,gn=0):(dn=0,gn=1);var jn={HIGH:dn,LOW:gn},An=new Rr(1),_n=new Cr(An.buffer),En=jn.HIGH,Nn=jn.LOW;function On(r,n){return _n[En]=r,_n[Nn]=n,An[0]}var Sn=Number.POSITIVE_INFINITY,xn=1023,Un=1023,Tn=-1023,Fn=-1074;function In(r){return r===Sn||r===Tr}var kn,Vn,Pn=2147483648;!0===nn?(kn=1,Vn=0):(kn=0,Vn=1);var Gn={HIGH:kn,LOW:Vn},Ln=new Rr(1),$n=new Cr(Ln.buffer),Cn=Gn.HIGH,Hn=Gn.LOW;function Mn(r,n,e,t){return Ln[0]=r,n[t]=$n[Cn],n[t+e]=$n[Hn],n}function Wn(r){return Mn(r,[0,0],1,0)}$(Wn,"assign",Mn);var Bn=[0,0];function Rn(r,n){var e,t;return Wn.assign(r,Bn,1,0),e=Bn[0],e&=kr,t=un(n),On(e|=t&=Pn,Bn[1])}var Zn=22250738585072014e-324,Xn=4503599627370496;function Yn(r,n,e,t){return Sr(r)||In(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Fr(r)<Zn?(n[t]=r*Xn,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}$((function(r){return Yn(r,[0,0],1,0)}),"assign",Yn);var qn=2220446049250313e-31,zn=2148532223,Dn=[0,0],Jn=[0,0];function Kn(r,n){var e,t;return 0===n||0===r||Sr(r)||In(r)?r:(Yn(r,Dn,1,0),r=Dn[0],n+=Dn[1],n+=function(r){var n=un(r);return(n=(n&Vr)>>>20)-xn|0}(r),n<Fn?Rn(0,r):n>Un?r<0?Tr:Sn:(n<=Tn?(n+=52,t=qn):t=1,Wn.assign(r,Jn,1,0),e=Jn[0],e&=zn,t*On(e|=n+xn<<20,Jn[1])))}function Qn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var re=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ee=16777216,te=5.960464477539063e-8,ie=Qn(20),oe=Qn(20),ue=Qn(20),ae=Qn(20);function fe(r,n,e,t,i,o,u,a,f){var c,l,s,p,v,y,d,g,b;for(p=o,b=t[e],g=e,v=0;g>0;v++)l=te*b|0,ae[v]=b-ee*l|0,b=t[g-1]+l,g-=1;if(b=Kn(b,i),b-=8*xr(.125*b),b-=d=0|b,s=0,i>0?(d+=v=ae[e-1]>>24-i,ae[e-1]-=v<<24-i,s=ae[e-1]>>23-i):0===i?s=ae[e-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,c=0,v=0;v<e;v++)g=ae[v],0===c?0!==g&&(c=1,ae[v]=16777216-g):ae[v]=16777215-g;if(i>0)switch(i){case 1:ae[e-1]&=8388607;break;case 2:ae[e-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=Kn(1,i)))}if(0===b){for(g=0,v=e-1;v>=o;v--)g|=ae[v];if(0===g){for(y=1;0===ae[o-y];y++);for(v=e+1;v<=e+y;v++){for(f[a+v]=re[u+v],l=0,g=0;g<=a;g++)l+=r[g]*f[a+(v-g)];t[v]=l}return fe(r,n,e+=y,t,i,o,u,a,f)}}if(0===b)for(e-=1,i-=24;0===ae[e];)e-=1,i-=24;else(b=Kn(b,-i))>=ee?(l=te*b|0,ae[e]=b-ee*l|0,i+=24,ae[e+=1]=l):ae[e]=0|b;for(l=Kn(1,i),v=e;v>=0;v--)t[v]=l*ae[v],l*=te;for(v=e;v>=0;v--){for(l=0,y=0;y<=p&&y<=e-v;y++)l+=ne[y]*t[v+y];ue[e-v]=l}for(l=0,v=e;v>=0;v--)l+=ue[v];for(n[0]=0===s?l:-l,l=ue[0]-l,v=1;v<=e;v++)l+=ue[v];return n[1]=0===s?l:-l,7&d}function ce(r,n,e,t){var i,o,u,a,f,c,l;for((o=(e-3)/24|0)<0&&(o=0),a=e-24*(o+1),c=o-(u=t-1),l=u+4,f=0;f<=l;f++)ie[f]=c<0?0:re[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*ie[u+(f-c)];oe[f]=i}return fe(r,n,4,oe,a,4,o,u,ie)}var le=Math.round,se=.6366197723675814,pe=1.5707963267341256,ve=6077100506506192e-26,ye=6077100506303966e-26,de=20222662487959506e-37,ge=20222662487111665e-37,be=84784276603689e-45,he=2047;function we(r,n,e){var t,i,o,u,a;return o=r-(t=le(r*se))*pe,u=t*ve,a=n>>20|0,e[0]=o-u,a-(un(e[0])>>20&he)>16&&(u=t*de-((i=o)-(o=i-(u=t*ye))-u),e[0]=o-u,a-(un(e[0])>>20&he)>49&&(u=t*be-((i=o)-(o=i-(u=t*ge))-u),e[0]=o-u)),e[1]=o-e[0]-u,t}var me=0,je=16777216,Ae=1.5707963267341256,_e=6077100506506192e-26,Ee=2*_e,Ne=3*_e,Oe=4*_e,Se=598523,xe=1072243195,Ue=1073928572,Te=1074752122,Fe=1074977148,Ie=1075183036,ke=1075388923,Ve=1075594811,Pe=1094263291,Ge=[0,0,0],Le=[0,0];function $e(r,n){var e,t,i,o,u,a,f;if((i=un(r)&kr|0)<=xe)return n[0]=r,n[1]=0,0;if(i<=Te)return(i&bn)===Se?we(r,i,n):i<=Ue?r>0?(f=r-Ae,n[0]=f-_e,n[1]=f-n[0]-_e,1):(f=r+Ae,n[0]=f+_e,n[1]=f-n[0]+_e,-1):r>0?(f=r-2*Ae,n[0]=f-Ee,n[1]=f-n[0]-Ee,2):(f=r+2*Ae,n[0]=f+Ee,n[1]=f-n[0]+Ee,-2);if(i<=Ve)return i<=Ie?i===Fe?we(r,i,n):r>0?(f=r-3*Ae,n[0]=f-Ne,n[1]=f-n[0]-Ne,3):(f=r+3*Ae,n[0]=f+Ne,n[1]=f-n[0]+Ne,-3):i===ke?we(r,i,n):r>0?(f=r-4*Ae,n[0]=f-Oe,n[1]=f-n[0]-Oe,4):(f=r+4*Ae,n[0]=f+Oe,n[1]=f-n[0]+Oe,-4);if(i<Pe)return we(r,i,n);if(i>=Vr)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return wn[0]=r,mn[hn]}(r),f=On(i-((t=(i>>20)-1046)<<20|0),e),u=0;u<2;u++)Ge[u]=0|f,f=(f-Ge[u])*je;for(Ge[2]=f,o=3;Ge[o-1]===me;)o-=1;return a=ce(Ge,Le,t,o),r<0?(n[0]=-Le[0],n[1]=-Le[1],-a):(n[0]=Le[0],n[1]=Le[1],a)}var Ce=1072243195,He=1045430272,Me=[0,0],We=3.141592653589793,Be=2.5066282746310007;function Re(r){return Ur(r/2)}function Ze(r){return Re(r>0?r-1:r+1)}var Xe=Math.sqrt,Ye=!0===nn?0:1,qe=new Rr(1),ze=new Cr(qe.buffer);function De(r,n){return qe[0]=r,ze[Ye]=n>>>0,qe[0]}function Je(r){return 0|r}var Ke=1072693247,Qe=1e300,rt=1e-300,nt=!0===nn?1:0,et=new Rr(1),tt=new Cr(et.buffer);function it(r,n){return et[0]=r,tt[nt]=n>>>0,et[0]}var ot=1048575,ut=1048576,at=1072693248,ft=536870912,ct=524288,lt=20,st=9007199254740992,pt=.9617966939259756,vt=.9617967009544373,yt=-7.028461650952758e-9,dt=[1,1.5],gt=[0,.5849624872207642],bt=[0,1.350039202129749e-8],ht=1.4426950408889634,wt=1.4426950216293335,mt=1.9259629911266175e-8,jt=.6931471805599453,At=1048576,_t=1071644672,Et=20,Nt=.6931471824645996,Ot=-1.904654299957768e-9,St=1072693247,xt=1105199104,Ut=1139802112,Tt=1083179008,Ft=1072693248,It=1083231232,kt=3230714880,Vt=31,Pt=1e300,Gt=1e-300,Lt=8008566259537294e-32,$t=[0,0],Ct=[0,0];function Ht(r,n){var e,t,i,o,u,a,f,c,l,s,p,v,y,d;if(Sr(r)||Sr(n))return NaN;if(Wn.assign(n,$t,1,0),u=$t[0],0===$t[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Xe(r);if(-.5===n)return 1/Xe(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(In(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Fr(r)<1==(n===Sn)?0:Sn}(r,n)}if(Wn.assign(r,$t,1,0),o=$t[0],0===$t[1]){if(0===o)return function(r,n){return n===Tr?Sn:n===Sn?0:n>0?Ze(n)?r:0:Ze(n)?Rn(Sn,r):Sn}(r,n);if(1===r)return 1;if(-1===r&&Ze(n))return-1;if(In(r))return r===Tr?Ht(-0,-n):n<0?0:Sn}if(r<0&&!1===Ur(n))return(r-r)/(r-r);if(i=Fr(r),e=o&kr|0,t=u&kr|0,f=u>>>Vt|0,a=(a=o>>>Vt|0)&&Ze(n)?-1:1,t>xt){if(t>Ut)return function(r,n){return(un(r)&kr)<=Ke?n<0?Qe*Qe:rt*rt:n>0?Qe*Qe:rt*rt}(r,n);if(e<St)return 1===f?a*Pt*Pt:a*Gt*Gt;if(e>Ft)return 0===f?a*Pt*Pt:a*Gt*Gt;p=function(r,n){var e,t,i,o,u,a,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(a=i*mt-o*ht)-((t=De(t=(u=wt*i)+a,0))-u),r[0]=t,r[1]=e,r}(Ct,i)}else p=function(r,n,e){var t,i,o,u,a,f,c,l,s,p,v,y,d,g,b,h,w,m,j,A,_;return m=0,e<ut&&(m-=53,e=un(n*=st)),m+=(e>>lt)-xn|0,e=(j=e&ot|0)|at|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,e-=ut),u=De(i=(h=(n=it(n,e))-(c=dt[A]))*(w=1/(n+c)),0),t=(e>>1|ft)+ct,f=it(0,t+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=De(f=3+(o=u*u)+(b+=(a=w*(h-u*f-u*(n-(f-c))))*(u+i)),0),s=De(s=(h=u*f)+(w=a*f+(b-(f-3-o))*i),0),p=vt*s,d=(v=yt*s+(w-(s-h))*pt+bt[A])-((y=De(y=p+v+(l=gt[A])+(g=m),0))-g-l-p),r[0]=y,r[1]=d,r}(Ct,i,e);if(v=(s=(n-(c=De(n,0)))*p[0]+n*p[1])+(l=c*p[0]),Wn.assign(v,$t,1,0),y=Je($t[0]),d=Je($t[1]),y>=Tt){if(0!=(y-Tt|d))return a*Pt*Pt;if(s+Lt>v-l)return a*Pt*Pt}else if((y&kr)>=It){if(0!=(y-kt|d))return a*Gt*Gt;if(s<=v-l)return a*Gt*Gt}return v=function(r,n,e){var t,i,o,u,a,f,c,l,s,p;return s=((l=r&kr|0)>>Et)-xn|0,c=0,l>_t&&(i=it(0,((c=r+(At>>s+1)>>>0)&~(bn>>(s=((c&kr)>>Et)-xn|0)))>>>0),c=(c&bn|At)>>Et-s>>>0,r<0&&(c=-c),n-=i),r=Je(r=un(f=1-((f=(o=(i=De(i=e+n,0))*Nt)+(u=(e-(i-n))*jt+i*Ot))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<Et>>>0)>>Et<=0?Kn(f,c):it(f,r)}(y,l,s),a*v}var Mt=Math.ceil;function Wt(r){return r<0?Mt(r):xr(r)}var Bt=.6931471803691238,Rt=1.9082149292705877e-10,Zt=1.4426950408889634,Xt=709.782712893384,Yt=-745.1332191019411,qt=1/(1<<28),zt=-qt;function Dt(r){var n;return Sr(r)||r===Sn?r:r===Tr?0:r>Xt?Sn:r<Yt?0:r>zt&&r<qt?1+r:function(r,n,e){var t,i,o,u;return Kn(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-(n=Wt(r<0?Zt*r-.5:Zt*r+.5))*Bt,n*Rt,n)}var Jt=143.01608;function Kt(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Dt(r),e=r>Jt?(t=Ht(r,.5*r-.25))*(t/e):Ht(r,r-.5)/e,Be*e*n}var Qt=.5772156649015329;function ri(r,n){return n/((1+Qt*r)*r)}function ni(r){var n,e,t,i;if(Ur(r)&&r<0||r===Tr||Sr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Tr}(r)?Tr:Sn;if(r>171.61447887182297)return Sn;if(r<-170.5674972726612)return 0;if((e=Fr(r))>33)return r>=0?Kt(r):(n=0==(1&(t=xr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=un(r),(n&=kr)<=Ce)return n<He?r:yn(r,0);if(n>=Vr)return NaN;switch(3&$e(r,Me)){case 0:return yn(Me[0],Me[1]);case 1:return an(Me[0],Me[1]);case 2:return-yn(Me[0],Me[1]);default:return-an(Me[0],Me[1])}}(We*i),n*We/(Fr(i)*Kt(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ri(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ri(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var ei=.34657359027997264,ti=709.782712893384,ii=.6931471803691238,oi=1.9082149292705877e-10,ui=1.4426950408889634,ai=38.816242111356935,fi=1.0397207708399179;function ci(r){var n,e,t,i,o,u,a,f,c,l,s,p,v;if(r===Sn||Sr(r))return r;if(r===Tr)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=ai){if(t)return-1;if(f>=ti)return Sn}if(u=0|un(f),f>ei)f<fi?t?(i=r+ii,o=-oi,v=-1):(i=r-ii,o=oi,v=1):(v=t?ui*r-.5:ui*r+.5,i=r-(s=v|=0)*ii,o=s*oi),l=i-(r=i-o)-o;else{if(u<1016070144)return r;v=0}return a=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((a-(s=3-a*n))/(6-r*s)),0===v?r-(r*p-c):(e=On(xn+v<<20,0),p=r*(p-l)-l,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=it(f,i=un(f)+(v<<20)|0):f*=e,f-1):(s=1,v<20?f=(s=it(s,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(s=it(s,i=xn-v<<20|0))),f+=1),f*=e))}var li=.6931471803691238,si=1.9082149292705877e-10,pi=.41421356237309503,vi=-.2928932188134525,yi=1.862645149230957e-9,di=5551115123125783e-32,gi=9007199254740992,bi=.6666666666666666,hi=.6931471803691238,wi=1.9082149292705877e-10,mi=0x40000000000000,ji=.3333333333333333,Ai=1048575,_i=2146435072,Ei=1048576,Ni=1072693248;function Oi(r){var n,e,t,i,o,u,a,f,c,l,s,p;return 0===r?Tr:Sr(r)||r<0?NaN:(o=0,(e=un(r))<Ei&&(o-=54,e=un(r*=mi)),e>=_i?r+r:(o+=(e>>20)-xn|0,o+=(f=614244+(e&=Ai)&1048576|0)>>20|0,a=(r=it(r,e|f^Ni))-1,(Ai&2+e)<3?0===a?0===o?0:o*hi+o*wi:(u=a*a*(.5-ji*a),0===o?a-u:o*hi-(u-o*wi-a)):(f=e-398458|0,c=440401-e|0,i=(s=(p=(l=a/(2+a))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),u=t+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-l*(n+u)):o*hi-(n-(l*(n+u)+o*wi)-a)):0===o?a-l*(a-u):o*hi-(l*(a-u)-o*wi-a))))}var Si=2220446049250313e-31,xi=.15896368026733398,Ui=.5281534194946289,Ti=.45201730728149414;function Fi(r,n,e){var t,i,o,u,a,f,c;if(r<Si)return-Oi(r);if(0===n||0===e)return 0;if(i=0,r>2){if(r>=3){do{e-=1,i+=Oi(r-=1)}while(r>=3);e=r-2}return u=0===(a=e)?-.01803556856784494:((a<0?-a:a)<=1?(f=a*(.02512664961998968+a*(.049410315156753225+a*(.0172491608709614+a*(a*(a*(0*a-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+a*(1.962029871977952+a*(1.4801966942423133+a*(.5413914320717209+a*(.09885042511280101+a*(.008213096746488934+a*(.00022493629192211576+-2.2335276320861708e-7*a))))))):(f=0+(a=1/a)*(a*(a*(a*(.0172491608709614+a*(.049410315156753225+a*(.02512664961998968+-.01803556856784494*a)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=a*(.00022493629192211576+a*(.008213096746488934+a*(.09885042511280101+a*(.5413914320717209+a*(1.4801966942423133+a*(1.962029871977952+1*a))))))-2.2335276320861708e-7),f/c),i+=(o=e*(r+1))*xi+o*u}return r<1&&(i+=-Oi(r),e=n,n=r,r+=1),r<=1.5?(o=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),i+=(t=n*e)*Ui+t*o):(o=e*n,u=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),i+=o*Ti+o*u)}function Ii(r){return Sr(r)?NaN:r<0?r<-.5?ni(1+r)-1:ci(-function(r){var n,e,t,i,o,u,a,f,c,l;if(r<-1||Sr(r))return NaN;if(-1===r)return Tr;if(r===Sn)return r;if(0===r)return r;if(l=1,(t=r<0?-r:r)<pi){if(t<yi)return t<di?r:r-r*r*.5;r>vi&&(l=0,i=r,e=1)}return 0!==l&&(t<gi?(o=(l=((e=un(c=1+r))>>20)-xn)>0?1-(c-r):r-(c-1),o/=c):(l=((e=un(c=r))>>20)-xn,o=0),(e&=1048575)<434334?c=it(c,1072693248|e):(l+=1,c=it(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?l*li+(o+=l*si):l*li-((f=n*(1-bi*i))-(l*si+o)-i):(f=(a=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===l?i-(n-u*(n+f)):l*li-(n-(u*(n+f)+(l*si+o))-i))}(r)+Fi(r+2,r+1,r)):r<2?ci(Fi(r+1,r,r-1)):ni(1+r)-1}return function(r){return Or(r,Ii)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterGamma1pm1=n();
//# sourceMappingURL=browser.js.map

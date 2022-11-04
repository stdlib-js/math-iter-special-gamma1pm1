// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var v=/./;function y(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function d(r,n){return null!=r&&w.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var n,t,e;if(null==r)return s.call(r);t=r[m],n=d(r,m);try{r[m]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[m]=t:delete r[m],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var A=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return y(r)||g(r)}function N(){return new Function("return this;")()}l(_,"isPrimitive",y),l(_,"isObject",g);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return N()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=V.exec(e.toString()))return n[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!x(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(G));var B="function"==typeof v||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!d(r,"constructor")&&d(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&d(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!d(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(d(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}function rr(r){return r!=r}var nr=Math.floor;function tr(r){return nr(r)===r}var er=W.NEGATIVE_INFINITY;function or(r){return Math.abs(r)}var ur="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var yr,pr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=yr,sr="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null;var dr,mr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,256,257]),t=n,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=dr,hr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var gr,_r="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Nr,Or={uint16:gr,uint8:jr};(Nr=new Or.uint16(1))[0]=4660;var Ur=52===new Or.uint8(Nr.buffer)[0],Sr=!0===Ur?1:0,Er=new br(1),Fr=new cr(Er.buffer);function Ir(r){return Er[0]=r,Fr[Sr]}function Pr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Tr=-.16666666666666632;function Vr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Tr+o*t):r-(o*(.5*n-e*t)-n-e*Tr)}var xr,Gr,Hr=!0===Ur?0:1,Br=new br(1),Lr=new cr(Br.buffer);!0===Ur?(xr=1,Gr=0):(xr=0,Gr=1);var Mr={HIGH:xr,LOW:Gr},kr=new br(1),Wr=new cr(kr.buffer),Cr=Mr.HIGH,Yr=Mr.LOW;function qr(r,n){return Wr[Cr]=r,Wr[Yr]=n,kr[0]}var Rr,Xr,zr=Number.POSITIVE_INFINITY;function Dr(r){return r===zr||r===er}!0===Ur?(Rr=1,Xr=0):(Rr=0,Xr=1);var Jr={HIGH:Rr,LOW:Xr},Kr=new br(1),Qr=new cr(Kr.buffer),Zr=Jr.HIGH,$r=Jr.LOW;function rn(r,n){return Kr[0]=n,r[0]=Qr[Zr],r[1]=Qr[$r],r}function nn(r,n){return 1===arguments.length?rn([0,0],r):rn(r,n)}var tn=[0,0];function en(r,n){var t,e;return nn(tn,r),t=tn[0],t&=2147483647,e=Ir(n),qr(t|=e&=2147483648,tn[1])}function on(r,n,t,e){return rr(r)||Dr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&or(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return on(r,[0,0],1,0)}),"assign",on);var un=[0,0],fn=[0,0];function an(r,n){var t,e;return 0===n||0===r||rr(r)||Dr(r)?r:(on(r,un,1,0),n+=un[1],n+=function(r){var n=Ir(r);return(n=(2146435072&n)>>>20)-1023|0}(r=un[0]),n<-1074?en(0,r):n>1023?r<0?er:zr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nn(fn,r),t=fn[0],t&=2148532223,e*qr(t|=n+1023<<20,fn[1])))}function cn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var ln=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yn=5.960464477539063e-8,pn=cn(20),bn=cn(20),sn=cn(20),wn=cn(20);function dn(r,n,t,e,o,u,i,f,a){var c,l,v,y,p,b,s,w,d;for(y=u,d=e[t],w=t,p=0;w>0;p++)l=yn*d|0,wn[p]=d-16777216*l|0,d=e[w-1]+l,w-=1;if(d=an(d,o),d-=8*nr(.125*d),d-=s=0|d,v=0,o>0?(s+=p=wn[t-1]>>24-o,wn[t-1]-=p<<24-o,v=wn[t-1]>>23-o):0===o?v=wn[t-1]>>23:d>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<t;p++)w=wn[p],0===c?0!==w&&(c=1,wn[p]=16777216-w):wn[p]=16777215-w;if(o>0)switch(o){case 1:wn[t-1]&=8388607;break;case 2:wn[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=an(1,o)))}if(0===d){for(w=0,p=t-1;p>=u;p--)w|=wn[p];if(0===w){for(b=1;0===wn[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=ln[i+p],l=0,w=0;w<=f;w++)l+=r[w]*a[f+(p-w)];e[p]=l}return dn(r,n,t+=b,e,o,u,i,f,a)}}if(0===d)for(t-=1,o-=24;0===wn[t];)t-=1,o-=24;else(d=an(d,-o))>=16777216?(l=yn*d|0,wn[t]=d-16777216*l|0,o+=24,wn[t+=1]=l):wn[t]=0|d;for(l=an(1,o),p=t;p>=0;p--)e[p]=l*wn[p],l*=yn;for(p=t;p>=0;p--){for(l=0,b=0;b<=y&&b<=t-p;b++)l+=vn[b]*e[p+b];sn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=sn[p];for(n[0]=0===v?l:-l,l=sn[0]-l,p=1;p<=t;p++)l+=sn[p];return n[1]=0===v?l:-l,7&s}function mn(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)pn[a]=c<0?0:ln[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*pn[i+(a-c)];bn[a]=o}return 4,dn(r,n,4,bn,f,4,u,i,pn)}var jn=Math.round;function hn(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=jn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Ir(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Ir(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var An=1.5707963267341256,gn=6077100506506192e-26,_n=2*gn,Nn=4*gn,On=[0,0,0],Un=[0,0];function Sn(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Ir(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?hn(r,o,n):o<=1073928572?r>0?(a=r-An,n[0]=a-gn,n[1]=a-n[0]-gn,1):(a=r+An,n[0]=a+gn,n[1]=a-n[0]+gn,-1):r>0?(a=r-2*An,n[0]=a-_n,n[1]=a-n[0]-_n,2):(a=r+2*An,n[0]=a+_n,n[1]=a-n[0]+_n,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?hn(r,o,n):r>0?(a=r-3*An,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*An,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===o?hn(r,o,n):r>0?(a=r-4*An,n[0]=a-Nn,n[1]=a-n[0]-Nn,4):(a=r+4*An,n[0]=a+Nn,n[1]=a-n[0]+Nn,-4);if(o<1094263291)return hn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Br[0]=r,Lr[Hr]}(r),a=qr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)On[i]=0|a,a=16777216*(a-On[i]);for(On[2]=a,u=3;0===On[u-1];)u-=1;return f=mn(On,Un,e,u),r<0?(n[0]=-Un[0],n[1]=-Un[1],-f):(n[0]=Un[0],n[1]=Un[1],f)}var En=[0,0];var Fn=3.141592653589793;function In(r){return tr(r/2)}function Pn(r){return In(r>0?r-1:r+1)}var Tn=Math.sqrt,Vn=!0===Ur?0:1,xn=new br(1),Gn=new cr(xn.buffer);function Hn(r,n){return xn[0]=r,Gn[Vn]=n>>>0,xn[0]}function Bn(r){return 0|r}var Ln=!0===Ur?1:0,Mn=new br(1),kn=new cr(Mn.buffer);function Wn(r,n){return Mn[0]=r,kn[Ln]=n>>>0,Mn[0]}var Cn=[1,1.5],Yn=[0,.5849624872207642],qn=[0,1.350039202129749e-8];var Rn=1e300,Xn=[0,0],zn=[0,0];function Dn(r,n){var t,e,o,u,i,f,a,c,l,v,y,p,b,s;if(rr(r)||rr(n))return NaN;if(nn(Xn,n),i=Xn[0],0===Xn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Tn(r);if(-.5===n)return 1/Tn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Dr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:or(r)<1==(n===zr)?0:zr}(r,n)}if(nn(Xn,r),u=Xn[0],0===Xn[1]){if(0===u)return function(r,n){return n===er?zr:n===zr?0:n>0?Pn(n)?r:0:Pn(n)?en(zr,r):zr}(r,n);if(1===r)return 1;if(-1===r&&Pn(n))return-1;if(Dr(r))return r===er?Dn(-0,-n):n<0?0:zr}if(r<0&&!1===tr(n))return(r-r)/(r-r);if(o=or(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&Pn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Rn*Rn:1e-300*f*1e-300;if(t>1072693248)return 0===a?f*Rn*Rn:1e-300*f*1e-300;y=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Hn(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(zn,o)}else y=function(r,n,t){var e,o,u,i,f,a,c,l,v,y,p,b,s,w,d,m,j,h,A,g,_;return h=0,t<1048576&&(h-=53,t=Ir(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?g=0:A<767610?g=1:(g=0,h+=1,t-=1048576),i=Hn(o=(m=(n=Wn(n,t))-(c=Cn[g]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=Wn(0,e+=g<<18),d=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Hn(a=3+(u=i*i)+(d+=(f=j*(m-i*a-i*(n-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(v=Hn(v=(m=i*a)+(j=f*a+(d-(a-3-u))*o),0))+.9617966939259756*(j-(v-m))+qn[g])-((b=Hn(b=(y=.9617967009544373*v)+p+(l=Yn[g])+(w=h),0))-w-l-y),r[0]=b,r[1]=s,r}(zn,o,t);if(v=(n-(c=Hn(n,0)))*y[0]+n*y[1],l=c*y[0],nn(Xn,p=v+l),b=Bn(Xn[0]),s=Bn(Xn[1]),b>=1083179008){if(0!=(b-1083179008|s))return f*Rn*Rn;if(v+8008566259537294e-32>p-l)return f*Rn*Rn}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|s))return 1e-300*f*1e-300;if(v<=p-l)return 1e-300*f*1e-300}return p=function(r,n,t){var e,o,u,i,f,a,c,l,v,y,p;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=u=Wn(0,e)),r=Bn(r=Ir(c=1-((c=(i=.6931471824645996*(u=Hn(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?an(c,l):Wn(c,r)}(b,l,v),f*p}var Jn=Math.ceil;function Kn(r){return r<0?Jn(r):nr(r)}function Qn(r){var n;return rr(r)||r===zr?r:r===er?0:r>709.782712893384?zr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return an(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=Kn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Zn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Qn(r),2.5066282746310007*(t=r>143.01608?(e=Dn(r,.5*r-.25))*(e/t):Dn(r,r-.5)/t)*n}function $n(r,n){return n/((1+.5772156649015329*r)*r)}function rt(r){var n,t,e,o;if(tr(r)&&r<0||r===er||rr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===er}(r)?er:zr;if(r>171.61447887182297)return zr;if(r<-170.5674972726612)return 0;if((t=or(r))>33)return r>=0?Zn(r):(n=0==(1&(e=nr(t)))?-1:1,(o=t-e)>.5&&(o=t-(e+=1)),o=t*function(r){var n;if(n=Ir(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Vr(r,0);if(n>=2146435072)return NaN;switch(3&Sn(r,En)){case 0:return Vr(En[0],En[1]);case 1:return Pr(En[0],En[1]);case 2:return-Vr(En[0],En[1]);default:return-Pr(En[0],En[1])}}(Fn*o),n*Fn/(or(o)*Zn(t)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return $n(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return $n(r,o);o/=r,r+=1}return 2===r?o:o*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}var nt=.6931471803691238,tt=1.9082149292705877e-10;function et(r){var n,t,e,o,u,i,f,a,c,l,v,y;if(r===zr||rr(r))return r;if(r===er)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return zr}if(u=0|Ir(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+nt,o=-tt,y=-1):(e=r-nt,o=tt,y=1):(y=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(l=y|=0)*nt,o=l*tt),c=e-(r=e-o)-o;else{if(u<1016070144)return r;y=0}return i=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),v=a*((i-(l=3-i*n))/(6-r*l)),0===y?r-(r*v-a):(v=r*(v-c)-c,v-=a,-1===y?.5*(r-v)-.5:1===y?r<-.25?-2*(v-(r+.5)):1+2*(r-v):y<=-2||y>56?(f=Wn(f=1-(v-r),e=Ir(f)+(y<<20)|0))-1:(l=1,y<20?f=(l=Wn(l,e=1072693248-(2097152>>y)|0))-(v-r):(f=r-(v+(l=Wn(l,e=1023-y<<20|0))),f+=1),Wn(f,e=Ir(f)+(y<<20)|0)))}var ot=.6931471803691238,ut=1.9082149292705877e-10;var it=.6931471803691238,ft=1.9082149292705877e-10;function at(r){var n,t,e,o,u,i,f,a,c,l,v,y;return 0===r?er:rr(r)||r<0?NaN:(u=0,(t=Ir(r))<1048576&&(u-=54,t=Ir(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Wn(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===u?0:u*it+u*ft:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*it-(i-u*ft-f)):(a=t-398458|0,c=440401-t|0,o=(v=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*it-(n-(l*(n+i)+u*ft)-f)):0===u?f-l*(f-i):u*it-(l*(f-i)-u*ft-f))))}function ct(r,n,t){var e,o,u,i,f,a,c;if(r<2220446049250313e-31)return-at(r);if(0===n||0===t)return 0;if(o=0,r>2){if(r>=3){do{t-=1,o+=at(r-=1)}while(r>=3);t=r-2}return o+=.15896368026733398*(u=t*(r+1))+u*(i=0===(f=t)?-.01803556856784494:((f<0?-f:f)<=1?(a=f*(.02512664961998968+f*(.049410315156753225+f*(.0172491608709614+f*(f*(f*(0*f-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+f*(1.962029871977952+f*(1.4801966942423133+f*(.5413914320717209+f*(.09885042511280101+f*(.008213096746488934+f*(.00022493629192211576+-2.2335276320861708e-7*f))))))):(a=0+(f=1/f)*(f*(f*(f*(.0172491608709614+f*(.049410315156753225+f*(.02512664961998968+-.01803556856784494*f)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=f*(.00022493629192211576+f*(.008213096746488934+f*(.09885042511280101+f*(.5413914320717209+f*(1.4801966942423133+f*(1.962029871977952+1*f))))))-2.2335276320861708e-7),a/c))}return r<1&&(o+=-at(r),t=n,n=r,r+=1),r<=1.5?(u=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)}(n),o+=.5281534194946289*(e=n*t)+e*u):(u=t*n,i=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)}(-t),o+=.45201730728149414*u+u*i)}function lt(r){return rr(r)?NaN:r<0?r<-.5?rt(1+r)-1:et(-function(r){var n,t,e,o,u,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return er;if(r===zr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,t=1)}return 0!==l&&(e<9007199254740992?(u=(l=((t=Ir(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(l=((t=Ir(c=r))>>20)-1023,u=0),(t&=1048575)<434334?c=Wn(c,1072693248|t):(l+=1,c=Wn(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?l*ot+(u+=l*ut):l*ot-((a=n*(1-.6666666666666666*o))-(l*ut+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(n-i*(n+a)):l*ot-(n-(i*(n+a)+(l*ut+u))-o))}(r)+ct(r+2,r+1,r)):r<2?et(ct(r+1,r,r-1)):rt(1+r)-1}function vt(r){return $(r,lt)}export{vt as default};
//# sourceMappingURL=mod.js.map

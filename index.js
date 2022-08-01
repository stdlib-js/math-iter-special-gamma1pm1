// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterGamma1pm1=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var n,t,e;if(null==r)return s.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[m]=t:delete r[m],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var g=b();function A(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||A(r)}function N(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var T=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return N()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function V(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(V,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!G(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(V));var B="function"==typeof y||"object"==typeof I||"function"==typeof F?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&w(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}function rr(r){return r!=r}var nr=Math.floor;function tr(r){return nr(r)===r}var er=W.NEGATIVE_INFINITY;function or(r){return Math.abs(r)}var ur="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var vr,pr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,mr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),t=n,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=wr,hr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof gr)return!1;try{n=new gr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Nr,Or={uint16:Ar,uint8:jr};(Nr=new Or.uint16(1))[0]=4660;var Ur=52===new Or.uint8(Nr.buffer)[0],Sr=!0===Ur?1:0,Er=new br(1),Tr=new cr(Er.buffer);function Fr(r){return Er[0]=r,Tr[Sr]}function Ir(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Pr=-.16666666666666632;function xr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Pr+o*t):r-(o*(.5*n-e*t)-n-e*Pr)}var Gr,Vr,Hr=!0===Ur?0:1,Br=new br(1),Lr=new cr(Br.buffer);!0===Ur?(Gr=1,Vr=0):(Gr=0,Vr=1);var Mr={HIGH:Gr,LOW:Vr},kr=new br(1),Wr=new cr(kr.buffer),Cr=Mr.HIGH,Yr=Mr.LOW;function qr(r,n){return Wr[Cr]=r,Wr[Yr]=n,kr[0]}var Rr,Xr,zr=Number.POSITIVE_INFINITY,Dr=1023;function Jr(r){return r===zr||r===er}!0===Ur?(Rr=1,Xr=0):(Rr=0,Xr=1);var Kr={HIGH:Rr,LOW:Xr},Qr=new br(1),Zr=new cr(Qr.buffer),$r=Kr.HIGH,rn=Kr.LOW;function nn(r,n){return Qr[0]=n,r[0]=Zr[$r],r[1]=Zr[rn],r}function tn(r,n){return 1===arguments.length?nn([0,0],r):nn(r,n)}var en=[0,0];function on(r,n){var t,e;return tn(en,r),t=en[0],t&=2147483647,e=Fr(n),qr(t|=e&=2147483648,en[1])}function un(r,n){return rr(n)||Jr(n)?(r[0]=n,r[1]=0,r):0!==n&&or(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var fn=[0,0],an=[0,0];function cn(r,n){var t,e;return 0===n||0===r||rr(r)||Jr(r)?r:(function(r,n){1===arguments.length?un([0,0],r):un(r,n)}(fn,r),n+=fn[1],n+=function(r){var n=Fr(r);return(n=(2146435072&n)>>>20)-Dr|0}(r=fn[0]),n<-1074?on(0,r):n>1023?r<0?er:zr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tn(an,r),t=an[0],t&=2148532223,e*qr(t|=n+Dr<<20,an[1])))}function ln(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pn=16777216,bn=5.960464477539063e-8,sn=ln(20),dn=ln(20),wn=ln(20),mn=ln(20);function jn(r,n,t,e,o,u,i,f,a){var c,l,y,v,p,b,s,d,w;for(v=u,w=e[t],d=t,p=0;d>0;p++)l=bn*w|0,mn[p]=w-pn*l|0,w=e[d-1]+l,d-=1;if(w=cn(w,o),w-=8*nr(.125*w),w-=s=0|w,y=0,o>0?(s+=p=mn[t-1]>>24-o,mn[t-1]-=p<<24-o,y=mn[t-1]>>23-o):0===o?y=mn[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)d=mn[p],0===c?0!==d&&(c=1,mn[p]=16777216-d):mn[p]=16777215-d;if(o>0)switch(o){case 1:mn[t-1]&=8388607;break;case 2:mn[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=cn(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=mn[p];if(0===d){for(b=1;0===mn[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=yn[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return jn(r,n,t+=b,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===mn[t];)t-=1,o-=24;else(w=cn(w,-o))>=pn?(l=bn*w|0,mn[t]=w-pn*l|0,o+=24,mn[t+=1]=l):mn[t]=0|w;for(l=cn(1,o),p=t;p>=0;p--)e[p]=l*mn[p],l*=bn;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=vn[b]*e[p+b];wn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=wn[p];for(n[0]=0===y?l:-l,l=wn[0]-l,p=1;p<=t;p++)l+=wn[p];return n[1]=0===y?l:-l,7&s}function hn(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)sn[a]=c<0?0:yn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*sn[i+(a-c)];dn[a]=o}return 4,jn(r,n,4,dn,f,4,u,i,sn)}var gn=Math.round;function An(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=gn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Fr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Fr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var _n=1.5707963267341256,Nn=6077100506506192e-26,On=2*Nn,Un=3*Nn,Sn=4*Nn,En=[0,0,0],Tn=[0,0];function Fn(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Fr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?An(r,o,n):o<=1073928572?r>0?(a=r-_n,n[0]=a-Nn,n[1]=a-n[0]-Nn,1):(a=r+_n,n[0]=a+Nn,n[1]=a-n[0]+Nn,-1):r>0?(a=r-2*_n,n[0]=a-On,n[1]=a-n[0]-On,2):(a=r+2*_n,n[0]=a+On,n[1]=a-n[0]+On,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?An(r,o,n):r>0?(a=r-3*_n,n[0]=a-Un,n[1]=a-n[0]-Un,3):(a=r+3*_n,n[0]=a+Un,n[1]=a-n[0]+Un,-3):1075388923===o?An(r,o,n):r>0?(a=r-4*_n,n[0]=a-Sn,n[1]=a-n[0]-Sn,4):(a=r+4*_n,n[0]=a+Sn,n[1]=a-n[0]+Sn,-4);if(o<1094263291)return An(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Br[0]=r,Lr[Hr]}(r),a=qr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)En[i]=0|a,a=16777216*(a-En[i]);for(En[2]=a,u=3;0===En[u-1];)u-=1;return f=hn(En,Tn,e,u),r<0?(n[0]=-Tn[0],n[1]=-Tn[1],-f):(n[0]=Tn[0],n[1]=Tn[1],f)}var In=[0,0];var Pn=3.141592653589793;function xn(r){return tr(r/2)}function Gn(r){return xn(r>0?r-1:r+1)}var Vn=Math.sqrt,Hn=!0===Ur?0:1,Bn=new br(1),Ln=new cr(Bn.buffer);function Mn(r,n){return Bn[0]=r,Ln[Hn]=n>>>0,Bn[0]}function kn(r){return 0|r}var Wn=!0===Ur?1:0,Cn=new br(1),Yn=new cr(Cn.buffer);function qn(r,n){return Cn[0]=r,Yn[Wn]=n>>>0,Cn[0]}var Rn=1048576,Xn=[1,1.5],zn=[0,.5849624872207642],Dn=[0,1.350039202129749e-8];var Jn=2147483647,Kn=1048575,Qn=1048576;var Zn=2147483647,$n=1083179008,rt=1e300,nt=1e-300,tt=[0,0],et=[0,0];function ot(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,b,s;if(rr(r)||rr(n))return NaN;if(tn(tt,n),i=tt[0],0===tt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Vn(r);if(-.5===n)return 1/Vn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Jr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:or(r)<1==(n===zr)?0:zr}(r,n)}if(tn(tt,r),u=tt[0],0===tt[1]){if(0===u)return function(r,n){return n===er?zr:n===zr?0:n>0?Gn(n)?r:0:Gn(n)?on(zr,r):zr}(r,n);if(1===r)return 1;if(-1===r&&Gn(n))return-1;if(Jr(r))return r===er?ot(-0,-n):n<0?0:zr}if(r<0&&!1===tr(n))return(r-r)/(r-r);if(o=or(r),t=u&Zn|0,e=i&Zn|0,a=i>>>31|0,f=(f=u>>>31|0)&&Gn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Fr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*rt*rt:f*nt*nt;if(t>1072693248)return 0===a?f*rt*rt:f*nt*nt;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Mn(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(et,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,s,d,w,m,j,h,g,A,_;return h=0,t<Rn&&(h-=53,t=Fr(n*=9007199254740992)),h+=(t>>20)-Dr|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,h+=1,t-=Rn),i=Mn(o=(m=(n=qn(n,t))-(c=Xn[A]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=qn(0,e+=A<<18),w=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Mn(a=3+(u=i*i)+(w+=(f=j*(m-i*a-i*(n-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=Mn(y=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+Dn[A])-((b=Mn(b=(v=.9617967009544373*y)+p+(l=zn[A])+(d=h),0))-d-l-v),r[0]=b,r[1]=s,r}(et,o,t);if(y=(n-(c=Mn(n,0)))*v[0]+n*v[1],l=c*v[0],tn(tt,p=y+l),b=kn(tt[0]),s=kn(tt[1]),b>=$n){if(0!=(b-$n|s))return f*rt*rt;if(y+8008566259537294e-32>p-l)return f*rt*rt}else if((b&Zn)>=1083231232){if(0!=(b-3230714880|s))return f*nt*nt;if(y<=p-l)return f*nt*nt}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v;return y=((l=r&Jn|0)>>20)-Dr|0,c=0,l>1071644672&&(o=qn(0,((c=r+(Qn>>y+1)>>>0)&~(Kn>>(y=((c&Jn)>>20)-Dr|0)))>>>0),c=(c&Kn|Qn)>>20-y>>>0,r<0&&(c=-c),n-=o),r=kn(r=Fr(a=1-((a=(u=.6931471824645996*(o=Mn(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?cn(a,c):qn(a,r)}(b,l,y),f*p}var ut=Math.ceil;function it(r){return r<0?ut(r):nr(r)}var ft=1.4426950408889634,at=1/(1<<28);function ct(r){var n;return rr(r)||r===zr?r:r===er?0:r>709.782712893384?zr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<at?1+r:function(r,n,t){var e,o,u,i;return cn(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=it(r<0?ft*r-.5:ft*r+.5)),1.9082149292705877e-10*n,n)}function lt(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=ct(r),2.5066282746310007*(t=r>143.01608?(e=ot(r,.5*r-.25))*(e/t):ot(r,r-.5)/t)*n}function yt(r,n){return n/((1+.5772156649015329*r)*r)}function vt(r){var n,t,e,o;if(tr(r)&&r<0||r===er||rr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===er}(r)?er:zr;if(r>171.61447887182297)return zr;if(r<-170.5674972726612)return 0;if((t=or(r))>33)return r>=0?lt(r):(n=0==(1&(e=nr(t)))?-1:1,(o=t-e)>.5&&(o=t-(e+=1)),o=t*function(r){var n;if(n=Fr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:xr(r,0);if(n>=2146435072)return NaN;switch(3&Fn(r,In)){case 0:return xr(In[0],In[1]);case 1:return Ir(In[0],In[1]);case 2:return-xr(In[0],In[1]);default:return-Ir(In[0],In[1])}}(Pn*o),n*Pn/(or(o)*lt(t)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return yt(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return yt(r,o);o/=r,r+=1}return 2===r?o:o*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}var pt=.6931471803691238,bt=1.9082149292705877e-10,st=1.4426950408889634;function dt(r){var n,t,e,o,u,i,f,a,c,l,y,v;if(r===zr||rr(r))return r;if(r===er)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return zr}if(u=0|Fr(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+pt,o=-bt,v=-1):(e=r-pt,o=bt,v=1):(v=t?st*r-.5:st*r+.5,e=r-(l=v|=0)*pt,o=l*bt),c=e-(r=e-o)-o;else{if(u<1016070144)return r;v=0}return i=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),y=a*((i-(l=3-i*n))/(6-r*l)),0===v?r-(r*y-a):(y=r*(y-c)-c,y-=a,-1===v?.5*(r-y)-.5:1===v?r<-.25?-2*(y-(r+.5)):1+2*(r-y):v<=-2||v>56?(f=qn(f=1-(y-r),e=Fr(f)+(v<<20)|0))-1:(l=1,v<20?f=(l=qn(l,e=1072693248-(2097152>>v)|0))-(y-r):(f=r-(y+(l=qn(l,e=Dr-v<<20|0))),f+=1),qn(f,e=Fr(f)+(v<<20)|0)))}var wt=.6931471803691238,mt=1.9082149292705877e-10;var jt=.6931471803691238,ht=1.9082149292705877e-10,gt=1048575;function At(r){var n,t,e,o,u,i,f,a,c,l,y,v;return 0===r?er:rr(r)||r<0?NaN:(u=0,(t=Fr(r))<1048576&&(u-=54,t=Fr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Dr|0,u+=(a=(t&=gt)+614244&1048576|0)>>20|0,f=(r=qn(r,t|1072693248^a))-1,(gt&2+t)<3?0===f?0===u?0:u*jt+u*ht:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*jt-(i-u*ht-f)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*jt-(n-(l*(n+i)+u*ht)-f)):0===u?f-l*(f-i):u*jt-(l*(f-i)-u*ht-f))))}function _t(r,n,t){var e,o,u,i,f,a,c;if(r<2220446049250313e-31)return-At(r);if(0===n||0===t)return 0;if(o=0,r>2){if(r>=3){do{t-=1,o+=At(r-=1)}while(r>=3);t=r-2}return o+=.15896368026733398*(u=t*(r+1))+u*(i=0===(f=t)?-.01803556856784494:((f<0?-f:f)<=1?(a=f*(.02512664961998968+f*(.049410315156753225+f*(.0172491608709614+f*(f*(f*(0*f-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+f*(1.962029871977952+f*(1.4801966942423133+f*(.5413914320717209+f*(.09885042511280101+f*(.008213096746488934+f*(.00022493629192211576+-2.2335276320861708e-7*f))))))):(a=0+(f=1/f)*(f*(f*(f*(.0172491608709614+f*(.049410315156753225+f*(.02512664961998968+-.01803556856784494*f)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=f*(.00022493629192211576+f*(.008213096746488934+f*(.09885042511280101+f*(.5413914320717209+f*(1.4801966942423133+f*(1.962029871977952+1*f))))))-2.2335276320861708e-7),a/c))}return r<1&&(o+=-At(r),t=n,n=r,r+=1),r<=1.5?(u=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)}(n),o+=.5281534194946289*(e=n*t)+e*u):(u=t*n,i=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)}(-t),o+=.45201730728149414*u+u*i)}function Nt(r){return rr(r)?NaN:r<0?r<-.5?vt(1+r)-1:dt(-function(r){var n,t,e,o,u,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return er;if(r===zr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,t=1)}return 0!==l&&(e<9007199254740992?(u=(l=((t=Fr(c=1+r))>>20)-Dr)>0?1-(c-r):r-(c-1),u/=c):(l=((t=Fr(c=r))>>20)-Dr,u=0),(t&=1048575)<434334?c=qn(c,1072693248|t):(l+=1,c=qn(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?l*wt+(u+=l*mt):l*wt-((a=n*(1-.6666666666666666*o))-(l*mt+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(n-i*(n+a)):l*wt-(n-(i*(n+a)+(l*mt+u))-o))}(r)+_t(r+2,r+1,r)):r<2?dt(_t(r+1,r,r-1)):vt(1+r)-1}return function(r){return $(r,Nt)}}));
//# sourceMappingURL=index.js.map

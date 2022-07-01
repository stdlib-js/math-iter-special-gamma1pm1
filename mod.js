// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var n=r.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var v=function(r,n,t){var e,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,t.get),y&&f&&f.call(r,n,t.set),r},l=e,y=v,p=t()?l:y;var b=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},s=b,d=/./;var w=function(r){return"boolean"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return m&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var g=function(r){return _.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,n){return null!=r&&A.call(r,n)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,U=N,S=h;var P=g,F=function(r){var n,t,e;if(null==r)return S.call(r);t=r[U],n=E(r,U);try{r[U]=void 0}catch(n){return S.call(r)}return e=S.call(r),n?r[U]=t:delete r[U],e},I=j()?F:P,T=Boolean.prototype.toString;var x=I,G=function(r){try{return T.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},M=w,B=H;var L=s,k=function(r){return M(r)||B(r)},W=H;L(k,"isPrimitive",w),L(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),nr=rr.document&&rr.document.childNodes,tr=Int8Array,er=d,or=nr,ur=tr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;s(ar,"REGEXP",fr());var cr=ar,vr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===vr(r)},yr=lr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(pr));var br=pr;var sr=I,dr=cr.REGEXP,wr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var n,t,e;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=dr.exec(e.toString()))return n[1]}return wr(r)?"Buffer":t},jr=mr;var hr=mr;var _r=function(r){var n;return null===r?"null":"object"===(n=typeof r)?jr(r).toLowerCase():n},gr=function(r){return hr(r).toLowerCase()},Ar=ir()?gr:_r;var Or=function(r){return"function"===Ar(r)},Nr=Or;var Er=function(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&Nr(r.next)};var Ur=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Fr=I,Ir=Sr,Tr=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Ir||(xr?Tr(r):"[object Number]"===Fr(r)))},Vr=Ur,Hr=Gr;var Mr=s,Br=function(r){return Vr(r)||Hr(r)},Lr=Gr;Mr(Br,"isPrimitive",Ur),Mr(Br,"isObject",Lr);var kr=Br,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=lr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=I,Dr=qr;var Jr=function(r){var n=Dr(r);return n||null===n?n:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rn=Or,nn=function(r){return null==r?null:(r=Object(r),Zr(r))},tn=O,en=I,on=Object.prototype;var un=function(r){var n;return!!$r(r)&&(!(n=nn(r))||!tn(r,"constructor")&&tn(n,"constructor")&&rn(n.constructor)&&"[object Function]"===en(n.constructor)&&tn(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===on||function(r){var n;for(n in r)if(!tn(r,n))return!1;return!0}(r)))},fn=un,an=O;var cn=s,vn=Or,ln=Er,yn=kr.isPrimitive,pn=Cr,bn=function(r,n){return fn(n)?(an(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")};var sn=function r(n,t,e){var o,u,i,f;if(!ln(n))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+n+"`.");if(!vn(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(o={invalid:NaN},arguments.length>2&&(i=bn(o,e)))throw i;return cn(u={},"next",a),cn(u,"return",c),pn&&vn(n[pn])&&cn(u,pn,v),u;function a(){var r;return f?{done:!0}:(r=n.next()).done?(f=!0,r):{value:yn(r.value)?t(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){return r(n[pn](),t,o)}},dn=sn;var wn=function(r){return r!=r},mn=Math.floor,jn=mn;var hn=function(r){return jn(r)===r},_n=Sr.NEGATIVE_INFINITY,gn=_n;var An=function(r){return 0===r&&1/r===gn};var On=function(r){return Math.abs(r)},Nn=I,En="function"==typeof Uint32Array;var Un="function"==typeof Uint32Array?Uint32Array:null,Sn=function(r){return En&&r instanceof Uint32Array||"[object Uint32Array]"===Nn(r)},Pn=Un;var Fn=function(){var r,n;if("function"!=typeof Pn)return!1;try{n=new Pn(n=[1,3.14,-3.14,4294967296,4294967297]),r=Sn(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var In="function"==typeof Uint32Array?Uint32Array:void 0,Tn=function(){throw new Error("not implemented")},xn=Fn()?In:Tn,Gn=I,Vn="function"==typeof Float64Array;var Hn="function"==typeof Float64Array?Float64Array:null,Mn=function(r){return Vn&&r instanceof Float64Array||"[object Float64Array]"===Gn(r)},Bn=Hn;var Ln=function(){var r,n;if("function"!=typeof Bn)return!1;try{n=new Bn([1,3.14,-3.14,NaN]),r=Mn(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var kn="function"==typeof Float64Array?Float64Array:void 0,Wn=function(){throw new Error("not implemented")},Cn=Ln()?kn:Wn,Rn=I,Xn="function"==typeof Uint8Array;var Yn="function"==typeof Uint8Array?Uint8Array:null,qn=function(r){return Xn&&r instanceof Uint8Array||"[object Uint8Array]"===Rn(r)},zn=Yn;var Dn=function(){var r,n;if("function"!=typeof zn)return!1;try{n=new zn(n=[1,3.14,-3.14,256,257]),r=qn(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Jn="function"==typeof Uint8Array?Uint8Array:void 0,Kn=function(){throw new Error("not implemented")},Qn=Dn()?Jn:Kn,Zn=I,$n="function"==typeof Uint16Array;var rt="function"==typeof Uint16Array?Uint16Array:null,nt=function(r){return $n&&r instanceof Uint16Array||"[object Uint16Array]"===Zn(r)},tt=rt;var et=function(){var r,n;if("function"!=typeof tt)return!1;try{n=new tt(n=[1,3.14,-3.14,65536,65537]),r=nt(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ot,ut="function"==typeof Uint16Array?Uint16Array:void 0,it=function(){throw new Error("not implemented")},ft={uint16:et()?ut:it,uint8:Qn};(ot=new ft.uint16(1))[0]=4660;var at=52===new ft.uint8(ot.buffer)[0],ct=xn,vt=!0===at?1:0,lt=new Cn(1),yt=new ct(lt.buffer);var pt=function(r){return lt[0]=r,yt[vt]};var bt=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},st=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var dt=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*bt(u),e+=o*o*st(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},wt=-.16666666666666632;var mt=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(wt+o*t):r-(o*(.5*n-e*t)-n-e*wt)},jt=xn,ht=!0===at?0:1,_t=new Cn(1),gt=new jt(_t.buffer);var At,Ot,Nt=function(r){return _t[0]=r,gt[ht]};!0===at?(At=1,Ot=0):(At=0,Ot=1);var Et=xn,Ut={HIGH:At,LOW:Ot},St=new Cn(1),Pt=new Et(St.buffer),Ft=Ut.HIGH,It=Ut.LOW;var Tt=function(r,n){return Pt[Ft]=r,Pt[It]=n,St[0]},xt=Tt,Gt=Number.POSITIVE_INFINITY,Vt=Gt,Ht=_n;var Mt,Bt,Lt=function(r){return r===Vt||r===Ht};!0===at?(Mt=1,Bt=0):(Mt=0,Bt=1);var kt=xn,Wt={HIGH:Mt,LOW:Bt},Ct=new Cn(1),Rt=new kt(Ct.buffer),Xt=Wt.HIGH,Yt=Wt.LOW;var qt=function(r,n){return Ct[0]=n,r[0]=Rt[Xt],r[1]=Rt[Yt],r};var zt=function(r,n){return 1===arguments.length?qt([0,0],r):qt(r,n)},Dt=zt,Jt=pt,Kt=xt,Qt=[0,0];var Zt=function(r,n){var t,e;return Dt(Qt,r),t=Qt[0],t&=2147483647,e=Jt(n),Kt(t|=e&=2147483648,Qt[1])},$t=Lt,re=wn,ne=On;var te=function(r,n){return re(n)||$t(n)?(r[0]=n,r[1]=0,r):0!==n&&ne(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var ee=pt;var oe=function(r){var n=ee(r);return(n=(2146435072&n)>>>20)-1023|0},ue=Gt,ie=_n,fe=wn,ae=Lt,ce=Zt,ve=function(r,n){return 1===arguments.length?te([0,0],r):te(r,n)},le=oe,ye=zt,pe=xt,be=[0,0],se=[0,0];var de=function(r,n){var t,e;return 0===n||0===r||fe(r)||ae(r)?r:(ve(be,r),n+=be[1],(n+=le(r=be[0]))<-1074?ce(0,r):n>1023?r<0?ie:ue:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ye(se,r),t=se[0],t&=2148532223,e*pe(t|=n+1023<<20,se[1])))},we=de;var me=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var je=mn,he=we,_e=function(r){return me(0,r)},ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ae=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Oe=5.960464477539063e-8,Ne=_e(20),Ee=_e(20),Ue=_e(20),Se=_e(20);function Pe(r,n,t,e,o,u,i,f,a){var c,v,l,y,p,b,s,d,w;for(y=u,w=e[t],d=t,p=0;d>0;p++)v=Oe*w|0,Se[p]=w-16777216*v|0,w=e[d-1]+v,d-=1;if(w=he(w,o),w-=8*je(.125*w),w-=s=0|w,l=0,o>0?(s+=p=Se[t-1]>>24-o,Se[t-1]-=p<<24-o,l=Se[t-1]>>23-o):0===o?l=Se[t-1]>>23:w>=.5&&(l=2),l>0){for(s+=1,c=0,p=0;p<t;p++)d=Se[p],0===c?0!==d&&(c=1,Se[p]=16777216-d):Se[p]=16777215-d;if(o>0)switch(o){case 1:Se[t-1]&=8388607;break;case 2:Se[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=he(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=Se[p];if(0===d){for(b=1;0===Se[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=ge[i+p],v=0,d=0;d<=f;d++)v+=r[d]*a[f+(p-d)];e[p]=v}return Pe(r,n,t+=b,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===Se[t];)t-=1,o-=24;else(w=he(w,-o))>=16777216?(v=Oe*w|0,Se[t]=w-16777216*v|0,o+=24,Se[t+=1]=v):Se[t]=0|w;for(v=he(1,o),p=t;p>=0;p--)e[p]=v*Se[p],v*=Oe;for(p=t;p>=0;p--){for(v=0,b=0;b<=y&&b<=t-p;b++)v+=Ae[b]*e[p+b];Ue[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Ue[p];for(n[0]=0===l?v:-v,v=Ue[0]-v,p=1;p<=t;p++)v+=Ue[p];return n[1]=0===l?v:-v,7&s}var Fe=function(r,n,t,e){var o,u,i,f,a,c,v;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),v=i+4,a=0;a<=v;a++)Ne[a]=c<0?0:ge[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ne[i+(a-c)];Ee[a]=o}return 4,Pe(r,n,4,Ee,f,4,u,i,Ne)},Ie=Math.round,Te=pt;var xe=pt,Ge=Nt,Ve=xt,He=Fe,Me=function(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Ie(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Te(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Te(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e},Be=1.5707963267341256,Le=6077100506506192e-26,ke=2*Le,We=4*Le,Ce=[0,0,0],Re=[0,0];var Xe=function(r,n){var t,e,o,u,i,f,a;if((o=2147483647&xe(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Me(r,o,n):o<=1073928572?r>0?(a=r-Be,n[0]=a-Le,n[1]=a-n[0]-Le,1):(a=r+Be,n[0]=a+Le,n[1]=a-n[0]+Le,-1):r>0?(a=r-2*Be,n[0]=a-ke,n[1]=a-n[0]-ke,2):(a=r+2*Be,n[0]=a+ke,n[1]=a-n[0]+ke,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Me(r,o,n):r>0?(a=r-3*Be,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Be,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===o?Me(r,o,n):r>0?(a=r-4*Be,n[0]=a-We,n[1]=a-n[0]-We,4):(a=r+4*Be,n[0]=a+We,n[1]=a-n[0]+We,-4);if(o<1094263291)return Me(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Ge(r),a=Ve(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Ce[i]=0|a,a=16777216*(a-Ce[i]);for(Ce[2]=a,u=3;0===Ce[u-1];)u-=1;return f=He(Ce,Re,e,u),r<0?(n[0]=-Re[0],n[1]=-Re[1],-f):(n[0]=Re[0],n[1]=Re[1],f)},Ye=pt,qe=dt,ze=mt,De=Xe,Je=[0,0];var Ke=function(r){var n;if(n=Ye(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ze(r,0);if(n>=2146435072)return NaN;switch(3&De(r,Je)){case 0:return ze(Je[0],Je[1]);case 1:return qe(Je[0],Je[1]);case 2:return-ze(Je[0],Je[1]);default:return-qe(Je[0],Je[1])}},Qe=hn;var Ze=function(r){return Qe(r/2)};var $e=function(r){return Ze(r>0?r-1:r+1)},ro=Math.sqrt,no=xn,to=!0===at?0:1,eo=new Cn(1),oo=new no(eo.buffer);var uo=function(r,n){return eo[0]=r,oo[to]=n>>>0,eo[0]},io=uo;var fo=function(r){return 0|r},ao=$e,co=Zt,vo=_n,lo=Gt;var yo=function(r,n){return n===vo?lo:n===lo?0:n>0?ao(n)?r:0:ao(n)?co(lo,r):lo},po=pt;var bo=function(r,n){return(2147483647&po(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},so=On,wo=Gt;var mo=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:so(r)<1==(n===wo)?0:wo},jo=xn,ho=!0===at?1:0,_o=new Cn(1),go=new jo(_o.buffer);var Ao=function(r,n){return _o[0]=r,go[ho]=n>>>0,_o[0]},Oo=Ao;var No=pt,Eo=io,Uo=Oo,So=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Po=[1,1.5],Fo=[0,.5849624872207642],Io=[0,1.350039202129749e-8];var To=io,xo=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Go=pt,Vo=Oo,Ho=io,Mo=fo,Bo=we,Lo=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ko=wn,Wo=$e,Co=Lt,Ro=hn,Xo=ro,Yo=On,qo=zt,zo=io,Do=fo,Jo=_n,Ko=Gt,Qo=yo,Zo=bo,$o=mo,ru=function(r,n,t){var e,o,u,i,f,a,c,v,l,y,p,b,s,d,w,m,j,h,_,g;return h=0,t<1048576&&(h-=53,t=No(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?g=0:_<767610?g=1:(g=0,h+=1,t-=1048576),e=524288+(t>>1|536870912),f=(j=1/((n=Uo(n,t))+(c=Po[g])))*((m=n-c)-(i=Eo(o=m*j,0))*(a=Uo(0,e+=g<<18))-i*(n-(a-c))),w=(u=o*o)*u*So(u),a=Eo(a=3+(u=i*i)+(w+=f*(i+o)),0),s=(p=-7.028461650952758e-9*(l=Eo(l=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(l-m))+Io[g])-((b=Eo(b=(y=.9617967009544373*l)+p+(v=Fo[g])+(d=h),0))-d-v-y),r[0]=b,r[1]=s,r},nu=function(r,n){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=n-1)-1.4426950408889634*(o*o*xo(o)))-((e=To(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r},tu=function(r,n,t){var e,o,u,i,f,a,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=u=Vo(0,e)),a=(f=.6931471805599453*(t-((u=Ho(u=t+n,0))-n))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),o=c-(u=c*c)*Lo(u),r=Go(c=1-(c*o/(o-2)-(a+c*a)-c)),r=Mo(r),c=(r+=v<<20>>>0)>>20<=0?Bo(c,v):Vo(c,r)},eu=1e300,ou=[0,0],uu=[0,0];var iu=function r(n,t){var e,o,u,i,f,a,c,v,l,y,p,b,s,d;if(ko(n)||ko(t))return NaN;if(qo(ou,t),f=ou[0],0===ou[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Xo(n);if(-.5===t)return 1/Xo(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Co(t))return $o(n,t)}if(qo(ou,n),i=ou[0],0===ou[1]){if(0===i)return Qo(n,t);if(1===n)return 1;if(-1===n&&Wo(t))return-1;if(Co(n))return n===Jo?r(-0,-t):t<0?0:Ko}if(n<0&&!1===Ro(t))return(n-n)/(n-n);if(u=Yo(n),e=2147483647&i|0,o=2147483647&f|0,c=f>>>31|0,a=(a=i>>>31|0)&&Wo(t)?-1:1,o>1105199104){if(o>1139802112)return Zo(n,t);if(e<1072693247)return 1===c?a*eu*eu:1e-300*a*1e-300;if(e>1072693248)return 0===c?a*eu*eu:1e-300*a*1e-300;p=nu(uu,u)}else p=ru(uu,u,e);if(y=(t-(v=zo(t,0)))*p[0]+t*p[1],l=v*p[0],qo(ou,b=y+l),s=Do(ou[0]),d=Do(ou[1]),s>=1083179008){if(0!=(s-1083179008|d))return a*eu*eu;if(y+8008566259537294e-32>b-l)return a*eu*eu}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|d))return 1e-300*a*1e-300;if(y<=b-l)return 1e-300*a*1e-300}return a*(b=tu(s,l,y))},fu=iu,au=Math.ceil,cu=mn,vu=au;var lu=we,yu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var pu=wn,bu=function(r){return r<0?vu(r):cu(r)},su=_n,du=Gt,wu=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*yu(o),lu(1-(n-e*u/(2-u)-r),t)};var mu=fu,ju=function(r){var n;return pu(r)||r===du?r:r===su?0:r>709.782712893384?du:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=bu(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),wu(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},hu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var _u=wn,gu=hn,Au=An,Ou=On,Nu=mn,Eu=Ke,Uu=Gt,Su=_n,Pu=3.141592653589793,Fu=function(r){var n,t,e;return n=1+(n=1/r)*hu(n),t=ju(r),2.5066282746310007*(t=r>143.01608?(e=mu(r,.5*r-.25))*(e/t):mu(r,r-.5)/t)*n},Iu=function(r,n){return n/((1+.5772156649015329*r)*r)},Tu=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var xu=wn,Gu=pt,Vu=Oo,Hu=Gt,Mu=_n,Bu=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},Lu=.6931471803691238,ku=1.9082149292705877e-10;var Wu=wn,Cu=pt,Ru=Oo,Xu=Gt,Yu=_n,qu=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},zu=.6931471803691238,Du=1.9082149292705877e-10;var Ju=function(r){var n,t,e,o,u,i,f,a,c,v;if(r<-1||Wu(r))return NaN;if(-1===r)return Yu;if(r===Xu)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,o=r,t=1)}return 0!==v&&(e<9007199254740992?(u=(v=((t=Cu(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(v=((t=Cu(c=r))>>20)-1023,u=0),(t&=1048575)<434334?c=Ru(c,1072693248|t):(v+=1,c=Ru(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?v*zu+(u+=v*Du):v*zu-((a=n*(1-.6666666666666666*o))-(v*Du+u)-o):(a=(f=(i=o/(2+o))*i)*qu(f),0===v?o-(n-i*(n+a)):v*zu-(n-(i*(n+a)+(v*Du+u))-o))};var Ku=pt,Qu=Oo,Zu=wn,$u=_n,ri=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ni=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ti=.6931471803691238,ei=1.9082149292705877e-10;var oi=function(r){var n,t,e,o,u,i,f,a,c,v,l;return 0===r?$u:Zu(r)||r<0?NaN:(o=0,(t=Ku(r))<1048576&&(o-=54,t=Ku(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=Qu(r,t|1072693248^f))-1,(1048575&2+t)<3?0===i?0===o?0:o*ti+o*ei:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*ti-(u-o*ei-i)):(f=t-398458|0,a=440401-t|0,e=(v=(l=(c=i/(2+i))*c)*l)*ri(v),u=l*ni(v)+e,(f|=a)>0?(n=.5*i*i,0===o?i-(n-c*(n+u)):o*ti-(n-(c*(n+u)+o*ei)-i)):0===o?i-c*(i-u):o*ti-(c*(i-u)-o*ei-i))))};var ui=oi,ii=function(r){var n,t;return 0===r?-.01803556856784494:((r<0?-r:r)<=1?(n=r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(r*(r*(0*r-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,t=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+-2.2335276320861708e-7*r))))))):(n=0+(r=1/r)*(r*(r*(r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+-.01803556856784494*r)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),t=r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+1*r))))))-2.2335276320861708e-7),n/t)},fi=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)},ai=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)};var ci=function(r){var n,t,e,o;if(gu(r)&&r<0||r===Su||_u(r))return NaN;if(0===r)return Au(r)?Su:Uu;if(r>171.61447887182297)return Uu;if(r<-170.5674972726612)return 0;if((t=Ou(r))>33)return r>=0?Fu(r):(n=0==(1&(e=Nu(t)))?-1:1,(o=t-e)>.5&&(o=t-(e+=1)),o=t*Eu(Pu*o),n*Pu/(Ou(o)*Fu(t)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return Iu(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return Iu(r,o);o/=r,r+=1}return 2===r?o:o*Tu(r-=2)},vi=function(r){var n,t,e,o,u,i,f,a,c,v,l,y;if(r===Hu||xu(r))return r;if(r===Mu)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return Hu}if(u=0|Gu(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+Lu,o=-ku,y=-1):(e=r-Lu,o=ku,y=1):(y=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(v=y|=0)*Lu,o=v*ku),c=e-(r=e-o)-o;else{if(u<1016070144)return r;y=0}return l=(a=r*(n=.5*r))*(((i=1+a*Bu(a))-(v=3-i*n))/(6-r*v)),0===y?r-(r*l-a):(l=r*(l-c)-c,l-=a,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(e=Gu(f=1-(l-r))+(y<<20)|0,(f=Vu(f,e))-1):(v=1,y<20?f=(v=Vu(v,e=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(v=Vu(v,e=1023-y<<20|0))),f+=1),e=Gu(f)+(y<<20)|0,Vu(f,e)))},li=Ju,yi=wn,pi=function(r,n,t){var e,o,u;if(r<2220446049250313e-31)return-ui(r);if(0===n||0===t)return 0;if(o=0,r>2){if(r>=3){do{t-=1,o+=ui(r-=1)}while(r>=3);t=r-2}return o+=.15896368026733398*(u=t*(r+1))+u*ii(t)}return r<1&&(o+=-ui(r),t=n,n=r,r+=1),o+=r<=1.5?.5281534194946289*(e=n*t)+e*(u=fi(n)):.45201730728149414*(u=t*n)+u*ai(-t)};var bi=function(r){return yi(r)?NaN:r<0?r<-.5?ci(1+r)-1:vi(-li(r)+pi(r+2,r+1,r)):r<2?vi(pi(r+1,r,r-1)):ci(1+r)-1};function si(r){return dn(r,bi)}export{si as default};
//# sourceMappingURL=mod.js.map

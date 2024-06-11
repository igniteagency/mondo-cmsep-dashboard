"use strict";(()=>{var mt=Object.create;var st=Object.defineProperty;var $t=Object.getOwnPropertyDescriptor;var gt=Object.getOwnPropertyNames;var yt=Object.getPrototypeOf,pt=Object.prototype.hasOwnProperty;var J=(o,i)=>()=>(i||o((i={exports:{}}).exports,i),i.exports);var vt=(o,i,I,N)=>{if(i&&typeof i=="object"||typeof i=="function")for(let d of gt(i))!pt.call(o,d)&&d!==I&&st(o,d,{get:()=>i[d],enumerable:!(N=$t(i,d))||N.enumerable});return o};var V=(o,i,I)=>(I=o!=null?mt(yt(o)):{},vt(i||!o||!o.__esModule?st(I,"default",{value:o,enumerable:!0}):I,o));var at=J((B,Q)=>{(function(o,i){typeof B=="object"&&typeof Q!="undefined"?Q.exports=i():typeof define=="function"&&define.amd?define(i):(o=typeof globalThis!="undefined"?globalThis:o||self).dayjs=i()})(B,function(){"use strict";var o=1e3,i=6e4,I=36e5,N="millisecond",d="second",x="minute",l="hour",$="day",C="week",b="month",g="quarter",p="year",m="date",n="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var r=["th","st","nd","rd"],t=a%100;return"["+a+(r[(t-20)%10]||r[t]||r[0])+"]"}},S=function(a,r,t){var s=String(a);return!s||s.length>=r?a:""+Array(r+1-s.length).join(t)+a},_={s:S,z:function(a){var r=-a.utcOffset(),t=Math.abs(r),s=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+S(s,2,"0")+":"+S(e,2,"0")},m:function a(r,t){if(r.date()<t.date())return-a(t,r);var s=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(s,b),u=t-e<0,f=r.clone().add(s+(u?-1:1),b);return+(-(s+(t-e)/(u?e-f:f-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:b,y:p,w:C,d:$,D:m,h:l,m:x,s:d,ms:N,Q:g}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},y="en",O={};O[y]=v;var z="$isDayjsObject",E=function(a){return a instanceof F||!(!a||!a[z])},U=function a(r,t,s){var e;if(!r)return y;if(typeof r=="string"){var u=r.toLowerCase();O[u]&&(e=u),t&&(O[u]=t,e=u);var f=r.split("-");if(!e&&f.length>1)return a(f[0])}else{var M=r.name;O[M]=r,e=M}return!s&&e&&(y=e),e||!s&&y},D=function(a,r){if(E(a))return a.clone();var t=typeof r=="object"?r:{};return t.date=a,t.args=arguments,new F(t)},c=_;c.l=U,c.i=E,c.w=function(a,r){return D(a,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var F=function(){function a(t){this.$L=U(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[z]=!0}var r=a.prototype;return r.parse=function(t){this.$d=function(s){var e=s.date,u=s.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var f=e.match(h);if(f){var M=f[2]-1||0,T=(f[7]||"0").substring(0,3);return u?new Date(Date.UTC(f[1],M,f[3]||1,f[4]||0,f[5]||0,f[6]||0,T)):new Date(f[1],M,f[3]||1,f[4]||0,f[5]||0,f[6]||0,T)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return c},r.isValid=function(){return this.$d.toString()!==n},r.isSame=function(t,s){var e=D(t);return this.startOf(s)<=e&&e<=this.endOf(s)},r.isAfter=function(t,s){return D(t)<this.startOf(s)},r.isBefore=function(t,s){return this.endOf(s)<D(t)},r.$g=function(t,s,e){return c.u(t)?this[s]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,s){var e=this,u=!!c.u(s)||s,f=c.p(t),M=function(A,H){var L=c.w(e.$u?Date.UTC(e.$y,H,A):new Date(e.$y,H,A),e);return u?L:L.endOf($)},T=function(A,H){return c.w(e.toDate()[A].apply(e.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(H)),e)},Y=this.$W,P=this.$M,j=this.$D,G="set"+(this.$u?"UTC":"");switch(f){case p:return u?M(1,0):M(31,11);case b:return u?M(1,P):M(0,P+1);case C:var k=this.$locale().weekStart||0,Z=(Y<k?Y+7:Y)-k;return M(u?j-Z:j+(6-Z),P);case $:case m:return T(G+"Hours",0);case l:return T(G+"Minutes",1);case x:return T(G+"Seconds",2);case d:return T(G+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,s){var e,u=c.p(t),f="set"+(this.$u?"UTC":""),M=(e={},e[$]=f+"Date",e[m]=f+"Date",e[b]=f+"Month",e[p]=f+"FullYear",e[l]=f+"Hours",e[x]=f+"Minutes",e[d]=f+"Seconds",e[N]=f+"Milliseconds",e)[u],T=u===$?this.$D+(s-this.$W):s;if(u===b||u===p){var Y=this.clone().set(m,1);Y.$d[M](T),Y.init(),this.$d=Y.set(m,Math.min(this.$D,Y.daysInMonth())).$d}else M&&this.$d[M](T);return this.init(),this},r.set=function(t,s){return this.clone().$set(t,s)},r.get=function(t){return this[c.p(t)]()},r.add=function(t,s){var e,u=this;t=Number(t);var f=c.p(s),M=function(P){var j=D(u);return c.w(j.date(j.date()+Math.round(P*t)),u)};if(f===b)return this.set(b,this.$M+t);if(f===p)return this.set(p,this.$y+t);if(f===$)return M(1);if(f===C)return M(7);var T=(e={},e[x]=i,e[l]=I,e[d]=o,e)[f]||1,Y=this.$d.getTime()+t*T;return c.w(Y,this)},r.subtract=function(t,s){return this.add(-1*t,s)},r.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||n;var u=t||"YYYY-MM-DDTHH:mm:ssZ",f=c.z(this),M=this.$H,T=this.$m,Y=this.$M,P=e.weekdays,j=e.months,G=e.meridiem,k=function(H,L,R,q){return H&&(H[L]||H(s,u))||R[L].slice(0,q)},Z=function(H){return c.s(M%12||12,H,"0")},A=G||function(H,L,R){var q=H<12?"AM":"PM";return R?q.toLowerCase():q};return u.replace(w,function(H,L){return L||function(R){switch(R){case"YY":return String(s.$y).slice(-2);case"YYYY":return c.s(s.$y,4,"0");case"M":return Y+1;case"MM":return c.s(Y+1,2,"0");case"MMM":return k(e.monthsShort,Y,j,3);case"MMMM":return k(j,Y);case"D":return s.$D;case"DD":return c.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return k(e.weekdaysMin,s.$W,P,2);case"ddd":return k(e.weekdaysShort,s.$W,P,3);case"dddd":return P[s.$W];case"H":return String(M);case"HH":return c.s(M,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return A(M,T,!0);case"A":return A(M,T,!1);case"m":return String(T);case"mm":return c.s(T,2,"0");case"s":return String(s.$s);case"ss":return c.s(s.$s,2,"0");case"SSS":return c.s(s.$ms,3,"0");case"Z":return f}return null}(H)||f.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,s,e){var u,f=this,M=c.p(s),T=D(t),Y=(T.utcOffset()-this.utcOffset())*i,P=this-T,j=function(){return c.m(f,T)};switch(M){case p:u=j()/12;break;case b:u=j();break;case g:u=j()/3;break;case C:u=(P-Y)/6048e5;break;case $:u=(P-Y)/864e5;break;case l:u=P/I;break;case x:u=P/i;break;case d:u=P/o;break;default:u=P}return e?u:c.a(u)},r.daysInMonth=function(){return this.endOf(b).$D},r.$locale=function(){return O[this.$L]},r.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),u=U(t,s,!0);return u&&(e.$L=u),e},r.clone=function(){return c.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},a}(),it=F.prototype;return D.prototype=it,[["$ms",N],["$s",d],["$m",x],["$H",l],["$W",$],["$M",b],["$y",p],["$D",m]].forEach(function(a){it[a[1]]=function(r){return this.$g(r,a[0],a[1])}}),D.extend=function(a,r){return a.$i||(a(r,F,D),a.$i=!0),D},D.locale=U,D.isDayjs=E,D.unix=function(a){return D(1e3*a)},D.en=O[y],D.Ls=O,D.p={},D})});var ot=J((K,X)=>{(function(o,i){typeof K=="object"&&typeof X!="undefined"?X.exports=i():typeof define=="function"&&define.amd?define(i):(o=typeof globalThis!="undefined"?globalThis:o||self).dayjs_plugin_relativeTime=i()})(K,function(){"use strict";return function(o,i,I){o=o||{};var N=i.prototype,d={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function x($,C,b,g){return N.fromToBase($,C,b,g)}I.en.relativeTime=d,N.fromToBase=function($,C,b,g,p){for(var m,n,h,w=b.$locale().relativeTime||d,v=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],S=v.length,_=0;_<S;_+=1){var y=v[_];y.d&&(m=g?I($).diff(b,y.d,!0):b.diff($,y.d,!0));var O=(o.rounding||Math.round)(Math.abs(m));if(h=m>0,O<=y.r||!y.r){O<=1&&_>0&&(y=v[_-1]);var z=w[y.l];p&&(O=p(""+O)),n=typeof z=="string"?z.replace("%d",O):z(O,C,y.l,h);break}}if(C)return n;var E=h?w.future:w.past;return typeof E=="function"?E(n):E.replace("%s",n)},N.to=function($,C){return x($,C,this,!0)},N.from=function($,C){return x($,C,this)};var l=function($){return $.$u?I.utc():I()};N.toNow=function($){return this.to(l(this),$)},N.fromNow=function($){return this.from(l(this),$)}}})});var ut=J((tt,et)=>{(function(o,i){typeof tt=="object"&&typeof et!="undefined"?et.exports=i():typeof define=="function"&&define.amd?define(i):(o=typeof globalThis!="undefined"?globalThis:o||self).dayjs_plugin_timezone=i()})(tt,function(){"use strict";var o={year:0,month:1,day:2,hour:3,minute:4,second:5},i={};return function(I,N,d){var x,l=function(g,p,m){m===void 0&&(m={});var n=new Date(g),h=function(w,v){v===void 0&&(v={});var S=v.timeZoneName||"short",_=w+"|"+S,y=i[_];return y||(y=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:w,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:S}),i[_]=y),y}(p,m);return h.formatToParts(n)},$=function(g,p){for(var m=l(g,p),n=[],h=0;h<m.length;h+=1){var w=m[h],v=w.type,S=w.value,_=o[v];_>=0&&(n[_]=parseInt(S,10))}var y=n[3],O=y===24?0:y,z=n[0]+"-"+n[1]+"-"+n[2]+" "+O+":"+n[4]+":"+n[5]+":000",E=+g;return(d.utc(z).valueOf()-(E-=E%1e3))/6e4},C=N.prototype;C.tz=function(g,p){g===void 0&&(g=x);var m=this.utcOffset(),n=this.toDate(),h=n.toLocaleString("en-US",{timeZone:g}),w=Math.round((n-new Date(h))/1e3/60),v=d(h,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-w,!0);if(p){var S=v.utcOffset();v=v.add(m-S,"minute")}return v.$x.$timezone=g,v},C.offsetName=function(g){var p=this.$x.$timezone||d.tz.guess(),m=l(this.valueOf(),p,{timeZoneName:g}).find(function(n){return n.type.toLowerCase()==="timezonename"});return m&&m.value};var b=C.startOf;C.startOf=function(g,p){if(!this.$x||!this.$x.$timezone)return b.call(this,g,p);var m=d(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return b.call(m,g,p).tz(this.$x.$timezone,!0)},d.tz=function(g,p,m){var n=m&&p,h=m||p||x,w=$(+d(),h);if(typeof g!="string")return d(g).tz(h);var v=function(O,z,E){var U=O-60*z*1e3,D=$(U,E);if(z===D)return[U,z];var c=$(U-=60*(D-z)*1e3,E);return D===c?[U,D]:[O-60*Math.min(D,c)*1e3,Math.max(D,c)]}(d.utc(g,n).valueOf(),w,h),S=v[0],_=v[1],y=d(S).utcOffset(_);return y.$x.$timezone=h,y},d.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},d.tz.setDefault=function(g){x=g}}})});var ft=J((nt,rt)=>{(function(o,i){typeof nt=="object"&&typeof rt!="undefined"?rt.exports=i():typeof define=="function"&&define.amd?define(i):(o=typeof globalThis!="undefined"?globalThis:o||self).dayjs_plugin_utc=i()})(nt,function(){"use strict";var o="minute",i=/[+-]\d\d(?::?\d\d)?/g,I=/([+-]|\d\d)/g;return function(N,d,x){var l=d.prototype;x.utc=function(n){var h={date:n,utc:!0,args:arguments};return new d(h)},l.utc=function(n){var h=x(this.toDate(),{locale:this.$L,utc:!0});return n?h.add(this.utcOffset(),o):h},l.local=function(){return x(this.toDate(),{locale:this.$L,utc:!1})};var $=l.parse;l.parse=function(n){n.utc&&(this.$u=!0),this.$utils().u(n.$offset)||(this.$offset=n.$offset),$.call(this,n)};var C=l.init;l.init=function(){if(this.$u){var n=this.$d;this.$y=n.getUTCFullYear(),this.$M=n.getUTCMonth(),this.$D=n.getUTCDate(),this.$W=n.getUTCDay(),this.$H=n.getUTCHours(),this.$m=n.getUTCMinutes(),this.$s=n.getUTCSeconds(),this.$ms=n.getUTCMilliseconds()}else C.call(this)};var b=l.utcOffset;l.utcOffset=function(n,h){var w=this.$utils().u;if(w(n))return this.$u?0:w(this.$offset)?b.call(this):this.$offset;if(typeof n=="string"&&(n=function(y){y===void 0&&(y="");var O=y.match(i);if(!O)return null;var z=(""+O[0]).match(I)||["-",0,0],E=z[0],U=60*+z[1]+ +z[2];return U===0?0:E==="+"?U:-U}(n),n===null))return this;var v=Math.abs(n)<=16?60*n:n,S=this;if(h)return S.$offset=v,S.$u=n===0,S;if(n!==0){var _=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(v+_,o)).$offset=v,S.$x.$localOffset=_}else S=this.utc();return S};var g=l.format;l.format=function(n){var h=n||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,h)},l.valueOf=function(){var n=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*n},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var p=l.toDate;l.toDate=function(n){return n==="s"&&this.$offset?x(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():p.call(this)};var m=l.diff;l.diff=function(n,h,w){if(n&&this.$u===n.$u)return m.call(this,n,h,w);var v=this.local(),S=x(n).local();return m.call(v,S,h,w)}}})});var W=V(at(),1),lt=V(ot(),1),ht=V(ut(),1),dt=V(ft(),1);var Mt="stats",Dt=`https://cmsep-backend.mondopower.com.au/${townName}.json`,St=1*60*1e3;document.addEventListener("alpine:init",()=>{window.Alpine.data(Mt,function(){return{townName:"",lastUpdated:dayjs().tz().fromNow(),numberOfSystems:"",isExporting:!1,isPreStormResilience:!1,isResilience:!1,gridExportCount:"",isGridConnected:!1,isIslanded:!1,solarGenerating:"",solarCapacity:"",solarGeneratingPercent:0,batteryChargeState:"",batteryCapacity:"",batteryChargePercent:0,isError:!1,init(){this.queryData(),this.initPolling()},async queryData(){try{let i=await(await fetch(Dt)).json();this.isError=!1,console.debug("API Data fetched",i),this.townName=i.townName,this.lastUpdated=dayjs().tz().to(i.timestamp),this.numberOfSystems=i.numberOfSystems.toString(),this.isExporting=i.status==="Exporting",this.isPreStormResilience=i.status==="Pre-event resilience mode \u2013 charging",this.isResilience=i.status==="Resilience mode \u2013 conserve energy",this.gridExportCount=i.exportingToGrid.value+i.exportingToGrid.unit,this.isGridConnected=i.townSupplyStatus==="Grid connected",this.isIslanded=i.townSupplyStatus==="Islanded",this.solarGenerating=i.solar.generating.value+i.solar.generating.unit,this.solarCapacity=i.solar.capacity.value+i.solar.capacity.unit,this.solarGeneratingPercent=i.solar.generating.value/i.solar.capacity.value*100,this.batteryChargeState=i.batteries.stateOfCharge.value+i.batteries.stateOfCharge.unit,this.batteryCapacity=i.batteries.capacity.value+i.batteries.capacity.unit,this.batteryChargePercent=i.batteries.stateOfCharge.value}catch(o){this.isError=!0,console.error("Error in fetching the data",o)}},initPolling(){try{setInterval(()=>{this.queryData()},St)}catch(o){this.isError=!0,console.error("Error in polling the data",o)}}}})});globalThis.dayjs=W.default;var ct;(ct=window.Webflow)==null||ct.push(()=>{W.default.extend(dt.default),W.default.extend(ht.default),W.default.extend(lt.default),W.default.tz.setDefault("Australia/Victoria")});})();

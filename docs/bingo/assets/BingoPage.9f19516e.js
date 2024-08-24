import{c as v,m as $e,d as Me,h,g as B,u as je,i as le,a as Qe,b as Fe,s as Se,p as He,r as E,o as Y,w as De,e as M,f as Ne,T as Ke,l as G,j as ie,k as _,n as se,q as Ce,t as Ee,v as re,x as J,y as Le,z as ze,A as ue,B as I,C as Ve,D as ee,E as We,F as U,G as A,H as Ie,I as ce,J as Ue,K as Xe,L as Ye}from"./index.e84cc453.js";const ae={xs:18,sm:24,md:32,lg:38,xl:46},Re={size:String};function Pe(e,n=ae){return v(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const O=e=>$e(Me(e)),Ge=e=>$e(e);function Z(e,n){return e!==void 0&&e()||n}function H(e,n){return e!==void 0?n.concat(e()):n}const de="0 0 24 24",fe=e=>e,te=e=>`ionicons ${e}`,Te={"mdi-":e=>`mdi ${e}`,"icon-":fe,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":te,"ion-ios":te,"ion-logo":te,"iconfont ":fe,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},_e={o_:"-outlined",r_:"-round",s_:"-sharp"},Be={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Je=new RegExp("^("+Object.keys(Te).join("|")+")"),Ze=new RegExp("^("+Object.keys(_e).join("|")+")"),ve=new RegExp("^("+Object.keys(Be).join("|")+")"),et=/^[Mm]\s?[-+]?\.?\d/,tt=/^img:/,nt=/^svguse:/,lt=/^ion-/,it=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ge=O({name:"QIcon",props:{...Re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:l}}=B(),t=Pe(e),r=v(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),a=v(()=>{let d,i=e.name;if(i==="none"||!i)return{none:!0};if(l.iconMapFn!==null){const o=l.iconMapFn(i);if(o!==void 0)if(o.icon!==void 0){if(i=o.icon,i==="none"||!i)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(et.test(i)===!0){const[o,p=de]=i.split("|");return{svg:!0,viewBox:p,nodes:o.split("&&").map(u=>{const[y,k,$]=u.split("@@");return h("path",{style:k,d:y,transform:$})})}}if(tt.test(i)===!0)return{img:!0,src:i.substring(4)};if(nt.test(i)===!0){const[o,p=de]=i.split("|");return{svguse:!0,src:o.substring(7),viewBox:p}}let s=" ";const c=i.match(Je);if(c!==null)d=Te[c[1]](i);else if(it.test(i)===!0)d=i;else if(lt.test(i)===!0)d=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(ve.test(i)===!0){d="notranslate material-symbols";const o=i.match(ve);o!==null&&(i=i.substring(6),d+=Be[o[1]]),s=i}else{d="notranslate material-icons";const o=i.match(Ze);o!==null&&(i=i.substring(2),d+=_e[o[1]]),s=i}return{cls:d,content:s}});return()=>{const d={class:r.value,style:t.value,"aria-hidden":"true",role:"presentation"};return a.value.none===!0?h(e.tag,d,Z(n.default)):a.value.img===!0?h("span",d,H(n.default,[h("img",{src:a.value.src})])):a.value.svg===!0?h("span",d,H(n.default,[h("svg",{viewBox:a.value.viewBox||"0 0 24 24"},a.value.nodes)])):a.value.svguse===!0?h("span",d,H(n.default,[h("svg",{viewBox:a.value.viewBox},[h("use",{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(d.class+=" "+a.value.cls),h(e.tag,d,H(n.default,[a.value.content])))}}});const rt={size:{type:[Number,String],default:"1em"},color:String};function at(e){return{cSize:v(()=>e.size in ae?`${ae[e.size]}px`:e.size),classes:v(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ot=O({name:"QSpinner",props:{...rt,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:l}=at(e);return()=>h("svg",{class:l.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function oe(e,n){const l=e.style;for(const t in n)l[t]=n[t]}function st(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=je(e);if(n)return n.$el||n}function ut(e,n=250){let l=!1,t;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},n),t=e.apply(this,arguments)),t}}function me(e,n,l,t){l.modifiers.stop===!0&&Se(e);const r=l.modifiers.color;let a=l.modifiers.center;a=a===!0||t===!0;const d=document.createElement("span"),i=document.createElement("span"),s=He(e),{left:c,top:o,width:p,height:u}=n.getBoundingClientRect(),y=Math.sqrt(p*p+u*u),k=y/2,$=`${(p-y)/2}px`,b=a?$:`${s.left-c-k}px`,q=`${(u-y)/2}px`,z=a?q:`${s.top-o-k}px`;i.className="q-ripple__inner",oe(i,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${b},${z},0) scale3d(.2,.2,1)`,opacity:0}),d.className=`q-ripple${r?" text-"+r:""}`,d.setAttribute("dir","ltr"),d.appendChild(i),n.appendChild(d);const P=()=>{d.remove(),clearTimeout(m)};l.abort.push(P);let m=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${$},${q},0) scale3d(1,1,1)`,i.style.opacity=.2,m=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,m=setTimeout(()=>{d.remove(),l.abort.splice(l.abort.indexOf(P),1)},275)},250)},50)}function he(e,{modifiers:n,value:l,arg:t}){const r=Object.assign({},e.cfg.ripple,n,l);e.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||t,keyCodes:[].concat(r.keyCodes||13)}}var ct=Ge({name:"ripple",beforeMount(e,n){const l=n.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const t={cfg:l,enabled:n.value!==!1,modifiers:{},abort:[],start(r){t.enabled===!0&&r.qSkipRipple!==!0&&r.type===(t.modifiers.early===!0?"pointerdown":"click")&&me(r,e,t,r.qKeyEvent===!0)},keystart:ut(r=>{t.enabled===!0&&r.qSkipRipple!==!0&&le(r,t.modifiers.keyCodes)===!0&&r.type===`key${t.modifiers.early===!0?"down":"up"}`&&me(r,e,t,!0)},300)};he(t,n),e.__qripple=t,Qe(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const l=e.__qripple;l!==void 0&&(l.enabled=n.value!==!1,l.enabled===!0&&Object(n.value)===n.value&&he(l,n))}},beforeUnmount(e){const n=e.__qripple;n!==void 0&&(n.abort.forEach(l=>{l()}),Fe(n,"main"),delete e._qripple)}});const Oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},dt=Object.keys(Oe),ft={align:{type:String,validator:e=>dt.includes(e)}};function vt(e){return v(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Oe[n]}`})}function gt(e){return e.appContext.config.globalProperties.$router!==void 0}function be(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ye(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function mt(e,n){for(const l in n){const t=n[l],r=e[l];if(typeof t=="string"){if(t!==r)return!1}else if(Array.isArray(r)===!1||r.length!==t.length||t.some((a,d)=>a!==r[d]))return!1}return!0}function pe(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((l,t)=>l===n[t]):e.length===1&&e[0]===n}function ht(e,n){return Array.isArray(e)===!0?pe(e,n):Array.isArray(n)===!0?pe(n,e):e===n}function bt(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const l in e)if(ht(e[l],n[l])===!1)return!1;return!0}const yt={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function pt({fallbackTag:e,useDisableForRouterLinkProps:n=!0}={}){const l=B(),{props:t,proxy:r,emit:a}=l,d=gt(l),i=v(()=>t.disable!==!0&&t.href!==void 0),s=n===!0?v(()=>d===!0&&t.disable!==!0&&i.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""):v(()=>d===!0&&i.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),c=v(()=>s.value===!0?z(t.to):null),o=v(()=>c.value!==null),p=v(()=>i.value===!0||o.value===!0),u=v(()=>t.type==="a"||p.value===!0?"a":t.tag||e||"div"),y=v(()=>i.value===!0?{href:t.href,target:t.target}:o.value===!0?{href:c.value.href,target:t.target}:{}),k=v(()=>{if(o.value===!1)return-1;const{matched:g}=c.value,{length:x}=g,S=g[x-1];if(S===void 0)return-1;const C=r.$route.matched;if(C.length===0)return-1;const R=C.findIndex(ye.bind(null,S));if(R>-1)return R;const V=be(g[x-2]);return x>1&&be(S)===V&&C[C.length-1].path!==V?C.findIndex(ye.bind(null,g[x-2])):R}),$=v(()=>o.value===!0&&k.value!==-1&&mt(r.$route.params,c.value.params)),b=v(()=>$.value===!0&&k.value===r.$route.matched.length-1&&bt(r.$route.params,c.value.params)),q=v(()=>o.value===!0?b.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":$.value===!0?` ${t.activeClass}`:"":"");function z(g){try{return r.$router.resolve(g)}catch{}return null}function P(g,{returnRouterError:x,to:S=t.to,replace:C=t.replace}={}){if(t.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||t.target==="_blank")return Promise.resolve(!1);g.preventDefault();const R=r.$router[C===!0?"replace":"push"](S);return x===!0?R:R.then(()=>{}).catch(()=>{})}function m(g){if(o.value===!0){const x=S=>P(g,S);a("click",g,x),g.defaultPrevented!==!0&&x()}else a("click",g)}return{hasRouterLink:o,hasHrefLink:i,hasLink:p,linkTag:u,resolvedLink:c,linkIsActive:$,linkIsExactActive:b,linkClass:q,linkAttrs:y,getLink:z,navigateToRouterLink:P,navigateOnClick:m}}const ke={none:0,xs:4,sm:8,md:16,lg:24,xl:32},kt={xs:8,sm:10,md:14,lg:20,xl:24},xt=["button","submit","reset"],wt=/[^\s]\/[^\s]/,qt=["flat","outline","push","unelevated"],$t=(e,n)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":n,St={...Re,...yt,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...qt.reduce((e,n)=>(e[n]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ft.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ct(e){const n=Pe(e,kt),l=vt(e),{hasRouterLink:t,hasLink:r,linkTag:a,linkAttrs:d,navigateOnClick:i}=pt({fallbackTag:"button"}),s=v(()=>{const b=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},b,{padding:e.padding.split(/\s+/).map(q=>q in ke?ke[q]+"px":q).join(" "),minWidth:"0",minHeight:"0"}):b}),c=v(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=v(()=>e.disable!==!0&&e.loading!==!0),p=v(()=>o.value===!0?e.tabindex||0:-1),u=v(()=>$t(e,"standard")),y=v(()=>{const b={tabindex:p.value};return r.value===!0?Object.assign(b,d.value):xt.includes(e.type)===!0&&(b.type=e.type),a.value==="a"?(e.disable===!0?b["aria-disabled"]="true":b.href===void 0&&(b.role="button"),t.value!==!0&&wt.test(e.type)===!0&&(b.type=e.type)):e.disable===!0&&(b.disabled="",b["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(b,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),b}),k=v(()=>{let b;e.color!==void 0?e.flat===!0||e.outline===!0?b=`text-${e.textColor||e.color}`:b=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(b=`text-${e.textColor}`);const q=e.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${q}`+(b!==void 0?" "+b:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),$=v(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:s,innerClasses:$,attributes:y,hasLink:r,linkTag:a,navigateOnClick:i,isActionable:o}}const{passiveCapture:L}=G;let j=null,Q=null,F=null;var K=O({name:"QBtn",props:{...St,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:n,emit:l}){const{proxy:t}=B(),{classes:r,style:a,innerClasses:d,attributes:i,hasLink:s,linkTag:c,navigateOnClick:o,isActionable:p}=Ct(e),u=E(null),y=E(null);let k=null,$,b=null;const q=v(()=>e.label!==void 0&&e.label!==null&&e.label!==""),z=v(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:s.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=v(()=>({center:e.round})),m=v(()=>{const f=Math.max(0,Math.min(100,e.percentage));return f>0?{transition:"transform 0.6s",transform:`translateX(${f-100}%)`}:{}}),g=v(()=>{if(e.loading===!0)return{onMousedown:N,onTouchstart:N,onClick:N,onKeydown:N,onKeyup:N};if(p.value===!0){const f={onClick:S,onKeydown:C,onMousedown:V};if(t.$q.platform.has.touch===!0){const w=e.onTouchstart!==void 0?"":"Passive";f[`onTouchstart${w}`]=R}return f}return{onClick:M}}),x=v(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:a.value,...i.value,...g.value}));function S(f){if(u.value!==null){if(f!==void 0){if(f.defaultPrevented===!0)return;const w=document.activeElement;if(e.type==="submit"&&w!==document.body&&u.value.contains(w)===!1&&w.contains(u.value)===!1){u.value.focus();const W=()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("keyup",W,L),u.value!==null&&u.value.removeEventListener("blur",W,L)};document.addEventListener("keydown",M,!0),document.addEventListener("keyup",W,L),u.value.addEventListener("blur",W,L)}}o(f)}}function C(f){u.value!==null&&(l("keydown",f),le(f,[13,32])===!0&&Q!==u.value&&(Q!==null&&D(),f.defaultPrevented!==!0&&(u.value.focus(),Q=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",T,!0),u.value.addEventListener("blur",T,L)),M(f)))}function R(f){u.value!==null&&(l("touchstart",f),f.defaultPrevented!==!0&&(j!==u.value&&(j!==null&&D(),j=u.value,k=f.target,k.addEventListener("touchcancel",T,L),k.addEventListener("touchend",T,L)),$=!0,b!==null&&clearTimeout(b),b=setTimeout(()=>{b=null,$=!1},200)))}function V(f){u.value!==null&&(f.qSkipRipple=$===!0,l("mousedown",f),f.defaultPrevented!==!0&&F!==u.value&&(F!==null&&D(),F=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",T,L)))}function T(f){if(u.value!==null&&!(f!==void 0&&f.type==="blur"&&document.activeElement===u.value)){if(f!==void 0&&f.type==="keyup"){if(Q===u.value&&le(f,[13,32])===!0){const w=new MouseEvent("click",f);w.qKeyEvent=!0,f.defaultPrevented===!0&&Ne(w),f.cancelBubble===!0&&Se(w),u.value.dispatchEvent(w),M(f),f.qKeyEvent=!0}l("keyup",f)}D()}}function D(f){const w=y.value;f!==!0&&(j===u.value||F===u.value)&&w!==null&&w!==document.activeElement&&(w.setAttribute("tabindex",-1),w.focus()),j===u.value&&(k!==null&&(k.removeEventListener("touchcancel",T,L),k.removeEventListener("touchend",T,L)),j=k=null),F===u.value&&(document.removeEventListener("mouseup",T,L),F=null),Q===u.value&&(document.removeEventListener("keyup",T,!0),u.value!==null&&u.value.removeEventListener("blur",T,L),Q=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function N(f){M(f),f.qSkipRipple=!0}return Y(()=>{D(!0)}),Object.assign(t,{click:S}),()=>{let f=[];e.icon!==void 0&&f.push(h(ge,{name:e.icon,left:e.stack===!1&&q.value===!0,role:"img","aria-hidden":"true"})),q.value===!0&&f.push(h("span",{class:"block"},[e.label])),f=H(n.default,f),e.iconRight!==void 0&&e.round===!1&&f.push(h(ge,{name:e.iconRight,right:e.stack===!1&&q.value===!0,role:"img","aria-hidden":"true"}));const w=[h("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&w.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:m.value})])),w.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},f)),e.loading!==null&&w.push(h(Ke,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[h(ot)])]:null)),De(h(c.value,x.value,w),[[ct,z.value,void 0,P.value]])}}});const Et={dark:{type:Boolean,default:null}};function Lt(e,n){return v(()=>e.dark===null?n.dark.isActive:e.dark)}var zt=O({name:"QCard",props:{...Et,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:l}}=B(),t=Lt(e,l),r=v(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:r.value},Z(n.default))}}),Rt=O({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:l}}=B(),t=ie(se,_);if(t===_)return console.error("QPage needs to be a deep child of QLayout"),_;if(ie(Ce,_)===_)return console.error("QPage needs to be child of QPageContainer"),_;const a=v(()=>{const i=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const s=t.isContainer.value===!0?t.containerHeight.value:l.screen.height;return e.styleFn(i,s)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-i+"px":l.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":l.screen.height-i+"px"}}),d=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:d.value,style:a.value},Z(n.default))}}),Pt=O({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=B(),t=ie(se,_);if(t===_)return console.error("QPageContainer needs to be child of QLayout"),_;Ee(Ce,!0);const r=v(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>h("div",{class:"q-page-container",style:r.value},Z(n.default))}});const Tt=[null,document,document.body,document.scrollingElement,document.documentElement];function _t(e,n){let l=st(n);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Tt.includes(l)?window:l}function Bt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ot(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let X;function ne(){if(X!==void 0)return X;const e=document.createElement("p"),n=document.createElement("div");oe(e,{width:"100%",height:"200px"}),oe(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const l=e.offsetWidth;n.style.overflow="scroll";let t=e.offsetWidth;return l===t&&(t=n.clientWidth),n.remove(),X=l-t,X}const{passive:xe}=G,At=["both","horizontal","vertical"];var Mt=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>At.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,a;re(()=>e.scrollTarget,()=>{s(),i()});function d(){t!==null&&t();const p=Math.max(0,Bt(r)),u=Ot(r),y={top:p-l.position.top,left:u-l.position.left};if(e.axis==="vertical"&&y.top===0||e.axis==="horizontal"&&y.left===0)return;const k=Math.abs(y.top)>=Math.abs(y.left)?y.top<0?"up":"down":y.left<0?"left":"right";l.position={top:p,left:u},l.directionChanged=l.direction!==k,l.delta=y,l.directionChanged===!0&&(l.direction=k,l.inflectionPoint=l.position),n("scroll",{...l})}function i(){r=_t(a,e.scrollTarget),r.addEventListener("scroll",c,xe),c(!0)}function s(){r!==void 0&&(r.removeEventListener("scroll",c,xe),r=void 0)}function c(p){if(p===!0||e.debounce===0||e.debounce==="0")d();else if(t===null){const[u,y]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];t=()=>{y(u),t=null}}}const{proxy:o}=B();return re(()=>o.$q.lang.rtl,d),J(()=>{a=o.$el.parentNode,i()}),Y(()=>{t!==null&&t(),s()}),Object.assign(o,{trigger:c,getPosition:()=>l}),Le}});function jt(){const e=E(!ze.value);return e.value===!1&&J(()=>{e.value=!0}),e}const Ae=typeof ResizeObserver!="undefined",we=Ae===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var qe=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,t,r={width:-1,height:-1};function a(s){s===!0||e.debounce===0||e.debounce==="0"?d():l===null&&(l=setTimeout(d,e.debounce))}function d(){if(l!==null&&(clearTimeout(l),l=null),t){const{offsetWidth:s,offsetHeight:c}=t;(s!==r.width||c!==r.height)&&(r={width:s,height:c},n("resize",r))}}const{proxy:i}=B();if(Ae===!0){let s;const c=o=>{t=i.$el.parentNode,t?(s=new ResizeObserver(a),s.observe(t),d()):o!==!0&&ue(()=>{c(!0)})};return J(()=>{c()}),Y(()=>{l!==null&&clearTimeout(l),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),Le}else{let o=function(){l!==null&&(clearTimeout(l),l=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",a,G.passive),c=void 0)},p=function(){o(),t&&t.contentDocument&&(c=t.contentDocument.defaultView,c.addEventListener("resize",a,G.passive),d())};const s=jt();let c;return J(()=>{ue(()=>{t=i.$el,t&&p()})}),Y(o),i.trigger=a,()=>{if(s.value===!0)return h("object",{style:we.style,tabindex:-1,type:"text/html",data:we.url,"aria-hidden":"true",onLoad:p})}}}}),Qt=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:t}}=B(),r=E(null),a=E(t.screen.height),d=E(e.container===!0?0:t.screen.width),i=E({position:0,direction:"down",inflectionPoint:0}),s=E(0),c=E(ze.value===!0?0:ne()),o=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),u=v(()=>c.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),y=v(()=>c.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function k(m){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};i.value=g,e.onScroll!==void 0&&l("scroll",g)}}function $(m){const{height:g,width:x}=m;let S=!1;a.value!==g&&(S=!0,a.value=g,e.onScrollHeight!==void 0&&l("scrollHeight",g),q()),d.value!==x&&(S=!0,d.value=x),S===!0&&e.onResize!==void 0&&l("resize",m)}function b({height:m}){s.value!==m&&(s.value=m,q())}function q(){if(e.container===!0){const m=a.value>s.value?ne():0;c.value!==m&&(c.value=m)}}let z=null;const P={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:r,height:a,containerHeight:s,scrollbarWidth:c,totalWidth:v(()=>d.value+c.value),rows:v(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:I({size:0,offset:0,space:!1}),right:I({size:300,offset:0,space:!1}),footer:I({size:0,offset:0,space:!1}),left:I({size:300,offset:0,space:!1}),scroll:i,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,g,x){P[m][g]=x}};if(Ee(se,P),ne()>0){let x=function(){m=null,g.classList.remove("hide-scrollbar")},S=function(){if(m===null){if(g.scrollHeight>t.screen.height)return;g.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(x,300)},C=function(R){m!==null&&R==="remove"&&(clearTimeout(m),x()),window[`${R}EventListener`]("resize",S)},m=null;const g=document.body;re(()=>e.container!==!0?"add":"remove",C),e.container!==!0&&C("add"),Ve(()=>{C("remove")})}return()=>{const m=H(n.default,[h(Mt,{onScroll:k}),h(qe,{onResize:$})]),g=h("div",{class:o.value,style:p.value,ref:e.container===!0?void 0:r,tabindex:-1},m);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:r},[h(qe,{onResize:b}),h("div",{class:"absolute-full",style:u.value},[h("div",{class:"scroll",style:y.value},[g])])]):g}}});const Ft={class:"row"},Dt={__name:"BingoPage",setup(e){const n=E([]);for(let s=1;s<=60;s++)n.value.push(s);const l=E(20),t=E([]),r=s=>{a.value=s,t.value.push(s)},a=E(null),d=s=>t.value.includes(s)?a.value===s?"red-13":"positive":"grey-5",i=()=>{const s=Math.floor(Math.random()*60)+1;if(!t.value.includes(s)){a.value=s,t.value.push(s);return}i()};return(s,c)=>(ee(),We(Qt,{view:"hHh Lpr fff"},{default:U(()=>[A(Pt,null,{default:U(()=>[A(Rt,{class:"bg-grey-1 q-pa-sm"},{default:U(()=>[A(zt,{class:"bg-white q-pa-md q-gutter-md q-mb-md"},{default:U(()=>[Ie("div",Ft,[(ee(!0),ce(Xe,null,Ue(n.value,o=>(ee(),ce("div",{class:"q-ma-sm col-1",key:o},[A(K,{label:o,onClick:p=>r(o),color:d(o),size:`${l.value}px`,class:Ye(a.value===o?"elementToFadeInAndOut":""),round:""},null,8,["label","onClick","color","size","class"])]))),128))])]),_:1}),A(K,{icon:"fa-solid fa-magnifying-glass-plus",onClick:c[0]||(c[0]=o=>l.value++)}),A(K,{icon:"fa-solid fa-magnifying-glass-minus",onClick:c[1]||(c[1]=o=>l.value--),class:"q-ml-sm"}),A(K,{icon:"fa-solid fa-dice",onClick:i,class:"q-ml-sm",disable:t.value.length===60},null,8,["disable"]),A(K,{icon:"fa-solid fa-redo",onClick:c[2]||(c[2]=o=>{t.value.length=0,a.value=null}),class:"q-ml-sm",disable:t.value.length===0},null,8,["disable"])]),_:1})]),_:1})]),_:1}))}};export{Dt as default};
import{c as s,k as Q,h as v,g as H,N as de,O as D,Q as fe,R as ve,S as re,U as me,r as U,q as ge,V as he,J as be,W as P,u as ye,X as ke,_ as pe,d as xe,A as qe,H as $e,G as I,f as Ee}from"./index.27cbf7fa.js";import{h as we,a as z}from"./render.fb9d86c6.js";import{c as Se}from"./dom.5191e1da.js";const F={xs:18,sm:24,md:32,lg:38,xl:46},le={size:String};function ue(e,t=F){return s(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const W="0 0 24 24",X=e=>e,V=e=>`ionicons ${e}`,ie={"mdi-":e=>`mdi ${e}`,"icon-":X,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":V,"ion-ios":V,"ion-logo":V,"iconfont ":X,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},_e=new RegExp("^("+Object.keys(ie).join("|")+")"),Re=new RegExp("^("+Object.keys(oe).join("|")+")"),G=new RegExp("^("+Object.keys(se).join("|")+")"),Be=/^[Mm]\s?[-+]?\.?\d/,Le=/^img:/,Ce=/^svguse:/,Pe=/^ion-/,Te=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=Q({name:"QIcon",props:{...le,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=H(),n=ue(e),i=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=s(()=>{let c,l=e.name;if(l==="none"||!l)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(l);if(o!==void 0)if(o.icon!==void 0){if(l=o.icon,l==="none"||!l)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Be.test(l)===!0){const[o,y=W]=l.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Le.test(l)===!0)return{img:!0,src:l.substring(4)};if(Ce.test(l)===!0){const[o,y=W]=l.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const b=l.match(_e);if(b!==null)c=ie[b[1]](l);else if(Te.test(l)===!0)c=l;else if(Pe.test(l)===!0)c=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(G.test(l)===!0){c="notranslate material-symbols";const o=l.match(G);o!==null&&(l=l.substring(6),c+=se[o[1]]),q=l}else{c="notranslate material-icons";const o=l.match(Re);o!==null&&(l=l.substring(2),c+=oe[o[1]]),q=l}return{cls:c,content:q}});return()=>{const c={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,we(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Oe={size:{type:[String,Number],default:"1em"},color:String};function Ae(e){return{cSize:s(()=>e.size in F?`${F[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Me=Q({name:"QSpinner",props:{...Oe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=Ae(e);return()=>v("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function je(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function Y(e,t,r,n){r.modifiers.stop===!0&&re(e);const i=r.modifiers.color;let f=r.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),l=document.createElement("span"),q=me(e),{left:b,top:o,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,C=f?x:`${q.top-o-h}px`;l.className="q-ripple__inner",Se(l,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${C},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${i?" text-"+i:""}`,c.setAttribute("dir","ltr"),c.appendChild(l),t.appendChild(c);const B=()=>{c.remove(),clearTimeout(L)};r.abort.push(B);let L=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,l.style.opacity=.2,L=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,L=setTimeout(()=>{c.remove(),r.abort.splice(r.abort.indexOf(B),1)},275)},250)},50)}function Z(e,{modifiers:t,value:r,arg:n}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var ze=de({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&Y(i,e,n,i.qKeyEvent===!0)},keystart:je(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&Y(i,e,n,!0)},300)};Z(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&Z(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ve(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ne=Object.keys(ce),Ke={align:{type:String,validator:e=>Ne.includes(e)}};function Ie(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function Ve(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function De(e,t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,c)=>f!==i[c]))return!1}return!0}function ne(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Fe(e,t){return Array.isArray(e)===!0?ne(e,t):Array.isArray(t)===!0?ne(t,e):e===t}function Qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(Fe(e[r],t[r])===!1)return!1;return!0}const He={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Ue({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=H(),{props:n,proxy:i,emit:f}=r,c=Ve(r),l=s(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?s(()=>c===!0&&n.disable!==!0&&l.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>c===!0&&l.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=s(()=>q.value===!0?C(n.to):null),o=s(()=>b.value!==null),y=s(()=>l.value===!0||o.value===!0),u=s(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=s(()=>l.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:b.value.href,target:n.target}:{}),h=s(()=>{if(o.value===!1)return-1;const{matched:m}=b.value,{length:$}=m,w=m[$-1];if(w===void 0)return-1;const _=i.$route.matched;if(_.length===0)return-1;const R=_.findIndex(te.bind(null,w));if(R!==-1)return R;const N=ee(m[$-2]);return $>1&&ee(w)===N&&_[_.length-1].path!==N?_.findIndex(te.bind(null,m[$-2])):R}),p=s(()=>o.value===!0&&h.value!==-1&&De(i.$route.params,b.value.params)),d=s(()=>p.value===!0&&h.value===i.$route.matched.length-1&&Qe(i.$route.params,b.value.params)),x=s(()=>o.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function C(m){try{return i.$router.resolve(m)}catch{}return null}function B(m,{returnRouterError:$,to:w=n.to,replace:_=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const R=i.$router[_===!0?"replace":"push"](w);return $===!0?R:R.then(()=>{}).catch(()=>{})}function L(m){if(o.value===!0){const $=w=>B(m,w);f("click",m,$),m.defaultPrevented!==!0&&$()}else f("click",m)}return{hasRouterLink:o,hasHrefLink:l,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:C,navigateToRouterLink:B,navigateOnClick:L}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},We={xs:8,sm:10,md:14,lg:20,xl:24},Xe=["button","submit","reset"],Ge=/[^\s]\/[^\s]/,Je=["flat","outline","push","unelevated"];function Ye(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Ze={...le,...He,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Je.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},et={...Ze,round:Boolean};function tt(e){const t=ue(e,We),r=Ie(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:c,navigateOnClick:l}=Ue({fallbackTag:"button"}),q=s(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ae?ae[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>o.value===!0?e.tabindex||0:-1),u=s(()=>Ye(e,"standard")),k=s(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,c.value):Xe.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ge.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=s(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:l,isActionable:o}}const{passiveCapture:E}=ye;let T=null,O=null,A=null;var nt=Q({name:"QBtn",props:{...et,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=H(),{classes:i,style:f,innerClasses:c,attributes:l,hasLink:q,linkTag:b,navigateOnClick:o,isActionable:y}=tt(e),u=U(null),k=U(null);let h=null,p,d=null;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),C=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=s(()=>({center:e.round})),L=s(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),m=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:w,onKeydown:_,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${g}`]=R}return a}return{onClick:P}}),$=s(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...l.value,...m.value}));function w(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,E),u.value!==null&&u.value.removeEventListener("blur",K,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,E),u.value.addEventListener("blur",K,E)}}o(a)}}function _(a){u.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&O!==u.value&&(O!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),u.value.addEventListener("blur",S,E)),P(a)))}function R(a){u.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&M(),T=u.value,h=a.target,h.addEventListener("touchcancel",S,E),h.addEventListener("touchend",S,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function N(a){u.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&A!==u.value&&(A!==null&&M(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,E)))}function S(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(O===u.value&&D(a,[13,32])===!0){const g=new MouseEvent("click",a);g.qKeyEvent=!0,a.defaultPrevented===!0&&ke(g),a.cancelBubble===!0&&re(g),u.value.dispatchEvent(g),P(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const g=k.value;a!==!0&&(T===u.value||A===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===u.value&&(h!==null&&(h.removeEventListener("touchcancel",S,E),h.removeEventListener("touchend",S,E)),T=h=null),A===u.value&&(document.removeEventListener("mouseup",S,E),A=null),O===u.value&&(document.removeEventListener("keyup",S,!0),u.value!==null&&u.value.removeEventListener("blur",S,E),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return ge(()=>{M(!0)}),Object.assign(n,{click:a=>{y.value===!0&&w(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(v(J,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&a.push(v("span",{class:"block"},[e.label])),a=z(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(v(J,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},a)),e.loading!==null&&g.push(v(he,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Me)])]:null)),be(v(b.value,$.value,g),[[ze,C.value,void 0,B.value]])}}});const at=xe({name:"ErrorNotFound"}),rt={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"};function lt(e,t,r,n,i,f){return qe(),$e("div",rt,[I("div",null,[t[0]||(t[0]=I("div",{style:{"font-size":"30vh"}}," 404 ",-1)),t[1]||(t[1]=I("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1)),Ee(nt,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}var st=pe(at,[["render",lt]]);export{st as default};
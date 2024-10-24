import{k as T,c as f,h,l as j,r as w,m as J,o as B,n as O,p as X,q as K,g as Q,t as D,i as Y,u as q,w as S,v as te,x as A,y as Z,z as ne,A as P,a as oe,B as le,C as ie,D as re,E as ae,G as H,f as L,Q as se,H as R,I as V,J as _,K as F}from"./index.304076ad.js";import{s as ue,g as ce,a as de,b as fe,c as M,u as ve}from"./math-store.a51f9e0d.js";var he=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},j(d.default))}}),ge=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},j(d.default))}});function me(){const e=w(!J.value);return e.value===!1&&B(()=>{e.value=!0}),{isHydrated:e}}const ee=typeof ResizeObserver!="undefined",U=ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var W=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,t,o={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:a,offsetHeight:i}=t;(a!==o.width||i!==o.height)&&(o={width:a,height:i},d("resize",o))}}const{proxy:g}=Q();if(g.trigger=s,ee===!0){let a;const i=m=>{t=g.$el.parentNode,t?(a=new ResizeObserver(s),a.observe(t),u()):m!==!0&&K(()=>{i(!0)})};return B(()=>{i()}),O(()=>{n!==null&&clearTimeout(n),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),X}else{let m=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,D.passive),i=void 0)},b=function(){m(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,D.passive),u())};const{isHydrated:a}=me();let i;return B(()=>{K(()=>{t=g.$el,t&&b()})}),O(m),()=>{if(a.value===!0)return h("object",{class:"q--avoid-card-border",style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:b})}}}}),be=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:t}}=Q(),o=Y(A,q);if(o===q)return console.error("QHeader needs to be child of QLayout"),q;const s=w(parseInt(e.heightHint,10)),u=w(!0),g=f(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?s.value:0;const l=s.value-o.scroll.value.position;return l>0?l:0}),i=f(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),m=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const l=o.rows.value.top,p={};return l[0]==="l"&&o.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),p});function c(l,p){o.update("header",l,p)}function y(l,p){l.value!==p&&(l.value=p)}function E({height:l}){y(s,l),c("size",l)}function k(l){m.value===!0&&y(u,!0),n("focusin",l)}S(()=>e.modelValue,l=>{c("space",l),y(u,!0),o.animate()}),S(a,l=>{c("offset",l)}),S(()=>e.reveal,l=>{l===!1&&y(u,e.modelValue)}),S(u,l=>{o.animate(),n("reveal",l)}),S(o.scroll,l=>{e.reveal===!0&&y(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const $={};return o.instances.header=$,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",a.value),O(()=>{o.instances.header===$&&(o.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const l=te(d.default,[]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(h(W,{debounce:0,onResize:E})),h("header",{class:b.value,style:z.value,onFocusin:k},l)}}}),pe=T({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=Q(),t=Y(A,q);if(t===q)return console.error("QPageContainer needs to be child of QLayout"),q;Z(ne,!0);const o=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:o.value},j(d.default))}});const{passive:G}=D,ye=["both","horizontal","vertical"];var we=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ye.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ue},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;S(()=>e.scrollTarget,()=>{a(),g()});function u(){t!==null&&t();const b=Math.max(0,de(o)),z=fe(o),c={top:b-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:b,left:z},n.directionChanged=n.direction!==y,n.delta=c,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),d("scroll",{...n})}function g(){o=ce(s,e.scrollTarget),o.addEventListener("scroll",i,G),i(!0)}function a(){o!==void 0&&(o.removeEventListener("scroll",i,G),o=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:m}=Q();return S(()=>m.$q.lang.rtl,u),B(()=>{s=m.$el.parentNode,g()}),O(()=>{t!==null&&t(),a()}),Object.assign(m,{trigger:i,getPosition:()=>n}),X}}),ze=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:t}}=Q(),o=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),a=w(0),i=w(J.value===!0?0:M()),m=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=f(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=f(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};g.value=v,e.onScroll!==void 0&&n("scroll",v)}}function E(r){const{height:v,width:x}=r;let C=!1;s.value!==v&&(C=!0,s.value=v,e.onScrollHeight!==void 0&&n("scrollHeight",v),$()),u.value!==x&&(C=!0,u.value=x),C===!0&&e.onResize!==void 0&&n("resize",r)}function k({height:r}){a.value!==r&&(a.value=r,$())}function $(){if(e.container===!0){const r=s.value>a.value?M():0;i.value!==r&&(i.value=r)}}let l=null;const p={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:a,scrollbarWidth:i,totalWidth:f(()=>u.value+i.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:g,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,v,x){p[r][v]=x}};if(Z(A,p),M()>0){let x=function(){r=null,v.classList.remove("hide-scrollbar")},C=function(){if(r===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(x,300)},N=function(I){r!==null&&I==="remove"&&(clearTimeout(r),x()),window[`${I}EventListener`]("resize",C)},r=null;const v=document.body;S(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),oe(()=>{N("remove")})}return()=>{const r=le(d.default,[h(we,{onScroll:y}),h(W,{onResize:E})]),v=h("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(W,{onResize:k}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[v])])]):v}}});const Te={__name:"MainLayout",setup(e){const d=ve();return(n,t)=>{const o=ie("router-view");return re(),ae(ze,{view:"lHh Lpr lFf"},{default:H(()=>[L(be,{elevated:""},{default:H(()=>[L(ge,null,{default:H(()=>[L(se,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n.toggleLeftDrawer},null,8,["onClick"]),L(he,null,{default:H(()=>[R(V(n.$t("appName")),1)]),_:1}),_("div",null,[t[0]||(t[0]=_("strong",null,"Score: ",-1)),R(V(F(d).getScore)+" - ",1),t[1]||(t[1]=_("strong",null,"Acertos:",-1)),R(" "+V(F(d).getCorrect)+" - ",1),t[2]||(t[2]=_("strong",null,"Erros:",-1)),R(" "+V(F(d).getWrong),1)])]),_:1})]),_:1}),L(pe,null,{default:H(()=>[L(o)]),_:1})]),_:1})}}};export{Te as default};

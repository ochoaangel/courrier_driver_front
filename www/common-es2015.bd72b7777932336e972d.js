(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));const u={bubbles:{dur:1e3,circles:9,fn:(n,l,t)=>{const u=`${n*l/t-n}ms`,e=2*Math.PI*l/t;return{r:5,style:{top:`${9*Math.sin(e)}px`,left:`${9*Math.cos(e)}px`,"animation-delay":u}}}},circles:{dur:1e3,circles:8,fn:(n,l,t)=>{const u=l/t,e=`${n*u-n}ms`,o=2*Math.PI*u;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,l)=>({r:6,style:{left:`${9-9*l}px`,"animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,l,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":`${n*l/t-n}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(n,l,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":`${n*l/t-n}ms`}})}}},KwJk:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return o})),t.d(l,"c",(function(){return u})),t.d(l,"d",(function(){return r}));const u=(n,l)=>null!==l.closest(n),e=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,o=n=>{const l={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>l[n]=!0),l},i=/^[a-z][a-z0-9+\-.]*:/,r=async(n,l,t)=>{if(null!=n&&"#"!==n[0]&&!i.test(n)){const u=document.querySelector("ion-router");if(u)return null!=l&&l.preventDefault(),u.push(n,t)}return!1}},NqGI:function(n,l,t){"use strict";t.d(l,"a",(function(){return u})),t.d(l,"b",(function(){return e}));const u=async(n,l,t,u,e)=>{if(n)return n.attachViewToDom(l,t,e,u);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof t?l.ownerDocument&&l.ownerDocument.createElement(t):t;return u&&u.forEach(n=>o.classList.add(n)),e&&Object.assign(o,e),l.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},e=(n,l)=>{if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}},Pjdl:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),c=t("TSSN"),a=t("SVse"),s=t("aR35");class b{constructor(n,l,t){this.config=n,this.route=l,this.navCtrl=t}ngOnInit(){}view_profile(){this.route.navigate(["./profile"])}contact_us(){this.route.navigate(["./contact-us"])}terms_conditions(){this.route.navigate(["./terms-conditions"])}change_language(){this.route.navigate(["./change-language"])}logout(){this.navCtrl.navigateRoot(["./sign-in"])}buyAppAction(){window.open("https://bit.ly/cc_CourierOne","_system","location=no")}}var p=t("iInd"),m=u.nb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0 25px!important;font-size:1.4rem;font-weight:500}ion-header[_ngcontent-%COMP%]   .profile_box[_ngcontent-%COMP%]{padding:27px 25px 25px!important}ion-header[_ngcontent-%COMP%]   .profile_box[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]{min-width:68px;height:68px;border-radius:50%;margin-right:15px}ion-header[_ngcontent-%COMP%]   .profile_box[_ngcontent-%COMP%]   .text_box[_ngcontent-%COMP%]{color:var(--white)}ion-header[_ngcontent-%COMP%]   .profile_box[_ngcontent-%COMP%]   .text_box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.4rem;letter-spacing:.7px;padding-bottom:2px}ion-header[_ngcontent-%COMP%]   .profile_box[_ngcontent-%COMP%]   .text_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;opacity:.6;font-weight:500;font-size:.95rem;letter-spacing:.7px}.buy_this_app[_ngcontent-%COMP%]{background:var(--primary);position:absolute;bottom:20px;right:20px;border-radius:50px;height:52px;display:flex;align-items:center;min-width:155px;z-index:99999;box-shadow:0 10px 18px -4px rgba(0,0,0,.2)}.buy_this_app[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--white);display:flex;align-items:center;margin:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:1.1rem;font-weight:400}.buy_this_app[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1rem;min-width:24px}ion-list[_ngcontent-%COMP%]{background:var(--transparent)!important;margin:0;padding:45px 34px 19px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;--inner-padding-end:0px;--inner-min-height:unset!important;--padding-start:0;--highligh-color-focused:var(--transparent)!important;--background:var(--transparent);--min-height:unset;margin-bottom:38px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]{width:100%;align-items:flex-start}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--primary);font-size:1.6rem;position:relative;min-width:48px;display:block;top:3px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:var(--text-black);font-weight:700;font-size:1.5rem;letter-spacing:0;padding-bottom:11px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-light);margin:0;font-size:1rem;letter-spacing:.5px;font-weight:400}"]],data:{}});function d(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,5,"div",[["class","buy_this_app"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.buyAppAction()&&u),u}),null,null)),(n()(),u.pb(1,0,null,null,4,"h2",[],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,1,"ion-icon",[["class","zmdi zmdi-shopping-cart"]],null,null,null,i.I,i.i)),u.ob(3,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(n()(),u.Gb(4,null,[" "," "])),u.Cb(131072,c.j,[c.k,u.h])],null,(function(n,l){n(l,4,0,u.Hb(l,4,0,u.Bb(l,5).transform("buy_this_app")))}))}function g(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,16,"ion-header",[],null,null,null,i.H,i.h)),u.ob(1,49152,null,0,r.z,[u.h,u.k,u.x],null,null),(n()(),u.pb(2,0,null,0,5,"ion-toolbar",[],null,null,null,i.Z,i.z)),u.ob(3,49152,null,0,r.xb,[u.h,u.k,u.x],null,null),(n()(),u.pb(4,0,null,0,3,"ion-title",[],null,null,null,i.Y,i.y)),u.ob(5,49152,null,0,r.vb,[u.h,u.k,u.x],null,null),(n()(),u.Gb(6,0,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(8,0,null,0,8,"div",[["class","profile_box d-flex"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.view_profile()&&u),u}),null,null)),(n()(),u.pb(9,0,null,null,1,"div",[["class","img_box center_img"]],null,null,null,null,null)),(n()(),u.pb(10,0,null,null,0,"img",[["class","crop_img"],["src","assets/images/profile.png"]],null,null,null,null,null)),(n()(),u.pb(11,0,null,null,5,"div",[["class","text_box"]],null,null,null,null,null)),(n()(),u.pb(12,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Gb(-1,null,["James Haydon"])),(n()(),u.pb(14,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u.Gb(15,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(17,0,null,null,65,"ion-content",[],null,null,null,i.F,i.f)),u.ob(18,49152,null,0,r.s,[u.h,u.k,u.x],null,null),(n()(),u.pb(19,0,null,0,61,"ion-list",[["lines","none"]],null,null,null,i.M,i.m)),u.ob(20,49152,null,0,r.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.pb(21,0,null,0,11,"ion-item",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.contact_us()&&u),u}),i.K,i.k)),u.ob(22,49152,null,0,r.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(23,0,null,0,9,"div",[["class","item_inner d-flex"]],null,null,null,null,null)),(n()(),u.pb(24,0,null,null,1,"ion-icon",[["class","zmdi zmdi-email ion-text-start"]],null,null,null,i.I,i.i)),u.ob(25,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(n()(),u.pb(26,0,null,null,6,"div",[["class","text_box"]],null,null,null,null,null)),(n()(),u.pb(27,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),u.Gb(28,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(30,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u.Gb(31,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(33,0,null,0,11,"ion-item",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.change_language()&&u),u}),i.K,i.k)),u.ob(34,49152,null,0,r.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(35,0,null,0,9,"div",[["class","item_inner d-flex"]],null,null,null,null,null)),(n()(),u.pb(36,0,null,null,1,"ion-icon",[["class","zmdi zmdi-globe ion-text-start"]],null,null,null,i.I,i.i)),u.ob(37,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(n()(),u.pb(38,0,null,null,6,"div",[["class","text_box"]],null,null,null,null,null)),(n()(),u.pb(39,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),u.Gb(40,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(42,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u.Gb(43,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(45,0,null,0,11,"ion-item",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.terms_conditions()&&u),u}),i.K,i.k)),u.ob(46,49152,null,0,r.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(47,0,null,0,9,"div",[["class","item_inner d-flex"]],null,null,null,null,null)),(n()(),u.pb(48,0,null,null,1,"ion-icon",[["class","zmdi zmdi-assignment ion-text-start"]],null,null,null,i.I,i.i)),u.ob(49,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(n()(),u.pb(50,0,null,null,6,"div",[["class","text_box"]],null,null,null,null,null)),(n()(),u.pb(51,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),u.Gb(52,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(54,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u.Gb(55,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(57,0,null,0,11,"ion-item",[],null,null,null,i.K,i.k)),u.ob(58,49152,null,0,r.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(59,0,null,0,9,"div",[["class","item_inner d-flex"]],null,null,null,null,null)),(n()(),u.pb(60,0,null,null,1,"ion-icon",[["class","zmdi zmdi-arrow-split ion-text-start"]],null,null,null,i.I,i.i)),u.ob(61,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(n()(),u.pb(62,0,null,null,6,"div",[["class","text_box"]],null,null,null,null,null)),(n()(),u.pb(63,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),u.Gb(64,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(66,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u.Gb(67,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(69,0,null,0,11,"ion-item",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.logout()&&u),u}),i.K,i.k)),u.ob(70,49152,null,0,r.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(71,0,null,0,9,"div",[["class","item_inner d-flex"]],null,null,null,null,null)),(n()(),u.pb(72,0,null,null,1,"ion-icon",[["class","zmdi zmdi-sign-in ion-text-start"]],null,null,null,i.I,i.i)),u.ob(73,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(n()(),u.pb(74,0,null,null,6,"div",[["class","text_box"]],null,null,null,null,null)),(n()(),u.pb(75,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),u.Gb(76,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.pb(78,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u.Gb(79,null,["",""])),u.Cb(131072,c.j,[c.k,u.h]),(n()(),u.eb(16777216,null,0,1,null,d)),u.ob(82,16384,null,0,a.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,20,0,"none"),n(l,82,0,t.config.showBuyPromt)}),(function(n,l){n(l,6,0,u.Hb(l,6,0,u.Bb(l,7).transform("account"))),n(l,15,0,u.Hb(l,15,0,u.Bb(l,16).transform("view_profile"))),n(l,28,0,u.Hb(l,28,0,u.Bb(l,29).transform("contact_us"))),n(l,31,0,u.Hb(l,31,0,u.Bb(l,32).transform("contact_us_for_any_query_issue"))),n(l,40,0,u.Hb(l,40,0,u.Bb(l,41).transform("change_language"))),n(l,43,0,u.Hb(l,43,0,u.Bb(l,44).transform("select_language"))),n(l,52,0,u.Hb(l,52,0,u.Bb(l,53).transform("terms_conditions"))),n(l,55,0,u.Hb(l,55,0,u.Bb(l,56).transform("know_our_terms_conditions"))),n(l,64,0,u.Hb(l,64,0,u.Bb(l,65).transform("share_app"))),n(l,67,0,u.Hb(l,67,0,u.Bb(l,68).transform("share_with_friends_famill"))),n(l,76,0,u.Hb(l,76,0,u.Bb(l,77).transform("logout"))),n(l,79,0,u.Hb(l,79,0,u.Bb(l,80).transform("signout_form_current_account")))}))}function f(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,1,"app-more",[],null,null,null,g,m)),u.ob(1,114688,null,0,b,[s.a,p.m,r.Cb],null,null)],(function(n,l){n(l,1,0)}),null)}var h=u.lb("app-more",b,f,{},{},[]),_=t("s7LF");class x{}t.d(l,"MorePageModuleNgFactory",(function(){return C}));var C=u.mb(e,[],(function(n){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,h]],[3,u.j],u.v]),u.zb(4608,a.l,a.k,[u.s,[2,a.v]]),u.zb(4608,_.g,_.g,[]),u.zb(4608,r.a,r.a,[u.x,u.g]),u.zb(4608,r.Bb,r.Bb,[r.a,u.j,u.p]),u.zb(4608,r.Fb,r.Fb,[r.a,u.j,u.p]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,_.f,_.f,[]),u.zb(1073742336,_.a,_.a,[]),u.zb(1073742336,r.zb,r.zb,[]),u.zb(1073742336,c.h,c.h,[]),u.zb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),u.zb(1073742336,x,x,[]),u.zb(1073742336,e,e,[]),u.zb(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))},Uwmq:function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));const u=n=>{try{if("string"!=typeof n||""===n)return n;const l=document.createDocumentFragment(),t=document.createElement("div");l.appendChild(t),t.innerHTML=n,r.forEach(n=>{const t=l.querySelectorAll(n);for(let u=t.length-1;u>=0;u--){const n=t[u];n.parentNode?n.parentNode.removeChild(n):l.removeChild(n);const i=o(n);for(let l=0;l<i.length;l++)e(i[l])}});const u=o(l);for(let n=0;n<u.length;n++)e(u[n]);const i=document.createElement("div");i.appendChild(l);const c=i.querySelector("div");return null!==c?c.innerHTML:i.innerHTML}catch(l){return console.error(l),""}},e=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let t=n.attributes.length-1;t>=0;t--){const l=n.attributes.item(t),u=l.name;if(!i.includes(u.toLowerCase())){n.removeAttribute(u);continue}const e=l.value;null!=e&&e.toLowerCase().includes("javascript:")&&n.removeAttribute(u)}const l=o(n);for(let t=0;t<l.length;t++)e(l[t])},o=n=>null!=n.children?n.children:n.childNodes,i=["class","id","href","src","name","slot"],r=["script","style","iframe","meta","link","object","embed"]},fzvj:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return o})),t.d(l,"c",(function(){return i})),t.d(l,"d",(function(){return u}));const u=()=>{const n=window.TapticEngine;n&&n.selection()},e=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}}}]);
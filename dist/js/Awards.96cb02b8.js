(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Awards"],{4533:function(t,a,s){},"6cae":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("transition",{attrs:{name:"fade",mode:"out-in"}},[void 0!==t.post?s("img",{key:"bg-"+t.post.id,staticClass:"award-background",attrs:{"aria-hidden":"true",src:t.storage+t.post.img.src,width:t.post.img.width,height:t.post.img.height,alt:t.post.img.alt,longdesc:t.post.img.longdesc}}):t._e()]),s("main",{staticClass:"main"},[s("article",{class:"award max-area "+(t.loaded?"loaded":"")},[void 0!==t.translations?s("h2",{directives:[{name:"view",rawName:"v-view"}],ref:"title_wrapper",staticClass:"award-title"},[s("div",{staticClass:"award-title-wrapper"},[s("div",{staticClass:"award-title-marquee"},[t._l(30,(function(a){return[t._v(" "+t._s(t.translations.title)+" \\ ")]}))],2)])]):t._e(),s("div",{staticClass:"award-info"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[void 0!==t.post?s("img",{key:"media-"+t.post.id,staticClass:"award-media",attrs:{src:t.storage+t.post.img.src,width:t.post.img.width,height:t.post.img.height,alt:t.post.img.alt,longdesc:t.post.img.longdesc}}):t._e()]),void 0!==t.translations&&void 0!==t.post?s("div",{staticClass:"award-info-content"},[s("div",{staticClass:"award-info-description"},[s("div",{staticClass:"award-info-data"},[s("a",{directives:[{name:"view",rawName:"v-view"}],staticClass:"award-info-link",attrs:{href:t.post.link}},[s("h3",{staticClass:"award-info-link-title first"},[t._v(t._s(t.post.award))])]),s("p",{staticClass:"hdn"},[t._v(t._s(t.post.img.longdesc))]),s("p",{directives:[{name:"view",rawName:"v-view"}]},[t._v(t._s(t.post.date))])])]),s("a",{staticClass:"award-info-check",attrs:{href:t.post.link,target:"_blank",rel:"noopener"},on:{click:function(a){return t.sendAnalyticsEvent("awards_link","click",t.translations.checkit,25)}}},[void 0===t.translations.animation_alt?s("img",{directives:[{name:"view",rawName:"v-view"}],staticClass:"award-info-check-it",attrs:{src:t.placeholder,alt:""}}):s("video",{directives:[{name:"view",rawName:"v-view"}],staticClass:"award-info-check-it",attrs:{width:"480",height:"480",poster:t.storage+"animations/"+t.random+t.webp,title:t.translations.animation_title,alt:t.translations.animation_alt[0]+t.translations.animation[t.random]+t.translations.animation_alt[1],playsinline:"",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[s("source",{attrs:{type:"application/vnd.apple.mpegurl",src:t.storage+"animations/"+t.random+".m3u8"}}),s("source",{attrs:{type:"video/mp4",src:t.storage+"animations/"+t.random+".mp4"}}),s("source",{attrs:{type:"video/webm",src:t.storage+"animations/"+t.random+".webm"}})]),s("span",{staticClass:"award-info-check-txt"},[t._v(" "+t._s(t.translations.checkit)+" ")])])]):t._e()],1)])]),void 0!==t.translations?s("footer",{staticClass:"footer has-media"},[s("div",{staticClass:"max-area"},[void 0!==t.prev?s("a",{staticClass:"footer-link left",attrs:{href:t.next.path},on:{click:function(a){return a.preventDefault(),t.sendAnalyticsEvent("awards_link","click",t.translations.prev+": "+t.next.project,100)}}},[s("span",{staticClass:"footer-link-icon",on:{click:function(a){return a.preventDefault(),t.nextprev(t.next.id)}}},[s("span",{staticClass:"footer-link-arrow top"}),s("span",{staticClass:"footer-link-arrow middle"}),s("span",{staticClass:"footer-link-arrow bottom"})]),s("p",{staticClass:"hdn"},[t._v(t._s(t.translations.prev))])]):t._e(),void 0!==t.prev?s("a",{staticClass:"footer-link right",attrs:{href:t.prev.path},on:{click:function(a){return a.preventDefault(),t.sendAnalyticsEvent("awards_link","click",t.translations.next+": "+t.next.project,100)}}},[s("span",{staticClass:"footer-link-icon",on:{click:function(a){return a.preventDefault(),t.nextprev(t.prev.id)}}},[s("span",{staticClass:"footer-link-arrow top"}),s("span",{staticClass:"footer-link-arrow middle"}),s("span",{staticClass:"footer-link-arrow bottom"})]),s("p",{staticClass:"hdn"},[t._v(t._s(t.translations.next))])]):t._e()])]):t._e()],1)},i=[],n=s("2b0e"),o=s("5f86"),r=s.n(o);n["a"].use(r.a);var l={name:"Award",data(){return{storage:this.$parent.storage,webp:this.$parent.webp,webp2:this.$parent.webp2,placeholder:this.$parent.placeholder,origin:this.$parent.origin,translations:this.$parent.awards,post:void 0,random:Math.round(4*Math.random())+1,next:void 0,prev:void 0,total:Number,loaded:!1,last:!1}},created(){let t=this,a=t.$route.meta,s=a.last;document.title=this.$route.meta.title,document.body.classList.add("black"),document.body.scrollTop=0,document.documentElement.scrollTop=0,t.data_id=Number(a.id),t.last=Boolean(void 0!==s&&s),t.total=Number(a.total)},mounted(){this.getPost()},methods:{getPost(){let t=this;document.body.classList.add("getting"),t.loaded=!1,fetch(`${t.origin}/awards/${t.data_id}.json`).then(t=>t.json()).then(a=>{let s,e;t.post=a,s="luiskr.com | "+t.post.award,e=t.origin+t.post.path,document.title=s,window.history.replaceState({page:e},s,e),fetch(`${t.origin}/awards/${t.total===Number(t.data_id)?1:Number(t.data_id)+1}.json`).then(t=>t.json()).then(a=>{t.next=a}),fetch(`${t.origin}/awards/${1===Number(t.data_id)?t.total:Number(t.data_id)-1}.json`).then(t=>t.json()).then(a=>{t.prev=a,t.loaded=!0}),document.body.classList.remove("getting")})},nextprev(t){this.data_id=t,this.getPost();const a=()=>{const t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(a),window.scrollTo(0,t-t/8))};a()},sendAnalyticsEvent(t,a,s,e){this.$parent.sendAnalyticsEvent(t,a,s,e)}}},d=l,c=(s("e22d"),s("2877")),p=Object(c["a"])(d,e,i,!1,null,null,null);a["default"]=p.exports},e22d:function(t,a,s){"use strict";s("4533")}}]);
//# sourceMappingURL=Awards.96cb02b8.js.map
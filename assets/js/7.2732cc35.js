(window.webpackJsonp=window.webpackJsonp||[]).push([[7,34,35,36,37,38,39,40,44],{282:function(t,e,n){},283:function(t,e,n){},284:function(t,e,n){},285:function(t,e,n){},287:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));const s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;const e=t.match(s),n=e?e[0]:"",o=function(t){return decodeURI(t).replace(s,"").replace(i,"")}(t);return r.test(o)?t:o+".html"+n}function d(t,e,n){if(!t)return n;let s,i=e;for(;(i=i.$parent)&&!s;)s=i.$refs[t];return s&&s.$el&&(s=s.$el),s||n}},289:function(t,e,n){"use strict";n.r(e);n(29);var s={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(32).then(n.t.bind(null,386,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(307),n(4)),r=Object(i.a)(s,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null);e.default=r.exports},290:function(t,e,n){"use strict";n.r(e);var s=n(31),i=n.n(s),r=n(309),o=n.n(r),a={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return o()(this.$props,i.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},c=n(4),u=Object(c.a)(a,(function(){var t=this._self._c;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null);e.default=u.exports},291:function(t,e,n){"use strict";n.r(e);n(308);var s=n(4),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=i.exports},304:function(t,e,n){"use strict";n(282)},305:function(t,e,n){"use strict";n(283)},306:function(t,e,n){},307:function(t,e,n){"use strict";n(284)},308:function(t,e,n){"use strict";n(285)},309:function(t,e,n){var s=n(121),i=n(114),r=n(310),o=n(314);t.exports=function(t,e){if(null==t)return{};var n=s(o(t),(function(t){return[t]}));return e=i(e),r(t,n,(function(t,n){return e(t,n[0])}))}},310:function(t,e,n){var s=n(59),i=n(311),r=n(52);t.exports=function(t,e,n){for(var o=-1,a=e.length,c={};++o<a;){var u=e[o],l=s(t,u);n(l,u)&&i(c,r(u,t),l)}return c}},311:function(t,e,n){var s=n(312),i=n(52),r=n(57),o=n(30),a=n(20);t.exports=function(t,e,n,c){if(!o(t))return t;for(var u=-1,l=(e=i(e,t)).length,d=l-1,h=t;null!=h&&++u<l;){var p=a(e[u]),f=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(u!=d){var m=h[p];void 0===(f=c?c(m,p,h):void 0)&&(f=o(m)?m:r(e[u+1])?[]:{})}s(h,p,f),h=h[p]}return t}},312:function(t,e,n){var s=n(313),i=n(56),r=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];r.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||s(t,e,n)}},313:function(t,e,n){var s=n(122);t.exports=function(t,e,n){"__proto__"==e&&s?s(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},314:function(t,e,n){var s=n(115),i=n(315),r=n(317);t.exports=function(t){return s(t,r,i)}},315:function(t,e,n){var s=n(55),i=n(316),r=n(116),o=n(117),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)s(e,r(t)),t=i(t);return e}:o;t.exports=a},316:function(t,e,n){var s=n(120)(Object.getPrototypeOf,Object);t.exports=s},317:function(t,e,n){var s=n(118),i=n(318),r=n(58);t.exports=function(t){return r(t)?s(t,!0):i(t)}},318:function(t,e,n){var s=n(30),i=n(119),r=n(319),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!s(t))return r(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},319:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},324:function(t,e,n){"use strict";n.r(e);var s={name:"PostTag",props:{tag:{type:String,required:!0}}},i=(n(304),n(4)),r=Object(i.a)(s,(function(){return(0,this._self._c)("router-link",{attrs:{to:"/tag/"+this.tag}},[this._v(" "+this._s(this.tag)+" ")])}),[],!1,null,"43160e8a",null);e.default=r.exports},325:function(t,e,n){"use strict";n.r(e);var s=n(287),i={props:["stick","tag"],data:()=>({needFloat:!1,stickBottom:0}),watch:{stick(){this.unStick(),this.stickHandle()}},mounted(){this.stickHandle()},beforeDestroy(){this.unStick()},methods:{stickHandle(){if(!this.stick)return;const t=Object(s.b)(this.stick,this);t&&(this._stickerScroll=()=>{const e=this.$el.getBoundingClientRect(),n=document.body.scrollTop+document.documentElement.scrollTop;this.needFloat=document.body.offsetHeight-n-e.height<t.offsetHeight,this.stickBottom=t.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))},unStick(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},r=(n(305),n(4)),o=Object(r.a)(i,(function(){return(0,this._self._c)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},338:function(t,e,n){"use strict";n(306)},339:function(t,e,n){"use strict";var s=n(289);n.d(e,"b",(function(){return s.default}));var i=n(291);n.d(e,"c",(function(){return i.default}));var r=n(290);n.d(e,"a",(function(){return r.default}))},352:function(t,e,n){},361:function(t,e,n){"use strict";n.r(e);var s=n(60),i=n.n(s),r={name:"PostMeta",components:{PostTag:n(324).default},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate(){return i()(this.date).format(this.$themeConfig.dateFormat||"ddd, MMM DD YYYY")},resolvedTags(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},o=n(4),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-meta"},[t.author?e("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?e("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()]):t._e(),t._v(" "),t.date?e("div",{staticClass:"post-meta-date"},[e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n"+t._s(t.resolvedDate)+"\n")])]):t._e(),t._v(" "),t.tags?e("div",{staticClass:"card-subheading post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return e("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null);e.default=a.exports},362:function(t,e,n){"use strict";n.r(e);let s;function i(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var r={components:{Sticker:n(325).default},data:()=>({activeIndex:0}),computed:{visible(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex(){const t=(this.$refs.chairTocItem||[])[this.activeIndex];if(!t)return;const e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),s=e.top-n.top;s<20?this.$el.scrollTop=this.$el.scrollTop+s-20:s+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))},$route(){}},mounted(){const t=()=>{this.$emit("visible-change",this.visible)};t(),this.$watch("visible",t),setTimeout(()=>this.triggerEvt(),1e3),this._onScroll=()=>this.onScroll(),this._onHashChange=()=>{const t=decodeURIComponent(location.hash.substring(1)),e=(this.$page.headers||[]).findIndex(e=>e.slug===t);e>=0&&(this.activeIndex=e);const n=t&&document.getElementById(t);n&&window.scrollTo(0,i(n)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll(){void 0===s&&(s=i(this.$el));const t=document.body.scrollTop+document.documentElement.scrollTop,e=this.$page.headers||[];let n=0;const r=t=>{this.activeIndex=t};for(;n<e.length;n++){if(!(i(document.getElementById(e[n].slug))-50<t)){n||r(n);break}r(n)}},triggerEvt(){this._onScroll(),this._onHashChange()}}},o=(n(338),n(4)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.visible?e("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(n,s){return e("div",{key:s,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+n.level,{active:t.activeIndex===s}]},[e("a",{attrs:{href:"#"+n.slug,title:n.title}},[t._v(t._s(n.title))])])})),0):t._e()}),[],!1,null,null,null);e.default=a.exports},363:function(t,e,n){"use strict";n.r(e);var s=n(4),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return t.$themeConfig.authors?e("div",t._l(t.$themeConfig.authors,(function(n){return e("span",{key:n.name},[e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"profile-avatar"},[n.name===t.$frontmatter.author?e("img",{staticClass:"avatar-image",attrs:{src:t.$withBase(n.avatar),alt:n.name}}):t._e()]),t._v(" "),n.name===t.$frontmatter.author?e("div",[e("span",[t._v(t._s(n.name))]),t._v("  \n      "),n.name===t.$frontmatter.author?e("NavLink",{staticClass:"btn btn-sm btn-outline-dark",attrs:{link:n.link}},[t._v(t._s(n.linktext))]):t._e()],1):t._e()])])})),0):t._e()}),[],!1,null,null,null);e.default=i.exports},378:function(t,e,n){"use strict";n(352)},398:function(t,e,n){"use strict";n.r(e);var s=n(362),i=n(361),r=n(363),o=n(339),a={components:{Toc:s.default,PostMeta:i.default,Avatar:r.default,Comment:o.a,Newsletter:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,393))}},c=(n(378),n(4)),u=Object(c.a)(a,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[e("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("header",[e("span",{staticClass:"text-muted"},[e("PostMeta",{attrs:{date:t.$frontmatter.date}})],1),t._v(" "),e("h1",{staticClass:"article-head mt-3",staticStyle:{"font-size":"xx-large"},attrs:{itemprop:"name headline"}},[t._v("\n  "+t._s(t.$frontmatter.title)+"\n  ")]),t._v(" "),e("Avatar")],1)])]),t._v(" "),e("div",{staticClass:"row justify-content-center text-center mt-4 mb-40"},[e("div",{staticClass:"col-md-9"},[e("img",{staticClass:"featuredimg",attrs:{src:t.$frontmatter.featuredimg}})])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),e("PostMeta",{attrs:{tags:t.$frontmatter.tags}})],1)])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-9"},[t.$service.email.enabled?e("Newsletter"):t._e(),t._v(" "),e("Comment")],1)]),t._v(" "),e("Toc")],1)}),[],!1,null,"e8e06826",null);e.default=u.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{284:function(t,n,i){},289:function(t,n,i){"use strict";i.r(n);i(29);var e={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){i.e(32).then(i.t.bind(null,386,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},a=(i(307),i(4)),c=Object(a.a)(e,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null);n.default=c.exports},307:function(t,n,i){"use strict";i(284)}}]);
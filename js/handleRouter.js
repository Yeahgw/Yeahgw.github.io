webpackJsonp([1],{59:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(16),a=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default={props:["blogId"],components:{blog1:function(t){e.e(3).then(function(){t(e(38))}.bind(null,e)).catch(e.oe)},blog2:function(t){e.e(2).then(function(){t(e(39))}.bind(null,e)).catch(e.oe)}},data:function(){return{currentView:""}},methods:{loopBlog:function(t){if(!t||""==t)return t;for(var n=0;n<a.default.length;n++){if(new RegExp("^"+a.default[n].type).test(t))for(var e=a.default[n].blogs,o=0;o<e.length;o++)if(e[o].id==t)return e[o].component}}},watch:{blogId:function(t){this.currentView=this.loopBlog(t)}},mounted:function(){var t=this;this.$nextTick(function(){t.currentView=t.loopBlog(t.blogId)})}}},6:function(t,n,e){e(67);var o=e(14)(e(59),e(64),null,null);t.exports=o.exports},61:function(t,n,e){n=t.exports=e(15)(void 0),n.push([t.i,".main_content{transform:translateY(0)}.fadeIn-enter-active,.fadeIn-leave-active{transition:all .5s ease}.fadeIn-enter,.fadeIn-leave-active{opacity:0;transform:translateY(10%)}",""])},64:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"blog_content"},[t._v("\n\t"+t._s(t.blogId)+"\n\t"),e("transition",{attrs:{name:"fadeIn",mode:"out-in"}},[e("keep-alive",[e(t.currentView,{tag:"component",staticClass:"main_content"})],1)],1)],1)},staticRenderFns:[]}},67:function(t,n,e){var o=e(61);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(17)("2f30abd2",o,!0)}});
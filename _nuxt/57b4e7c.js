(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{433:function(t,e,r){"use strict";var n=r(435);e.a=n.a},452:function(t,e,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("03027dc7",content,!0,{sourceMap:!1})},453:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;vertical-align:middle}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),n.locals={},t.exports=n},459:function(t,e,r){"use strict";r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return y}));r(34);var n=r(100);function o(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=Array()).concat.apply(t,[e].concat(n))}function l(t){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:arguments.length>2?arguments[2]:void 0},origin:{type:String,default:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0"}},render:function(e,r){var l="transition".concat(r.props.group?"-group":""),data={props:{name:t,mode:r.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=r.props.origin,t.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(data.on.leave=o(data.on.leave,(function(t){var e=t.offsetTop,r=t.offsetLeft,n=t.offsetWidth,o=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=r+"px",t.style.width=n+"px",t.style.height=o+"px"})),data.on.afterLeave=o(data.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,r=e.position,n=e.top,o=e.left,l=e.width,c=e.height;delete t._transitionInitialStyles,t.style.position=r||"",t.style.top=n||"",t.style.left=o||"",t.style.width=l||"",t.style.height=c||""}}))),r.props.hideOnLeave&&(data.on.leave=o(data.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(l,Object(n.a)(r.data,data),r.children)}}}function c(t,e){return{name:t,functional:!0,props:{mode:{type:String,default:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"}},render:function(r,o){return r("transition",Object(n.a)(o.data,{props:{name:t},on:e}),o.children)}}}var v=r(2),h=r(1),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height",r="offset".concat(Object(h.o)(e));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(v.a)({transition:t.style.transition,overflow:t.style.overflow},e,t.style[e])},enter:function(n){var o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";var l="".concat(n[r],"px");n.style[e]="0",n.offsetHeight,n.style.transition=o.transition,t&&n._parent&&n._parent.classList.add(t),requestAnimationFrame((function(){n.style[e]=l}))},afterEnter:o,enterCancelled:o,leave:function(t){t._initialStyle=Object(v.a)({transition:"",overflow:t.style.overflow},e,t.style[e]),t.style.overflow="hidden",t.style[e]="".concat(t[r],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[e]="0"}))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),o(e)}function o(t){var r=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,null!=r&&(t.style[e]=r),delete t._initialStyle}},f=(l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition"),l("tab-reverse-transition"),l("menu-transition"),l("fab-transition","center center","out-in"),l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition"),l("fade-transition")),m=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition")),y=(l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",d()),c("expand-x-transition",d("",!0)))},463:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("578e50d8",content,!0,{sourceMap:!1})},465:function(t,e,r){"use strict";r.r(e);var n=r(476),o=r(449),l=(r(16),r(11),r(20),r(14),r(21),r(13)),c=r(2),v=(r(5),r(17),r(479),r(33)),h=r(459),d=r(433),f=r(87),m=r(286),y=r(77),x=r(148),_=r(190),O=r(150),w=r(15);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(v.a)(f.a,O.a,_.a,y.a,Object(m.a)("chipGroup"),Object(x.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return j(j(j(j({"v-chip":!0},_.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(l.a)(e,2),n=r[0],o=r[1];t.$attrs.hasOwnProperty(n)&&Object(w.a)(n,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(h.a,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=j(j({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}});r(481);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=y.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:P({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:P({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),D=r(435),B=(r(483),r(86)),component=Object(B.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile elevation-5",attrs:{align:"center"}},[e(n.a,{staticClass:"elevation-20",attrs:{size:"150"}},[e("img",{attrs:{src:"pramod-devireddy1-200x200.jpg",alt:"Pramod Devireddy"}})]),t._v(" "),e("div",{staticStyle:{"font-weight":"400","letter-spacing":"5px",margin:"5px 0"}},[t._v("\n      PRAMOD DEVIREDDY\n    ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticStyle:{"font-size":"16px"}},[t._v("\n      Spacecraft Mission & Checkout Software Developer\n    ")]),t._v(" "),e("div",{staticStyle:{"font-size":"16px",color:"rgb(245, 245, 245)"}},[t._v("\n      (2016 - present)\n    ")]),t._v(" "),e(o.a,{staticClass:"ma-2",attrs:{href:"Pramod-Devireddy-CV.pdf",color:"success"}},[t._v("\n      DOWNLOAD CV\n      "),e(D.a,{attrs:{right:""}},[t._v("mdi-download")])],1)],1),t._v(" "),e("div",{staticStyle:{margin:"30px 15%"},attrs:{align:"center"}},[e("div",{staticStyle:{"letter-spacing":"2px","font-weight":"500",margin:"10px 0"}},[t._v("\n      SKILLS\n    ")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("C")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("C++")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Go")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Qt")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Matlab")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Python")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("MySQL")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("HTML")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("CSS")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("JavaScript")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("PHP")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Vue JS")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Nuxt JS")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Photoshop")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Premiere Pro")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("After Effects")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("XD")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Illustrator")]),t._v(" "),e(S,{staticClass:"ma-2"},[t._v("Blender")])],1),t._v(" "),e(z)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"font-size":"16px",color:"rgb(245, 245, 245)"}},[t._v("\n      Scientist/Engineer - SD,\n      "),e("b",[t._v("ISRO")]),t._v("🚀\n    ")])}],!1,null,"0bee6c92",null);e.default=component.exports},476:function(t,e,r){"use strict";r(16),r(11),r(17),r(5),r(20),r(14),r(21);var n=r(2),o=(r(38),r(452),r(87)),l=r(145),c=r(197),v=r(1),h=r(33);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(h.a)(o.a,l.a,c.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return f({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return f({height:Object(v.d)(this.size),minWidth:Object(v.d)(this.size),width:Object(v.d)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}})},479:function(t,e,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("59b49814",content,!0,{sourceMap:!1})},480:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),n.locals={},t.exports=n},481:function(t,e,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("951d1426",content,!0,{sourceMap:!1})},482:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},483:function(t,e,r){"use strict";r(463)},484:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".profile[data-v-0bee6c92]{background-color:#4c8bf4!important;color:#fff;font-size:20px;font-weight:300;letter-spacing:1px;padding:15px 10px}",""]),n.locals={},t.exports=n}}]);
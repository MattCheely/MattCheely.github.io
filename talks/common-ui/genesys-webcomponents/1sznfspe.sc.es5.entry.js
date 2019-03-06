/*! Built with http://stenciljs.com */
GenesysWebcomponents.loadBundle("1sznfspe",["exports"],function(t){var e=window.GenesysWebcomponents.h;function o(t,e,o){var i=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r={},s=o&&o.offsetX?o.offsetX:0,h=o&&o.offsetY?o.offsetY:0,l=i.width;l=o&&o.width?o.width:l;var p=i.height;return p=o&&o.height?o.height:p,window.innerHeight-n.top>p+h?r.top=n.bottom+h:n.bottom>p+h?r.bottom=window.innerHeight-(n.top-h):window.innerHeight>p+2*h?(r.top=(window.innerHeight-(p+2*h))/2,r.bottom=(window.innerHeight-(p+2*h))/2):(r.top=h,r.bottom=h),window.innerWidth-n.left>l+s?r.left=n.left+s:n.right>l+s?r.right=window.innerWidth-(n.right+s):window.innerWidth>l+2*s?(r.left=(window.innerWidth-(l+2*s))/2,r.right=(window.innerWidth-(l+2*s))/2):(r.left=s,r.right=s),r}var i=function(){function t(){this.delay=1e3,this.isShown=!1,this.positionOptions={offsetX:0,offsetY:24,width:void 0}}return t.prototype.emitEvent=function(){this.isShown?this.shown.emit():this.hidden.emit()},t.prototype.show=function(){var t=this;this.delayTimeout=setTimeout(function(){t.tooltipRect=o(t.tooltipEl,t.forNode,t.positionOptions),t.isShown=!0,t.emitEvent()},this.delay)},t.prototype.hide=function(){clearTimeout(this.delayTimeout),this.isShown=!1,this.emitEvent()},t.prototype.onWindowEvent=function(){this.tooltipRect=o(this.tooltipEl,this.forNode,this.positionOptions)},Object.defineProperty(t.prototype,"computedClass",{get:function(){return"gux-tooltip "+(this.isShown?"shown":"")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"computedStyle",{get:function(){return{bottom:this.tooltipRect&&this.tooltipRect.hasOwnProperty("bottom")?this.tooltipRect.bottom+"px":"",left:this.tooltipRect&&this.tooltipRect.hasOwnProperty("left")?this.tooltipRect.left+"px":"",right:this.tooltipRect&&this.tooltipRect.hasOwnProperty("right")?this.tooltipRect.right+"px":"",top:this.tooltipRect&&this.tooltipRect.hasOwnProperty("top")?this.tooltipRect.top+"px":""}},enumerable:!0,configurable:!0}),t.prototype.componentDidLoad=function(){var t=this;this.forNode=document.getElementById(this.for)||this.root.parentElement,this.tooltipRect=o(this.tooltipEl,this.forNode,this.positionOptions),this.mouseenterHandler=function(){t.show()},this.mouseleaveHandler=function(){t.hide()},this.forNode.addEventListener("mouseenter",this.mouseenterHandler),this.forNode.addEventListener("mouseleave",this.mouseleaveHandler),this.positionOptions.width=this.tooltipEl.getBoundingClientRect().width+6},t.prototype.componentDidUnload=function(){this.forNode.removeEventListener("mouseenter",this.mouseenterHandler),this.forNode.removeEventListener("mouseleave",this.mouseleaveHandler)},t.prototype.render=function(){var t=this;return e("div",{class:this.computedClass,ref:function(e){return t.tooltipEl=e},style:this.computedStyle},this.text)},Object.defineProperty(t,"is",{get:function(){return"gux-tooltip"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{delay:{type:Number,attr:"delay"},for:{type:String,attr:"for"},hide:{method:!0},isShown:{type:Boolean,attr:"is-shown",reflectToAttr:!0,mutable:!0},root:{elementRef:!0},show:{method:!0},text:{type:String,attr:"text"},tooltipRect:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"shown",method:"shown",bubbles:!0,cancelable:!0,composed:!0},{name:"hidden",method:"hidden",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:resize",method:"onWindowEvent",capture:!0,passive:!0},{name:"window:scroll",method:"onWindowEvent",capture:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".gux-bold-font{font-weight:700}.gux-bold-font,.gux-regular-font{font-family:Roboto;font-style:normal}.gux-regular-font{font-weight:400}.gux-light-font{font-family:Roboto;font-style:normal;font-weight:300}.gux-italic-font{font-family:Roboto;font-style:italic;font-weight:400}.large-title{font-size:24px;line-height:32px}.large-title,.small-title{font-family:Roboto;font-style:normal;font-weight:300}.small-title{font-size:18px;line-height:24px}.subhead-1{font-weight:700}.subhead-1,.subhead-2{font-family:Roboto;font-style:normal;font-size:14px;line-height:20px}.subhead-2{font-weight:400}.body{font-weight:400}.body,.body-bold{font-family:Roboto;font-style:normal;font-size:12px;line-height:20px}.body-bold{font-weight:700}.body-italic{font-family:Roboto;font-style:italic;font-weight:400;font-size:12px;line-height:20px}.label{font-weight:700;font-size:12px}.label,.small-body{font-family:Roboto;font-style:normal;line-height:16px}.small-body{font-weight:400;font-size:11px}gux-tooltip div.gux-tooltip{position:absolute;white-space:nowrap;background-color:#fdfdfd;color:#444a52;height:32px;line-height:32px;font-size:12px;padding:0 8px;opacity:0;z-index:1;overflow:hidden;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;transition:opacity .25s ease-in-out;-moz-transition:opacity .25s ease-in-out;-webkit-transition:opacity .25s ease-in-out;-o-transition:opacity .25s ease-in-out}gux-tooltip div.gux-tooltip.shown{opacity:1}.gux-light-theme gux-tooltip div.gux-tooltip,.gux-tooltip-light-theme div.gux-tooltip,gux-tooltip.gux-light-theme div.gux-tooltip{border:1px solid #dae1e8;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}.gux-dark-theme gux-tooltip div.gux-tooltip,.gux-tooltip-dark-theme div.gux-tooltip,gux-tooltip.gux-dark-theme div.gux-tooltip{border:1px solid #555d66;-webkit-box-shadow:0 0 2px 0 #222529;box-shadow:0 0 2px 0 #222529}gux-tooltip div.gux-tooltip{border:1px solid #dae1e8;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}"},enumerable:!0,configurable:!0}),t}();t.GuxTooltip=i,Object.defineProperty(t,"__esModule",{value:!0})});
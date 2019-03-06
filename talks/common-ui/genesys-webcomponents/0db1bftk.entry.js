/*! Built with http://stenciljs.com */
const{h:t}=window.GenesysWebcomponents;import{a as e,b as i}from"./chunk-ed78cd67.js";class s{constructor(){this.items=[],this.highlight=""}emitChange(t){this.change.emit(t)}onItemClicked(t){this.emitChange(t.text),t.callback&&t.callback(t),t.el.setAttribute("tabindex","0"),this.items.forEach(e=>{e.el&&e!==t&&e.el.setAttribute("tabindex","-1")})}_computedText(e){return this.highlight&&e.startsWith(this.highlight)?t("span",null,t("strong",null,this.highlight),e.replace(this.highlight,"")):e}setFocusOnFirstItem(){this.items.forEach(t=>{t.el&&t.el.setAttribute("tabindex","-1")});const t=this.items.find(t=>t.el&&!t.isDisabled&&(!t.type||t.type===i.Item));t.el.setAttribute("tabindex","0"),t&&t.el.focus()}onKeyDown(t,s){const n=t.keyCode;if(-1===[e.Up,e.Down,e.End,e.Home,e.Enter,e.Space].indexOf(t.keyCode))return;const l=this.items.filter(t=>t.el&&!t.isDisabled&&(!t.type||t.type===i.Item)),h=l.indexOf(s);let a=null;switch(n){case e.Enter:case e.Space:s.el.click();break;case e.Up:if(h){const t=this.items.indexOf(l[h-1]);a=this.items[t].el}break;case e.Home:if(h){const t=this.items.indexOf(l[0]);a=this.items[t].el}break;case e.Down:if(h!==l.length-1){const t=this.items.indexOf(l[h+1]);a=this.items[t].el}break;case e.End:if(h!==l.length-1){const t=this.items.indexOf(l[l.length-1]);a=this.items[t].el}}a&&(s.el.setAttribute("tabindex","-1"),a.setAttribute("tabindex","0"),a.focus())}emitFocusEvent(t,e){this.root.dispatchEvent(new CustomEvent(t.type,Object.assign({},t,{detail:e})))}setFirstTabIndex(){const t=this.items.find(t=>t.el&&!t.isDisabled&&(!t.type||t.type===i.Item));t&&t.el.setAttribute("tabindex","0")}componentDidLoad(){this.setFirstTabIndex()}componentDidUpdate(){this.setFirstTabIndex()}render(){return t("ul",null,this.items.map(e=>e.type===i.Divider?t("li",{class:"divider",role:"presentation",tabIndex:-1}):t("li",{class:e.isDisabled?"disabled":"",tabIndex:-1,ref:t=>e.el=t,onClick:()=>this.onItemClicked(e),onKeyDown:t=>this.onKeyDown(t,e),onFocus:t=>this.emitFocusEvent(t,e)},this._computedText(e.text))))}static get is(){return"gux-list"}static get properties(){return{highlight:{type:String,attr:"highlight"},items:{type:"Any",attr:"items"},root:{elementRef:!0},setFocusOnFirstItem:{method:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".gux-bold-font{font-weight:700}.gux-bold-font,.gux-regular-font{font-family:Roboto;font-style:normal}.gux-regular-font{font-weight:400}.gux-light-font{font-family:Roboto;font-style:normal;font-weight:300}.gux-italic-font{font-family:Roboto;font-style:italic;font-weight:400}.large-title{font-size:24px;line-height:32px}.large-title,.small-title{font-family:Roboto;font-style:normal;font-weight:300}.small-title{font-size:18px;line-height:24px}.subhead-1{font-weight:700}.subhead-1,.subhead-2{font-family:Roboto;font-style:normal;font-size:14px;line-height:20px}.subhead-2{font-weight:400}.body{font-weight:400}.body,.body-bold{font-family:Roboto;font-style:normal;font-size:12px;line-height:20px}.body-bold{font-weight:700}.body-italic{font-family:Roboto;font-style:italic;font-weight:400;font-size:12px;line-height:20px}.label{font-weight:700;font-size:12px}.label,.small-body{font-family:Roboto;font-style:normal;line-height:16px}.small-body{font-weight:400;font-size:11px}gux-list ul{list-style:none;margin:0;padding:8px 0}gux-list ul>li{position:relative;height:32px;line-height:32px;padding:0 16px;display:-ms-flexbox;display:flex;cursor:pointer}gux-list ul>li.disabled{opacity:.5;pointer-events:none;cursor:default}gux-list ul>li.divider{height:1px;margin:5px 12px;pointer-events:none}.gux-list-dark-theme{color:#444a52}.gux-list-dark-theme ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}.gux-list-dark-theme ul>li:not(.disabled):focus,.gux-list-dark-theme ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}.gux-list-dark-theme ul>li.divider{background-color:#c3cad4}.gux-dark-theme gux-list{color:#444a52}.gux-dark-theme gux-list ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}.gux-dark-theme gux-list ul>li:not(.disabled):focus,.gux-dark-theme gux-list ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}.gux-dark-theme gux-list ul>li.divider{background-color:#c3cad4}gux-list.gux-dark-theme{color:#444a52}gux-list.gux-dark-theme ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}gux-list.gux-dark-theme ul>li:not(.disabled):focus,gux-list.gux-dark-theme ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}gux-list.gux-dark-theme ul>li.divider{background-color:#c3cad4}.gux-list-light-theme ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}.gux-list-light-theme ul>li:not(.disabled):focus,.gux-list-light-theme ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}.gux-list-light-theme ul>li.divider{background-color:#c3cad4}.gux-light-theme gux-list ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}.gux-light-theme gux-list ul>li:not(.disabled):focus,.gux-light-theme gux-list ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}.gux-light-theme gux-list ul>li.divider{background-color:#c3cad4}gux-list.gux-light-theme ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}gux-list.gux-light-theme ul>li:not(.disabled):focus,gux-list.gux-light-theme ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}gux-list.gux-light-theme ul>li.divider{background-color:#c3cad4}gux-list ul{background:#fdfdfd;border-color:1px solid #dae1eb;-webkit-box-shadow:0 0 2px 0 rgba(34,37,41,.24);box-shadow:0 0 2px 0 rgba(34,37,41,.24)}gux-list ul>li:not(.disabled):focus,gux-list ul>li:not(.disabled):hover{background:#2a60c8;color:#fdfdfd}gux-list ul>li.divider{background-color:#c3cad4}"}}export{s as GuxList};
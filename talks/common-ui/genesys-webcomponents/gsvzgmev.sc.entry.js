/*! Built with http://stenciljs.com */
const{h:t}=window.GenesysWebcomponents;class e{constructor(){this.disabled=!1,this.accent="secondary",this.text="",this.leftIcon="",this.rightIcon=""}getAccent(){return"primary"===this.accent?"primary":"secondary"}componentDidLoad(){this.title=this.root.title}formatIcon(t){return 0===t.indexOf("genesys-icon")?t:"genesys-icon-"+t}render(){return t("button",{title:this.title,ref:t=>this.button=t,disabled:this.disabled,class:"gux-"+this.getAccent()},this.leftIcon?t("span",{class:this.formatIcon(this.leftIcon)+" left-icon"+(this.text?" margin":"")}):"",this.text,this.rightIcon?t("span",{class:this.formatIcon(this.rightIcon)+" right-icon"+(this.text?" margin":"")}):"")}static get is(){return"gux-button"}static get properties(){return{accent:{type:String,attr:"accent"},disabled:{type:Boolean,attr:"disabled"},leftIcon:{type:String,attr:"left-icon"},rightIcon:{type:String,attr:"right-icon"},root:{elementRef:!0},text:{type:String,attr:"text"},title:{state:!0}}}static get style(){return".gux-bold-font{font-weight:700}.gux-bold-font,.gux-regular-font{font-family:Roboto;font-style:normal}.gux-regular-font{font-weight:400}.gux-light-font{font-family:Roboto;font-style:normal;font-weight:300}.gux-italic-font{font-family:Roboto;font-style:italic;font-weight:400}.large-title{font-size:24px;line-height:32px}.large-title,.small-title{font-family:Roboto;font-style:normal;font-weight:300}.small-title{font-size:18px;line-height:24px}.subhead-1{font-weight:700}.subhead-1,.subhead-2{font-family:Roboto;font-style:normal;font-size:14px;line-height:20px}.subhead-2{font-weight:400}.body{font-weight:400}.body,.body-bold{font-family:Roboto;font-style:normal;font-size:12px;line-height:20px}.body-bold{font-weight:700}.body-italic{font-family:Roboto;font-style:italic;font-weight:400;font-size:12px;line-height:20px}.label{font-weight:700;font-size:12px}.label,.small-body{font-family:Roboto;font-style:normal;line-height:16px}.small-body{font-weight:400;font-size:11px}gux-button{display:inline-block;min-width:32px;max-width:96px}gux-button>button{width:100%;padding:0 16px;height:32px;border-radius:2px;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}gux-button>button[disabled]{opacity:.5;pointer-events:none;cursor:default}gux-button>button:focus{outline:none}gux-button>button .left-icon,gux-button>button .right-icon{font-size:16px;line-height:30px;height:30px}gux-button>button .left-icon.margin,gux-button>button .right-icon.margin{margin-left:5px}.gux-button-dark-theme>button.gux-primary{background-color:#2a60c8;border:1px solid #222529;color:#fdfdfd}.gux-button-dark-theme>button.gux-primary:hover{background-color:#3476f5}.gux-button-dark-theme>button.gux-primary:active{-webkit-box-shadow:0 0 0 3px #75a8ff;box-shadow:0 0 0 3px #75a8ff}.gux-button-dark-theme>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-button-dark-theme>button.gux-secondary{background-color:#555d66;border:1px solid #222529;color:#fdfdfd}.gux-button-dark-theme>button.gux-secondary:hover{background-color:#76818f}.gux-button-dark-theme>button.gux-secondary:active{-webkit-box-shadow:0 0 0 3px #75a8ff;box-shadow:0 0 0 3px #75a8ff}.gux-button-dark-theme>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-button-light-theme>button.gux-primary{background-color:#2a60c8;border:1px solid #2455a3;color:#fdfdfd}.gux-button-light-theme>button.gux-primary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.48);box-shadow:0 0 1px 1px rgba(34,37,41,.48)}.gux-button-light-theme>button.gux-primary:active{background-color:#275aad}.gux-button-light-theme>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-button-light-theme>button.gux-secondary{background-color:#e4e9f0;border:1px solid #d5dce0;color:#444a52}.gux-button-light-theme>button.gux-secondary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.24);box-shadow:0 0 1px 1px rgba(34,37,41,.24)}.gux-button-light-theme>button.gux-secondary:active{background-color:#dce1e5}.gux-button-light-theme>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-dark-theme gux-button>button.gux-primary{background-color:#2a60c8;border:1px solid #222529;color:#fdfdfd}.gux-dark-theme gux-button>button.gux-primary:hover{background-color:#3476f5}.gux-dark-theme gux-button>button.gux-primary:active{-webkit-box-shadow:0 0 0 3px #75a8ff;box-shadow:0 0 0 3px #75a8ff}.gux-dark-theme gux-button>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-dark-theme gux-button>button.gux-secondary{background-color:#555d66;border:1px solid #222529;color:#fdfdfd}.gux-dark-theme gux-button>button.gux-secondary:hover{background-color:#76818f}.gux-dark-theme gux-button>button.gux-secondary:active{-webkit-box-shadow:0 0 0 3px #75a8ff;box-shadow:0 0 0 3px #75a8ff}.gux-dark-theme gux-button>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}gux-button.gux-dark-theme>button.gux-primary{background-color:#2a60c8;border:1px solid #222529;color:#fdfdfd}gux-button.gux-dark-theme>button.gux-primary:hover{background-color:#3476f5}gux-button.gux-dark-theme>button.gux-primary:active{-webkit-box-shadow:0 0 0 3px #75a8ff;box-shadow:0 0 0 3px #75a8ff}gux-button.gux-dark-theme>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}gux-button.gux-dark-theme>button.gux-secondary{background-color:#555d66;border:1px solid #222529;color:#fdfdfd}gux-button.gux-dark-theme>button.gux-secondary:hover{background-color:#76818f}gux-button.gux-dark-theme>button.gux-secondary:active{-webkit-box-shadow:0 0 0 3px #75a8ff;box-shadow:0 0 0 3px #75a8ff}gux-button.gux-dark-theme>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-light-theme gux-button>button.gux-primary{background-color:#2a60c8;border:1px solid #2455a3;color:#fdfdfd}.gux-light-theme gux-button>button.gux-primary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.48);box-shadow:0 0 1px 1px rgba(34,37,41,.48)}.gux-light-theme gux-button>button.gux-primary:active{background-color:#275aad}.gux-light-theme gux-button>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}.gux-light-theme gux-button>button.gux-secondary{background-color:#e4e9f0;border:1px solid #d5dce0;color:#444a52}.gux-light-theme gux-button>button.gux-secondary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.24);box-shadow:0 0 1px 1px rgba(34,37,41,.24)}.gux-light-theme gux-button>button.gux-secondary:active{background-color:#dce1e5}.gux-light-theme gux-button>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}gux-button.gux-light-theme>button.gux-primary{background-color:#2a60c8;border:1px solid #2455a3;color:#fdfdfd}gux-button.gux-light-theme>button.gux-primary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.48);box-shadow:0 0 1px 1px rgba(34,37,41,.48)}gux-button.gux-light-theme>button.gux-primary:active{background-color:#275aad}gux-button.gux-light-theme>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}gux-button.gux-light-theme>button.gux-secondary{background-color:#e4e9f0;border:1px solid #d5dce0;color:#444a52}gux-button.gux-light-theme>button.gux-secondary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.24);box-shadow:0 0 1px 1px rgba(34,37,41,.24)}gux-button.gux-light-theme>button.gux-secondary:active{background-color:#dce1e5}gux-button.gux-light-theme>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}gux-button>button.gux-primary{background-color:#2a60c8;border:1px solid #2455a3;color:#fdfdfd}gux-button>button.gux-primary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.48);box-shadow:0 0 1px 1px rgba(34,37,41,.48)}gux-button>button.gux-primary:active{background-color:#275aad}gux-button>button.gux-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}gux-button>button.gux-secondary{background-color:#e4e9f0;border:1px solid #d5dce0;color:#444a52}gux-button>button.gux-secondary:hover{-webkit-box-shadow:0 0 1px 1px rgba(34,37,41,.24);box-shadow:0 0 1px 1px rgba(34,37,41,.24)}gux-button>button.gux-secondary:active{background-color:#dce1e5}gux-button>button.gux-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(117,168,255,.5);box-shadow:0 0 0 3px rgba(117,168,255,.5)}"}}export{e as GuxButton};
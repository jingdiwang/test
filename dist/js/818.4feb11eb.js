"use strict";(self["webpackChunkmaluyanxuanvue2"]=self["webpackChunkmaluyanxuanvue2"]||[]).push([[818],{2818:function(t,e,i){i.r(e),i.d(e,{default:function(){return F}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login_page"},[e("TopCom",{attrs:{title:t.isTitle?"登录":"注册",isShowRight:!1}}),e("img",{staticClass:"logo",attrs:{src:i(6949),width:"140",alt:""}}),e("div",{staticClass:"login-from"},[e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"手机号",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("Verify",{ref:"veri",attrs:{type:2,showButton:!1},on:{error:function(e){return t.alertFn(2)},success:function(e){return t.alertFn(1)}}}),e("p",{staticClass:"link-register",on:{click:function(e){t.isTitle=!t.isTitle}}},[t._v(t._s(t.isTitle?"立即注册":"已有账号，立即登录"))]),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1)],1)],1)],1)},o=[],r=function(){var t=this,e=t._self._c;return e("van-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([t.isShowRight?{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"ellipsis",size:"18"}})]},proxy:!0}:null],null,!0)})},n=[],a=i(8848),h={props:{title:{type:String,default:""},isShowRight:{type:Boolean,default:!0}},methods:{onClickLeft(){(0,a.Z)("返回")},onClickRight(){(0,a.Z)("按钮")}}},l=h,c=i(1001),f=(0,c.Z)(l,r,n,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t._self._c;return e("div",[t.componentType?e(t.componentType,{ref:"instance",tag:"components",attrs:{type:t.verifyType,figure:t.figure,arith:t.arith,width:t.width,height:t.height,fontSize:t.fontSize,codeLength:t.codeLength,mode:t.mode,vOffset:t.vOffset,vSpace:t.vSpace,explain:t.explain,imgUrl:t.imgUrl,imgName:t.imgName,showButton:t.showButton,imgSize:t.imgSize,blockSize:t.blockSize,barSize:t.barSize,defaultNum:t.defaultNum,checkNum:t.checkNum}}):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],staticStyle:{width:"0",height:"0"},on:{click:t.checkCode}},[t._t("check",(function(){return[e("button",{staticClass:"verify-btn"},[t._v(t._s(t.i18n("ok")))])]}))],2)],1)},u=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cerify-code-panel"},[e("div",{staticClass:"verify-code",style:{width:t.width,height:t.height,"line-height":t.height,"font-size":t.fontSize,"background-color":t.containerBackgroundColor,color:t.containerColor},on:{click:t.setCode}},t._l(t.codeShow,(function(i){return e("span",{style:i.style},[t._v(" "+t._s(i.char||i)+" ")])})),0),e("div",{staticClass:"verify-code-area",style:{width:t.width}},[e("div",{staticClass:"verify-input-area"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"varify-input-code",attrs:{type:"text"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})]),e("div",{staticClass:"verify-change-area",on:{click:t.setCode}},[e("a",{staticClass:"verify-change-code"},[t._v("换一张")])])])])},g=[];i(7658);function v(t){var e,i,s,o,r=t.$el.parentNode.offsetWidth||window.offsetWidth,n=t.$el.parentNode.offsetHeight||window.offsetHeight;return e=-1!=t.imgSize.width.indexOf("%")?parseInt(this.imgSize.width)/100*r+"px":this.imgSize.width,i=-1!=t.imgSize.height.indexOf("%")?parseInt(this.imgSize.height)/100*n+"px":this.imgSize.height,s=-1!=t.barSize.width.indexOf("%")?parseInt(this.barSize.width)/100*r+"px":this.barSize.width,o=-1!=t.barSize.height.indexOf("%")?parseInt(this.barSize.height)/100*n+"px":this.barSize.height,{imgWidth:e,imgHeight:i,barWidth:s,barHeight:o}}const y=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],b=["#fffff0","#f0ffff","#f0fff0","#fff0f0"],S=["#FF0033","#006699","#993366","#FF9900","#66CC66","#FF33CC"];var w={name:"VerifyCode",props:{type:{type:String,default:"1"},figure:{type:Number,default:100},arith:{type:Number,default:0},width:{type:String,default:"200px"},height:{type:String,default:"60px"},fontSize:{type:String,default:"30px"},codeLength:{type:Number,default:6}},data(){return{isEnd:!1,inputValue:"",containerBackgroundColor:"#fff",containerColor:"#fff",codeChose:"",codeShow:[]}},methods:{init(){this.setCode(),this.$parent.$emit("ready",this)},setCode(){if(0==this.isEnd)if(this.containerBackgroundColor=b[Math.floor(3*Math.random())],this.containerColor=S[Math.floor(5*Math.random())],this.inputValue="",this.codeShow=[],this.codeChose="","1"===this.type)for(var t=0;t<this.codeLength;t++){var e=Math.floor(52*Math.random()),i=e%2==0?"font-style:italic;margin-right: 10px":"font-weight:bolder";i+=1==Math.floor(2*Math.random())?"font-weight:bolder":"",this.codeChose+=y[e],this.codeShow.push({style:i,char:y[e]})}else if("2"===this.type){var s=Math.floor(Math.random()*this.figure),o=Math.floor(Math.random()*this.figure);let t="";if(0==this.arith)var r=Math.floor(3*Math.random());switch(r){case 1:this.codeChose=parseInt(s)+parseInt(o),t=s+" + "+o+" = ?";break;case 2:if(parseInt(s)<parseInt(o)){var n=s;s=o,o=n}this.codeChose=parseInt(s)-parseInt(o),t=s+" - "+o+" = ?";break;default:this.codeChose=parseInt(s)*parseInt(o),t=s+" × "+o+" = ?";break}this.codeShow=t.split("")}},checkCode(){let t,e;"1"===this.type?(t=this.inputValue.toUpperCase(),e=this.codeChose.toUpperCase()):(t=this.inputValue,e=this.codeChose),console.log(t),console.log(e),console.log(t==e),t==e?(this.isEnd=!0,this.$parent.$emit("success",this)):(this.$parent.$emit("error",this),this.setCode())},refresh(){this.isEnd=!1,this.inputValue="",this.setCode()}},watch:{type:{immediate:!0,handler(){this.init()}}},mounted(){this.$el.onselectstart=function(){return!1}},i18n:{messages:{"en-US":{},"zh-CN":{}}}},C=w,k=(0,c.Z)(C,m,g,!1,null,null,null),x=k.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"relative"},on:{mouseover:function(e){t.showImage=!0},mouseout:function(e){t.showImage=!0}}},["2"===t.type?e("div",{directives:[{name:"show",rawName:"v-show",value:t.showImage,expression:"showImage"}],staticClass:"verify-img-out",style:{display:"pop"===t.mode?"none":void 0,position:"pop"===t.mode?"absolute":"relative",height:parseInt(t.setSize.imgHeight)+t.vSpace+"px",bottom:"pop"===t.mode?"42px":void 0},on:{mouseover:function(e){t.showImage=!0},mouseout:function(e){t.showImage=!0}}},[e("div",{staticClass:"verify-img-panel",style:{width:t.setSize.imgWidth,height:t.setSize.imgHeight,background:"url("+t.imgUrl+t.imgName[t.imgRand]+")","background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",on:{click:t.refresh}},[e("i",{staticClass:"iconfont icon-refresh"})]),e("div",{staticClass:"verify-gap",style:{width:t.blockSize.width,height:t.blockSize.height,top:t.top+"px",left:t.left+"px"}})])]):t._e(),e("div",{staticClass:"verify-bar-area",style:{width:t.setSize.barWidth,height:t.barSize.height,"line-height":t.barSize.height}},[e("span",{staticClass:"verify-msg",domProps:{textContent:t._s(t.text)}}),e("div",{staticClass:"verify-left-bar",style:{width:void 0!==t.leftBarWidth?t.leftBarWidth:t.barSize.height,height:t.barSize.height,"border-color":t.leftBarBorderColor,transaction:t.transitionWidth}},[e("span",{staticClass:"verify-msg",domProps:{textContent:t._s(t.finishText)}}),e("div",{staticClass:"verify-move-block",style:{width:t.barSize.height,height:t.barSize.height,"background-color":t.moveBlockBackgroundColor,left:t.moveBlockLeft,transition:t.transitionLeft},on:{touchstart:t.start,mousedown:t.start}},[e("i",{class:["verify-icon iconfont",t.iconClass],style:{color:t.iconColor}}),"2"===t.type?e("div",{directives:[{name:"show",rawName:"v-show",value:"pop"!==t.mode&&t.showImage,expression:"mode !== 'pop' && showImage"}],staticClass:"verify-sub-block",style:{width:t.blockSize.width,height:t.blockSize.height,top:"-"+(parseInt(t.setSize.imgHeight)-t.top+t.vSpace)+"px","background-image":"url("+t.imgUrl+t.imgName[this.imgRand]+")","background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight,"background-position-y":"-"+t.top+"px","background-position-x":"-"+t.left+"px"}}):t._e()])])])])},I=[],B={name:"VerifySlide",props:{type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vOffset:{type:Number,default:5},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgUrl:{type:String,default:"http://via.placeholder.com/"},imgName:{type:Array,default(){return["350x150","350x450"]}},imgSize:{type:Object,default(){return{width:"400px",height:"200px"}}},blockSize:{type:Object,default(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default(){return{width:"400px",height:"40px"}}}},data(){return{imgRand:0,text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,showImage:!0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},computed:{barArea(){return this.$el.querySelector(".verify-bar-area")},resetSize(){return v}},methods:{init(){this.text=this.explain,this.imgRand=Math.floor(Math.random()*this.imgName.length),this.$nextTick((()=>{let t=this.resetSize(this);for(let e in t)this.$set(this.setSize,e,t[e]);this.randSet(),this.$parent.$emit("ready",this)}));var t=this;window.removeEventListener("touchmove",(function(e){t.move(e)})),window.removeEventListener("mousemove",(function(e){t.move(e)})),window.removeEventListener("touchend",(function(){t.end()})),window.removeEventListener("mouseup",(function(){t.end()})),window.addEventListener("touchmove",(function(e){t.move(e)})),window.addEventListener("mousemove",(function(e){t.move(e)})),window.addEventListener("touchend",(function(){t.end()})),window.addEventListener("mouseup",(function(){t.end()}))},start:function(t){0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",t.stopPropagation(),this.status=!0)},move:function(t){if(this.status&&0==this.isEnd){if(t.touches)e=t.touches[0].pageX;else var e=t.clientX;var i=this.getLeft(this.barArea),s=e-i;"1"!==this.type?s>=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2&&(s=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2):s>=this.barArea.offsetWidth-parseInt(parseInt(this.barSize.height)/2)+3?(this.finishText="松开验证",s=this.barArea.offsetWidth-parseInt(parseInt(this.barSize.height)/2)+3):this.finishText="",s<=0&&(s=parseInt(parseInt(this.blockSize.width)/2)),this.moveBlockLeft=s-parseInt(parseInt(this.blockSize.width)/2)+"px",this.leftBarWidth=s-parseInt(parseInt(this.blockSize.width)/2)+"px"}},end:function(){var t=this;if(this.status&&0==this.isEnd){if("1"!==this.type){var e=parseInt(this.vOffset);parseInt(this.left)>=parseInt((this.moveBlockLeft||"").replace("px",""))-e&&parseInt(this.left)<=parseInt((this.moveBlockLeft||"").replace("px",""))+e?(this.moveBlockBackgroundColor="#5cb85c",this.leftBarBorderColor="#5cb85c",this.iconColor="#fff",this.iconClass="icon-check",this.showRefresh=!1,this.isEnd=!0,this.$parent.$emit("success",this)):(this.moveBlockBackgroundColor="#d9534f",this.leftBarBorderColor="#d9534f",this.iconColor="#fff",this.iconClass="icon-close",setTimeout((function(){t.refresh()}),400),this.$parent.$emit("error",this))}else parseInt((this.moveBlockLeft||"").replace("px",""))>=parseInt(this.setSize.barWidth)-parseInt(this.barSize.height)-parseInt(this.vOffset)?(this.moveBlockBackgroundColor="#5cb85c",this.leftBarBorderColor="#5cb85c",this.iconColor="#fff",this.iconClass="icon-check",this.showRefresh=!1,this.finishText="验证成功",this.isEnd=!0,this.$parent.$emit("success",this)):(this.finishText="",this.moveBlockBackgroundColor="#d9534f",this.leftBarBorderColor="#d9534f",this.iconColor="#fff",this.iconClass="icon-close",this.isEnd=!0,setTimeout((function(){t.finishText="",t.refresh(),t.isEnd=!1}),400),this.$parent.$emit("error",this));this.status=!1}},randSet:function(){var t=Math.floor(9*Math.random()+1),e=Math.floor(9*Math.random()+1),i=t*parseInt(this.setSize.imgHeight)/15+.1*parseInt(this.setSize.imgHeight),s=e*parseInt(this.setSize.imgWidth)/15+.1*parseInt(this.setSize.imgWidth);this.top=i,this.left=s},refresh:function(){this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=void 0,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.randSet(),this.imgRand=Math.floor(Math.random()*this.imgName.length),this.isEnd=!1,setTimeout((()=>{this.transitionWidth="",this.transitionLeft="",this.text=this.explain}),300)},getLeft:function(t){let e=0;while(t)e+=t.offsetLeft,t=t.offsetParent;let i=e;return i}},watch:{type:{immediate:!0,handler(){this.init()}}},mounted(){this.$el.onselectstart=function(){return!1}},i18n:{messages:{"en-US":{},"zh-CN":{}}}},N=B,T=(0,c.Z)(N,z,I,!1,null,null,null),M=T.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"relative"},on:{mouseover:function(e){"pop"===t.mode&&(t.showImage=!0)},mouseout:function(e){"pop"===t.mode&&(t.showImage=!1)}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showImage,expression:"showImage"}],staticClass:"verify-img-out",style:"pop"===t.mode?{display:"none",position:"absolute",bottom:"42px",height:parseInt(t.setSize.imgHeight)+t.vSpace+"px"}:{position:"relative",height:parseInt(t.setSize.imgHeight)+t.vSpace+"px"},on:{mouseover:function(e){"pop"===t.mode&&(t.showImage=!0)},mouseout:function(e){"pop"===t.mode&&(t.showImage=!1)}}},[e("div",{staticClass:"verify-img-panel",style:{width:t.setSize.imgWidth,height:t.setSize.imgHeight,"background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight,"margin-bottom":t.vSpace+"px"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",staticStyle:{"z-index":"3"},on:{click:t.refresh}},[e("i",{staticClass:"iconfont icon-refresh"})]),e("canvas",{ref:"canvas",attrs:{width:t.setSize.imgWidth,height:t.setSize.imgHeight},on:{click:function(e){t.bindingClick&&t.canvasClick(e)}}}),t._l(t.tempPoints,(function(i,s){return e("div",{key:s,staticClass:"point-area",style:{"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"30px",height:"30px","text-align":"center","line-height":"30px","border-radius":"50%",position:"absolute",top:parseInt(i.y-10)+"px",left:parseInt(i.x-10)+"px"}},[t._v(" "+t._s(s+1)+" ")])}))],2)]),e("div",{staticClass:"verify-bar-area",style:{width:this.barSize.width,height:this.barSize.height,color:this.barAreaColor,"border-color":this.barAreaBorderColor,"line-height":this.barSize.height}},[e("span",{staticClass:"verify-msg"},[t._v(t._s(t.text))])])])},$=[];var W={name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},defaultNum:{type:Number,default:4},checkNum:{type:Number,default:3},vSpace:{type:Number,default:5},imgUrl:{type:String,default:"http://via.placeholder.com/"},imgName:{type:Array,default(){return["350x150","350x450"]}},imgSize:{type:Object,default(){return{width:"400px",height:"200px"}}},barSize:{type:Object,default(){return{width:"400px",height:"40px"}}}},data(){return{fontPos:[],checkPosArr:[],num:1,imgRand:0,setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},showImage:!0,tempPoints:[],text:"",barAreaColor:void 0,barAreaBorderColor:void 0,showRefresh:!0,bindingClick:!0}},computed:{resetSize(){return v}},methods:{init(){this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.imgRand=Math.floor(Math.random()*this.imgName.length),this.$nextTick((()=>{this.setSize=this.resetSize(this),this.refresh(),this.$parent.$emit("ready",this)}))},canvasClick(t){this.checkPosArr.push(this.getMousePos(this.$refs.canvas,t)),this.num==this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,t)),setTimeout((()=>{var t=this.comparePos(this.fontPos,this.checkPosArr);0==t?(this.$parent.$emit("error",this),this.barAreaColor="#d9534f",this.barAreaBorderColor="#d9534f",this.text="验证失败",setTimeout((()=>{this.refresh()}),400)):(this.barAreaColor="#4cae4c",this.barAreaBorderColor="#5cb85c",this.text="验证成功",this.showRefresh=!1,this.bindingClick=!1,this.$parent.$emit("success",this))}),400)),this.num<this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,t)))},drawImg:function(t,e){var i=this.$refs.canvas,s=i.getContext("2d");s.drawImage(e,0,0,parseInt(this.setSize.imgWidth),parseInt(this.setSize.imgHeight));for(var o=["italic small-caps bold 20px microsoft yahei","small-caps normal 25px arial","34px microsoft yahei"],r="天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩体率宾归王",n=[],a=Math.floor(parseInt(this.setSize.imgWidth)/(parseInt(this.defaultNum)+1)),h="",l=Math.floor(5*Math.random()),c=1;c<=this.defaultNum;c++){if(n[c-1]=this.getChars(r,n),h=Math.floor(3*Math.random()),s.font=o[h],s.fillStyle=S[l],1==Math.floor(2*Math.random()))var f=Math.floor(parseInt(this.setSize.imgHeight)/2)+20*h+20;else f=Math.floor(parseInt(this.setSize.imgHeight)/2)-20*h;s.fillText(n[c-1],a*c,f),this.fontPos[c-1]={char:n[c-1],x:a*c,y:f}}for(c=0;c<this.defaultNum-this.checkNum;c++)this.shuffle(this.fontPos).pop();var d="";for(c=0;c<this.fontPos.length;c++)d+=this.fontPos[c].char+",";return this.text="请顺序点击【"+d.substring(0,d.length-1)+"】",this.fontPos},getMousePos:function(t,e){var i=e.offsetX-5,s=e.offsetY-5;return{x:i,y:s}},getChars:function(t,e){var i=parseInt(Math.floor(Math.random()*t.length));i>0&&(i-=1);var s=t.charAt(i);return-1==e.indexOf(s)?s:this.getChars(t,e)},shuffle:function(t){var e,i,s=t.length;while(s)e=Math.random()*s-->>>0,i=t[s],t[s]=t[e],t[e]=i;return t},createPoint:function(t){return this.tempPoints.push(Object.assign({},t)),++this.num},comparePos:function(t,e){for(var i=!0,s=0;s<t.length;s++)if(!(parseInt(e[s].x)+40>t[s].x&&parseInt(e[s].x)-40<t[s].x&&parseInt(e[s].y)+40>t[s].y&&parseInt(e[s].y)-40<t[s].y)){i=!1;break}return i},refresh:function(){this.tempPoints.splice(0,this.tempPoints.length),this.barAreaColor="#000",this.barAreaBorderColor="#ddd",this.bindingClick=!0,this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.imgRand=Math.floor(Math.random()*this.imgName.length);var t=new Image;t.src=this.imgUrl+this.imgName[this.imgRand];var e=this;t.onload=function(t){e.$nextTick((()=>{e.fontPos=e.drawImg(e.$el,this)}))},this.text="验证失败",this.showRefresh=!0}},watch:{type:{immediate:!0,handler(){this.init()}}},mounted(){this.$el.onselectstart=function(){return!1}},i18n:{messages:{"en-US":{},"zh-CN":{}}}},_=W,L=(0,c.Z)(_,P,$,!1,null,null,null),V=L.exports,A={name:"Vue2Verify",props:{locale:{require:!1,type:String,default(){if(navigator.language)var t=navigator.language;else t=navigator.browserLanguage;return t}},type:{type:String|Number,require:!1,default:"picture"},figure:{type:Number},arith:{type:Number},width:{type:String},height:{type:String},fontSize:{type:String},codeLength:{type:Number},mode:{type:String},vOffset:{type:Number},vSpace:{type:Number},explain:{type:String},imgUrl:{type:String},imgName:{type:Array},imgSize:{type:Object},blockSize:{type:Object},barSize:{type:Object},defaultNum:{type:Number},checkNum:{type:Number},showButton:{type:Boolean,default:!0}},data(){return{verifyType:void 0,componentType:void 0}},methods:{i18n(t){if(this.$t)return this.$t(t);{let e=this.$options.i18n.messages[this.locale]||this.$options.i18n.messages["en-US"];return e[t]}},checkCode(){this.instance.checkCode&&this.instance.checkCode()},refresh(){this.instance.refresh&&this.instance.refresh()}},computed:{instance(){return this.$refs.instance||{}}},watch:{type:{immediate:!0,handler(t){switch(t.toString()){case"picture":this.verifyType="1",this.componentType="VerifyCode";break;case"1":this.verifyType="1",this.componentType="VerifyCode";break;case"compute":this.verifyType="2",this.componentType="VerifyCode";break;case"2":this.verifyType="2",this.componentType="VerifyCode";break;case"slide":this.verifyType="1",this.componentType="VerifySlide";break;case"3":this.verifyType="1",this.componentType="VerifySlide";break;case"puzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"4":this.verifyType="2",this.componentType="VerifySlide";break;case"pick":this.verifyType="",this.componentType="VerifyPoints";break;case"5":this.verifyType="",this.componentType="VerifyPoints";break;default:this.verifyType=void 0,this.componentType=void 0,console.error("Unsupported Type:"+t)}}}},components:{VerifyCode:x,VerifySlide:M,VerifyPoints:V},i18n:{messages:{"en-US":{ok:"ok"},"zh-CN":{ok:"确定"}}}},R=A,H=(0,c.Z)(R,p,u,!1,null,null,null),E=H.exports,O={data(){return{username:"",password:"",isTitle:!0}},methods:{onSubmit(t){console.log("submit",t)}},components:{TopCom:d,Verify:E}},U=O,j=(0,c.Z)(U,s,o,!1,null,null,null),F=j.exports},6949:function(t,e,i){t.exports=i.p+"img/logo.0fbc4c3c.png"}}]);
//# sourceMappingURL=818.4feb11eb.js.map
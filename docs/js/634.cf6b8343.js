"use strict";(self["webpackChunkmaluyanxuanvue2"]=self["webpackChunkmaluyanxuanvue2"]||[]).push([[634],{4830:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div",[s("TopCom",{attrs:{title:"我的订单",isShowRight:!1}}),s("van-tabs",{on:{click:t.onClick}},t._l(t.titleList,(function(e,a){return s("van-tab",{attrs:{title:e.name,name:a}},[t.list.length?s("ul",[s("li",[t._v(t._s(e.name))])]):t._e(),t.list.length?t._e():s("van-empty",{staticClass:"custom-image",attrs:{image:"https://img01.yzcdn.cn/vant/custom-empty-image.png",description:`${e.name}订单为空`}})],1)})),1)],1)},n=[],i=e(6607),u=e(2900),l={data(){return{titleList:[{name:"全部",status:""},{name:"待付款",status:0},{name:"待确认",status:1},{name:"待发货",status:2},{name:"已发货",status:3},{name:"交易完成",status:4}],list:[],pageNumber:1,status:""}},components:{TopCom:i.Z},beforeMount(){this.getOrder()},methods:{onClick(t){console.log(this.titleList[t]),this.status=this.titleList[t].status,this.getOrder()},getOrder(){(0,u.hJ)(this.pageNumber,this.status).then((t=>{this.list=t.data.data.list})).catch((t=>{console.log(t)}))}}},o=l,m=e(1001),r=(0,m.Z)(o,a,n,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=634.cf6b8343.js.map
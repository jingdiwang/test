"use strict";(self["webpackChunkcrm_malu"]=self["webpackChunkcrm_malu"]||[]).push([[901],{6901:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"common-layout"},[t("el-container",[t("el-header",[t("CRMHeader")],1),t("el-container",[t("el-aside",{attrs:{width:"220px"}},[t("CRMSidebar",{on:{changeURL:e.changeURL}})],1),t("el-container",[t("el-main",[e.path?t("p",[e._v("欢迎使用CRM管理系统")]):e._e(),t("router-view")],1),t("el-footer")],1)],1)],1)],1)},s=[],r=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{attrs:{span:8}},[t("h1",{staticClass:"grid-content bg-purple"},[e._v("CRM管理系统")])]),t("el-col",{staticClass:"hoverSamllhandle",attrs:{span:4,offset:12}},[t("el-dropdown",{attrs:{trigger:"click"}},[t("span",{staticClass:"el-dropdown-link"},[t("span",{staticClass:"demonstration"},[e._v("欢迎 "+e._s(e.admin))]),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{icon:"el-icon-setting"},on:{click:e.userSetting}},[e._v("设置")]),t("el-dropdown-item",{attrs:{icon:"el-icon-close"},nativeOn:{click:function(t){return e.userExit.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1)],1)},o=[],l={data(){return{admin:"admin"}},methods:{userSetting(){},userExit(){console.log(123),sessionStorage.removeItem("userName"),sessionStorage.removeItem("checkPass"),this.$router.replace({path:"/"}),this.$message({message:"已成功退出",type:"success"})}}},i=l,c=n(1001),u=(0,c.Z)(i,r,o,!1,null,"0081b6cf",null),d=u.exports,m=function(){var e=this,t=e._self._c;return t("el-row",{staticClass:"tac"},[t("el-col",[t("el-menu",{attrs:{"default-active":"24"}},[t("el-submenu",{attrs:{index:"1","default-active":"24"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",{staticClass:"manageFirst"},[e._v("管理")])]),t("el-menu-item-group",[t("router-link",{attrs:{to:"/crm/user"}},[t("el-menu-item",{attrs:{index:"1-1"},on:{click:e.changeRoute}},[e._v("用户管理")])],1),t("router-link",{attrs:{to:"/crm/teacher"}},[t("el-menu-item",{attrs:{index:"1-2"},on:{click:e.changeRoute}},[e._v("教师管理")])],1),t("router-link",{attrs:{to:"/crm/role"}},[t("el-menu-item",{attrs:{index:"1-3"},on:{click:e.changeRoute}},[e._v("角色管理")])],1)],1)],2)],1)],1)],1)},h=[],p={methods:{changeRoute(){this.$emit("changeURL")}}},g=p,v=(0,c.Z)(g,m,h,!1,null,"45f36772",null),f=v.exports,_={components:{CRMHeader:d,CRMSidebar:f},data(){return{path:!0}},computed:{},methods:{changeURL(){this.path=!1}},beforeMount(){this.path="/crm"===location.pathname}},C=_,k=(0,c.Z)(C,a,s,!1,null,"dd6a510c",null),w=k.exports}}]);
//# sourceMappingURL=901.7046ab6f.js.map
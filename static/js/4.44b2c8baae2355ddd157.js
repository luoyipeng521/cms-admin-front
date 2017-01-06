webpackJsonp([4,8],{10:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(7),o=n(i);t.default={created:function(){this.autoload!==!1&&this.loadPage()},data:function(){return{url:this.$route.name,pageData:{},editData:{},editDialog:!1,listLoading:!1,saveLoading:!1,saveOptions:{}}},computed:{tableData:function(){return this.pageData.data}},methods:{loadPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pageData.pageSize||10,t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageData.currentPage||1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.queryParams||{};this.listLoading=!0,this.get(this.url,(0,o.default)({pageSize:e,currentPage:a},n)).then(function(e){var a=e.data;t.pageData=a}).finally(function(){t.listLoading=!1})},sizeChange:function(e){this.pageData.pageSize=e,this.loadPage()},pageChange:function(e){this.pageData.currentPage=e,this.loadPage()},remove:function(e){var t=this;return this.$confirm(this.deleteMsg||"确定要删除该条记录吗?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){return t.delete(t.url,{id:e}).then(function(){t.$message.success("删除成功")})}).then(function(){return t.loadPage()}).catch(function(){})},edit:function(e){var t=this;e?(this.listLoading=!0,this.get(this.url+"/"+e).then(function(e){var a=e.data;t.editData=a,t.editDialog=!0}).finally(function(){t.listLoading=!1})):(this.editData={},this.editDialog=!0)},save:function(e){var t=this,a=this.url;e.id&&(a+="/"+e.id),this.saveLoading=!0,this.post(a,e,this.saveOptions).then(function(){t.editDialog=!1,t.loadPage()}).finally(function(){t.saveLoading=!1})}}}},192:function(e,t,a){t=e.exports=a(4)(),t.push([e.id,"",""])},215:function(e,t,a){var n=a(192);"string"==typeof n&&(n=[[e.id,n,""]]);a(5)(n,{});n.locals&&(e.exports=n.locals)},384:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(7),o=n(i),r={1:{text:"文本",componentName:"el-input"},2:{text:"Pug",componentName:"pug-editor"}};t.default={props:["data"],components:{PugEditor:function(e){a.e(11,function(t){var a=[t(392)];e.apply(null,a)}.bind(this))}},data:function(){return{form:(0,o.default)({name:"",value:"",type:1,description:""},this.data),rules:{id:{required:!0},data:{required:!0}},types:r}},methods:{saveAction:function(){this.$emit("save",this.form)}}}},385:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(10),o=n(i),r=a(401),l=n(r);t.default={mixins:[o.default],components:{edit:l.default}}},401:function(e,t,a){var n,i;a(215),n=a(384);var o=a(408);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=n},402:function(e,t,a){var n,i;n=a(385);var o=a(407);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=n},407:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"actions"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.edit()}}},[e._v("新增")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.pageData.data,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"value",label:"值"}}),a("el-table-column",{attrs:{prop:"description",label:"描述"}}),a("el-table-column",{attrs:{context:e._self,label:"操作"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.edit(e.row.id)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.remove(e.row.id)}}},[e._v("删除")])],1)},staticRenderFns:[]}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:e.pageData.total,"page-size":e.pageData.pageSize},on:{"current-change":e.pageChange}})],1),e.editDialog?a("el-dialog",{directives:[{name:"model",rawName:"v-model",value:e.editDialog,expression:"editDialog"}],staticClass:"big-dialog",attrs:{title:"新增",size:"large"},domProps:{value:e.editDialog},on:{input:function(t){e.editDialog=t}}},[a("edit",{directives:[{name:"loading",rawName:"v-loading",value:e.saveLoading,expression:"saveLoading"}],attrs:{data:e.editData},on:{save:e.save,cancel:function(t){e.editDialog=!1}}})],1):e._e()],1)},staticRenderFns:[]}},408:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form}},[a("el-form-item",{attrs:{label:"Name",prop:"name"}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],domProps:{value:e.form.name},on:{input:function(t){e.form.name=t}}})],1),a("el-form-item",{attrs:{label:"Type",prop:"type"}},[a("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.type,expression:"form.type"}],domProps:{value:e.form.type},on:{input:function(t){e.form.type=t}}},e._l(e.types,function(t,n){return a("el-option",{attrs:{label:t.text,value:e._f("number")(n)}})}))],1),a("el-form-item",{attrs:{label:"Value",prop:"value"}},[a(e.types[e.form.type].componentName,{directives:[{name:"model",rawName:"v-model",value:e.form.value,expression:"form.value"}],tag:"component",domProps:{value:e.form.value},on:{input:function(t){e.form.value=t}}})],1),a("el-form-item",{attrs:{label:"Desc",prop:"description"}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"}],domProps:{value:e.form.description},on:{input:function(t){e.form.description=t}}})],1),a("div",{staticClass:"el-dialog__footer"},[a("el-button",{attrs:{type:"default"},on:{click:function(t){e.$emit("cancel")}}},[e._v("取消")]),a("el-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:function(t){t.preventDefault(),e.saveAction(t)}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]}}});
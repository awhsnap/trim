(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{336:function(e,t,r){"use strict";r.r(t);var o=r(5),s=r(0),n=r(20),a=r(2),i=r(97),u=r(63),c=r(53),d=r(15),l=r(61),f=r(62),h=r(14);var p=o.a.extend({mixins:[f.a,h.a],props:{isExternal:{type:Boolean,default:!1}},data:function(){return{resourceModel:void 0,cssClass:void 0,navigationKey:void 0,resourceCreatedMessage:Object(a.a)("baseResourceController.entityCreatedMessage"),resourceSavedMessage:Object(a.a)("baseResourceController.entitySavedMessage"),breadcrumbs:[],resourceControls:[],currentQuery:{}}},created:function(){var e=this;this.$emit("create",this),this.setNavSelected(),this.isExternal||(this.currentQuery=this.$route.query),this.bootstrapModel().catch(function(t){return e.handleEditSystemError(t)})},methods:{bootstrapModel:function(){var e=this;return Promise.resolve(this.getModel(this.getModelType())).then(function(t){return e.resourceModel=t,t})},getModelType:function(){return d.b},getResourceControlsType:function(){return i.a},getResourceHeaderType:function(){return u.a},getResourceEditType:function(){return c.a},setNavSelected:function(){this.isExternal||this.$store.commit("setNavSelected",this.navigationKey)},addControl:function(e){return this.resourceControls.push(Object(s.a)({actionContext:this},e)),this},addSaveControl:function(e){var t=this;return this.addControl({caption:e||Object(a.a)("resourceControls.save"),className:"accented iconUploadCloud",action:function(){return t.$refs.editHandler.save().catch(function(e){t.$refs.editHandler.handleSaveError(e)})}})},addDropdownControl:function(e){var t=this;return Array.isArray(e)&&(e={items:e}),e.isDropdown=!0,e.items.forEach(function(e){e.actionContext=t}),this.resourceControls.push(e),this},setPageTitle:function(e){return this.setBreadcrumbs({caption:e}),this.isExternal||(window.document.title=this.formatWindowTitle(this.breadcrumbs,this.$store.state.projectCaption)),this},formatWindowTitle:function(e,t){return e.map(function(e){return e.caption}).join(" / ")+" - "+t},setBreadcrumbs:function(e){return this.breadcrumbs=[e],this},getEditConfigurator:function(){var e=this;return function(t){return e.resetResourceControls(),e.setupEdit(Object(s.a)({query:e.currentQuery},t))}},processConfigureEvent:function(e,t){this.$emit({beforeConfigure:"beforeEditSetup",afterConfigure:"afterEditSetup"}[e],{controller:this,editHandler:t})},processSaveEvent:function(e){this.isExternal?this.$refs.editHandler&&(this.$refs.editHandler.$el.scrollTop=0):window.scrollTo(0,0),this.$emit("resourceSaved",e)},resetResourceControls:function(){return this.resourceControls=[],this},processTabSelect:function(e){this.isExternal||this.$router.navigateTo(this.getTabUrl(e))},getTabQueryKey:function(){return"tab"},getTabUrl:function(e){if(!this.isExternal)return this.$router.url({name:this.$route.name,query:Object(s.a)({},this.currentQuery,(t={},r=this.getTabQueryKey(),o=e,r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t))});var t,r,o},handleSystemError:function(e){throw Object(n.a)({message:Object(a.a)("validation.serverError"),acceptText:Object(a.a)("prompt.continueText"),acceptOnly:!0,parent:this}),e},handleEditSystemError:function(e){return this.handleSystemError(e)}}});p.getDataKeys=function(){return["navigationKey","cssClass","resourceSavedMessage","resourceCreatedMessage"]},p.toVueComponent=Object(l.a)({extends:p,dataKeys:p.getDataKeys()});var g=p,b=r(1),v=Object(b.a)(g,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resourceController",class:e.cssClass},[r(e.getResourceHeaderType(),{tag:"component",attrs:{breadcrumbs:e.breadcrumbs,hasBottomBorder:e.headerHasBorder}},[r(e.getResourceControlsType(),{tag:"component",attrs:{controls:e.resourceControls}})],1),e._v(" "),e.resourceModel?r(e.getResourceEditType(),{ref:"editHandler",tag:"component",staticClass:"resourceEdit resourceEditType1",attrs:{ModelType:e.getModelType(),configure:e.getEditConfigurator(),model:e.resourceModel,resourceSavedMessage:e.resourceSavedMessage,resourceCreatedMessage:e.resourceCreatedMessage,initialSelectedTab:e.currentQuery.tab,getTabUrl:e.getTabUrl},on:{beforeConfigure:function(t){return e.processConfigureEvent("beforeConfigure",t)},afterConfigure:function(t){return e.processConfigureEvent("afterConfigure",t)},resourceModelSaved:e.processSaveEvent,selectTab:e.processTabSelect,systemError:e.handleEditSystemError}}):e._e()],1)},[],!1,null,null,null);t.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{237:function(e,t,n){var r=n(268);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(4).default)("454e72e7",r,!0,{})},267:function(e,t,n){"use strict";var r=n(237);n.n(r).a},268:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".fileUploadType1 {\n  overflow: hidden;\n  border: 1px solid #E5E5E5;\n  border-radius: 0.3em;\n}\n.fileUploadType1 > .handle {\n    font-size: 1.6em;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n    padding: 3.125em 1.25em 1.25em;\n    text-align: center;\n    background-color: #f5f5f5;\n    color: #666666;\n    cursor: pointer;\n}\n.fileUploadType1 > .handle:before {\n      font-size: 1.5625em;\n      left: 50%;\n      top: 1.2em;\n      margin-left: -0.8em;\n}\n.fileUploadType1 .dz-preview {\n    padding: 1em;\n    position: relative;\n}\n.fileUploadType1 .dz-image {\n    display: inline-block;\n    width: 6em;\n    height: 6em;\n    line-height: 6em;\n    margin-right: 1em;\n    background-color: #f5f5f5;\n    text-align: center;\n}\n.fileUploadType1 .dz-image > img {\n      display: inline-block;\n      max-width: 6em;\n      max-height: 6em;\n      vertical-align: middle;\n      border-radius: 0.3em;\n}\n.fileUploadType1 .dz-details {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.5em;\n}\n.fileUploadType1 .dz-size {\n    display: inline-block;\n    vertical-align: middle;\n}\n.fileUploadType1 .dz-filename {\n    display: inline-block;\n    vertical-align: middle;\n}\n.fileUploadType1 .dz-progress {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 1px;\n    background-color: #E5E5E5;\n}\n.fileUploadType1 .dz-progress > .dz-upload {\n      display: block;\n      height: 100%;\n      background-color: #e03431;\n}\n.fileUploadType1 .dz-error-message {\n    font-size: 1.4em;\n    padding: 1.42857em;\n    background-color: #F8E6E5;\n    color: #cd4b44;\n    text-align: center;\n    border-radius: 0.23077em;\n    margin-top: 1.15385em;\n    border: 1px solid #cd4b44;\n    display: none;\n}\n.fileUploadType1 .dz-error .dz-error-message {\n    -webkit-animation: slideDownFadeIn 0.2s;\n            animation: slideDownFadeIn 0.2s;\n    display: block;\n}\n.fileUploadType1 .dz-success-mark,\n  .fileUploadType1 .dz-error-mark {\n    display: none;\n}\n",""])},342:function(e,t,n){"use strict";n.r(t);var r=n(63),a=n(0),o=n(7),i=n(2),s=n(6),d=n(15),l=n(61),c=n(236),u=n.n(c),p=n(22),f={props:{uploadCaption:{type:String,required:!0},uploadUrl:{type:String,required:!0},clickableSelector:{type:String,default:".handle"},paramName:{type:String,default:"binary"},mediaType:{type:String,default:"image"},removePreviewOnUpload:{type:Boolean,default:!0},headers:Object,maxFiles:Number},mounted:function(){this.setupUpload()},beforeDestroy:function(){this.dropzone&&this.dropzone.destroy()},methods:{setupUpload:function(){var e=this,t=[].slice.call(this.$el.querySelectorAll(this.clickableSelector)),n=this.dropzone=new u.a(this.$el,{url:this.uploadUrl,params:this.mediaType&&{mediaType:this.mediaType},clickable:!t.length||t,maxFiles:this.maxFiles,paramName:this.paramName,headers:Object(a.a)(Object(a.u)({},p.a.defaults.headers.common,["Authorization"]),this.headers)});n.on("sending",function(t,n,r){e.$emit("sending",{file:t,xhr:n,formData:r})}).on("success",function(t,r){e.$emit("upload",{file:t,response:r}),e.removePreviewOnUpload&&n.removeFile(t)}).on("error",function(t,r){e.$emit("uploadError",{file:t,errorMessage:r}),e.removePreviewOnUpload&&n.removeFile(t)})}}},m=(n(267),n(1)),g=Object(m.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fileUploadType1"},[t("div",{staticClass:"handle iconUpload dz-clickable"},[this._v(this._s(this.uploadCaption))])])},[],!1,null,null,null).exports,h=n(94),y=n(54),b=n(62),C=r.a.extend({components:{FileUpload:g,IncludedAdmin:h.a,Message:y.a},mixins:[b.a],data:function(){var e=this;return{mapMediaTypeTo:"mediaType",uploadParameter:"binary",uploadHeaders:void 0,mediaTypes:["image"],uploadControls:[{caption:Object(i.a)("resourceControls.toIndex"),className:"withLeftIcon iconArrowLeft",action:function(){return e.openIndex(e.indexQuery)}},{isSaveControl:!0,caption:Object(i.a)("resourceControls.save"),className:"accented iconUploadCloud",action:function(){return e.saveUploadedMedia()}}],uploadUrl:function(){var e=Object(s.a)("baseApiUrl","/api/");return d.b.extend({type:this.resourceName},{baseUrl:e}).url()+"/upload"},prepareModelFromUpload:function(e,t){return d.b.getFromApi({url:e.xhr.getResponseHeader("Location")})},resolvedMediaTypes:[],uploadedIdentifiers:"",statusMessage:null}},computed:{isStandardEditContext:function(){return["edit"].concat(this.resolvedMediaTypes.reduce(function(e,t){return!t.hasUploadUi&&e.push(t.createContext),e},[])).indexOf(this.currentContext)>=0},currentResourceControls:function(){var e=this;return"index"===this.currentContext||this.isStandardEditContext?this.resourceControls:this.uploadControls.filter(function(t){return 0!==e.uploadedIdentifiers.length||!t.isSaveControl})},currentUploadConfig:function(){var e=this;return Object(a.m)(this.resolvedMediaTypes,function(t){return t.createContext===e.currentContext})}},watch:{currentContext:function(){this.uploadedIdentifiers="",this.statusMessage=null}},created:function(){this.resolveMediaTypes(),this.setupMediaTypeMethods()},methods:{resolveMediaTypes:function(){var e=this;this.resolvedMediaTypes=this.mediaTypes.map(function(t){var n="string"==typeof t?{name:t}:t,r=n.name,s=Object(a.c)(Object(o.space)(r))+" "+Object(i.a)("baseMediaController.uploadCaption");return Object(a.a)({createPageTitle:s,createRouteName:["resource",e.resourceName,"create"+Object(o.pascal)(r)].join("."),uploadCaption:s,hasUploadUi:!0},n,{createContext:"create"+Object(o.pascal)(r)})})},setupMediaTypeMethods:function(){var e=this;this.resolvedMediaTypes.forEach(function(t){var n="create"+Object(o.pascal)(t.name),r="open"+Object(o.pascal)(n),a="get"+Object(o.pascal)(n)+"Url",s="add"+Object(o.pascal)(n)+"Control";e[n]=function(e,r){this.resetContext(n,r),this.setPageTitle(t.createPageTitle),this.$emit("afterCreateSetup",{controller:this})},e[r]=function(e){var t=this;return this.isExternal?this[n](null,e):new Promise(function(n){t.$once("afterCreateSetup",function(){return n()}),t.$router.navigateTo(t[a](e))})},e[a]=function(e){return this.$router.url({name:t.createRouteName,query:e})},e[s]=function(e){var t=this;return this.addControl({caption:e||Object(i.a)("resourceControls.create"),url:this[a](),className:"accented iconEdit",action:function(){return t[r]()}})}})},getIndexConfigurator:function(){var e=this;return function(t){return e.resetResourceControls(),t.setTemplate("cards"),e.setupList({list:t,query:e.indexQuery})}},getEditConfigurator:function(){var e=this;return function(t){var n;if(e.resetResourceControls(),"edit"===e.currentContext){var r=t.resourceModel,i="function"==typeof e.mapMediaTypeTo?e.mapMediaTypeTo(r):r.get(e.mapMediaTypeTo);n="setup"+Object(o.pascal)(i)+"Edit"}else n="setup"+e.currentContext.replace("create","")+"Edit";return e[n](Object(a.a)({query:e.currentQuery},t))}},processUploadedFile:function(e){var t=this;this.prepareModelFromUpload(e.file,e.response).then(function(e){t.$refs.includedMedia.addNewIncludedItem(e)})},saveUploadedMedia:function(){var e=this;return this.$refs.includedMedia.saveRelatedResources().then(function(){window.scrollTo(0,0),e.statusMessage={text:Object(i.a)("baseResourceController.entitySavedMessage"),type:"messageType1"},e.$emit("resourcesUploadedAndUpdated",{models:e.$refs.includedMedia.models})}).catch(function(e){})}}});C.getDataKeys=function(){return["mapMediaTypeTo","mediaTypes","uploadParameter","uploadHeaders","uploadControls","uploadUrl","prepareModelFromUpload"]},C.toVueComponent=Object(l.a)({extends:C,dataKeys:r.a.getDataKeys().concat(C.getDataKeys())});var v=C,T=Object(m.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resourceController",class:e.cssClass},[n(e.getResourceHeaderType(),{tag:"component",attrs:{breadcrumbs:e.breadcrumbs,hasBottomBorder:e.headerHasBorder}},[n(e.getResourceControlsType(),{tag:"component",attrs:{controls:e.currentResourceControls}})],1),e._v(" "),"index"===e.currentContext?n(e.getResourceListType(),{ref:"listHandler",tag:"component",attrs:{query:e.indexQuery,configure:e.getIndexConfigurator(),Collection:e.getCollectionType(),getEditUrl:e.getEditUrl,getIndexUrl:e.getIndexUrl,openEdit:e.openEdit,resourceCaption:e.resourceCaption,apiInclude:e.includeApiData.index,getEmptyListMessage:e.getEmptyListMessage},on:{queryChange:e.openIndex,beforeConfigure:function(t){return e.processIndexEvent("beforeConfigure",t)},afterConfigure:function(t){return e.processIndexEvent("afterConfigure",t)}}}):e.isStandardEditContext?n(e.getResourceEditType(),{ref:"editHandler",tag:"component",staticClass:"resourceEdit resourceEditType1",attrs:{ModelType:e.getModelType(),configure:e.getEditConfigurator(),apiInclude:e.includeApiData.edit,resourceId:e.editResourceId,createRequiresDraft:e.createRequiresDraft,createRelatedStrategy:e.createRelatedStrategy,resourceSavedMessage:e.resourceSavedMessage,resourceCreatedMessage:e.resourceCreatedMessage},on:{beforeConfigure:function(t){return e.processConfigureEvent("beforeConfigure",t)},afterConfigure:function(t){return e.processConfigureEvent("afterConfigure",t)},resourceModelSaved:function(t){return e.processSaveEvent(t)}}}):n("div",{key:e.currentContext,staticClass:"mediaUploadType1 resourceEdit resourceEditType1"},[e.statusMessage?n("message",e._b({on:{close:function(t){e.statusMessage=null}}},"message",e.statusMessage,!1)):e._e(),e._v(" "),n("div",{staticClass:"layoutContainer"},[e.currentUploadConfig?n("file-upload",{attrs:{uploadCaption:e.currentUploadConfig.uploadCaption,mediaType:e.currentUploadConfig.name,uploadUrl:e.uploadUrl(),paramName:e.uploadParameter,headers:e.uploadHeaders},on:{upload:e.processUploadedFile}}):e._e(),e._v(" "),n("included-admin",{directives:[{name:"show",rawName:"v-show",value:e.uploadedIdentifiers.length>0,expression:"uploadedIdentifiers.length > 0"}],ref:"includedMedia",attrs:{name:"uploadedIdentifiers",setupEdit:e.getEditConfigurator(),removeItems:!1,addItems:!1,attributes:{wrapper:{class:"includedAdminBlockType1"},inputWrapper:{class:"includedAdminElement"}}},model:{value:e.uploadedIdentifiers,callback:function(t){e.uploadedIdentifiers=t},expression:"uploadedIdentifiers"}})],1)],1)],1)},[],!1,null,null,null);t.default=T.exports}}]);
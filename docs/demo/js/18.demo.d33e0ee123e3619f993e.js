(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{224:function(t,e,n){var i,o,s;o=[],void 0===(s="function"==typeof(i=function(){function t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])}return t}function e(t,e){t&&e&&(t.className+=" "+e)}function n(t,e){t&&e&&(t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," ").trim())}function i(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.childNodes[0]}function o(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector).call(t,e)}function s(t){this.init.apply(this,arguments)}return s.defaults={elementClass:"",elementLoadingClass:"slbLoading",htmlClass:"slbActive",closeBtnClass:"",nextBtnClass:"",prevBtnClass:"",loadingTextClass:"",closeBtnCaption:"Close",nextBtnCaption:"Next",prevBtnCaption:"Previous",loadingCaption:"Loading...",bindToItems:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,nextOnImageClick:!0,showCaptions:!0,captionAttribute:"title",urlAttribute:"href",startAt:0,loadingTimeout:100,appendTarget:"body",beforeSetContent:null,beforeClose:null,afterClose:null,beforeDestroy:null,afterDestroy:null,videoRegex:new RegExp(/youtube.com|vimeo.com/)},t(s.prototype,{init:function(e){var n,i=this;(e=this.options=t({},s.defaults,e)).$items&&(n=e.$items.get()),e.elements&&(n=[].slice.call("string"==typeof e.elements?document.querySelectorAll(e.elements):e.elements)),this.eventRegistry={lightbox:[],thumbnails:[]},this.items=[],this.captions=[],n&&n.forEach(function(t,n){i.items.push(t.getAttribute(e.urlAttribute)),i.captions.push(t.getAttribute(e.captionAttribute)),e.bindToItems&&i.addEvent(t,"click",function(t){t.preventDefault(),i.showPosition(n)},"thumbnails")}),e.items&&(this.items=e.items),e.captions&&(this.captions=e.captions)},addEvent:function(t,e,n,i){return this.eventRegistry[i||"lightbox"].push({element:t,eventName:e,callback:n}),t.addEventListener(e,n),this},removeEvents:function(t){return this.eventRegistry[t].forEach(function(t){t.element.removeEventListener(t.eventName,t.callback)}),this.eventRegistry[t]=[],this},next:function(){return this.showPosition(this.currentPosition+1)},prev:function(){return this.showPosition(this.currentPosition-1)},normalizePosition:function(t){return t>=this.items.length?t=0:t<0&&(t=this.items.length-1),t},showPosition:function(t){var e=this.normalizePosition(t);return void 0!==this.currentPosition&&(this.direction=e>this.currentPosition?"next":"prev"),this.currentPosition=e,this.setupLightboxHtml().prepareItem(this.currentPosition,this.setContent).show()},loading:function(t){var i=this,o=this.options;t?this.loadingTimeout=setTimeout(function(){e(i.$el,o.elementLoadingClass),i.$content.innerHTML='<p class="slbLoadingText '+o.loadingTextClass+'">'+o.loadingCaption+"</p>",i.show()},o.loadingTimeout):(n(this.$el,o.elementLoadingClass),clearTimeout(this.loadingTimeout))},prepareItem:function(t,e){var n=this,o=this.items[t];if(this.loading(!0),this.options.videoRegex.test(o))e.call(n,i('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="'+o+'"></iframe></div>'));else{var s=i('<div class="slbImageWrap"><img class="slbImage" src="'+o+'" /></div>');this.$currentImage=s.querySelector(".slbImage"),this.options.showCaptions&&this.captions[t]&&s.appendChild(i('<div class="slbCaption">'+this.captions[t]+"</div>")),this.loadImage(o,function(){n.setImageDimensions(),e.call(n,s),n.loadImage(n.items[n.normalizePosition(n.currentPosition+1)])})}return this},loadImage:function(t,e){if(!this.options.videoRegex.test(t)){var n=new Image;e&&(n.onload=e),n.src=t}},setupLightboxHtml:function(){var t=this.options;return this.$el||(this.$el=i('<div class="slbElement '+t.elementClass+'"><div class="slbOverlay"></div><div class="slbWrapOuter"><div class="slbWrap"><div class="slbContentOuter"><div class="slbContent"></div><button type="button" title="'+t.closeBtnCaption+'" class="slbCloseBtn '+t.closeBtnClass+'">×</button>'+(this.items.length>1?'<div class="slbArrows"><button type="button" title="'+t.prevBtnCaption+'" class="prev slbArrow'+t.prevBtnClass+'">'+t.prevBtnCaption+'</button><button type="button" title="'+t.nextBtnCaption+'" class="next slbArrow'+t.nextBtnClass+'">'+t.nextBtnCaption+"</button></div>":"")+"</div></div></div></div>"),this.$content=this.$el.querySelector(".slbContent")),this.$content.innerHTML="",this},show:function(){return this.modalInDom||(document.querySelector(this.options.appendTarget).appendChild(this.$el),e(document.documentElement,this.options.htmlClass),this.setupLightboxEvents(),this.modalInDom=!0),this},setContent:function(t){var o="string"==typeof t?i(t):t;return this.loading(!1),this.setupLightboxHtml(),n(this.$content,"slbDirectionNext"),n(this.$content,"slbDirectionPrev"),this.direction&&e(this.$content,"next"===this.direction?"slbDirectionNext":"slbDirectionPrev"),this.options.beforeSetContent&&this.options.beforeSetContent(o,this),this.$content.appendChild(o),this},setImageDimensions:function(){this.$currentImage&&(this.$currentImage.style.maxHeight=("innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight)+"px")},setupLightboxEvents:function(){var t=this;return this.eventRegistry.lightbox.length?this:(this.addEvent(this.$el,"click",function(e){var n=e.target;o(n,".slbCloseBtn")||t.options.closeOnOverlayClick&&o(n,".slbWrap")?t.close():o(n,".slbArrow")?o(n,".next")?t.next():t.prev():t.options.nextOnImageClick&&t.items.length>1&&o(n,".slbImage")&&t.next()}).addEvent(document,"keyup",function(e){t.options.closeOnEscapeKey&&27===e.keyCode&&t.close(),t.items.length>1&&((39===e.keyCode||68===e.keyCode)&&t.next(),(37===e.keyCode||65===e.keyCode)&&t.prev())}).addEvent(window,"resize",function(){t.setImageDimensions()}),this)},close:function(){this.modalInDom&&(this.runHook("beforeClose"),this.removeEvents("lightbox"),this.$el&&this.$el.parentNode.removeChild(this.$el),n(document.documentElement,this.options.htmlClass),this.modalInDom=!1,this.runHook("afterClose")),this.direction=void 0,this.currentPosition=this.options.startAt},destroy:function(){this.close(),this.runHook("beforeDestroy"),this.removeEvents("thumbnails"),this.runHook("afterDestroy")},runHook:function(t){this.options[t]&&this.options[t](this)}}),s.open=function(t){var e=new s(t);return t.content?e.setContent(t.content).show():e.showPosition(e.options.startAt)},s.registerAsJqueryPlugin=function(t){t.fn.simpleLightbox=function(e){var n,i=this;return this.each(function(){t.data(this,"simpleLightbox")||(n=n||new s(t.extend({},e,{$items:i})),t.data(this,"simpleLightbox",n))})},t.SimpleLightbox=s},"undefined"!=typeof window&&window.jQuery&&s.registerAsJqueryPlugin(window.jQuery),s})?i.apply(e,o):i)||(t.exports=s)},225:function(t,e,n){var i=n(226);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4).default)("3b4b88e7",i,!0,{})},226:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.slbOverlay,.slbWrapOuter,.slbWrap{position:fixed;top:0;right:0;bottom:0;left:0}.slbOverlay{overflow:hidden;z-index:2000;background-color:#000;opacity:0.7;-webkit-animation:slbOverlay 0.5s;animation:slbOverlay 0.5s}.slbWrapOuter{overflow-x:hidden;overflow-y:auto;z-index:2010}.slbWrap{position:absolute;text-align:center}.slbWrap:before{content:"";display:inline-block;height:100%;vertical-align:middle}.slbContentOuter{position:relative;display:inline-block;vertical-align:middle;margin:0px auto;padding:0 1em;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:2020;text-align:left;max-width:100%}.slbContentEl .slbContentOuter{padding:5em 1em}.slbContent{position:relative}.slbContentEl .slbContent{-webkit-animation:slbEnter 0.3s;animation:slbEnter 0.3s;background-color:#fff;-webkit-box-shadow:0 0.2em 1em rgba(0,0,0,0.4);box-shadow:0 0.2em 1em rgba(0,0,0,0.4)}.slbImageWrap{-webkit-animation:slbEnter 0.3s;animation:slbEnter 0.3s;position:relative}.slbImageWrap:after{content:"";position:absolute;left:0;right:0;top:5em;bottom:5em;display:block;z-index:-1;-webkit-box-shadow:0 0.2em 1em rgba(0,0,0,0.6);box-shadow:0 0.2em 1em rgba(0,0,0,0.6);background-color:#FFF}.slbDirectionNext .slbImageWrap{-webkit-animation:slbEnterNext 0.4s;animation:slbEnterNext 0.4s}.slbDirectionPrev .slbImageWrap{-webkit-animation:slbEnterPrev 0.4s;animation:slbEnterPrev 0.4s}.slbImage{width:auto;max-width:100%;height:auto;display:block;line-height:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5em 0;margin:0 auto}.slbCaption{display:inline-block;max-width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;font-size:1.4em;position:absolute;left:0;right:0;bottom:0;padding:.71429em 0;color:#fff;color:rgba(255,255,255,0.7);text-align:center}.slbCloseBtn,.slbArrow{margin:0;padding:0;border:0;cursor:pointer;background:none}.slbCloseBtn::-moz-focus-inner,.slbArrow::-moz-focus-inner{padding:0;border:0}.slbCloseBtn:hover,.slbArrow:hover{opacity:0.5}.slbCloseBtn:active,.slbArrow:active{opacity:0.8}.slbCloseBtn{-webkit-animation:slbEnter 0.3s;animation:slbEnter 0.3s;font-size:3em;width:1.66667em;height:1.66667em;line-height:1.66667em;position:absolute;right:-.33333em;top:0;color:#fff;color:rgba(255,255,255,0.7);text-align:center}.slbLoading .slbCloseBtn{display:none}.slbLoadingText{font-size:1.4em;color:#fff;color:rgba(255,255,255,0.9)}.slbArrows{position:fixed;top:50%;left:0;right:0}.slbLoading .slbArrows{display:none}.slbArrow{position:absolute;top:50%;margin-top:-5em;width:5em;height:10em;opacity:0.7;text-indent:-999em;overflow:hidden}.slbArrow:before{content:"";position:absolute;top:50%;left:50%;margin:-.8em 0 0 -.8em;border:.8em solid transparent}.slbArrow.next{right:0}.slbArrow.next:before{border-left-color:#fff}.slbArrow.prev{left:0}.slbArrow.prev:before{border-right-color:#fff}.slbIframeCont{width:80em;height:0;overflow:hidden;padding-top:56.25%;margin:5em 0}.slbIframe{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-shadow:0 0.2em 1em rgba(0,0,0,0.6);box-shadow:0 0.2em 1em rgba(0,0,0,0.6);background:#000}@-webkit-keyframes slbOverlay{from{opacity:0}to{opacity:0.7}}@keyframes slbOverlay{from{opacity:0}to{opacity:0.7}}@-webkit-keyframes slbEnter{from{opacity:0;-webkit-transform:translate3d(0, -1em, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0)}}@keyframes slbEnter{from{opacity:0;-webkit-transform:translate3d(0, -1em, 0);-ms-transform:translate3d(0, -1em, 0);transform:translate3d(0, -1em, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slbEnterNext{from{opacity:0;-webkit-transform:translate3d(4em, 0, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0)}}@keyframes slbEnterNext{from{opacity:0;-webkit-transform:translate3d(4em, 0, 0);-ms-transform:translate3d(4em, 0, 0);transform:translate3d(4em, 0, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slbEnterPrev{from{opacity:0;-webkit-transform:translate3d(-4em, 0, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0)}}@keyframes slbEnterPrev{from{opacity:0;-webkit-transform:translate3d(-4em, 0, 0);-ms-transform:translate3d(-4em, 0, 0);transform:translate3d(-4em, 0, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}\n',""])},242:function(t,e,n){var i=n(279);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4).default)("fae2dc4a",i,!0,{})},278:function(t,e,n){"use strict";var i=n(242);n.n(i).a},279:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.fileAttachment[data-v-25c46922] {\n  display: block;\n  position: relative;\n  padding: 0.5em;\n  padding-right: 4em;\n  overflow: hidden;\n  background-color: #fff;\n  border: 1px solid #dddddd;\n  border-radius: 0.3em;\n}\n.mediaContainer[data-v-25c46922] {\n  width: 7em;\n  height: 5.25em;\n  line-height: 5.25em;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 1.5em;\n  position: relative;\n  background-color: #f5f5f5;\n  border-radius: 0.3em;\n  text-align: center;\n}\n.mediaContainer > img[data-v-25c46922] {\n    max-width: 7em;\n    max-height: 5.25em;\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 0.3em;\n}\n.zoomInBtn[data-v-25c46922] {\n  -webkit-transition: opacity 0.3s;\n  -o-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -2em 0 0 -2em;\n  width: 4em;\n  height: 4em;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 50%;\n  opacity: 0;\n  color: #fff;\n}\n.zoomInBtn[data-v-25c46922]:before {\n    font-size: 1.3em;\n}\n.mediaContainer:hover > .zoomInBtn[data-v-25c46922] {\n  opacity: 1;\n}\n.placeholderImage[data-v-25c46922] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: #666666;\n}\n.placeholderImage[data-v-25c46922]:before {\n    font-size: 1.8em;\n}\n.placeholderImage.large[data-v-25c46922]:before {\n    font-size: 3em;\n}\n.placeholderImage.interactive[data-v-25c46922] {\n    cursor: pointer;\n}\n.textControls[data-v-25c46922] {\n  font-size: 1.7em;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  max-width: 50%;\n  color: #666666;\n  cursor: pointer;\n}\n.openBtn[data-v-25c46922]:hover, .fileUploadHandle[data-v-25c46922]:hover {\n  color: #303030;\n}\n.fileUploadHandle[data-v-25c46922] {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.fileName[data-v-25c46922] {\n  display: block;\n  font-size: 0.82353em;\n  margin-top: 0.35714em;\n  opacity: 0.5;\n}\n.removeBtn[data-v-25c46922], .downloadBtn[data-v-25c46922] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 3.5em;\n  height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-left: 1px solid #E5E5E5;\n  color: #b7b7b7;\n}\n.removeBtn[data-v-25c46922]:hover, .downloadBtn[data-v-25c46922]:hover {\n    color: #919191;\n}\n.removeBtn[data-v-25c46922]:before, .downloadBtn[data-v-25c46922]:before {\n    font-size: 1.8em;\n}\n@media screen and (min-width: 61.3125em) {\n.mediaContainer[data-v-25c46922] {\n      width: 12em;\n      height: 9em;\n      line-height: 9em;\n}\n.mediaContainer > img[data-v-25c46922] {\n        max-width: 12em;\n        max-height: 9em;\n}\n}\n@media screen and (min-width: 68.8125em) {\n.textControls[data-v-25c46922] {\n      max-width: 70%;\n}\n}\n",""])},324:function(t,e,n){"use strict";n.r(e);var i=n(9),o=n(2),s=n(10),a=n(229),r=n.n(a),l=n(19),c=n(224),d=n.n(c),m=(n(225),{elementType:"fileAttachment",components:{ElementWrapper:s.a},mixins:[i.a],props:{value:{},acceptedFiles:{type:String},maxFileSize:{type:Number},mapThumbnailTo:{type:String},mapCurrentFileUrlTo:{type:String},addFileCaption:{type:String,default:function(){return Object(o.a)("formElements.fileAttachment.addFileCaption")}},changeFileCaption:{type:String,default:function(){return Object(o.a)("formElements.fileAttachment.changeFileCaption")}}},data:function(){return{savesFile:!0,clientThumbnail:void 0,selectedFile:void 0}},computed:{thumbnailUrl:function(){return this.clientThumbnail?this.clientThumbnail:!this.selectedFile&&this.mapThumbnailTo?this.resourceModel.get(this.mapThumbnailTo):void 0},fileUrl:function(){return this.selectedFile?void 0:this.mapCurrentFileUrlTo?this.resourceModel.get(this.mapCurrentFileUrlTo):void 0},selectedFileName:function(){return this.selectedFile&&this.selectedFile.name},textControlCaption:function(){return this.selectedFile||this.fileUrl?this.changeFileCaption:this.addFileCaption}},mounted:function(){this.setupFileInput()},beforeDestroy:function(){this.lightbox&&this.lightbox.destroy(),this.dropzone&&(this.dropzone.removeAllFiles(),this.dropzone.disable(),this.dropzone.destroy())},methods:{setupFileInput:function(){var t=this;(this.dropzone=new r.a(this.$refs.inputWrapper,{url:"/dummy-upload-url",acceptedFiles:this.acceptedFiles,maxFilesize:this.maxFileSize,clickable:!0,maxFiles:1,uploadMultiple:!1,createImageThumbnails:!0,autoProcessQueue:!1,autoDiscover:!1,thumbnailWidth:800,thumbnailHeight:800,thumbnailMethod:"contain",previewsContainer:document.createElement("div")})).on("addedfile",function(e){t.clientThumbnail=void 0,t.selectedFile=e}).on("thumbnail",function(e,n){e===t.selectedFile&&(t.clientThumbnail=n)}).on("error",function(e,n){Object(l.a)({message:n,acceptText:Object(o.a)("prompt.continueText"),acceptOnly:!0,parent:t}),t.removeSelectedFile()})},getFile:function(){return this.selectedFile},openFileDialog:function(){this.dropzone.hiddenFileInput.click()},zoomImage:function(){var t=this;this.lightbox&&this.lightbox.destroy(),this.lightbox=d.a.open({items:[this.clientThumbnail||this.fileUrl],beforeDestroy:function(){delete t.lightbox}})},removeSelectedFile:function(){this.selectedFile=this.clientThumbnail=void 0,this.dropzone.removeAllFiles()}}}),h=(n(278),n(1)),p=Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("element-wrapper",t._b({attrs:{renderInputWrapper:!1}},"element-wrapper",t.elementWrapperProps,!1),[n("div",t._b({ref:"inputWrapper"},"div",t.inputWrapperAttributes,!1),[n("div",{staticClass:"mediaContainer"},[t.thumbnailUrl?[n("img",{attrs:{src:t.thumbnailUrl}}),t._v(" "),n("button",{staticClass:"nBtn icr zoomInBtn iconMaximize",attrs:{type:"button"},on:{click:t.zoomImage}})]:n("button",{class:[{"iconFile large":t.selectedFile||t.fileUrl,iconPlus:!t.selectedFile&&!t.fileUrl},"nBtn fileUploadClickable placeholderImage icr"],attrs:{type:"button"},on:{click:t.openFileDialog}})],2),t._v(" "),n("div",{staticClass:"textControls"},[n("span",{staticClass:"fileUploadHandle",on:{click:t.openFileDialog}},[t._v("\n                "+t._s(t.textControlCaption)+"\n                "),t.selectedFileName?n("span",{staticClass:"fileName"},[t._v(t._s(t.selectedFileName))]):t._e()])]),t._v(" "),t.fileUrl&&!t.selectedFile?n("a",{staticClass:"downloadBtn nBtn icr iconDownload",attrs:{href:t.fileUrl,target:"_blank"}}):t._e(),t._v(" "),t.selectedFile?n("button",{staticClass:"removeBtn nBtn icr iconRotateCcw",attrs:{type:"button"},on:{click:t.removeSelectedFile}}):t._e()])])},[],!1,null,"25c46922",null);p.options.__file="fileAttachment.vue";e.default=p.exports}}]);
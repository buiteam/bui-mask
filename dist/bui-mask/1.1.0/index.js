define("bui-mask/1.1.0/index",["bui-common/1.1.0/common","bui-mask/1.1.0/src/mask","bui-mask/1.1.0/src/loadmask"],function(s,e,i){var a=(s("bui-common/1.1.0/common"),s("bui-mask/1.1.0/src/mask"));a.LoadMask=s("bui-mask/1.1.0/src/loadmask"),i.exports=a}),define("bui-mask/1.1.0/src/mask",["bui-common/1.1.0/common"],function(s,e,i){var a=s("bui-common/1.1.0/common"),o=a.namespace("Mask"),n=a.UA,m=a.prefix+"ext-mask",t=m+"-msg";a.mix(o,{maskElement:function(s,e,i){var o=$(s),d=o.children("."+m),c=null,l=null,r=null,u=null;if(!d.length&&(d=$('<div class="'+m+'"></div>').appendTo(o),o.addClass("x-masked-relative x-masked"),"body"==s?6==n.ie?d.height(a.docHeight()):d.css("position","fixed"):6===n.ie&&d.height(o.height()),e)){c=['<div class="'+t+'"><div>',e,"</div></div>"].join(""),l=$(c).appendTo(o),i&&l.addClass(i);try{"body"==s&&6!=n.ie?(r="50%",u="50%",l.css("position","fixed")):(r=(d.height()-l.height())/2,u=(d.width()-l.width())/2),l.css({left:u,top:r})}catch(h){a.log("mask error occurred")}}return d},unmaskElement:function(s){var e=$(s),i=e.children("."+t),a=e.children("."+m);i&&i.remove(),a&&a.remove(),e.removeClass("x-masked-relative x-masked")}}),i.exports=o}),define("bui-mask/1.1.0/src/loadmask",["bui-mask/1.1.0/src/mask","bui-common/1.1.0/common"],function(s,e,i){function a(s){var e=this;a.superclass.constructor.call(e,s)}var o=s("bui-mask/1.1.0/src/mask");BUI.extend(a,BUI.Base),a.ATTRS={el:{},msg:{value:"Loading..."},msgCls:{value:"x-mask-loading"},disabled:{value:!1}},BUI.augment(a,{disable:function(){this.set("disabled",!0)},onLoad:function(){o.unmaskElement(this.get("el"))},onBeforeLoad:function(){var s=this;s.get("disabled")||o.maskElement(s.get("el"),s.get("msg"),this.get("msgCls"))},show:function(){this.onBeforeLoad()},hide:function(){this.onLoad()},destroy:function(){this.hide(),this.clearAttrVals(),this.off()}}),i.exports=a});
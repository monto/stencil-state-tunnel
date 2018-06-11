/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=r[2&s[0]?"return":s[0]?"throw":"next"])&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[0,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};StencilStateTunnel.loadBundle("paepjhdj",["exports"],function(e){var t=window.StencilStateTunnel.h;function n(e,n){return t("context-consumer",{subscribe:e,renderer:n})}var r=function(e,r){void 0===r&&(r=n);var i=new Map,s=e;function a(e,t){Array.isArray(e)?e.slice().forEach(function(e){t[e]=s[e]}):t[e]=Object.assign({},s),t.forceUpdate()}function o(e){return function(t){i.has(t)||(i.set(t,e),a(e,t))}}function c(e,t){return o(t)(e),function(){i.delete(e)}}return{Provider:function(e){var t=e.state,n=e.children;return s=t,i.forEach(a),n},Consumer:function(e){var t=e.children;return r(c,t[0])},wrapConsumer:function(e,n){var r=e.is;return function(e){var i=e.children,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n}(e,["children"]);return t(r,Object.assign({ref:o(n)},s),i)}},injectProps:function(e,t){var n=null,r=Object.keys(e.properties).find(function(t){return 1==e.properties[t].elementRef});if(void 0==r)throw new Error("Please ensure that your Component "+e.is+' has an attribtue with "@Element" decorator. This is required to be able to inject properties.');var i=e.prototype.componentWillLoad;e.prototype.componentWillLoad=function(){if(n=c(this[r],t),i)return i.bind(this)()};var s=e.prototype.componentDidUnload;e.prototype.componentDidUnload=function(){if(n(),s)return s.bind(this)()}}}}({messageLog:[],sendMessage:function(){return Promise.resolve()},getReceiverList:function(){return Promise.resolve([])},availableReceivers:[],creatingMessage:!1,setCreatingMessage:function(){}},function(e,n){return t("context-consumer",{subscribe:e,renderer:n})});var i=function(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function o(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,o)}c((r=r.apply(e,t||[])).next())})},s=function(){function e(){var e=this;this.availableReceivers=[],this.messageLog=[],this.creatingMessage=!1,this.sendMessage=function(t,n){return i(e,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return[4,function(e,t){return Promise.resolve({id:(1e17*Math.random()).toString().match(/.{4}/g).join("-"),timeStamp:new Date,message:e,recipients:t})}(t,n)];case 1:return e=r.sent(),this.messageLog=this.messageLog.concat([e]),[2]}})})},this.getReceiverList=function(){return i(e,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return this.availableReceivers.length>0?[2,this.availableReceivers]:(e=this,[4,Promise.resolve([{id:"1",name:"George Washington"},{id:"2",name:"John Adams"},{id:"3",name:"Thomas Jefferson"},{id:"4",name:"James Madison"},{id:"5",name:"James Monroe"},{id:"6",name:"John Quincy Adams"}])]);case 1:return[2,e.availableReceivers=t.sent()]}})})},this.setCreatingMessage=function(t){e.creatingMessage=t}}return e.prototype.render=function(){var e=this,n={messageLog:this.messageLog,sendMessage:this.sendMessage,getReceiverList:this.getReceiverList,availableReceivers:this.availableReceivers,creatingMessage:this.creatingMessage,setCreatingMessage:this.setCreatingMessage};return t(r.Provider,{state:n},t("header",null,this.creatingMessage?null:t("button",{onClick:function(){e.creatingMessage=!0}},"Create Message"),t("h1",null,"Message Demo App")),this.creatingMessage?t("demo-create-message",{sendMessage:this.sendMessage}):t("demo-message-log",null))},Object.defineProperty(e,"is",{get:function(){return"demo-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{availableReceivers:{state:!0},creatingMessage:{state:!0},messageLog:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"demo-app{display:block;width:700px;margin:0 auto}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){var e=this;this.availableRecipients=[],this.selectedReceiverIds=[],this.sendToMessageQueue=function(t){if(t.preventDefault(),e.errorText=null,0!==e.selectedReceiverIds.length)if(""!==e.input.value){var n=e.availableRecipients.filter(function(t){return-1!==e.selectedReceiverIds.indexOf(t.id)});e.sendMessage(e.input.value,n),e.setCreatingMessage(!1)}else e.errorText="Message cannot be empty";else e.errorText="A message must have at least one receiver."},this.updateRecipientList=function(){e.selectedReceiverIds=Array.from(e.select.querySelectorAll("option")).filter(function(e){return e.selected}).map(function(e){return e.value})},this.cancelMessage=function(t){t.preventDefault(),e.setCreatingMessage(!1)}}return e.prototype.componentWillLoad=function(){return e=this,t=void 0,r=function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=this,[4,this.getReceiverList()];case 1:return e.availableRecipients=t.sent(),[2]}})},new((n=void 0)||(n=Promise))(function(i,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function o(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,o)}c((r=r.apply(e,t||[])).next())});var e,t,n,r},e.prototype.render=function(){var e=this;return t("form",{onSubmit:this.sendToMessageQueue},null!=this.errorText?t("p",{class:"error"},this.errorText):null,t("label",null,"Recipients:",t("select",{multiple:!0,ref:function(t){return e.select=t},onChange:this.updateRecipientList},this.availableRecipients.map(function(e){return t("option",{value:e.id},e.name)}))),t("br",null),t("label",null,"Message Text:",t("input",{ref:function(t){return e.input=t},type:"text"})),t("div",null,t("input",{type:"submit",value:"Send message"}),t("a",{href:"#",onClick:this.cancelMessage},"Cancel")))},Object.defineProperty(e,"is",{get:function(){return"demo-create-message"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{availableRecipients:{state:!0},el:{elementRef:!0},errorText:{state:!0},getReceiverList:{type:"Any",attr:"get-receiver-list"},sendMessage:{type:"Any",attr:"send-message"},setCreatingMessage:{type:"Any",attr:"set-creating-message"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".error{color:red}"},enumerable:!0,configurable:!0}),e}();r.injectProps(a,["sendMessage","getReceiverList","creatingMessage","setCreatingMessage"]);var o=function(){function e(){}return e.prototype.render=function(){return t(r.Consumer,null,function(e){var n=e.messageLog;return t("div",null,0===n.length?t("p",null,"No messages sent."):t("ul",{class:"msg-list"},n.sort(function(e,t){return t.timeStamp.getTime()-e.timeStamp.getTime()}).map(function(e){return t("li",{key:e.id},t("span",{class:"row-desc"},"To:")," ",e.recipients.map(function(e){return e.name}).join(", "),t("br",null),t("span",{class:"row-desc"},"Time:")," ",(r=(n=e.timeStamp).getHours(),i=n.getMinutes(),s=n.getSeconds(),[0===r?"12":r>12?r-12:r,i<10?"0"+i:i,s<10?"0"+s:s].join(":")+" "+(r>12?"pm":"am")),t("br",null),t("span",{class:"row-desc"},"Text:")," ",e.message,t("br",null));var n,r,i,s})))})},Object.defineProperty(e,"is",{get:function(){return"demo-message-log"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ul.msg-list{list-style:none;padding-left:10px}ul.msg-list li{padding:10px 0}.row-desc{display:inline-block;font-weight:700;width:45px}"},enumerable:!0,configurable:!0}),e}();e.DemoApp=s,e.DemoCreateMessage=a,e.DemoMessageLog=o,Object.defineProperty(e,"__esModule",{value:!0})});
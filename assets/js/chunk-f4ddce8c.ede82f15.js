(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4ddce8c"],{"71ee":function(e,t,a){"use strict";a("d8ae")},b45f:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),o=Object(n["K"])("data-v-44627b54");Object(n["u"])("data-v-44627b54");var s={class:"content"},c=Object(n["h"])("img",{class:"image",src:"/assets/img/image.community.svg",alt:"community"},null,-1),i={class:"email part"},l={class:"sm-title"},m={key:0},r={key:1},u={class:"inner clearfix"},d={class:"half"},b={class:"form-group message"},j={for:"communityMessage"},p=Object(n["h"])("span",{class:"color-point"}," *",-1),O={class:"float-right"},h={class:"half"},g={class:"name form-group"},f={for:"communityName"},y={class:"email form-group"},v={for:"communityEmailFrom"},k=Object(n["h"])("span",{class:"color-point"}," *",-1),w={class:"email form-group"},E={for:"communityEmailTo"},A=Object(n["h"])("input",{type:"email",class:"form-control focus-border-pointer",id:"communityEmailTo",placeholder:"name@example.com",value:"africalibrary21@gmail.com",readonly:""},null,-1),x={class:"satisfaction form-group"},S={for:"communitySatisfaction"},C=Object(n["h"])("span",{class:"color-point"}," *",-1),z={class:"float-right"},q={class:"icons row"},F={class:"col text-right"},I={class:"col text-center"},M={class:"col"},J={class:"action"},N={key:0},T={key:1},K={class:"comment part"},V={class:"sm-title"};Object(n["s"])();var R=o((function(e,t,a,o,R,U){var _=Object(n["y"])("Comment");return Object(n["r"])(),Object(n["d"])("div",{class:"component-community",size:a.size},[Object(n["h"])("div",s,[c,Object(n["h"])("div",i,[Object(n["h"])("div",l,Object(n["A"])("ko"===o.store.state.site.lang?"이메일":"Email"),1),"ko"===o.store.state.site.lang?(Object(n["r"])(),Object(n["d"])("div",m,"이메일을 통해 문의사항을 보내주시면 발신 메일로 답변드리겠습니다.")):(Object(n["r"])(),Object(n["d"])("div",r,"Send us your inquiry via e-mail and we will respond.")),Object(n["h"])("div",u,[Object(n["h"])("div",d,[Object(n["h"])("div",b,[Object(n["h"])("label",j,[Object(n["h"])("span",null,Object(n["A"])("ko"===o.store.state.site.lang?"내용":"Message"),1),p,Object(n["h"])("span",O,"("+Object(n["A"])(o.state.community.message.length)+" / 1000)",1)]),Object(n["h"])("textarea",{class:"form-control focus-border-pointer",id:"communityMessage",placeholder:"Hey! It's cool!",onInput:t[1]||(t[1]=function(e){return o.state.community.message=e.target.value}),disabled:!o.state.loaded},null,40,["disabled"])])]),Object(n["h"])("div",h,[Object(n["h"])("div",g,[Object(n["h"])("label",f,Object(n["A"])("ko"===o.store.state.site.lang?"이름":"Name"),1),Object(n["I"])(Object(n["h"])("input",{type:"text",class:"form-control focus-border-pointer",id:"communityName",placeholder:"James","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.state.community.name=e}),onKeyup:t[3]||(t[3]=Object(n["J"])((function(e){return o.send()}),["enter"])),disabled:!o.state.loaded},null,40,["disabled"]),[[n["E"],o.state.community.name]])]),Object(n["h"])("div",y,[Object(n["h"])("label",v,[Object(n["h"])("span",null,Object(n["A"])("ko"===o.store.state.site.lang?"발신 메일":"Sender Email"),1),k]),Object(n["I"])(Object(n["h"])("input",{type:"email",class:"form-control focus-border-pointer",id:"communityEmailFrom",placeholder:"name@example.com","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.state.community.email=e}),onKeyup:t[5]||(t[5]=Object(n["J"])((function(e){return o.send()}),["enter"])),disabled:!o.state.loaded},null,40,["disabled"]),[[n["E"],o.state.community.email]])]),Object(n["h"])("div",w,[Object(n["h"])("label",E,[Object(n["h"])("span",null,Object(n["A"])("ko"===o.store.state.site.lang?"수신 메일":"Recipient Email "),1)]),A]),Object(n["h"])("div",x,[Object(n["h"])("label",S,[Object(n["h"])("span",null,Object(n["A"])("ko"===o.store.state.site.lang?"서비스 평가":"Satisfaction"),1),C,Object(n["h"])("span",z,Object(n["A"])(o.state.community.comment),1)]),Object(n["h"])("div",q,[Object(n["h"])("div",F,[Object(n["h"])("i",{class:["fa fa-frown-o",{"active color-point":"1"===o.state.community.point,disabled:!o.state.loaded}],onClick:t[6]||(t[6]=function(e){return o.point("1")})},null,2)]),Object(n["h"])("div",I,[Object(n["h"])("i",{class:["fa fa-meh-o",{"active color-point":"2"===o.state.community.point,disabled:!o.state.loaded}],onClick:t[7]||(t[7]=function(e){return o.point("2")})},null,2)]),Object(n["h"])("div",M,[Object(n["h"])("i",{class:["fa fa-smile-o",{"active color-point":"3"===o.state.community.point,disabled:!o.state.loaded}],onClick:t[8]||(t[8]=function(e){return o.point("3")})},null,2)])])]),Object(n["h"])("div",J,[Object(n["h"])("button",{class:"btn btn-point",onClick:t[9]||(t[9]=function(e){return o.send()}),disabled:!o.state.loaded},["ko"===o.store.state.site.lang?(Object(n["r"])(),Object(n["d"])("span",N,Object(n["A"])("발송 ".concat(o.state.loaded?"":"중...")),1)):(Object(n["r"])(),Object(n["d"])("span",T,Object(n["A"])("Send".concat(o.state.loaded?"":"ing...")),1))],8,["disabled"])])])])]),Object(n["h"])("div",K,[Object(n["h"])("div",V,Object(n["A"])("ko"===o.store.state.site.lang?"코멘트":"Comments"),1),Object(n["h"])("p",null,Object(n["A"])("ko"===o.store.state.site.lang?"프로그램에 대한 의견을 남겨주시면, 내용을 검토하여 프로그램을 적용하겠습니다.":"Leave a comment about the program, we will review and apply the program."),1),Object(n["h"])(_,{size:a.size},null,8,["size"])])])],8,["size"])})),U=(a("7db0"),a("a1e9")),_=a("5c40"),B=a("82d0"),H=a("2f66"),L=a("5502"),P=a("4ea3"),W=a("89d4"),D={props:{callback:Function,load:Function,size:String},components:{Comment:P["default"]},setup:function(e){var t=Object(L["b"])(),a=Object(U["j"])({community:{name:"",email:"",message:"",point:"3",comment:Object(_["d"])((function(){return"3"===a.community.point?"It's Cool":"2"===a.community.point?"Not bad":"Bad"}))},loaded:!0}),n=Object(U["k"])(null),o=W.navs.find((function(e){return"community"===e.name})),s=function(e){a.loaded&&(a.community.point=e)},c=function(){a.loaded&&(a.community.message?a.community.email?B["a"].isValidEmail(a.community.email)?a.community.message.length>1e3?B["a"].message.show("warning","ko"===t.state.site.lang?"메시지는 1000자를 넘을 수 없습니다.":"Messages cannot exceed 1000 characters."):a.community.name&&a.community.name.length>50?B["a"].message.show("warning","ko"===t.state.site.lang?"이름은 50자를 넘을 수 없습니다.":"Name cannot exceed 50 characters"):a.community.email.length>100?B["a"].message.show("warning","ko"===t.state.site.lang?"이메일 주소는 100자를 넘을 수 없습니다.":"E-mail addresses cannot exceed 100 characters."):confirm("ko"===t.state.site.lang?"이메일을 발송하시겠습니까?":"Would you like to send an email?")&&(a.loaded=!1,H["a"].post("/api/email",a.community).then((function(){B["a"].message.show("success","ko"===t.state.site.lang?"이메일을 발송하였습니다.":"Email has been sent"),a.loaded=!0,a.community.name="",a.community.email="",a.community.message="",a.community.point="3",document.querySelector("#communityMessage").value=""})).catch((function(){B["a"].message.show("error","ko"===t.state.site.lang?"오류가 있습니다.":"There is an error."),a.loaded=!0}))):(B["a"].message.show("warning","ko"===t.state.site.lang?"이메일 주소가 올바르지 않습니다.":"The email address is invalid."),document.querySelector("#communityEmailFrom").focus()):(B["a"].message.show("warning","ko"===t.state.site.lang?"이메일 주소를 입력해주세요.":"Email address is required."),document.querySelector("#communityEmailFrom").focus()):(B["a"].message.show("warning","ko"===t.state.site.lang?"내용을 입력해주세요.":"Please enter your message."),document.querySelector("#communityMessage").focus()))};return t.state.account.login&&(a.community.email=t.state.account.email),Object(_["v"])((function(){"function"===typeof e.load&&e.load(n.value)})),{store:t,state:a,lnbRef:n,nav:o,point:s,send:c}}};a("71ee");D.render=R,D.__scopeId="data-v-44627b54";t["default"]=D},d8ae:function(e,t,a){}}]);
//# sourceMappingURL=chunk-f4ddce8c.ede82f15.js.map
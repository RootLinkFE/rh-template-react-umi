(self.webpackChunkrh_template_umi=self.webpackChunkrh_template_umi||[]).push([[531],{44286:function(S){S.exports={footer:"footer___EYp7z"}},34687:function(S){S.exports={container:"container___1sYa-",bg:"bg___2A28Q",imgWrapper:"imgWrapper___1fM-J",header:"header___5xZ3f",left:"left___2D-Sr",right:"right___27Q9W",title:"title___1-xuF",content:"content___2zk1-",main:"main___x4OjT",loginTitle:"loginTitle___2Y8Cs"}},84709:function(S,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return q}});var ne=e(77111),M=e(49194),y=e(52663),A=e(68699),D=e(44742),re=e(12966),Q=e(43732),U=e(94043),h=e.n(U),W=e(56858),Y=e(44286),b=e.n(Y),t=e(85893),O=function(){return(0,t.jsxs)("div",{"data-inspector-line":"6","data-inspector-column":"4","data-inspector-relative-path":"src/components/Footer/index.tsx",className:b().footer,children:[(0,t.jsxs)("div",{"data-inspector-line":"7","data-inspector-column":"6","data-inspector-relative-path":"src/components/Footer/index.tsx",children:["Copyright ",(0,t.jsx)(W.Z,{"data-inspector-line":"8","data-inspector-column":"18","data-inspector-relative-path":"src/components/Footer/index.tsx"})," 2018-2021 RootHub. All rights reserved. RootHub \u7248\u6743\u6240\u6709"]}),(0,t.jsx)("div",{"data-inspector-line":"11","data-inspector-column":"6","data-inspector-relative-path":"src/components/Footer/index.tsx",children:"\u7CA4ICP\u59071000xxx72\u53F7-1\u53F7-1"})]})},T=e(25471),w=e(43542),z=e(90933),se=e(9948),ie=function(a){return urlReg.test(a)},oe=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,g=arguments.length>2?arguments[2]:void 0,s=a[r],m=a[g],d=[];return a.forEach(function(v,p){p===r?d.push(m):p===g?d.push(s):d.push(v)}),d},ue=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},a)})},K=function(){return window.location.hostname==="preview.pro.ant.design"},le=function(){var a="production";return a==="development"?!0:K()},G=function(a){return[void 0,null,""].includes(a)},ce=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:16,g=arguments.length>2?arguments[2]:void 0,s="",m=g||{},d=m.unit,v=m.array,p=m.maxLength,C=m.fillString;if(G(a)||(s=Number.isNaN(Number(a))?"":Number(a).toString(r)),p&&(s=s.padStart(p,C)),v)return s.split("");if(d&&s){if(r===16)return"0x".concat(s);if(r===2)return"0b".concat(s)}return s},R="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCW3fQpZiXmj7+OnwtvtxYA353AEqW9LA2TvCqWNNdMRtaEIgbmV6qYQE+Osy/M0J+tdRwazA4DWKt8qPkcKUKPynMiTWIGePMHj8J6DCnqP2zmOo5QRQN2YMVLC0cA2bOiZt84Loc+sYctTZAdWKukf1+SzZe+aYS/Snw73mxA7QIDAQAB",I=new z.Z({});I.setPublicKey(R);var $=I,de=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"YYYY-MM-DD HH:mm:ss";return a?dayjs(a).format(r):""},H=e(61306),B=e(62925),F=e(67294),x=e(27052),N=e(87748),J=e(40999),V=e(34687),i=e.n(V),X=function(a){var r=a.content;return(0,t.jsx)(Q.Z,{"data-inspector-line":"21","data-inspector-column":"2","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{marginBottom:24},message:r,type:"error",showIcon:!0})},P=function(){!x.m8||setTimeout(function(){var a=x.m8.location.query,r=a,g=r.redirect;x.m8.push(g||"/")},10)},k=function(){var a=(0,F.useState)(!1),r=(0,D.Z)(a,2),g=r[0],s=r[1],m=(0,F.useState)({}),d=(0,D.Z)(m,2),v=d[0],p=d[1],C=(0,x.tT)("base.user"),_=C.userLogin,E=(0,x.tT)("@@initialState"),L=E.initialState,ee=E.setInitialState;(0,F.useEffect)(function(){var c,o=((c=window)===null||c===void 0?void 0:c.localStorage.getItem(w.b))||J.t[0];window.less.modifyVars({"primary-color":o})},[]);var te=function(){var c=(0,A.Z)(h().mark(function o(){var u,f;return h().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L==null||(u=L.fetchUserInfo)===null||u===void 0?void 0:u.call(L);case 2:f=n.sent,f&&ee((0,y.Z)((0,y.Z)({},L),{},{currentUser:f}));case 4:case"end":return n.stop()}},o)}));return function(){return c.apply(this,arguments)}}(),ae=function(){var c=(0,A.Z)(h().mark(function o(u){var f;return h().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.prev=1,n.next=4,_((0,y.Z)((0,y.Z)({},u),{},{password:$.encrypt(u.password)||""}));case 4:return f=n.sent,(0,T.$e)(f),p({status:"success",msg:""}),n.next=9,te();case 9:P(),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),p({status:"fail",msg:(n.t0===null||n.t0===void 0?void 0:n.t0.message)||""});case 15:s(!1),(0,T.$e)({expireTime:3471264e6,firstLogin:!0,token:"eyJ0eXAiOiJKV1QiLCJhbGc"}),p({status:"success",msg:""}),P();case 19:case"end":return n.stop()}},o,null,[[1,12]])}));return function(u){return c.apply(this,arguments)}}();return(0,t.jsxs)("div",{"data-inspector-line":"104","data-inspector-column":"4","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().container,children:[(0,t.jsxs)("div",{"data-inspector-line":"105","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().header,children:[(0,t.jsx)("div",{"data-inspector-line":"106","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().left,children:(0,t.jsxs)(N.rU,{"data-inspector-line":"107","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",to:"/",children:[(0,t.jsx)("img",{"data-inspector-line":"108","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",alt:"logo",className:i().logo,src:"/logo.svg",width:32}),(0,t.jsx)(M.Z,{"data-inspector-line":"114","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",type:"vertical"}),(0,t.jsx)("span",{"data-inspector-line":"115","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().title,children:"RootHub Scaffold"})]})}),(0,t.jsxs)("div",{"data-inspector-line":"118","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().right,children:[(0,t.jsx)(N.rU,{"data-inspector-line":"119","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",to:"/",children:"\u6CE8\u518C\u8D26\u53F7"}),(0,t.jsx)(N.rU,{"data-inspector-line":"120","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",to:"/",children:"\u5E2E\u52A9\u4E2D\u5FC3"})]})]}),(0,t.jsxs)("div",{"data-inspector-line":"123","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().content,children:[(0,t.jsx)("div",{"data-inspector-line":"124","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().imgWrapper,children:(0,t.jsx)("img",{"data-inspector-line":"125","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",alt:"logo",className:i().bg,src:"/bgimg.png"})}),(0,t.jsxs)("div",{"data-inspector-line":"127","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().main,children:[(0,t.jsx)("div",{"data-inspector-line":"128","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:i().loginTitle,children:"\u8D26\u53F7\u767B\u5F55"}),(0,t.jsxs)(H.ZP,{"data-inspector-line":"129","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",onFinish:function(){var c=(0,A.Z)(h().mark(function o(u){return h().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:ae(u);case 1:case"end":return j.stop()}},o)}));return function(o){return c.apply(this,arguments)}}(),submitter:{searchConfig:{submitText:"\u767B \u5F55"},render:function(o,u){return u.pop()},submitButtonProps:{loading:g,size:"large",style:{width:"100%",fontSize:"14px"}}},children:[v.status==="fail"&&v.msg!==void 0&&(0,t.jsx)(X,{"data-inspector-line":"150","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",content:v.msg}),(0,t.jsx)(B.Z,{"data-inspector-line":"152","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"mobile",label:"\u624B\u673A\u53F7\u7801",fieldProps:{size:"large",maxLength:11},placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801(\u968F\u610F\u624B\u673A)",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"},{pattern:/^1[3-9]\d{9}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\u683C\u5F0F!"}]}),(0,t.jsx)(B.Z.Password,{"data-inspector-line":"171","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",label:"\u5BC6\u7801",name:"password",fieldProps:{size:"large"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801(\u968F\u610F)"})]}),(0,t.jsx)("a",{"data-inspector-line":"186","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{float:"right",marginTop:"12px",fontSize:"12px"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})]}),(0,t.jsx)(O,{"data-inspector-line":"197","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx"})]})},q=k}}]);

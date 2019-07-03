(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(43)},43:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(15),o=t.n(i),c=t(4),s=t(5),l=t(7),u=t(6),m=t(8),d=t(2),f=t(1);function p(){var e=Object(d.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: 'Montserrat', sans-serif;\n        display: flex;\n        justify-content: center;\n        background-color: #f9fbfd;\n    }\n    html {\n        box-sizing: border-box;\n    }\n    *, *::before, *::after {\n        box-sizing: inherit;\n    }\n"]);return p=function(){return e},e}var h=Object(f.b)(p()),b=t(9),g=t(13),v=t.n(g),E=t(18),x=t(19),y={colors:{maingreen:"#00e1bb",white:"#ffffff",black:"#000000",verylightgray:"#cfd5e1",lightgray:"#afbcd6",lightborder:"#edf5ff",lightnavy:"#f6faff",deepnavy:"#8fa1c6",light:"#edf5ff",darknavy:"#354b77",lightpink:"#fcebf1",intensivepink:"#e34079"},shadows:{lightshadow:"0 0 5px 2px rgba(0, 0, 0, 0.05)"}};function k(){var e=Object(d.a)(["\n  color: ",";\n"]);return k=function(){return e},e}function j(){var e=Object(d.a)(["\n  font-size: 1.6rem;\n"]);return j=function(){return e},e}var O=f.c.h1(j()),w=f.c.p(k(),function(e){return e.theme.colors.maingreen});function S(){var e=Object(d.a)(["\n  height: 40px;\n  width: 40px;\n  border: none;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  position: relative;\n\n  &:after {\n    content: 'x';\n    font-size: 1.5rem;\n    color: ",";\n  }\n\n  @media only screen and (max-width: 800px) {\n    height: 35px;\n    width: 35px;\n\n    &:after {\n      font-size: 1rem;\n    }\n  }\n"]);return S=function(){return e},e}function A(){var e=Object(d.a)(["\n  margin-top: ",";\n  margin-right: ",";\n  ","\n  \n\n  color: ",";\n  border: none;\n  border-radius: 20px;\n  font-size: 1.2rem;\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return A=function(){return e},e}var C=f.c.button(A(),function(e){return e.Sort?"0":"35px"},function(e){return e.Sort?"10px":"0"},function(e){var n=e.disabled,t=e.theme;return!n&&"\n    background:  ".concat(t.colors.maingreen,";\n  ")},function(e){return e.theme.colors.white}),z=f.c.button(S(),function(e){return e.theme.colors.lightnavy},function(e){return e.theme.colors.deepnavy});function I(){var e=Object(d.a)(["\n  position: relative;\n  display: flex;\n  font-size: 0.8rem;\n  align-items: center;\n  margin-left: 25px;\n  padding: 0 5px;\n  color: ",";\n  background-color: ",";\n\n  &::before {\n    position: absolute;\n    left: -6px;\n    content: '';\n    border-style: solid;\n    border-width: 5px 6px 5px 0;\n    border-color: transparent ","\n      transparent transparent;\n  }\n"]);return I=function(){return e},e}function N(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return N=function(){return e},e}function B(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return e},e}f.c.div(B());var U=f.c.form(N()),F=f.c.div(I(),function(e){return e.theme.colors.intensivepink},function(e){return e.theme.colors.lightpink},function(e){return e.theme.colors.lightpink});function L(){var e=Object(d.a)(["\n  margin-top: 25px;\n  color: ",";\n  font-size: 0.9rem;\n"]);return L=function(){return e},e}function Z(){var e=Object(d.a)(["\n  display: flex;\n"]);return Z=function(){return e},e}function P(){var e=Object(d.a)(["\n  padding: 15px 0 5px 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid ",";\n"]);return P=function(){return e},e}var T=f.c.input(P(),function(e){return e.theme.colors.verylightgray}),D=f.c.div(Z()),J=f.c.label(L(),function(e){return e.theme.colors.lightgray});function $(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 25px 0;\n  padding: 10px;\n  background-color: #ffffff;\n  box-shadow: ",";\n\n  @media (min-width: 1000px) {\n    min-width: 800px;\n    padding: 50px;\n  }\n"]);return $=function(){return e},e}var q=f.c.div($(),function(e){return e.theme.shadows.lightshadow});function M(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n\n  @media only screen and (max-width: 900px) {\n    font-size: 0.8rem;\n  }\n\n  @media only screen and (max-width: 700px) {\n    font-size: 0.7rem;\n  }\n"]);return M=function(){return e},e}function V(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return V=function(){return e},e}function Y(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  padding: 5px 0;\n  ","\n"]);return Y=function(){return e},e}function G(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  padding: 10px 10px;\n"]);return G=function(){return e},e}function H(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  background: ",";\n  font-size: 1rem;\n  padding: 10px 10px;\n  color: ",";\n"]);return H=function(){return e},e}function K(){var e=Object(d.a)(["\n  width: 100%;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  border: 1px solid ",";\n  padding: 25px 5px;\n  margin-top: 35px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media only screen and (min-width: 1000px) {\n    padding: 25px;\n  }\n"]);return Q=function(){return e},e}var R=f.c.div(Q(),function(e){return e.theme.colors.lightborder}),W=f.c.table(K()),X=f.c.thead(H(),function(e){return e.theme.colors.lightnavy},function(e){return e.theme.colors.deepnavy}),_=f.c.tbody(G()),ee=f.c.tr(Y(),function(e){var n=e.heading,t=e.theme;return!n&&"\n    border-bottom: 2px solid ".concat(t.colors.light,";\n  ")}),ne=f.c.th(V()),te=f.c.td(M(),function(e){return e.theme.colors.deepnavy});function re(){var e=Object(d.a)(["\n  height: 50px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  padding: 0 5px;\n  margin: 0 10px;\n"]);return re=function(){return e},e}function ae(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n"]);return ae=function(){return e},e}var ie=f.c.div(ae()),oe=f.c.select(re()),ce=function(e){var n,t,r,i=e.nickname,o=e.email,c=e.ipadress,s=e.onSubmit,l=e.onChange,u=e.nickNameError,m=e.emailError,d=e.ipAdressError,f=e.isEnabled;return u&&(r=a.a.createElement(F,null,u)),d&&(n=a.a.createElement(F,null,d)),m&&(t=a.a.createElement(F,null,m)),a.a.createElement(U,{onSubmit:s,autoComplete:"off",noValidate:!0},a.a.createElement(J,{htmlFor:"nickname"},"Nickname"),a.a.createElement(D,null,a.a.createElement(T,{type:"text",id:"nickname",name:"nickname",value:i,onChange:l}),r),a.a.createElement(J,{htmlFor:"email"},"Email"),a.a.createElement(D,null,a.a.createElement(T,{type:"email",id:"email",name:"email",email:o,onChange:l}),t),a.a.createElement(J,{htmlFor:"ipadress"},"IP adress"),a.a.createElement(D,null,a.a.createElement(T,{type:"text",id:"ipadress",name:"ipadress",ipadress:c,onChange:l}),n),a.a.createElement(C,{type:"submit",disabled:!f},"Add User"))},se=t(20),le=t.n(se),ue=function(e){var n=e.nickname,t=e.email,r=e.ipadress,i=e.removeItem;return a.a.createElement(ee,null,a.a.createElement(te,null,n),a.a.createElement(te,null,t),a.a.createElement(te,null,r,a.a.createElement(z,{onClick:function(){return i(n)},type:"button"})))},me=function(e){var n=e.changeSort,t=e.sortBy,r=e.sortList;return a.a.createElement(ie,null,a.a.createElement(w,null,"Sort by:"),a.a.createElement(oe,{onChange:n},a.a.createElement("option",{value:"nickname-asc","data-sorttype":"asc"},"Nickname - A-Z"),a.a.createElement("option",{value:"nickname-dsc","data-sorttype":"dsc"},"Nickname - Z-A"),a.a.createElement("option",{value:"email-asc","data-sorttype":"asc"},"Email - A-Z"),a.a.createElement("option",{value:"email-dsc","data-sorttype":"dsc"},"Email - Z-A")),a.a.createElement(C,{onClick:function(){return r(t)},Sort:!0},"Sort"))},de=function(e){var n,t=e.users,r=e.removeItem,i=e.deleteUsers,o=e.sortList,c=e.sortBy,s=e.changeSort;return 0!==t.length&&(n=a.a.createElement(C,{type:"button",onClick:function(){return window.confirm("Are you sure u want to delete?")&&i()}},"Delete Users")),a.a.createElement(a.a.Fragment,null,a.a.createElement(me,{changeSort:s,sortBy:c,sortList:o}),a.a.createElement(R,null,a.a.createElement(W,null,a.a.createElement(X,null,a.a.createElement(ee,{heading:!0},a.a.createElement(ne,null,"Nickname"),a.a.createElement(ne,null,"E-mail"),a.a.createElement(ne,null,"Ip Adress"))),a.a.createElement(_,null,t.map(function(e){return a.a.createElement(ue,{key:le.a.generate(),nickname:e.nickname,email:e.email,ipadress:e.ipadress,removeItem:r})}))),n))},fe=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},pe=function(e){return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(e)},he=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={isEnabled:!1,nickname:"",email:"",ipadress:"",nickNameError:"",emailError:"",ipAdressError:"",users:[],sortBy:"nickname",sortType:"asc"},t.validateForm=function(){var e="".nickNameError,n="".emailError,r="".ipAdressError,a=t.state,i=a.nickname,o=a.email,c=a.ipadress;return(""===i||i.length>24)&&(e="Please, provide nickname"),i.length>24&&(e="Your nickname cannot be longer then 24 characters"),""===c&&(r="Please, provide Ip"),fe(o)||(n="Please, provide valid Email"),pe(c)||(r="Please, provide valid IpAdress"),!(e||n||r)||(t.setState({nickNameError:e,emailError:n,ipAdressError:r}),!1)},t.onChange=function(){var e=Object(x.a)(v.a.mark(function e(n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState(Object(E.a)({},n.target.name,n.target.value));case 2:t.canBeSubmitted();case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.checkIfExsists=function(e){var n=t.state,r=n.nickname,a=n.email,i=!0;return e.map(function(e){r===e.nickname&&(i=!1,alert("User with this nickname already exsists.")),a===e.email&&(i=!1,alert("User with this email already exsists."))}),i},t.removeItem=function(e){var n=t.state.users,r=Object(b.a)(n);t.setState({users:r.filter(function(n){return n.nickname!==e})})},t.addUser=function(e){var n=t.state.users,r=Object(b.a)(n);r.push(e),t.setState({users:r,nickname:"",email:"",ipadress:"",nickNameError:"",emailError:"",ipAdressError:"",sortBy:"",sortType:"",isEnabled:!1})},t.deleteUsers=function(){t.setState({users:[]})},t.onSubmit=function(e){e.preventDefault();var n=t.state,r=n.nickname,a=n.email,i=n.ipadress,o=n.users,c=t.validateForm();t.checkIfExsists(o)&&c&&(t.addUser({nickname:r,email:a,ipadress:i}),e.target.reset())},t.changeSort=function(e){var n=e.target.value.split("-");t.setState({sortBy:n[0],sortType:n[1]})},t.sortList=function(e){var n,r=t.state,a=r.users,i=r.sortType,o=Object(b.a)(a);"asc"===i?o.sort((n=e,function(e,t){return e[n]===t[n]?0:e[n]<t[n]?-1:1})):o.sort(function(e){return function(n,t){return n[e]===t[e]?0:n[e]>t[e]?-1:1}}(e)),t.setState({users:o})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"canBeSubmitted",value:function(){var e=this.state,n=e.nickname,t=e.email,r=e.ipadress;fe(t)&&pe(r)&&n?this.setState({isEnabled:!0,ipAdressError:""}):(this.validateForm(),this.setState({isEnabled:!1}))}},{key:"render",value:function(){var e=this.state,n=e.nickname,t=e.email,r=e.ipadress,i=e.nickNameError,o=e.emailError,c=e.ipAdressError,s=e.isEnabled,l=e.users,u=e.sortBy;return a.a.createElement(f.a,{theme:y},a.a.createElement(q,null,a.a.createElement(O,null,"Crypto users"),a.a.createElement(ce,{nickname:n,email:t,ipadress:r,onChange:this.onChange,onSubmit:this.onSubmit,nickNameError:i,emailError:o,ipAdressError:c,isEnabled:s}),a.a.createElement(de,{users:l,removeItem:this.removeItem,deleteUsers:this.deleteUsers,sortList:this.sortList,sortBy:u,changeSort:this.changeSort})))}}]),n}(a.a.Component),be=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(he,null))}}]),n}(a.a.Component);o.a.render(a.a.createElement(be,null),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.064322fb.chunk.js.map
(this.webpackJsonpcms=this.webpackJsonpcms||[]).push([[0],{121:function(e,a){},140:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),m=(t(69),t(70),t(11)),u=t(63),i=t(20),o=Object(n.createContext)(),s=o.Provider,E=(e,a)=>{switch(a.type){case"STORE_RESULTS":return Object(i.a)(Object(i.a)({},e),{},{posts:a.postsDb});case"ADD_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:[...e.posts,a.post]});case"SET_CURRENT_POST":return Object(i.a)(Object(i.a)({},e),{},{currentPost:a.currentPst});default:return e}},p=e=>{e.value;var a=Object(u.a)(e,["value"]),t=Object(n.useReducer)(E,{posts:[],currentPost:{}}),r=Object(m.a)(t,2),c=r[0],i=r[1];return l.a.createElement(s,Object.assign({value:[c,i]},a))},d=()=>Object(n.useContext)(o),g=t(15),h=t(6),b=t(9),f=t(26);var v=function(){return l.a.createElement(f.a,{id:"nav",expand:"lg"},l.a.createElement(f.a.Brand,null,l.a.createElement(g.b,{to:"/",className:"navbar-brand"},l.a.createElement("img",{src:t(75),alt:"logotype - free the captives logo",height:"57px"}))),l.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(b.a,{id:"nav-group"},l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/"},"Home")),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/about"},"About")),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/our-work"},"Our Work")),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/take-action"},"Take Action")),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/about"},"Contact Us")),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/blog"},"Blog")),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{href:"/blog-editor"},"Edit")))))},O=t(10),w=t(7);var S=function(){return l.a.createElement(O.a,{className:"enewsletter-bar"},l.a.createElement(w.a,null,l.a.createElement("h6",null,"Get The Latest Updates"),l.a.createElement("input",{placeholder:"First Name"}),l.a.createElement("input",{placeholder:"Last Name"}),l.a.createElement("input",{placeholder:"Email Address"}),l.a.createElement("button",null,"Sign Up"),l.a.createElement(g.b,{to:"/signup"},l.a.createElement("button",{className:"button-login"},"Portal"))))},k=t(22);var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{className:"feature-section"},l.a.createElement(w.a,null,l.a.createElement("div",{className:"feature-image"},l.a.createElement("img",{src:t(79)})),l.a.createElement("h3",null,"Get Educated on the \x03Core Issues of Human Trafficking"),l.a.createElement("h4",null,"Houston Human Trafficking Conference"),l.a.createElement("p",null,"Do you want the latest information and updates on human trafficking in Houston? Come to Free the Captives\u2019 10th Annual Houston Human Trafficking Conference! This is a fantastic opportunity to learn about human trafficking from the experts and how you can get involved in fighting this horrific crime."),l.a.createElement("button",{class:"bx"},"Read More"))))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{id:"homepage"},l.a.createElement(k.a,{fluid:!0},l.a.createElement("section",{id:"mission-section"},l.a.createElement(O.a,{className:"mission-statement"},l.a.createElement(w.a,null,l.a.createElement("h1",null,"\u2014 Free The Captives Mission \u2014"),l.a.createElement("p",null,"We rescue and restore teenaged sex trafficking victims by working with law enforcement and providing rescued victims with support groups, mentoring, jobs, material assistance, \x03and other direct services."),l.a.createElement("button",{class:"bx"},"Learn More")))),l.a.createElement("div",{id:"mission-image"}),l.a.createElement("section",{id:"awareness-section"},l.a.createElement(O.a,{className:"awareness-statement"},l.a.createElement(w.a,null,l.a.createElement("h2",null,"Human Sex Trafficking in Houston"),l.a.createElement("p",null,"The average age of girls being trafficked is between the ages \x03of 12 to 14 years old. We also engage and mobilize volunteers from the community while partnering with non-profits and government agencies in the fight against modern day slavery, you can join us in the fight against human slavery."),l.a.createElement("button",{class:"bx"},"Fight Slavery")))),l.a.createElement(j,null),l.a.createElement(j,null),l.a.createElement(j,null))))};var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{id:"about",className:"container"}))},y=t(19),C=t.n(y),P=function(e){return C.a.post("/api/post",e)},N=function(){return C.a.get("/api/post")},L=function(e){return C.a.get("/api/post/"+e)},U=t(23),R=t.n(U);var I=function(){var e=d(),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(()=>{N().then(e=>{r({type:"STORE_RESULTS",postsDb:e.data})}).catch(e=>console.log(e))},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{className:"blog-snippet page-padded"},l.a.createElement(w.a,null,t.posts.map(e=>l.a.createElement("div",{key:e._id,className:"result-div"},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,R()(e.post.substring(0,1e3))," [...]"),l.a.createElement(g.b,{to:"/api/post/"+e._id},l.a.createElement("button",{class:"bx"},"Read More")))))))};var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{className:"banner-image"},l.a.createElement(w.a,null,l.a.createElement("h1",null,"Blog"))),l.a.createElement(I,null))};var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{id:"blog"},l.a.createElement(k.a,{fluid:!0},l.a.createElement(F,null))))},D=t(62);var A=function(){var e=Object(n.useRef)(),a=d(),t=Object(m.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)(()=>{N().then(e=>{c({type:"STORE_RESULTS",postsDb:e.data})}).catch(e=>console.log(e))},[]),l.a.createElement("main",{className:"blog-editor page-padded"},r.posts.map(e=>l.a.createElement("div",{key:e._id,className:"result-div"},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,R()(e.post.substring(0,1e3))," [...]"))),l.a.createElement("form",null,l.a.createElement("hr",null),l.a.createElement("h2",null,"Create a Blog Post"),l.a.createElement("h3",null,"Enter information below"),l.a.createElement("input",{name:"Title",placeholder:"Title",ref:e}),l.a.createElement(D.a,{apiKey:"26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1",init:{height:500,menubar:!1},onSubmit:function(a){a.preventDefault();var t=a.target[1].value;P({title:e.current.value,post:t}).then(e=>{c({type:"ADD_POST",post:e.data})}).catch(e=>console.log(e))}}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))};var H=function(){var e=d(),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(h.f)().id;return Object(n.useEffect)(()=>{L(c).then(e=>{r({type:"SET_CURRENT_POST",currentPst:e.data})})}),l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{id:"blog-post",class:"page-padded"},l.a.createElement(k.a,{fluid:!0},l.a.createElement("h1",null,t.currentPost.title),l.a.createElement("p",null,R()(t.currentPost.post)),l.a.createElement(g.b,{to:"/blog"},"Back to Archives"))))};var B=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),u=Object(m.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(""),E=Object(m.a)(s,2),p=E[0],d=E[1],g=Object(n.useState)(""),h=Object(m.a)(g,2),b=h[0],f=h[1],v=Object(n.useState)(null),O=Object(m.a)(v,2),w=O[0],S=O[1];return l.a.createElement("main",{className:"login-page page-padded"},l.a.createElement("h1",null,"Sign Up"),l.a.createElement("div",null,l.a.createElement("label",null,"Username: "),l.a.createElement("input",{placeholder:"username",onChange:e=>r(e.target.value)})),l.a.createElement("div",null,l.a.createElement("label",null,"Password: "),l.a.createElement("input",{placeholder:"password",onChange:e=>o(e.target.value)})),l.a.createElement("button",{onClick:()=>{C()({method:"POST",data:{username:t,password:i},withCredentials:!0,url:"/api/user/register"}).then(e=>console.log(e))},class:"bx"},"Submit"),l.a.createElement("hr",null),l.a.createElement("h1",null,"Login"),l.a.createElement("div",null,l.a.createElement("label",null,"Username: "),l.a.createElement("input",{placeholder:"username",onChange:e=>d(e.target.value)})),l.a.createElement("div",null,l.a.createElement("label",null,"Password: "),l.a.createElement("input",{placeholder:"password",onChange:e=>f(e.target.value)})),l.a.createElement("button",{onClick:()=>{C()({method:"POST",data:{username:p,password:b},withCredentials:!0,url:"/api/user/login"}).then(e=>console.log(e))},class:"bx"},"Submit"),l.a.createElement("div",null,l.a.createElement("h1",null,"Get User"),l.a.createElement("button",{onClick:()=>{C()({method:"GET",withCredentials:!0,url:"/api/user/user"}).then(e=>{S(e.data),console.log(e.data)})},class:"bx"},"Submit"),w?l.a.createElement("h1",null,"Welcome Back ",w.username):null))};var M=function(){return l.a.createElement("main",{className:"login-page page-padded"},l.a.createElement("h1",null,"Login"),l.a.createElement("form",{method:"POST",action:"/api/user/login",className:"login"},l.a.createElement("div",null,l.a.createElement("label",{for:"exampleInputUser"},"Username: "),l.a.createElement("input",{name:"username",type:"username",id:"user-input",placeholder:"Username"})),l.a.createElement("div",null,l.a.createElement("label",{for:"exampleInputEmail"},"Email: "),l.a.createElement("input",{name:"email",type:"email",id:"email-input",placeholder:"Email"})),l.a.createElement("div",null,l.a.createElement("label",{for:"exampleInputPassword"},"Password: "),l.a.createElement("input",{name:"password",type:"password",id:"password-input",placeholder:"Password"})),l.a.createElement("button",{class:"bx"},"Submit")))};var W=function(){return l.a.createElement(O.a,{id:"footer"},l.a.createElement(w.a,null,l.a.createElement("h4",null,"About Us"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu cursus diam, sed ullamcorper enim. Phasellus congue facilisis congue. Donec et euismod quam. Sed et ligula in lectus vulputate consequat. Nulla congue lacus elit, sed imperdiet ipsum fringilla posuere. Phasellus vel pharetra.")),l.a.createElement(w.a,null,l.a.createElement("h4",null,"Quick Links"),l.a.createElement("ul",null,l.a.createElement("li",null,"Consectetur Adipiscing Elit"),l.a.createElement("li",null,"Lorem Ipsum Dolor"),l.a.createElement("li",null,"Mattis Sed Arcu"),l.a.createElement("li",null,"Risus Pellentesque Posuere"))),l.a.createElement(w.a,null,l.a.createElement("h4",null,"Social Feed")))};var G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,l.a.createElement(p,null,l.a.createElement(S,null),l.a.createElement(v,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(x,null),l.a.createElement(W,null)),l.a.createElement(h.a,{exact:!0,path:"/about"},l.a.createElement(T,null),l.a.createElement(W,null)),l.a.createElement(h.a,{exact:!0,path:"/blog"},l.a.createElement(_,null),l.a.createElement(W,null)),l.a.createElement(h.a,{exact:!0,path:"/blog-editor"},l.a.createElement(A,null),l.a.createElement(W,null)),l.a.createElement(h.a,{exact:!0,path:"/api/post/:id"},l.a.createElement(H,null),l.a.createElement(W,null)),l.a.createElement(h.a,{exact:!0,path:"/signup"},l.a.createElement(B,null),l.a.createElement(W,null)),l.a.createElement(h.a,{exact:!0,path:"/login"},l.a.createElement(M,null),l.a.createElement(W,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(139);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},64:function(e,a,t){e.exports=t(140)},69:function(e,a,t){},70:function(e,a,t){},75:function(e,a,t){e.exports=t.p+"static/media/free-the-captives-logo.92b340de.png"},79:function(e,a,t){e.exports=t.p+"static/media/Conference-in-color-Skyline-IG-2020.4f4c4c83.png"}},[[64,1,2]]]);
//# sourceMappingURL=main.22752887.chunk.js.map
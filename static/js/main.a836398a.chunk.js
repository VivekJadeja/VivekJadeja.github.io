(this["webpackJsonpvivek-jadeja-site"]=this["webpackJsonpvivek-jadeja-site"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);a(70),a(71),a(72);var n=a(0),l=a.n(n),r=a(33),i=a.n(r),c=(a(77),a(7)),s=a(13),m=a(10),o=a(9),u=a(31),d=a(5),h=(a(78),a(34)),E=a(22),g=a(27),v={color:"rgba(0, 0, 0, 0.5)",textDecoration:"none",":hover":{textDecoration:"none",color:"rgba(0,0,0,0.7)"}},p=function(){return l.a.createElement(h.a,{collapseOnSelect:!0,className:"border-bottom",expand:"lg"}," ",l.a.createElement(g.LinkContainer,{to:"/"},l.a.createElement(h.a.Brand,null,"Vivek Jadeja")),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"responsive-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(E.a,{className:"ml-auto",style:{alignItems:"flex-end"}},l.a.createElement(g.LinkContainer,{className:"nav-link",to:"/"},l.a.createElement(E.a.Link,null,"Home")),l.a.createElement(g.LinkContainer,{className:"nav-link",to:"/about"},l.a.createElement(E.a.Link,null,"About")),l.a.createElement(g.LinkContainer,{className:"nav-link",to:"/gallery"},l.a.createElement(E.a.Link,null,"Gallery")),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{style:v,target:"_blank",href:"mailto:vivek.jadeja98@gmail.com"},"Contact Me")))))},f=a(25),b=a(32),y=a(26);var k=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(b.a,{className:"border-top justify-content-between p-3"},l.a.createElement(y.a,{className:"p-0",md:3,sm:12},"Vivek Jadeja"),l.a.createElement(y.a,{className:"p-0 d-flex justify-content-end",md:3},l.a.createElement("p",null,"Copyright \xa9 2020 - Vivek Jadeja. All Rights Reserved.")))))},w=a(107);var N=function(e){return l.a.createElement(w.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center py-5"},l.a.createElement(y.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},S=a(29),C=a(49);var j=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return l.a.createElement(C.a.div,{className:"v-card-info",style:t},l.a.createElement("p",{className:"v-card-title"},e.title),e.isPage?l.a.createElement(g.LinkContainer,{className:"v-card-subTitle",to:e.link,target:"_blank",rel:"noopnener noreferrer"},l.a.createElement(E.a.Link,null,e.subTitle)):l.a.createElement("a",{className:"v-card-subTitle",href:e.link,target:"_blank",rel:"noopnener noreferrer"},e.subTitle))},x=a(108);var T=function(e){return l.a.createElement(y.a,{xs:12,md:4},l.a.createElement("div",{className:"d-inline-block v-card",onClick:function(t){return e.click(e.item)}},l.a.createElement(x.a,null,l.a.createElement(x.a.Img,{src:e.item.imgSrc,alt:e.item.imgSrc})),e.item.selected&&l.a.createElement(j,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,isPage:e.item.isPage})))},L=a(8),O=a.n(L),I=a(18),M=a.n(I),J=a(19),P=a.n(J),F=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(S.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(T,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"My Resume",subTitle:"Check Out The Things I've Done",imgSrc:O.a,link:"https://drive.google.com/file/d/1g2BljiclQTPYgcfRSAHuYae_8pL-cKpF/view?usp=sharing",selected:!1,isPage:!1},{id:1,title:"My GitHub",subTitle:"Check Out Some Code I've Written",imgSrc:M.a,link:"https://github.com/vivekjadeja",selected:!1,isPage:!1},{id:2,title:"Culinary Skills",subTitle:"Check Out The Food I've Made",imgSrc:P.a,link:"/gallery",selected:!1,isPage:!0}]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(b.a,null,this.makeItems(this.state.items)))}}]),a}(l.a.Component);var R=function(e){return l.a.createElement("div",null,l.a.createElement(N,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(F,null))};var A=function(e){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(y.a,{md:8},e.children)))};var G=function(e){var t=e.title;return l.a.createElement("div",null,l.a.createElement(N,{title:t}),l.a.createElement(A,null,l.a.createElement("p",{className:"display-4 font-weight-light"},"A lot, actually!"),l.a.createElement("p",null,"Hello, my name is Vivek. I am a senior Computer Science student at the University of Houston. My primary area of interest is software engineering."),l.a.createElement("p",null,"I am currently seeking a full-time software engineering position to begin my career. I have experience with a multitude of programming languages including C++, Python, JavaScript, HTML, CSS, and R. My passion for learning has led me to gain experience with ReactJS, ExpressJS, and NodeJS. I am also experienced with RDBMS's such as MySQL and SQLite."),l.a.createElement("p",null,"In my off-time, I enjoy ",l.a.createElement("a",{href:"https://github.com/vivekjadeja",target:"_blank",rel:"noopnener noreferrer"},"creating new projects"),", going on road-trips, and ",l.a.createElement(u.Link,{to:"/gallery"},"cooking/baking"),".")))},B=a(28),H=a(11),V=a(68),D=a(67),_=a.n(D),W=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e);var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(B.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),_.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={firstName:"",lastName:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,{title:this.props.title}),l.a.createElement(A,null,l.a.createElement(H.a,{onSubmit:this.handleSubmit},l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"first-name"},"First Name"),l.a.createElement(H.a.Control,{id:"first-name",name:"firstName",type:"text",value:this.state.firstName,onChange:this.handleChange})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"last-name"},"Last Name"),l.a.createElement(H.a.Control,{id:"last-name",name:"lastName",type:"text",value:this.state.lastName,onChange:this.handleChange})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"email"},"E-Mail"),l.a.createElement(H.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(H.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(V.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent!"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component);a(103);var Q=function(e){var t=e.title;return l.a.createElement("div",null,l.a.createElement(N,{title:t}),l.a.createElement("div",null,l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"column"},l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}})),l.a.createElement("div",{className:"column"},l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}})),l.a.createElement("div",{className:"column"},l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}})),l.a.createElement("div",{className:"column"},l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}}),l.a.createElement("img",{src:P.a,style:{width:"100%"}}),l.a.createElement("img",{src:M.a,style:{width:"100%"}}),l.a.createElement("img",{src:O.a,style:{width:"100%"}})))))},K=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Vivek Jadeja",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Gallery",path:"/gallery"}],home:{title:"Vivek Jadeja",subTitle:"Software Engineer. Baker. Adventurer.",text:"Always Learning"},about:{title:"What's There To Know?"},gallery:{title:"Culinary Skills"},contact:{title:"Send Me A Message"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.BrowserRouter,null,l.a.createElement(p,null),l.a.createElement(d.g,null,l.a.createElement(d.d,{path:"/",exact:!0,render:function(){return l.a.createElement(R,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.d,{path:"/about",render:function(){return l.a.createElement(G,{title:e.state.about.title})}}),l.a.createElement(d.d,{path:"/gallery",render:function(){return l.a.createElement(Q,{title:e.state.gallery.title})}}),l.a.createElement(d.d,{path:"/contact",render:function(){return l.a.createElement(W,{title:e.state.contact.title})}}),l.a.createElement(d.d,{component:function(){return l.a.createElement("div",null,"Not Found")}})),l.a.createElement(k,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104);i.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports=a.p+"static/media/ghubPic.59a6979d.png"},19:function(e,t,a){e.exports=a.p+"static/media/FoodPic.ba0420e0.JPEG"},69:function(e,t,a){e.exports=a(105)},77:function(e,t,a){},78:function(e,t,a){},8:function(e,t,a){e.exports=a.p+"static/media/ResumeSS.df5284a0.png"}},[[69,1,2]]]);
//# sourceMappingURL=main.a836398a.chunk.js.map
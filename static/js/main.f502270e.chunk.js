(this["webpackJsonpvivek-jadeja-site"]=this["webpackJsonpvivek-jadeja-site"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),c=(a(75),a(7)),s=a(12),m=a(9),o=a(8),u=a(34),d=a(5),h=(a(76),a(30)),E=a(19),g=a(24),p={color:"rgba(0, 0, 0, 0.5)",textDecoration:"none",":hover":{textDecoration:"none",color:"rgba(0,0,0,0.7)"}},f=function(){return l.a.createElement(h.a,{collapseOnSelect:!0,className:"border-bottom",expand:"lg"}," ",l.a.createElement(g.LinkContainer,{to:"/"},l.a.createElement(h.a.Brand,null,"Vivek Jadeja")),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"responsive-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(E.a,{className:"ml-auto",style:{alignItems:"flex-end"}},l.a.createElement(g.LinkContainer,{className:"nav-link",to:"/"},l.a.createElement(E.a.Link,null,"Home")),l.a.createElement(g.LinkContainer,{className:"nav-link",to:"/about"},l.a.createElement(E.a.Link,null,"About")),l.a.createElement(g.LinkContainer,{className:"nav-link",to:"/gallery"},l.a.createElement(E.a.Link,null,"Gallery")),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{style:p,target:"_blank",href:"mailto:vivek.jadeja98@gmail.com"},"Contact Me")))))},v=a(22),b=a(28),k=a(23);var y=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(v.a,{fluid:!0},l.a.createElement(b.a,{className:"border-top justify-content-between p-3"},l.a.createElement(k.a,{className:"p-0",md:3,sm:12},"Vivek Jadeja"),l.a.createElement(k.a,{className:"p-0 d-flex justify-content-end",md:3},l.a.createElement("p",null,"Copyright \xa9 2020 - Vivek Jadeja. All Rights Reserved.")))))},S=a(104);var j=function(e){return l.a.createElement(S.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(v.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center py-5"},l.a.createElement(k.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},C=a(26),N=a(47);var x=function(e){var t=Object(N.b)({opacity:1,from:{opacity:0}});return l.a.createElement(N.a.div,{className:"v-card-info",style:t},l.a.createElement("p",{className:"v-card-title"},e.title),e.isPage?l.a.createElement(g.LinkContainer,{className:"v-card-subTitle",to:e.link,target:"_blank",rel:"noopnener noreferrer"},l.a.createElement(E.a.Link,null,e.subTitle)):l.a.createElement("a",{className:"v-card-subTitle",href:e.link,target:"_blank",rel:"noopnener noreferrer"},e.subTitle))},w=a(105);var T=function(e){return l.a.createElement(k.a,{xs:12,md:4},l.a.createElement("div",{className:"d-inline-block v-card",onClick:function(t){return e.click(e.item)}},l.a.createElement(w.a,null,l.a.createElement(w.a.Img,{src:e.item.imgSrc,alt:e.item.imgSrc})),e.item.selected&&l.a.createElement(x,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,isPage:e.item.isPage})))},L=a(65),O=a.n(L),M=a(66),I=a.n(M),J=a(67),P=a.n(J),R=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(C.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(T,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"My Resume",subTitle:"Check Out The Things I've Done",imgSrc:O.a,link:"https://drive.google.com/file/d/1g2BljiclQTPYgcfRSAHuYae_8pL-cKpF/view?usp=sharing",selected:!1,isPage:!1},{id:1,title:"My GitHub",subTitle:"Check Out Some Code I've Written",imgSrc:I.a,link:"https://github.com/vivekjadeja",selected:!1,isPage:!1},{id:2,title:"My Recipes",subTitle:"Check Out The Food I've Made",imgSrc:P.a,link:"/gallery",selected:!1,isPage:!0}]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(b.a,null,this.makeItems(this.state.items)))}}]),a}(l.a.Component);var F=function(e){return l.a.createElement("div",null,l.a.createElement(j,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(R,null))};var G=function(e){return l.a.createElement(v.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(k.a,{md:8},e.children)))};var A=function(e){var t=e.title;return l.a.createElement("div",null,l.a.createElement(j,{title:t}),l.a.createElement(G,null,l.a.createElement("p",{className:"display-4 font-weight-light"},"A lot, actually!"),l.a.createElement("p",null,"Hello, my name is Vivek. I am a senior Computer Science student at the University of Houston. My primary area of interest is software engineering."),l.a.createElement("p",null,"I am currently seeking a full-time software engineering position to begin my career. I have experience with a multitude of programming languages including C++, Python, JavaScript, HTML, CSS, and R. My passion for learning has led me to gain experience with ReactJS, ExpressJS, and NodeJS. I am also experienced with RDBMS's such as MySQL and SQLite."),l.a.createElement("p",null,"In my off-time, I enjoy ",l.a.createElement("a",{href:"https://github.com/vivekjadeja"},"creating new projects"),", going on road-trips, and ",l.a.createElement("a",{href:"/gallery"},"baking"),".")))},B=a(25),H=a(10),V=a(69),D=a(68),W=a.n(D),_=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e);var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(B.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),W.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={firstName:"",lastName:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,{title:this.props.title}),l.a.createElement(G,null,l.a.createElement(H.a,{onSubmit:this.handleSubmit},l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"first-name"},"First Name"),l.a.createElement(H.a.Control,{id:"first-name",name:"firstName",type:"text",value:this.state.firstName,onChange:this.handleChange})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"last-name"},"Last Name"),l.a.createElement(H.a.Control,{id:"last-name",name:"lastName",type:"text",value:this.state.lastName,onChange:this.handleChange})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"email"},"E-Mail"),l.a.createElement(H.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(H.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(V.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent!"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component);var Q=function(e){return l.a.createElement("p",null,"GalleryPage Works!")},K=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Vivek Jadeja",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Gallery",path:"/gallery"}],home:{title:"Vivek Jadeja",subTitle:"Software Engineer. Baker. Adventurer.",text:"Always Learning"},about:{title:"What's There To Know?"},gallery:{title:"My Creations"},contact:{title:"Send Me A Message"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.BrowserRouter,null,l.a.createElement(f,null),l.a.createElement(d.g,null,l.a.createElement(d.d,{path:"/",exact:!0,render:function(){return l.a.createElement(F,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.d,{path:"/about",render:function(){return l.a.createElement(A,{title:e.state.about.title})}}),l.a.createElement(d.d,{path:"/gallery",render:function(){return l.a.createElement(Q,{title:e.state.gallery.title})}}),l.a.createElement(d.d,{path:"/contact",render:function(){return l.a.createElement(_,{title:e.state.contact.title})}}),l.a.createElement(d.d,{component:function(){return l.a.createElement("div",null,"Not Found")}})),l.a.createElement(y,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101);i.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a.p+"static/media/ResumeSS.df5284a0.png"},66:function(e,t,a){e.exports=a.p+"static/media/ghubPic.59a6979d.png"},67:function(e,t,a){e.exports=a.p+"static/media/FoodPic.ba0420e0.JPEG"},70:function(e,t,a){e.exports=a(102)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.f502270e.chunk.js.map
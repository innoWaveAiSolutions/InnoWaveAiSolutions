(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(2),i=s.n(a),n=s(5),o=s.n(n);s(15),s(16);function c(){const e=window.location.protocol,t=window.location.hostname,s=window.location.port,a=Object({NODE_ENV:"production",PUBLIC_URL:"/aiintegrations",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).dev;return"".concat(e,"//").concat(t,":").concat(a||s)}var r=s(23),l=s(26),d=s(0);class m extends a.Component{render(){return Object(d.jsxs)(l.a,{className:"bg-csu-canyon text-white font-weight-extrabold",children:["".concat(this.props.statusText," (").concat(this.props.statusCode,"): "),this.props.message]})}}var h=s.p+"static/media/laptop.a2c4e4af.jpeg";var j=function(e){return Object(d.jsx)("div",{className:"AboutMe",children:Object(d.jsxs)("div",{className:"AboutMe-container",children:[Object(d.jsx)("div",{className:"AboutMe-container-left",children:Object(d.jsxs)("div",{className:"AboutMe-container-left-content",children:[Object(d.jsx)("h2",{children:"AI-Integrations Revolutionizes Your Website"}),Object(d.jsx)("div",{children:"Hello! We are AI Integrations, a digital agency that focuses on everything related to AI. We can help you with integrating chatbots into your website, designing chatbots, analyzing large amounts of data using AI, and more."}),Object(d.jsx)("div",{className:"martop_2"}),Object(d.jsx)("a",{className:"btn2 btn2--white",id:"no_smooth_scroll",href:"#about-page",onClick:()=>(e.setAppPage("about"),(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"auto",block:"start"})})("about-page"),!1),children:"About Us"})]})}),Object(d.jsx)("div",{className:"AboutMe-container-right",children:Object(d.jsx)("div",{className:"AboutMe-container-right-content",style:{backgroundImage:"url("+h+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25rem"}})})]})})},b=s(7),u=s(9),g=s(10);var p=function(){return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)("a",{href:"https://www.instagram.com/ai.integrations.us/",target:"_blank",rel:"noreferrer",className:"AppFooter-instagram",children:Object(d.jsx)(b.a,{icon:u.a})}),Object(d.jsx)("a",{href:"mailto:ai.integrations.us@gmail.com",target:"_blank",rel:"noreferrer",className:"AppFooter-twitter",children:Object(d.jsx)(b.a,{icon:g.a})})]})},A=s.p+"static/media/logo.b6a9a77e.svg";var O=function(){return Object(d.jsxs)("div",{className:"App__header",children:[Object(d.jsx)("div",{className:"App__header-icons",children:Object(d.jsx)(p,{})}),Object(d.jsx)("div",{className:"App__header-authorName",children:Object(d.jsx)("div",{className:"App__header-authorName-logo",children:Object(d.jsx)("img",{className:"App__header-authorName-logo",src:A,alt:"Your SVG Image"})})})]})};var N=function(e){const[t,s]=Object(a.useState)(!1);return Object(d.jsx)("div",{className:"cards",children:Object(d.jsxs)("div",{className:"card"+(t?" show":""),onClick:e=>{s(!t)},children:[Object(d.jsx)("div",{className:"card__image-holder",style:{backgroundImage:"url("+e.src+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},alt:"wave"}),Object(d.jsxs)("div",{className:"card-title",children:[Object(d.jsxs)("a",{className:"toggle-info btn",href:"#",onClick:e=>{e.preventDefault()},children:[Object(d.jsx)("span",{className:"left"}),Object(d.jsx)("span",{className:"right"})]}),Object(d.jsxs)("h2",{children:[e.title,Object(d.jsx)("small",{children:e.subTitle})]})]}),Object(d.jsxs)("div",{className:"card-flap flap1",children:[Object(d.jsx)("div",{className:"card-description",children:e.description}),Object(d.jsx)("div",{className:"card-offerLink",children:Object(d.jsx)("a",{className:"btn",rel:"noreferrer",href:"#Contact",children:"Get Started"})})]})]})})},x=s.p+"static/media/Growth.107fd1e2.png",v=s.p+"static/media/Chatbot.e69850ed.png",f=s.p+"static/media/Partnership.a7ecd483.png",C=s.p+"static/media/Future.a8238f62.png";var Q=function(){return Object(d.jsxs)("div",{className:"Nft__card",children:[Object(d.jsx)("div",{className:"Nft__card-description",children:"Boost Your Business with AI Integrations"}),Object(d.jsxs)("div",{className:"Nft__card-component",children:[Object(d.jsx)(N,{title:"Empower Your Business",src:x,subTitle:"Leverage tailored AI for efficiency and growth",Href:"#AdditionalInformation-description"}),Object(d.jsx)(N,{title:"Innovative AI Chatbots",src:v,subTitle:"Experience unparalleled interaction",Href:"#AdditionalInformation-description"}),Object(d.jsx)(N,{title:"Partners in Progress",src:f,subTitle:"Dedicated to your journey",Href:"#AdditionalInformation-description"}),Object(d.jsx)(N,{title:"Shaping the Future",src:C,subTitle:"Innovation and excellence",Href:"#AdditionalInformation-description"})]}),Object(d.jsx)("a",{href:"#Contact",rel:"noreferrer",className:"btn2 btn2--green",children:"Contact Us"})]})};var w=function(){const[e,t]=Object(a.useState)({submitted:!1,success:!1});return Object(d.jsxs)("div",{className:"AdditionalInformation",children:[Object(d.jsx)("div",{className:"AdditionalInformation-description",id:"Contact",children:"Transform Your Business with Custom AI solutions tailored to you. Contact Us Today!"}),Object(d.jsxs)("form",{className:"AdditionalInformation-form",onSubmit:e=>{e.preventDefault(),t({submitted:!0,success:!1});const s=e.target,a=new FormData(s);fetch("https://formspree.io/f/xjvqzwdq",{method:"POST",body:a,headers:{Accept:"application/json"}}).then((e=>{e.ok?(t({submitted:!0,success:!0}),s.reset()):t({submitted:!0,success:!1})})).catch((()=>t({submitted:!0,success:!1})))},children:[Object(d.jsx)("label",{htmlFor:"name",className:"AdditionalInformation-name-label",children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",className:"AdditionalInformation-name"}),Object(d.jsx)("label",{htmlFor:"email",className:"AdditionalInformation-email-label",children:"Email:"}),Object(d.jsx)("input",{type:"email",name:"email",className:"AdditionalInformation-email"})," ",Object(d.jsx)("label",{htmlFor:"businessName",className:"AdditionalInformation-name-label",children:"Business Name:"}),Object(d.jsx)("input",{type:"text",name:"businessName",className:"AdditionalInformation-name"}),Object(d.jsx)("label",{htmlFor:"businessWebsite",className:"AdditionalInformation-email-label",children:"Business Website:"}),Object(d.jsx)("input",{type:"text",name:"businessWebsite",className:"AdditionalInformation-email"})," ",Object(d.jsx)("label",{htmlFor:"message",className:"AdditionalInformation-message-label",children:"Message:"}),Object(d.jsx)("textarea",{name:"message",onKeyUp:e=>{e.target.style.height="20px",e.target.style.height="".concat(e.target.scrollHeight,"px")},className:"AdditionalInformation-message"}),Object(d.jsx)("button",{type:"submit",className:"btn2 btn2--green",children:"Submit"}),e.submitted&&(e.success?Object(d.jsx)("div",{className:"UserSuccess",children:"Success, Email was sent!"}):Object(d.jsx)("div",{className:"UserError",children:"Error"}))]})]})};var P=function(){return Object(d.jsx)("div",{className:"AppFooter",children:Object(d.jsx)(p,{})})};var I=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(j,{setAppPage:e.setAppPage}),Object(d.jsx)(w,{}),Object(d.jsx)(P,{})]})};var E=e=>{let{target:t,followChar:s,followText:i}=e;const[n,o]=Object(a.useState)(0);return Object(a.useEffect)((()=>{let e=0;const s=t/100,a=()=>{e<t?(o(Math.ceil(e)),e+=s,requestAnimationFrame(a)):o(t)},i=()=>{const e=document.getElementById("counter");if(e){const t=e.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>=0&&!n&&a()}};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}}),[n,t]),Object(d.jsxs)("div",{className:"counter",id:"counter",children:[Object(d.jsx)("div",{className:"counter__text",children:"Over"}),n,s,Object(d.jsx)("div",{className:"counter__text",children:i})]})},G=s.p+"static/media/html.7d984b24.jpg",k=s.p+"static/media/css.5bd8c816.jpg",T=s.p+"static/media/bootstrap.ce6bb8b0.jpg",F=s.p+"static/media/java.2d20e68d.jpg",S=s.p+"static/media/AIIHeadAbout.543142aa.png";const W=(e,t)=>Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"about-page__technologies-component",style:{backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"5rem",width:"5rem"}})})});var B=function(e){return Object(a.useEffect)((()=>(e.scrollPosition>0?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"})),[e.scrollPosition]),Object(d.jsxs)("div",{className:"about-page",children:[Object(d.jsx)("div",{id:"About"}),Object(d.jsxs)("section",{className:"about-page__ted-talk-reference",id:"about-page",style:{backgroundImage:"linear-gradient(to right bottom, rgba(10, 30, 80, 0.6), rgba(50, 130, 200, 0.6), rgba(230, 180, 120, 0.6)), url(".concat(S,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[Object(d.jsx)("h2",{children:"How AI Could Empower Any Business | Dr. Andrew Ng | TED Talk"}),Object(d.jsx)("div",{className:"about-page__video-container",children:Object(d.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat("reUZRyXxUs4","?autoplay=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"about-page__video-container-iframe"})})]}),Object(d.jsxs)("div",{className:"about-page__team",children:[Object(d.jsxs)("section",{className:"about-page__team-team",children:[Object(d.jsx)("h2",{children:"Our Team"}),Object(d.jsx)("p",{className:"about-page__team-team-text",children:"AI Integrations was founded with a combined 15 years of experience in Computer Science. Our team has been helping businesses solve their technological challenges with website design, data encryption, proprietary software, custom chatbots, and more!"})]}),Object(d.jsxs)("section",{className:"about-page__team-mission",children:[Object(d.jsx)("h2",{children:"Our Mission"}),Object(d.jsx)("p",{className:"about-page__team-mission-text",children:"Our mission at AI Integrations is to help our clients stay ahead of the curve in an ever-changing digital world. We believe in the power of AI to revolutionize the way businesses interact with their customers \u2013 and we\u2019re here to help you navigate this exciting new world!"})]})]}),Object(d.jsx)("h2",{children:"Top Technologies"}),Object(d.jsxs)("div",{className:"about-page__technologies",children:[W(0,G),W(0,k),W(0,"data:image/jpeg;base64,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"),W(0,"data:image/jpeg;base64,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"),W(0,T),W(0,F)]}),Object(d.jsxs)("section",{className:"about-page__counter",children:[Object(d.jsxs)("div",{className:"about-page__counter-container",children:[Object(d.jsx)(E,{target:95,followChar:"%",followText:"Websites Compatible "}),Object(d.jsx)("div",{id:"boarder-left"}),Object(d.jsx)(E,{target:15,followChar:"+",followText:"Combined Years Experience"}),Object(d.jsx)("div",{id:"boarder-right"}),Object(d.jsx)(E,{target:100,followChar:"+",followText:"Projects completed"})]}),Object(d.jsx)("div",{className:"martop_2"}),Object(d.jsx)("a",{className:"btn2 btn2--green",href:"#Contact",onClick:()=>(e.setAppPage("home"),(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"auto",block:"start"})})("Contact"),!1),children:"Contact Us"})]})]})};class H extends a.Component{constructor(e){super(e),this.state={serverConfig:null,currentWindowWidth:window.innerWidth,clientSettings:{serverPort:c()},errorMessage:null},this.windowSizeChange=this.windowSizeChange.bind(this),window.addEventListener("resize",this.windowSizeChange)}render(){let e=this.props.page?this.props.page:0;return Object(d.jsxs)("div",{className:"application-width",children:[this.state.errorMessage,this.createApplicationPage(e)]})}createErrorBanner(e,t,s){return Object(d.jsx)(m,{statusText:e,statusCode:t,message:s})}createApplicationPage(e){return"about"===e?Object(d.jsx)("div",{children:Object(d.jsx)(B,{setAppPage:this.props.setAppPage})}):Object(d.jsx)(I,{pages:this.props.pages,setAppPage:this.props.setAppPage})}processConfigResponse(e){e.statusCode>=200&&e.statusCode<=299?(console.log("Switching to server ",this.state.clientSettings.serverPort),this.setState({serverConfig:e.body,errorMessage:null})):this.setState({serverConfig:null,errorMessage:Object(d.jsx)(r.a,{children:this.createErrorBanner(e.statusText,e.statusCode,"Failed to fetch config from ".concat(this.state.clientSettings.serverPort,". Please choose a valid server."))})})}windowSizeChange(){this.setState({currentWindowWidth:window.innerWidth})}}var R=s(24),K=s(25),D=s(27);class y extends a.Component{constructor(e){super(e),this.state={isOpen:!1,currentWindowWidth:window.innerWidth,navToggle:null},this.toggle=this.toggle.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.renderNavItem=this.renderNavItem.bind(this),this.windowSizeChange=this.windowSizeChange.bind(this),window.addEventListener("resize",this.windowSizeChange)}render(){let e=window.innerWidth<1050?this.createNavButton():this.createNormalNav();return Object(d.jsx)("div",{children:e})}createNavButton(){let e=this.props.pages.map((e=>this.renderNavItem(e,"navigation")));return Object(d.jsxs)("div",{className:"navigation",children:[Object(d.jsx)("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle",onClick:this.toggleMenu}),Object(d.jsx)("label",{htmlFor:"navi-toggle",className:"navigation__button",children:Object(d.jsx)("span",{className:"navigation__icon",children:"\xa0"})}),Object(d.jsx)("div",{className:"navigation__background",children:"\xa0"}),Object(d.jsx)("nav",{className:"navigation__nav",children:Object(d.jsx)("ul",{className:"navigation__list",children:e})})]})}toggleMenu(){this.setState({navToggle:!this.state.navToggle})}createNormalNav(){let e=this.props.pages.map((e=>this.renderNormalNavItem(e,"normNav")));return Object(d.jsx)("div",{className:"normNav",children:Object(d.jsx)(R.a,{className:"normNav__nav",children:Object(d.jsx)(K.a,{navbar:!0,className:"normNav__nav-bar",children:e})})})}toggle(){this.setState({isOpen:!this.state.isOpen})}renderNavItem(e,t){return Object(d.jsx)("li",{className:"navigation__item",children:Object(d.jsx)(D.a,{href:"#"+e.title,onClick:()=>{this.toggleMenu(),this.uncheckBox(),this.props.setAppPage(e.page)},className:t.concat("__link"),children:e.title},t.concat(e.title))},t.concat("__key")+t.concat(e.title))}renderNormalNavItem(e,t){return Object(d.jsx)(D.a,{onClick:()=>{this.toggle(),this.props.setAppPage(e.page)},color:"link",className:t.concat("__item"),children:e.title},t.concat(e.title))}uncheckBox(){document.getElementById("navi-toggle").checked=!1}windowSizeChange(){this.setState({currentWindowWidth:window.innerWidth})}componentWillUnmount(){window.removeEventListener("resize",this.windowSizeChange)}}const M=[{title:"Home",page:"home"},{title:"About",page:"about"}];var Z=function(){const[e,t]=Object(a.useState)(M[0].page),s=e=>{t(e)};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"App-container",children:Object(d.jsxs)("div",{className:"App-container-2",children:[Object(d.jsx)(y,{pages:M,setAppPage:s}),Object(d.jsx)(H,{page:e,pages:M,setAppPage:s})]})})})};var U=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((t=>{let{getCLS:s,getFID:a,getFCP:i,getLCP:n,getTTFB:o}=t;s(e),a(e),i(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),U()}},[[20,1,2]]]);
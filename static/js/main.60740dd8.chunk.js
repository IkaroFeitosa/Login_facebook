(this.webpackJsonpteste_auth=this.webpackJsonpteste_auth||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a.n(r),c=(a(13),a(3)),s=a(4),i=a(6),u=a(7),m=(a(14),a(15),a(5)),p=a.n(m),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={usuario:null},e.responseFacebook=function(t){localStorage.setItem("authExemploLogado",!0),localStorage.setItem("userExemplo",JSON.stringify(t)),e.setState({usuario:t}),console.log(t)},e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){this.setState({usuario:JSON.parse(localStorage.getItem("user_exemplo"))})}},{key:"render",value:function(){var e=this,t=this.state.usuario,a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"LOGIN WITH FACEBOOK"),o.a.createElement(p.a,{appId:"551060735530547",fields:"name,email,picture",callback:e.responseFacebook}))};return localStorage.getItem("authExemploLogado")&&(a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:t.picture.data.url,alt:"perfil",className:"perfil_foto"}),o.a.createElement("div",{className:"content_card"},o.a.createElement("h2",null,t.name),o.a.createElement("p",null,t.email))))}),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"content"},a()))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.60740dd8.chunk.js.map
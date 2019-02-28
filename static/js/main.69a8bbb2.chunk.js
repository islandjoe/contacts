(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(63)},36:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(36),t(6)),s=t(7),i=t(9),m=t(8),u=t(10),p=t(65),d=t(66),h=t(67),b=t(64),f=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"})," \xa0 Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-address-card"})," \xa0 Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"})," \xa0 About"))))))};f.defaultProps={branding:"My Contacts"};var E=f,v=t(11),y=t.n(v),g=t(13),N=t(29),C=t(17),O=t(12),j=t.n(O),k=r.a.createContext(),w=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(C.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(C.a)({},e,{contacts:[a.payload].concat(Object(N.a)(e.contacts))});case"UPDATE_CONTACT":return Object(C.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return w(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark(function e(){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),S=k.Consumer,A=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About"),r.a.createElement("p",{className:"lead"},"App to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0"))},T=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(g.a)(y.a.mark(function e(a,t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact;return r.a.createElement(S,null,function(t){return r.a.createElement("div",{className:"card bg-light card-body mb-3"},r.a.createElement("h4",{className:"card-title"},a.name," ",r.a.createElement("i",{className:"fa fa-angle-down",onClick:e.onShowClick,style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-minus",style:{cursor:"pointer",float:"right"},onClick:e.onDeleteClick.bind(e,a.id,t.dispatch)}),r.a.createElement(b.a,{to:"contact/edit/".concat(a.id)},r.a.createElement("i",{className:"fas fa-user-edit",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-envelope-open"})," ",a.email),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-phone"})," ",a.phone)):null)})}}]),a}(n.Component),D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).deleteContact=function(e){var a=t.state.contacts.filter(function(a){return a.id!==e});t.setState({contacts:a})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(S,null,function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"display-4 mb-2"},"Contact List"),a.contacts.map(function(a){return r.a.createElement(T,{key:a.id,contact:a,deleteClickHandler:e.deleteContact.bind(e,a.id)})}))})}}]),a}(n.Component),P=t(14),q=t(27),_=t.n(q),I=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name,className:"card-title"},e.label),r.a.createElement("input",{type:e.type,className:_()("form-control form-control-lg",{"is-invalid":e.error}),placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.onChange}),e.error&&r.a.createElement("div",{className:"invalid-feedback"},e.error))};I.defaultProps={type:"text"};var M=I,F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(P.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(g.a)(y.a.mark(function e(a,n){var r,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==t.state.name){e.next=4;break}return t.setState({errors:{name:"Name is required."}}),e.abrupt("return");case 4:if(""!==t.state.email){e.next=7;break}return t.setState({errors:{email:"Email is required."}}),e.abrupt("return");case 7:if(""!==t.state.phone){e.next=10;break}return t.setState({errors:{phone:"Phone is required."}}),e.abrupt("return");case 10:r={name:t.state.name,email:t.state.email,phone:t.state.phone},c=j.a.post("https://jsonplaceholder.typicode.com/users",r),a({type:"ADD_CONTACT",payload:c.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 15:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(S,null,function(a){return r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"card-title"},"Add Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,a.dispatch)},r.a.createElement(M,{label:"Name",name:"name",placeholder:"Enter name...",value:e.state.name,onChange:e.onChange,error:e.state.errors.name}),r.a.createElement(M,{label:"Email",name:"email",placeholder:"Enter email...",type:"email",value:e.state.email,onChange:e.onChange,error:e.state.errors.email}),r.a.createElement(M,{label:"Phone",name:"phone",type:"text",placeholder:"Enter phone...",value:e.state.phone,onChange:e.onChange,error:e.state.errors.phone}),r.a.createElement("input",{type:"submit",value:"Add",className:"btn btn-primary btn-lg btn-block"}))))})}}]),a}(n.Component),L=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(P.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(g.a)(y.a.mark(function e(a,n){var r,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==t.state.name){e.next=4;break}return t.setState({errors:{name:"Name is required."}}),e.abrupt("return");case 4:if(""!==t.state.email){e.next=7;break}return t.setState({errors:{email:"Email is required."}}),e.abrupt("return");case 7:if(""!==t.state.phone){e.next=10;break}return t.setState({errors:{phone:"Phone is required."}}),e.abrupt("return");case 10:return r={name:t.state.name,email:t.state.email,phone:t.state.phone},e.next=13,j.a.put("https://jsonplaceholder.typicode.com/users/".concat(t.props.match.params.id),r);case 13:c=e.sent,a({type:"UPDATE_CONTACT",payload:c.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 17:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then(function(a){var t=a.data;e.setState({name:t.name,email:t.email,phone:t.phone})})}},{key:"render",value:function(){var e=this;return r.a.createElement(S,null,function(a){return r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"card-title"},"Edit Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,a.dispatch)},r.a.createElement(M,{label:"Name",name:"name",placeholder:"Enter name...",value:e.state.name,onChange:e.onChange,error:e.state.errors.name}),r.a.createElement(M,{label:"Email",name:"email",placeholder:"Enter email...",type:"email",value:e.state.email,onChange:e.onChange,error:e.state.errors.email}),r.a.createElement(M,{label:"Phone",name:"phone",type:"text",placeholder:"Enter phone...",value:e.state.phone,onChange:e.onChange,error:e.state.errors.phone}),r.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-primary btn-lg btn-block"}))))})}}]),a}(n.Component),U=(t(60),t(61),function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"That page doesn't exist."))}),B=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x,{basename:"/contacts"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{branding:"My Contacts"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:F}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:L}),r.a.createElement(h.a,{exact:!0,path:"/about",component:A}),r.a.createElement(h.a,{component:U}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.69a8bbb2.chunk.js.map
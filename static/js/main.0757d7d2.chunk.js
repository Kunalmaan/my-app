(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(4),s=a.n(n),r=(a(9),a(2)),l=(a(10),a(0));function o(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"enable Dark mode"})]})]})]})})}function i(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"wblack"},children:[Object(l.jsxs)("h1",{children:[e.heading," "]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundcolor:"dark"===e.mode?"grey":"white"},id:"mybox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn.primary mx-1",onClick:function(){var e=n.toUpperCase();s(e)},children:"Convert to uppercase"}),Object(l.jsx)("button",{className:"btn btn.primary mx-1",onClick:function(){var e=n.toLowerCase();s(e)},children:"Convert to Lowercase"})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:" your text summary"}),Object(l.jsxs)("p",{children:[" ",n.split("").length," words and ",n.length," characters"]}),Object(l.jsxs)("p",{children:[" ",.008*n.split("").length," Minutes read"]}),Object(l.jsx)("h2",{children:" Preview"}),Object(l.jsxs)("p",{children:[" ",n]})]})]})}o.defaultProps={title:"set title here",abouttext:"about"};var b=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(l.jsxs)("strong",{children:["     ",e.alert.type]}),": ",e.alert.msg,Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};var d=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),d=Object(r.a)(s,2),j=d[0],h=d[1],m=function(e,t){h({msg:e,type:t})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{title:"textutils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="black",m(" dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",m(" light mode has been enabled","success"))}}),Object(l.jsx)(b,{alert:j}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(i,{heading:"enter the text to analyse"})})]})};s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0757d7d2.chunk.js.map
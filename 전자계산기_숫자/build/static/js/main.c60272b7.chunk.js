(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c(3),r=c.n(n),s=c(4),i=c(0),h=[{id:"clear",char:Object(i.jsx)("i",{className:"fab fa-cuttlefish"}),fn:"clear"},{id:"(",char:"(",fn:"change"},{id:")",char:")",fn:"change"},{id:"/",char:Object(i.jsx)("i",{className:"fas fa-divide"}),fn:"change"},{id:"7",char:"7",fn:"change"},{id:"8",char:"8",fn:"change"},{id:"9",char:"9",fn:"change"},{id:"*",char:Object(i.jsx)("i",{className:"fas fa-times"}),fn:"change"},{id:"4",char:"4",fn:"change"},{id:"5",char:"5",fn:"change"},{id:"6",char:"6",fn:"change"},{id:"-",char:Object(i.jsx)("i",{className:"fas fa-minus"}),fn:"change"},{id:"1",char:"1",fn:"change"},{id:"2",char:"2",fn:"change"},{id:"3",char:"3",fn:"change"},{id:"+",char:Object(i.jsx)("i",{className:"fas fa-plus"}),fn:"change"},{id:"del",char:Object(i.jsx)("i",{className:"fas fa-backspace"}),fn:"delete"},{id:"0",char:"0",fn:"change"},{id:".",char:Object(i.jsx)("i",{className:"fas fa-circle"}),fn:"change"},{id:"calc",char:Object(i.jsx)("i",{className:"fas fa-equals"}),fn:"calc"}],f=function(e){var a=e.btnDataObj,c=e._setResult;return Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),c(function(e){var a=e.currentTarget.getAttribute("data-fn"),c=document.querySelector(".output").innerText;switch(a){case"change":return c+e.currentTarget.getAttribute("data-char");case"delete":return c.slice(0,-1);case"clear":return"";case"calc":try{return new Function("return "+c)()}catch(t){return alert("\uacc4\uc0b0\uc2dd\uc624\ub958"),c}}}(e))},className:a.fn,"data-fn":a.fn,"data-char":a.id,children:a.char})},u=function(e){var a=e._setResult;return Object(i.jsx)("form",{className:"btnContainer",children:h.map((function(e){return Object(i.jsx)(f,{btnDataObj:e,_setResult:a},e.id)}))})},l=function(e){return Object(i.jsx)("div",{className:"output",children:e._result})},d=function(){var e=Object(t.useState)(""),a=Object(s.a)(e,2),c=a[0],n=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("main",{children:[Object(i.jsx)(l,{_result:c}),Object(i.jsx)(u,{_setResult:n})]})})};r.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c60272b7.chunk.js.map
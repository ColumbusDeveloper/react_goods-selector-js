(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{11:function(e,t,o){},13:function(e,t,o){"use strict";o.r(t);var c=o(4),n=o.n(c),s=o(3),a=o(1),d=(o(10),o(5)),i=o.n(d),l=(o(11),o(0)),r=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){var t=e.good,o=e.goodsMod,c=e.selectedGood,n=e.setselectedGood,s=(e.goodsCh,e.setGoodsCh);return Object(l.jsxs)("tr",{"data-cy":"Good",className:"".concat((t.bool&&""!==c||t.name===c.name)&&"has-background-success-light"),children:[Object(l.jsx)("td",{children:Object(l.jsx)("button",{"data-cy":"".concat(t.bool&&""!==c||t.name===c.name?"RemoveButton":"AddButton"),type:"button",className:i()("button",{"is-info":t.bool&&""!==c||t.name===c.name}),onClick:function(e){"click"===e.type&&(o.find((function(e){return e.id===t.id})).bool=!0,s(o),n(t))},children:"".concat(t.bool&&""!==c||t.name===c.name?"-":"+")})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t.name})]})},m=function(){var e=r.map((function(e){return{id:r.indexOf(e),name:e,bool:!1}})),t=e.find((function(e){return"Jam"===e.name})),o=Object(a.useState)(t),c=Object(s.a)(o,2),n=c[0],d=c[1],i=Object(a.useState)(e),m=Object(s.a)(i,2),u=m[0],j=m[1];return Object(l.jsxs)("main",{className:"section container",children:[Object(l.jsx)("h1",{className:"title is-flex is-align-items-center ".concat(n?"is-hidden":""),children:"No goods selected"}),Object(l.jsxs)("h1",{className:"title is-flex is-align-items-center ".concat(n?"":"is-hidden"),children:["".concat(n.name," is selected"),Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){d("")}})]}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:u.map((function(t){return Object(l.jsx)(b,{good:t,selectedGood:n,setselectedGood:d,goodsMod:e,goodsCh:u,setGoodsCh:j},t.id)}))})})]})};n.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6fe689de.chunk.js.map
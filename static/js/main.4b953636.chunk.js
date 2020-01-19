(this["webpackJsonpdnd-app"]=this["webpackJsonpdnd-app"]||[]).push([[0],{36:function(e,a,t){e.exports=t(50)},41:function(e,a,t){},42:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),i=t.n(l),c=(t(41),t(42),t(26),t(16)),o=t(17),m=t(15),u=t(6),d=t(11),s=t(7),E=t(31);var v=function(e){return r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(E.a,{onClick:function(a){var t=a.target.getAttribute("sides"),n=Math.floor(Math.random()*(a.target.getAttribute("sides")-1+1))+1;e.update(t,n)},size:"lg"},r.a.createElement(s.a,{sides:"20",variant:"dark"},"20"),r.a.createElement(s.a,{sides:"12",variant:"dark"},"12"),r.a.createElement(s.a,{sides:"10",variant:"dark"},"10"),r.a.createElement(s.a,{sides:"8",variant:"dark"},"8"),r.a.createElement(s.a,{sides:"6",variant:"dark"},"6"),r.a.createElement(s.a,{sides:"4",variant:"dark"},"4"),r.a.createElement(s.a,{sides:"2",variant:"dark"},"2")))},f=t(18);var p=function(e){var a=e.diceData;return r.a.createElement(f.a,{bg:"dark",text:"white",style:{width:"16rem"}},r.a.createElement(f.a.Body,{onClick:function(t){if("reRoll"==t.target.className){var n=Math.floor(Math.random()*(a.sides-1+1))+1;e.re(n,a.id)}}},r.a.createElement(f.a.Title,null,r.a.createElement("h1",{className:"reRoll"},"D",a.sides)),r.a.createElement(f.a.Subtitle,{className:"mb-3"},"rolled a ",r.a.createElement("b",null,a.roll)),r.a.createElement("input",{onInput:function(t){e.mod(a.id,t.target.value)},type:"number",placeholder:"modifier (ex : -2)"}),r.a.createElement(s.a,{onClick:function(t){e.rem(a.id)},style:{marginLeft:"5px"},variant:"danger"},"X")))};var b=function(e){var a=e.diceData,t=[],n=[],l=0,i=0;return a.forEach((function(e){t.push(e.modifier),i+=e.modifier,n.push(e.roll),l+=e.roll})),r.a.createElement("div",{className:"diceStats"},r.a.createElement("h3",null,"Results"),r.a.createElement("p",null,"(Raw) ",l," (",n.join(" + "),") + (mod) ",i," (",t.join(" + "),")"),r.a.createElement("h3",null,"Total is ",l+i),r.a.createElement(s.a,{variant:"secondary",onClick:e.clr},"Clear All"))};var h=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],l=a[1];function i(e,a){var n=Object(u.a)(t);n.find((function(a){return a.id==e})).modifier=Number(a),l(Object(u.a)(n))}function c(e){var a=Object(u.a)(t),n=a.find((function(a){return a.id==e})),r=a.indexOf(n);a.splice(r,1),l(Object(u.a)(a))}function o(e,a){var n=Object(u.a)(t);n.find((function(e){return e.id==a})).roll=e,l(Object(u.a)(n))}return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Dice Roller"),r.a.createElement(v,{update:function(e,a){var n={sides:e,roll:a,modifier:0,id:t.length+1};l([].concat(Object(u.a)(t),[n]))}}),r.a.createElement("div",{className:"cardcontainer"},t.map((function(e){return r.a.createElement(p,{rem:c,mod:i,re:o,diceData:e,key:e.id})}))),r.a.createElement(b,{clr:function(){l([])},diceData:t}))},k=t(35),y=t(13);function g(e){var a=Object(k.a)(),t=a.register,n=a.handleSubmit;a.errors;return r.a.createElement("div",{className:"initform"},r.a.createElement(y.a,{onSubmit:n((function(a){e.create(a.name,Number(a.init),a.type,e.data.length+1)})),className:"justify-content-md-center"},r.a.createElement(y.a.Group,{controlId:"formName"},r.a.createElement(y.a.Label,null,"Create new Trackee (",e.data.length,")"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Name",name:"name",ref:t({required:!0,min:1})})),r.a.createElement(y.a.Group,{controlId:"formInit"},r.a.createElement(y.a.Control,{type:"number",placeholder:"Inititative (#)",name:"init",ref:t})),r.a.createElement(y.a.Group,{controlId:"formType"},r.a.createElement(y.a.Control,{as:"select",name:"type",ref:t({required:!0})},r.a.createElement("option",{value:"Player"},"Player"),r.a.createElement("option",{value:"NPC"}," NPC")),r.a.createElement(y.a.Text,null,"Select Trackee type")),r.a.createElement(s.a,{variant:"dark",type:"submit"},"Submit new Trackee")))}var N=function(e){var a=e.data,t="NPC"==a.type?"red":"green";return r.a.createElement("li",{style:{color:t}},"Name : ",a.name," || Initiative : ",a.init," ",r.a.createElement("input",{type:"text"}),r.a.createElement("button",{onClick:function(t){e.remove(a.id)}},"X"))};var j=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],l=a[1];function i(e){var a=Object(u.a)(t),n=a.find((function(a){return a.id==e})),r=a.indexOf(n);a.splice(r,1),l(a)}return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Inititative Tracker"),r.a.createElement(g,{data:t,create:function(e,a,n,r){var i={name:e,init:a,type:n,id:r};l([].concat(Object(u.a)(t),[i]))}}),r.a.createElement("hr",null),r.a.createElement("ul",null,t.sort((function(e,a){return e.init>a.init?-1:a.init>e.init?1:void 0})).map((function(e){return r.a.createElement(N,{remove:i,key:e.id,data:e})}))))};var O=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Spells"))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},"Darkwolf's",r.a.createElement("br",null)," Dungeons and Dragons"),r.a.createElement(o.a,null,r.a.createElement(c.a,{variant:"tabs",defaultActiveKey:"/home"},r.a.createElement(c.a.Item,null,r.a.createElement(c.a.Link,{eventKey:"link-0"},r.a.createElement(o.b,{to:"/"},"Dice Roller"))),r.a.createElement(c.a.Item,null,r.a.createElement(c.a.Link,{eventKey:"link-1"},r.a.createElement(o.b,{to:"/init"},"Initiative Tracker"))),r.a.createElement(c.a.Item,null,r.a.createElement(c.a.Link,{eventKey:"link-2"},r.a.createElement(o.b,{to:"/spells"},"Spells")))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/init"},r.a.createElement(j,null)),r.a.createElement(m.a,{path:"/spells"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.4b953636.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(7),i=n.n(r),o=(n(19),n(5)),c=n(8),s=n(9),m=n(2),u=n(13),d=n(12),h=(n(20),n(21),n(10));var v=function(e){var t=e.items.map((function(t){return l.a.createElement("div",{className:"list",key:t.key},l.a.createElement("p",null," ",t.text,l.a.createElement("span",null,l.a.createElement(h.a,{className:"faicons",icon:"times",onClick:function(){return e.deleteItem(t.key)}}))))}));return l.a.createElement("div",null," ",t)},p=n(3),f=n(11);p.b.add(f.a);var I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(m.a)(a)),a.listItem=a.listItem.bind(Object(m.a)(a)),a.deleteItem=a.deleteItem.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"listItem",value:function(e){e.preventDefault();var t=this.state.currentItem;console.log(this.state.items),console.log(t),console.log("hello");var n=Object(o.a)(this.state.items);console.log(n);var a=0;for(var l in n)console.log("clara"),console.log(n[l].text),n[l].text==t.text&&(alert("Don't input duplicate values"),a=1);if(""!==t.text&&0==a){var r=[].concat(Object(o.a)(this.state.items),[t]);this.setState({items:r,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"title"}," TO DO LIST "),";",l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("form",{id:"to-do-form",onSubmit:this.listItem},l.a.createElement("input",{type:"text",placeholder:"Enter Task",value:this.state.currentItem.text,onChange:this.handleInput}),l.a.createElement("button",{type:"submit"},"Add"))),l.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem})))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.9e2de90b.chunk.js.map
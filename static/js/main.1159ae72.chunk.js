(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),s=n.n(o),c=(n(17),n(5)),l=n(6),u=n(9),i=n(7),h=n(10),m=(n(19),function(e){var t=e.name,n=e.url;return r.a.createElement("div",null,r.a.createElement("a",{href:n},t))}),d=n(8),f=(n(23),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={users:[]},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];console.log("componentDidMount"),fetch("https://swapi.co/api/people/").then(function(e){return e.json()}).then(function(n){t=n.results.map(function(e){return e}),e.setState({users:t}),console.log(t)})}},{key:"render",value:function(){console.log("render");var e=[{Header:"Name",accessor:"name",Cell:function(e){return r.a.createElement(m,{name:e.value,url:e.original.url})}},{Header:"Gender",accessor:"gender"},{Header:"Height",accessor:"height",Footer:r.a.createElement("span",null,this.state.users.reduce(function(e,t){var n=t.height;return e+Number(n)},0))},{Header:"Mass",accessor:"mass",Footer:r.a.createElement("span",null,this.state.users.reduce(function(e,t){var n=t.mass;return e+Number(n)},0)/this.state.users.length)}];return this.state.users?r.a.createElement("div",null,r.a.createElement("h1",null,"Star Wars"),r.a.createElement("div",null,r.a.createElement(d.a,{data:this.state.users,columns:e,filterable:!0,defaultPageSize:5,className:"-striped -highlight"}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.1159ae72.chunk.js.map
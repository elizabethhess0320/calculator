(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(21)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),i=t.n(l),c=t(2),o=t(3),h=t(5),d=t(4),u=t(6),s=(t(15),function(e){function n(){return Object(c.a)(this,n),Object(h.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-display"},r.a.createElement("div",null,this.props.value))}}]),n}(r.a.Component)),m=(t(16),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).handleClick=function(){t.props.clickHandler(t.props.name)},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=["component-button",this.props.functions?"functions":"",this.props.orange?"orange":"",this.props.wide?"wide":""];return r.a.createElement("div",{className:e.join(" ").trim()},r.a.createElement("button",{onClick:this.handleClick},this.props.name))}}]),n}(r.a.Component)),p=(t(17),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).handleClick=function(e){t.props.clickHandler(e)},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-button-panel"},r.a.createElement("div",null,r.a.createElement(m,{name:"AC",clickHandler:this.handleClick,functions:!0}),r.a.createElement(m,{name:"+/-",clickHandler:this.handleClick,functions:!0}),r.a.createElement(m,{name:"%",clickHandler:this.handleClick,functions:!0}),r.a.createElement(m,{name:"\xf7",clickHandler:this.handleClick,orange:!0})),r.a.createElement("div",null,r.a.createElement(m,{name:"7",clickHandler:this.handleClick}),r.a.createElement(m,{name:"8",clickHandler:this.handleClick}),r.a.createElement(m,{name:"9",clickHandler:this.handleClick}),r.a.createElement(m,{name:"x",clickHandler:this.handleClick,orange:!0})),r.a.createElement("div",null,r.a.createElement(m,{name:"4",clickHandler:this.handleClick}),r.a.createElement(m,{name:"5",clickHandler:this.handleClick}),r.a.createElement(m,{name:"6",clickHandler:this.handleClick}),r.a.createElement(m,{name:"-",clickHandler:this.handleClick,orange:!0})),r.a.createElement("div",null,r.a.createElement(m,{name:"1",clickHandler:this.handleClick}),r.a.createElement(m,{name:"2",clickHandler:this.handleClick}),r.a.createElement(m,{name:"3",clickHandler:this.handleClick}),r.a.createElement(m,{name:"+",clickHandler:this.handleClick,orange:!0})),r.a.createElement("div",null,r.a.createElement(m,{name:"0",clickHandler:this.handleClick,wide:!0}),r.a.createElement(m,{name:".",clickHandler:this.handleClick}),r.a.createElement(m,{name:"=",clickHandler:this.handleClick,orange:!0})))}}]),n}(r.a.Component)),f=t(1),k=t.n(f);function x(e,n,t){var a=k()(e||"0"),r=k()(n||("\xf7"===t||"x"===t?"1":"0"));if("+"===t)return a.plus(r).toString();if("-"===t)return a.minus(r).toString();if("x"===t)return a.times(r).toString();if("\xf7"===t)return r.eq(0)?(alert("Divide by 0 error"),"0"):a.div(r).toString();throw Error("Unknown operation '".concat(t,"'"))}function C(e,n){if("AC"===n)return{total:null,next:null,operation:null,higherOrder:{}};if(/[0-9]+/.test(n))return"0"===(n=parseInt(n,10).toString())&&"0"===e.next?{}:e.higherOrder&&e.higherOrder.operation?{higherOrder:{next:n,operation:e.higherOrder.operation}}:e.operation?e.next?{next:e.next+n}:{next:n}:e.next?{next:"0"===e.next?n:e.next+n,total:null}:{next:n,total:null};if("%"===n){if(e.operation&&e.next){var t=x(e.total,e.next,e.operation);return{total:k()(t).div(k()("100")).toString(),next:null,operation:null}}return e.next?{next:k()(e.next).div(k()("100")).toString()}:e.total?{total:k()(e.total).div(k()("100")).toString()}:{}}if("."===n)return e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."};if("="===n&&(!e.next||!e.operation))return{};if("+/-"===n)return e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{};if(!e.next)return{operation:n};if(e.operation||"="===n){if(n="="===n?null:n,e.higherOrder&&e.higherOrder.next){var a=x(e.next,e.higherOrder.next,e.higherOrder.operation);return g(n)?{next:a,higherOrder:{next:null,operation:n}}:{total:x(e.total,a,e.operation),next:null,operation:n,higherOrder:{next:null,operation:null}}}if(g(e.operation))return{total:x(e.total,e.next,e.operation),next:null,operation:n};if(!g(n))return{total:x(e.total,e.next,e.operation),next:null,operation:n,higherOrder:{next:null,operation:null}};if(g(n))return{higherOrder:{next:null,operation:n}}}return{total:e.next,next:null,operation:n}}function g(e){if("x"===e||"\xf7"===e)return!0}var E=[{name:"0",charCode:48},{name:"1",charCode:49},{name:"2",charCode:50},{name:"3",charCode:51},{name:"4",charCode:52},{name:"5",charCode:53},{name:"6",charCode:54},{name:"7",charCode:55},{name:"8",charCode:56},{name:"9",charCode:57},{name:".",charCode:46},{name:"=",charCode:13},{name:"+",charCode:43},{name:"-",charCode:45},{name:"x",charCode:42},{name:"\xf7",charCode:47},{name:"%",charCode:53}],v=(t(18),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={total:null,next:null,operation:null,higherOrder:{next:null,operation:null}},t.handleClick=function(e){t.setState(C(t.state,e))},t.handleKeyPress=function(e){var n=E.find(function(n){return n.charCode===e.charCode});n&&t.setState(C(t.state,n.name))},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{tabIndex:"0",onKeyPress:this.handleKeyPress,className:"component-app"},r.a.createElement(s,{value:this.state.next||this.state.total||"0"}),r.a.createElement(p,{clickHandler:this.handleClick}))}}]),n}(r.a.Component));t(19),t(20);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.8733fdba.chunk.js.map
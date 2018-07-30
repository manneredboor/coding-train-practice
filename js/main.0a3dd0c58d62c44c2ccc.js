!function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],d=0,f=[];d<a.length;d++)i=a[d],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/coding-train-practice";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,1]),n()}({"./src/components/Forces/DragResistance.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DragResistance=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),o=n("./src/components/Layout/DemoPage.tsx"),s=n("./src/components/Forces/Mover.ts"),i=n("./src/utils/index.ts"),a=n("./src/utils/styles.ts"),c=n("./src/utils/links.ts");var l=o.DemoPage;t.DragResistance=function(){return r.createElement(l,{next:c.links.gravityAttraction,srcLink:"Forces/DragResistance.tsx",setup:function(e){var t=e.width;return{guys:Array.from(Array(6)).map(function(){return new s.Mover((0,i.random)(90,t-90),100)})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState;t.save(),t.fillStyle=a.colors.brandHover,t.globalAlpha=.25,t.fillRect(0,r/2,n,r),t.restore(),o.guys&&o.guys.forEach(function(e){if(e.gravity(),e.pos.y>r/2){var o=e.vel.copy(),s=e.vel.mag();o.mult(-.00125*(0,i.sqr)(s)),e.applyForce(o)}e.edges(n,r),e.update(n,r),e.render(t)})}})}},"./src/components/Forces/Forces.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Forces=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),o=n("./src/components/Layout/DemoPage.tsx"),s=n("./src/components/Vectors/VectorMutable.ts"),i=n("./src/components/Forces/Mover.ts"),a=n("./src/utils/index.ts"),c=n("./src/utils/links.ts");var l=new s.Vector(.5,0),u=o.DemoPage;t.Forces=function(){return r.createElement(u,{hint:"click for wind",next:c.links.dragResistance,srcLink:"Forces/Forces.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.isWind=!0},onMouseUp:function(){return t.isWind=!1}}},setup:function(e){var t=e.width,n=e.height;return{guys:Array.from(Array(6)).map(function(){return new i.Mover((0,a.random)(90,t-90),n/2)})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState;o.guys.forEach(function(e){o.isWind&&e.applyForce(l),e.gravity(),e.edges(n,r),e.update(n,r),e.render(t)})}})}},"./src/components/Forces/GravityAttraction.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GravityAttraction=t.gravityAttraction=void 0;var r=f(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=f(n("./node_modules/babel-runtime/helpers/createClass.js")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),i=n("./src/components/Layout/DemoPage.tsx"),a=n("./src/components/Vectors/VectorMutable.ts"),c=n("./src/components/Forces/Mover.ts"),l=n("./src/utils/index.ts"),u=n("./src/utils/links.ts"),d=n("./src/utils/styles.ts");function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){function e(t,n){(0,r.default)(this,e),this.mass=3,this.pos=new a.Vector(t,n)}return(0,o.default)(e,[{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,10*this.mass,0,360),e.fillStyle=d.colors.brandHover,e.strokeStyle=d.colors.brand,e.lineWidth=20,e.stroke(),e.fill()}}]),e}(),m=t.gravityAttraction=function(e,t){var n=e.pos.copy();n.sub(t.pos);var r=n.mag(),o=9800*t.mass*e.mass/(0,l.sqr)(r);o>1?o=1:o<.01&&(o=.01);var s=n.copy();s.norm(),s.mult(o),t.applyForce(s)},h=i.DemoPage;t.GravityAttraction=function(){return s.createElement(h,{hint:"click to move attractor",next:u.links.mutalAttraction,srcLink:"Forces/GravityAttraction.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.isMoving=!0},onMouseMove:function(e){return t.mouse=new a.Vector(e.pageX,e.pageY)},onMouseUp:function(){return t.isMoving=!1}}},setup:function(e){var t=e.width,n=e.height,r=Array.from(Array(3)).map(function(){var e=.1*n,r=(n-2*e)/2,o=(0,l.random)(e,r),s=new c.Mover(t/2,o),i=(r-o)/(1/s.mass*20);return s.applyForce(new a.Vector(i,0)),s});return{attractor:new p(t/2,n/2),guys:r}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState,s=o.mouse,i=o.isMoving,a=o.attractor,c=o.guys;i&&s&&(a.pos=s),c.forEach(function(e){m(a,e),e.update(n,r),e.render(t)}),a.render(t)}})}},"./src/components/Forces/Mover.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Mover=void 0;var r=c(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=c(n("./node_modules/babel-runtime/helpers/createClass.js")),s=n("./src/components/Vectors/VectorMutable.ts"),i=n("./src/utils/styles.ts"),a=n("./src/utils/index.ts");function c(e){return e&&e.__esModule?e:{default:e}}var l=new s.Vector(0,.98);t.Mover=function(){function e(t,n){(0,r.default)(this,e),this.pos=new s.Vector(t,n),this.acc=new s.Vector(0,0),this.vel=new s.Vector(0,0),this.mass=(0,a.random)(1,4)}return(0,o.default)(e,[{key:"applyForce",value:function(e){var t=e.copy();t.div(this.mass),this.acc.add(t)}},{key:"gravity",value:function(){var e=l.copy();e.mult(this.mass),this.applyForce(e)}},{key:"update",value:function(e,t){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new s.Vector(0,0)}},{key:"edges",value:function(e,t){var n=this.pos,r=this.vel;n.x>e&&(n.x=e,r.x*=-1),n.x<0&&(n.x=0,r.x*=-1),n.y>t&&(n.y=t,r.y*=-1),n.y<0&&(n.y=0,r.y*=-1)}},{key:"edgesLoop",value:function(e,t){var n=this.pos;n.x>e&&(n.x=0),n.x<0&&(n.x=e),n.y>t&&(n.y=0),n.y<0&&(n.y=t)}},{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,10*this.mass,0,360),e.fillStyle=i.colors.brand,e.fill()}}]),e}()},"./src/components/Forces/MutalAttraction.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MutalAttraction=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),o=n("./src/components/Layout/DemoPage.tsx"),s=n("./src/components/Vectors/VectorMutable.ts"),i=n("./src/components/Forces/GravityAttraction.tsx"),a=n("./src/components/Forces/Mover.ts"),c=n("./src/utils/index.ts");var l=o.DemoPage;t.MutalAttraction=function(){return r.createElement(l,{hint:"click to create",srcLink:"Forces/MutalAttraction.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.mouse&&t.guys.push(new a.Mover(t.mouse.x,t.mouse.y))},onMouseMove:function(e){return t.mouse=new s.Vector(e.pageX,e.pageY)}}},setup:function(e){var t=e.width,n=e.height;return{guys:Array.from(Array(5)).map(function(){var e=new s.Vector((0,c.random)(-1,1),(0,c.random)(-1,1)),r=new a.Mover((0,c.random)(0,t),(0,c.random)(0,n));return r.applyForce(e),r})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState.guys;o.forEach(function(e){o.forEach(function(t){return(0,i.gravityAttraction)(e,t)}),e.edgesLoop(n,r),e.update(n,r),e.render(t)})}})}},"./src/components/Home.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/styled-components/dist/styled-components.browser.es.js")),s=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/utils/links.ts");var a=o.default.div.withConfig({componentId:"r4defv-0"})(["margin:80px auto;padding:60px;max-width:600px;background-color:#fff;border:5px solid #f9f4f8;h2{font-weight:bold;font-size:42px;margin-bottom:20px;}p{font-size:18px;}"]),c=(0,o.default)(s.Link).withConfig({componentId:"r4defv-1"})(["margin:25px 0;display:block;width:fit-content;font-size:32px;"]),l=function(e){return r.createElement(c,{to:e.link},e.text)};t.Home=function(){return r.createElement(a,null,r.createElement("h2",null,"Hello!"),r.createElement("p",null,"Here I'm practicing in some math and physics programming while watching"," ",r.createElement("a",{target:"_blank",href:"https://www.youtube.com/user/shiffman/videos"},"Coding Train Videos"),r.createElement("br",null),r.createElement("br",null),"Sources are"," ",r.createElement("a",{target:"_blank",href:"https://github.com/manneredboor/coding-train-practice"},"here"),r.createElement("br",null),r.createElement("br",null),"You can check out the demos:"),Object.keys(i.links).slice(1).map(function(e){return r.createElement(l,Object.assign({},i.links[e]))}),r.createElement("br",null),r.createElement("div",{style:{textAlign:"right",opacity:.5}},r.createElement("a",{target:"_blank",href:"https://twitter.com/dmitrypodlesny"},"my twitter"),"     ",r.createElement("a",{target:"_blank",href:"https://www.instagram.com/under.forest/"},"my insta")))}},"./src/components/Layout/AppContainer.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppContainer=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/styled-components/dist/styled-components.browser.es.js")),s=n("./node_modules/react-router-config/es/index.js"),i=n("./node_modules/@gnarlycode/react-scroll-state/lib/index.js");n("./src/utils/defaultStyles.ts");var a=o.default.div.withConfig({componentId:"czanyq-0"})(["display:flex;flex-direction:column;width:100%;background:linear-gradient(#fcfde5,#f5ffef,#faf1fb,#ffe1f7);"]);t.AppContainer=function(e){var t=e.route;return r.createElement(i.ScrollStateProvider,null,r.createElement(i.ScrollRestorer,null),r.createElement(a,null,t&&(0,s.renderRoutes)(t.routes)))}},"./src/components/Layout/ClientAppRoot.tsx":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.ClientAppRoot=void 0;var r=n("./node_modules/react-hot-loader/index.js"),o=n("./node_modules/recompose/dist/Recompose.esm.js"),s=n("./node_modules/react-router-config/es/index.js"),i=n("./node_modules/react-router-dom/es/index.js"),a=n("./src/routes.tsx");t.ClientAppRoot=(0,o.compose)((0,r.hot)(e),i.withRouter)(function(){return(0,s.renderRoutes)(a.routes)})}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/components/Layout/DemoPage.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DemoPage=void 0;var r=b(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=b(n("./node_modules/babel-runtime/helpers/createClass.js")),s=b(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=b(n("./node_modules/babel-runtime/helpers/inherits.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),c=n("./node_modules/styled-components/dist/styled-components.browser.es.js"),l=b(c),u=n("./node_modules/react-router-dom/es/index.js"),d=n("./src/utils/styles.ts"),f=n("./src/components/Utils/FullScreenCanvas.tsx"),p=n("./src/utils/links.ts"),m=b(n("./src/svg/arrow.svg")),h=b(n("./src/svg/restart.svg"));function b(e){return e&&e.__esModule?e:{default:e}}var v=(0,c.css)(["position:fixed;padding:0 10px;background-color:#fff;text-transform:uppercase;border:5px solid #f9f4f8;user-select:none;"]),y=(0,c.css)(["display:flex;flex-direction:row;align-items:center;position:fixed;height:75px;border-radius:2px;cursor:pointer;border:none;font-size:16px;",";& svg{display:block;margin:0 10px;width:35px;height:35px;fill:",";transition:ease fill ",";}& div{margin:0 10px;}&:hover{border-color:#f9f4f8;& svg{fill:",";transition-duration:",";}}"],v,d.colors.brand,d.dur.norm,d.colors.brandHover,d.dur.fast),x=(0,l.default)(u.Link).withConfig({componentId:"s1xp6t1s-0"})(["",";top:40px;left:40px;"],y),g=(0,l.default)(u.Link).withConfig({componentId:"s1xp6t1s-1"})(["",";right:40px;top:40px;& svg{transform:rotate(180deg);}"],y),w=l.default.a.withConfig({componentId:"s1xp6t1s-2"})(["",";right:40px;bottom:40px;"],y),_=l.default.div.withConfig({componentId:"s1xp6t1s-3"})(["",";padding:20px;left:40px;bottom:40px;font-size:16px;font-weight:bold;color:",";"],v,d.colors.brand),k=l.default.div.withConfig({componentId:"s1xp6t1s-4"})(["",";top:40px;left:50%;margin-left:-42px;"],y);t.DemoPage=function(e){function t(e){(0,r.default)(this,t);var n=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.shouldSetup=!0,n.state={},n}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.canvasProps,r=t.hint,o=t.next,s=t.render,i=t.setup,c=t.srcLink,l=this.state.drawState,u=n&&l?n({drawState:l}):{};return a.createElement(a.Fragment,null,a.createElement(x,{to:p.links.home.link},a.createElement(m.default,null),a.createElement("div",null,"Home")),a.createElement(k,{onClick:function(){return e.shouldSetup=!0}},a.createElement(h.default,null)),o&&a.createElement(g,{to:o.link},a.createElement("div",null,o.text),a.createElement(m.default,null)),c&&a.createElement(w,{href:"https://github.com/manneredboor/coding-train-practice/blob/master/src/components/"+c,target:"_blank"},a.createElement("div",null,"Source")),r&&a.createElement(_,null,r),a.createElement(f.FullScreenCanvas,Object.assign({},u,{render:function(t){var n=t.width,r=t.height;e.shouldSetup&&(e.setState({drawState:i?i({width:n,height:r}):{}}),e.shouldSetup=!1),l&&s(Object.assign({},t,{drawState:l}))}})))}}]),t}(a.PureComponent)},"./src/components/Utils/CanvasAnimFrame.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasAnimFrame=void 0;var r=l(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=l(n("./node_modules/babel-runtime/helpers/createClass.js")),s=l(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=l(n("./node_modules/babel-runtime/helpers/inherits.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),c=l(n("./node_modules/is-in-browser/dist/module.js"));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.CanvasAnimFrame=function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.canvas=a.createRef(),e.scale=c.default&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1,e.renderFrame=function(t){var n=e.props,r=n.height,o=n.width;if(e.canvas.current&&o&&r){var s=e.getContext();s.save(),1!==e.scale&&s.scale(e.scale,e.scale),s.imageSmoothingEnabled=!0,s.clearRect(0,0,o,r),e.props.render({ctx:s,height:r,prevTime:e.prevTime,time:t,width:o}),s.restore(),e.prevTime=t}e.rafID=window.requestAnimationFrame(e.renderFrame)},e}return(0,i.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.rafID=window.requestAnimationFrame(this.renderFrame)}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.rafID)}},{key:"getContext",value:function(){return this.ctx||!this.canvas.current?this.ctx:(this.ctx=this.canvas.current.getContext("2d"),this.ctx)}},{key:"render",value:function(){var e=this.props,t=(e.render,e.width),n=e.height,r=u(e,["render","width","height"]);return a.createElement("canvas",Object.assign({style:{display:"block",height:n||"100%",width:t||"100%"},height:n*this.scale||"",width:t*this.scale||"",ref:this.canvas},r))}}]),t}(a.PureComponent)},"./src/components/Utils/FullScreenCanvas.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullScreenCanvas=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/styled-components/dist/styled-components.browser.es.js")),o=n("./src/components/Utils/MeasuredCanvas.tsx");t.FullScreenCanvas=(0,r.default)(o.MeasuredCanvas).withConfig({componentId:"s1vbte3a-0"})(["width:100%;height:100vh;"])},"./src/components/Utils/MeasuredCanvas.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredCanvas=void 0;var r=u(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=u(n("./node_modules/babel-runtime/helpers/createClass.js")),s=u(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=u(n("./node_modules/babel-runtime/helpers/inherits.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),c=u(n("./node_modules/react-measure/lib/react-measure.js")),l=n("./src/components/Utils/CanvasAnimFrame.tsx");function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.MeasuredCanvas=function(e){function t(e){(0,r.default)(this,t);var n=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.width,t.height,d(t,["className","width","height"])),o=this.state.size;return a.createElement(c.default,{bounds:!0,onResize:function(t){var n=t.bounds;return e.setState({size:n})}},function(e){var t=e.measureRef;return a.createElement("div",{className:n,ref:t},o&&a.createElement(l.CanvasAnimFrame,Object.assign({},o,r)))})}}]),t}(a.PureComponent)},"./src/components/Vectors/VectorImmutable.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var r=i(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=i(n("./node_modules/babel-runtime/helpers/createClass.js")),s=n("./src/utils/index.ts");function i(e){return e&&e.__esModule?e:{default:e}}t.Vector=function(){function e(t,n){(0,r.default)(this,e),this.x=t,this.y=n}return(0,o.default)(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"sub",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"mult",value:function(t){return new e(this.x*t,this.y*t)}},{key:"div",value:function(t){return new e(this.x/t,this.y/t)}},{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"mag",value:function(){return Math.sqrt((0,s.sqr)(this.x)+(0,s.sqr)(this.y))}},{key:"norm",value:function(){var e=this.mag();return 0===e?this.copy():this.div(e)}},{key:"setMag",value:function(e){return this.norm().mult(e)}},{key:"limit",value:function(e){return this.mag()<=e?this:this.setMag(e)}}]),e}()},"./src/components/Vectors/VectorMutable.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var r=i(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=i(n("./node_modules/babel-runtime/helpers/createClass.js")),s=n("./src/utils/index.ts");function i(e){return e&&e.__esModule?e:{default:e}}t.Vector=function(){function e(t,n){(0,r.default)(this,e),this.x=t,this.y=n}return(0,o.default)(e,[{key:"add",value:function(e){this.x+=e.x,this.y+=e.y}},{key:"sub",value:function(e){this.x-=e.x,this.y-=e.y}},{key:"mult",value:function(e){this.x*=e,this.y*=e}},{key:"div",value:function(e){this.x/=e,this.y/=e}},{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"mag",value:function(){return Math.sqrt((0,s.sqr)(this.x)+(0,s.sqr)(this.y))}},{key:"norm",value:function(){0!==this.mag()&&this.div(this.mag())}},{key:"setMag",value:function(e){this.norm(),this.mult(e)}},{key:"limit",value:function(e){this.mag()>e&&this.setMag(e)}}]),e}()},"./src/components/Vectors/Vectors.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vectors=t.Mover=void 0;var r=u(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=u(n("./node_modules/babel-runtime/helpers/createClass.js")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),i=n("./src/components/Layout/DemoPage.tsx"),a=n("./src/components/Vectors/VectorImmutable.ts"),c=n("./src/utils/styles.ts"),l=n("./src/utils/links.ts");function u(e){return e&&e.__esModule?e:{default:e}}var d=t.Mover=function(){function e(t){(0,r.default)(this,e),this.pos=t,this.acc=new a.Vector(0,0),this.vel=new a.Vector(0,0)}return(0,o.default)(e,[{key:"update",value:function(){this.vel=this.vel.add(this.acc),this.pos=this.pos.add(this.vel)}},{key:"bounce",value:function(e,t){(this.pos.x>e||this.pos.x<0)&&(this.vel.x*=-1),(this.pos.y>t||this.pos.y<0)&&(this.vel.y*=-1)}},{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,20,0,360),e.fillStyle=c.colors.brand,e.fill()}}]),e}(),f=i.DemoPage;t.Vectors=function(){return s.createElement(f,{hint:"Move mouse around",next:l.links.forces,srcLink:"Vectors/Vectors.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseMove:function(e){return t.mouse=new a.Vector(e.pageX,e.pageY)},onMouseOut:function(e){return t.mouse=void 0}}},setup:function(){return{bitch:new d(new a.Vector(100,100))}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState,s=o.bitch,i=o.mouse;if(i){var a=i.sub(s.pos);s.acc=a.setMag(.5),t.beginPath(),t.moveTo(s.pos.x,s.pos.y),t.lineTo(i.x,i.y),t.strokeStyle="#ccc",t.stroke()}s.update(),s.bounce(n,r),s.render(t),i&&(t.beginPath(),t.arc(i.x,i.y,20,0,360),t.fillStyle=c.colors.brandHover,t.fill())}})}},"./src/entries/client.tsx":function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),o=n("./node_modules/react-dom/index.js"),s=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/components/Layout/ClientAppRoot.tsx");(0,o.hydrate)(r.createElement(s.BrowserRouter,null,r.createElement(i.ClientAppRoot,null)),document.getElementById("root"))},"./src/routes.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r=n("./src/components/Home.tsx"),o=n("./src/components/Vectors/Vectors.tsx"),s=n("./src/components/Forces/Forces.tsx"),i=n("./src/components/Forces/DragResistance.tsx"),a=n("./src/components/Forces/GravityAttraction.tsx"),c=n("./src/components/Forces/MutalAttraction.tsx"),l=n("./src/components/Layout/AppContainer.tsx"),u=n("./src/utils/links.ts");t.routes=[{component:l.AppContainer,routes:[{component:r.Home,exact:!0,path:u.links.home.link},{component:o.Vectors,exact:!0,path:u.links.vectors.link},{component:s.Forces,exact:!0,path:u.links.forces.link},{component:s.Forces,exact:!0,path:u.links.forces.link},{component:i.DragResistance,exact:!0,path:u.links.dragResistance.link},{component:a.GravityAttraction,exact:!0,path:u.links.gravityAttraction.link},{component:c.MutalAttraction,exact:!0,path:u.links.mutalAttraction.link}]}]},"./src/svg/arrow.svg":function(e,t,n){var r=n("./node_modules/react/index.js");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M408 178.5H96.9L239.7 35.7 204 0 0 204l204 204 35.7-35.7L96.9 229.5H408v-51z"}))}o.displayName="Arrow",o.defaultProps={viewBox:"0 0 408 408",width:"408",height:"408"},e.exports=o,o.default=o},"./src/svg/restart.svg":function(e,t,n){var r=n("./node_modules/react/index.js");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M8.661.001h.034c.019-.002.027 0 .039 0a8.58 8.58 0 0 1 5.955 2.42L16.447.645a.286.286 0 0 1 .314-.065.297.297 0 0 1 .186.271l-.294 6.066h-5.715a.294.294 0 0 1-.145-.548l1.73-1.751c-1.026-.988-2.36-1.529-3.832-1.529-2.993.017-5.433 2.47-5.433 5.51.023 2.978 2.457 5.4 5.481 5.422a5.511 5.511 0 0 0 4.719-3.221l2.803 1.293-.019.039c-1.92 3.713-4.946 5.277-8.192 4.944-4.375-.348-7.848-4.013-7.878-8.52C.171 3.876 3.976.042 8.661.001z"}))}o.displayName="Restart",o.defaultProps={viewBox:"0 0 17.12 17.12"},e.exports=o,o.default=o},"./src/utils/defaultStyles.ts":function(e,t,n){"use strict";var r=(0,function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js")).default)(["\n  * {\n    min-width: 0;\n    min-height: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 16px;\n    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;\n    line-height: 1.5;\n    color: ",";\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th,\n  td {\n    padding: 0;\n    text-align: left;\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  input, textarea, button, select {\n    border: 0;\n    outline: none;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    -webkit-appearance: none;\n  }\n\n  input, textarea, button, select, label, a {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n\n  img, embed, iframe, object, audio, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n    border-bottom: 2px solid ",";\n    transition: color ease ",", border-color ease ",";\n\n    &:hover {\n      color: ",";\n      border-color: ",";\n      transition-duration: ",";\n    }\n  }\n\n  html."," {\n    overflow-y: scroll;\n  }\n\n  body."," {\n    overflow: hidden;\n    position: fixed;\n  }\n"],["\n  * {\n    min-width: 0;\n    min-height: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 16px;\n    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;\n    line-height: 1.5;\n    color: ",";\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th,\n  td {\n    padding: 0;\n    text-align: left;\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  input, textarea, button, select {\n    border: 0;\n    outline: none;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    -webkit-appearance: none;\n  }\n\n  input, textarea, button, select, label, a {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n\n  img, embed, iframe, object, audio, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n    border-bottom: 2px solid ",";\n    transition: color ease ",", border-color ease ",";\n\n    &:hover {\n      color: ",";\n      border-color: ",";\n      transition-duration: ",";\n    }\n  }\n\n  html."," {\n    overflow-y: scroll;\n  }\n\n  body."," {\n    overflow: hidden;\n    position: fixed;\n  }\n"]),o=n("./node_modules/styled-components/dist/styled-components.browser.es.js"),s=n("./node_modules/@gnarlycode/react-scroll-state/lib/index.js"),i=n("./src/utils/styles.ts");(0,o.injectGlobal)(r,i.colors.text,i.colors.brand,i.colors.brand,i.dur.norm,i.dur.norm,i.colors.brandHover,i.colors.brandHover,i.dur.fast,s.defaultHtmlLockClass,s.defaultBodyLockClass)},"./src/utils/index.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sqr=function(e){return e*e};var r=t.minmax=function(e,t,n){return Math.max(e,Math.min(n,t))},o=t.normalize=function(e,t,n){return(n-e)/(t-e)};t.narrow=function(e,t,n){return r(0,o(e,t,n),1)},t.random=function(e,t){return Math.random()*(t-e)+e},t.throttle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=void 0,r=void 0;return function(){var o=Date.now();!!n&&o<n+t?(clearTimeout(r),r=window.setTimeout(function(){n=o,e()},t)):(n=o,e())}}},"./src/utils/links.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"/coding-train-practice"+e};t.links={home:{link:r("/"),text:"Home"},vectors:{link:r("/vectors/"),text:"Vectors"},forces:{link:r("/forces/"),text:"Forces"},dragResistance:{link:r("/drag-resistance/"),text:"Drag Resistance"},gravityAttraction:{link:r("/gravity-attraction/"),text:"Gravity Attraction"},mutalAttraction:{link:r("/mutal-attraction/"),text:"Mutal Attraction"}}},"./src/utils/styles.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scrollBarStyle=t.placeholderColor=t.cssEasings=t.noTouchClass=t.touchClass=t.media=t.deviceSizes=t.colors=t.dur=t.durNumbers=void 0;var r=n("./node_modules/styled-components/dist/styled-components.browser.es.js"),o=t.durNumbers={fast:100,norm:350},s=(t.dur={fast:o.fast+"ms",norm:o.norm+"ms"},t.colors={bg:"#f7f7f7",border:"#f0f0f0",brand:"#d716ec",brandHover:"#9400a5",danger:"#ec1651",focus:"#c5c5c5",placeholder:"#bbbdbf",text:"#404041"}),i=t.deviceSizes={phone:767,phoneVertical:420,tablet:1279,tabletSmall:1023};t.media={phone:"max-width: "+i.phone+"px",phoneVertical:"max-width: "+i.phoneVertical+"px",tablet:"max-width: "+i.tablet+"px",tabletSmall:"max-width: "+i.tabletSmall+"px"},t.touchClass="m-touchevents",t.noTouchClass="m-no-touchevents",t.cssEasings={inSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",outSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",inOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",inQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",outQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",inOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",inCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",outCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",inOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",inQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",outQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",inOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",inQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",outQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",inOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",inExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",outExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",inOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",inCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",outCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",inOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",inBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",outBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",inOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},t.placeholderColor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.placeholder;return(0,r.css)(["::-webkit-input-placeholder{color:",";}::-moz-placeholder{color:",";}:-ms-input-placeholder{color:",";}:-moz-placeholder{color:",";}"],e,e,e,e)},t.scrollBarStyle=(0,r.css)(["&::-webkit-scrollbar{width:8px;background-color:transparent;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{border-radius:2px;border-width:2px;border-style:solid;border-color:#fff;background-color:",";}"],s.brand)},0:function(e,t,n){e.exports=n("./src/entries/client.tsx")}});
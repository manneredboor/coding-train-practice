!function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)a=s[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/coding-train-practice";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([105,1]),n()}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"/coding-train-practice"+e};t.links={home:{link:r("/"),text:"Home"},vectors:{link:r("/vectors/"),text:"Vectors"},forces:{link:r("/forces/"),text:"Forces"},dragResistance:{link:r("/drag-resistance/"),text:"Drag Resistance"},gravityAttraction:{link:r("/gravity-attraction/"),text:"Gravity Attraction"},mutalAttraction:{link:r("/mutal-attraction/"),text:"Mutal Attraction"},portDefender:{link:r("/port-defender/"),text:"Port Defender"},harmonicMotion:{link:r("/harmonic-motion/"),text:"Harmonic Motion"},pendulum:{link:r("/pendulum/"),text:"Pendulum"},spring:{link:r("/spring/"),text:"Spring"}}},105:function(e,t,n){e.exports=n(106)},106:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=n(108),i=n(43),a=n(117);(0,o.hydrate)(r.createElement(i.BrowserRouter,null,r.createElement(a.ClientAppRoot,null)),document.getElementById("root"))},117:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.ClientAppRoot=void 0;var r=n(119),o=n(98),i=n(97),a=n(43),s=n(156);t.ClientAppRoot=(0,o.compose)((0,r.hot)(e),a.withRouter)(function(){return(0,i.renderRoutes)(s.routes)})}).call(this,n(118)(e))},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DemoPage=void 0;var r=m(n(4)),o=m(n(11)),i=m(n(3)),a=m(n(7)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),u=n(32),c=m(u),l=n(43),d=n(20),f=n(177),h=n(10),p=m(n(185)),v=m(n(186));function m(e){return e&&e.__esModule?e:{default:e}}var b=(0,u.css)(["position:fixed;padding:0 10px;background-color:#fff;text-transform:uppercase;border:5px solid #f9f4f8;user-select:none;"]),y=(0,u.css)(["display:flex;flex-direction:row;align-items:center;position:fixed;height:75px;border-radius:2px;cursor:pointer;border:none;font-size:16px;",";& svg{display:block;margin:0 10px;width:35px;height:35px;fill:",";transition:ease fill ",";}& div{margin:0 10px;}&:hover{border-color:#f9f4f8;& svg{fill:",";transition-duration:",";}}"],b,d.colors.brand,d.dur.norm,d.colors.brandHover,d.dur.fast),g=(0,c.default)(l.Link).withConfig({componentId:"s1xp6t1s-0"})(["",";top:40px;left:40px;"],y),w=(0,c.default)(l.Link).withConfig({componentId:"s1xp6t1s-1"})(["",";right:40px;top:40px;& svg{transform:rotate(180deg);}"],y),x=c.default.a.withConfig({componentId:"s1xp6t1s-2"})(["",";right:40px;bottom:40px;"],y),k=c.default.div.withConfig({componentId:"s1xp6t1s-3"})(["",";padding:20px;left:40px;bottom:40px;font-size:16px;font-weight:bold;color:",";"],b,d.colors.brand),_=c.default.div.withConfig({componentId:"s1xp6t1s-4"})(["",";top:40px;left:50%;margin-left:-42px;"],y);t.DemoPage=function(e){function t(e){(0,r.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.shouldSetup=!0,n.state={},n}return(0,a.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.canvasProps,r=t.hint,o=t.next,i=t.render,a=t.setup,u=t.srcLink,c=this.state.drawState,l=n&&c?n({drawState:c}):{};return s.createElement(s.Fragment,null,s.createElement(g,{to:h.links.home.link},s.createElement(p.default,null),s.createElement("div",null,"Home")),s.createElement(_,{onClick:function(){return e.shouldSetup=!0}},s.createElement(v.default,null)),o&&s.createElement(w,{to:o.link},s.createElement("div",null,o.text),s.createElement(p.default,null)),u&&s.createElement(x,{href:"https://github.com/manneredboor/coding-train-practice/blob/master/src/components/"+u,target:"_blank"},s.createElement("div",null,"Source")),r&&s.createElement(k,null,r),s.createElement(f.FullScreenCanvas,Object.assign({},l,{render:function(t){var n=t.width,r=t.height;e.shouldSetup&&(e.setState({drawState:a?a({width:n,height:r}):{}}),e.shouldSetup=!1),c&&i(Object.assign({},t,{drawState:c}))}})))}}]),t}(s.PureComponent)},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var r=a(n(4)),o=a(n(11)),i=n(16);function a(e){return e&&e.__esModule?e:{default:e}}t.Vector=function(){function e(t,n){(0,r.default)(this,e),this.x=t,this.y=n}return(0,o.default)(e,[{key:"add",value:function(e){this.x+=e.x,this.y+=e.y}},{key:"sub",value:function(e){this.x-=e.x,this.y-=e.y}},{key:"mult",value:function(e){this.x*=e,this.y*=e}},{key:"div",value:function(e){this.x/=e,this.y/=e}},{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"mag",value:function(){return Math.sqrt((0,i.sqr)(this.x)+(0,i.sqr)(this.y))}},{key:"norm",value:function(){0!==this.mag()&&this.div(this.mag())}},{key:"setMag",value:function(e){this.norm(),this.mult(e)}},{key:"limit",value:function(e){this.mag()>e&&this.setMag(e)}}]),e}()},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r=n(10),o=n(157),i=n(173),a=n(187),s=n(95),u=n(188),c=n(199),l=n(200),d=n(201),f=n(202),h=n(204),p=n(205);t.routes=[{component:o.AppContainer,routes:[{component:c.Home,exact:!0,path:r.links.home.link},{component:p.Vectors,exact:!0,path:r.links.vectors.link},{component:a.Forces,exact:!0,path:r.links.forces.link},{component:a.Forces,exact:!0,path:r.links.forces.link},{component:i.DragResistance,exact:!0,path:r.links.dragResistance.link},{component:s.GravityAttraction,exact:!0,path:r.links.gravityAttraction.link},{component:l.MutalAttraction,exact:!0,path:r.links.mutalAttraction.link},{component:f.PortDefender,exact:!0,path:r.links.portDefender.link},{component:u.HarmonicMotion,exact:!0,path:r.links.harmonicMotion.link},{component:d.Pendulum,exact:!0,path:r.links.pendulum.link},{component:h.Spring,exact:!0,path:r.links.spring.link}]}]},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppContainer=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=function(e){return e&&e.__esModule?e:{default:e}}(n(32)),i=n(97),a=n(92);n(165);var s=o.default.div.withConfig({componentId:"czanyq-0"})(["display:flex;flex-direction:column;width:100%;background:linear-gradient(#fcfde5,#f5ffef,#faf1fb,#ffe1f7);"]);t.AppContainer=function(e){var t=e.route;return r.createElement(a.ScrollStateProvider,null,r.createElement(a.ScrollRestorer,null),r.createElement(s,null,t&&(0,i.renderRoutes)(t.routes)))}},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sqr=function(e){return e*e};var r=t.minmax=function(e,t,n){return Math.max(e,Math.min(n,t))},o=t.normalize=function(e,t,n){return(n-e)/(t-e)};t.narrow=function(e,t,n){return r(0,o(e,t,n),1)},t.random=function(e,t){return Math.random()*(t-e)+e},t.throttle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=void 0,r=void 0;return function(){var o=Date.now();!!n&&o<n+t?(clearTimeout(r),r=window.setTimeout(function(){n=o,e()},t)):(n=o,e())}}},165:function(e,t,n){"use strict";var r=(0,function(e){return e&&e.__esModule?e:{default:e}}(n(166)).default)(["\n  * {\n    min-width: 0;\n    min-height: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 16px;\n    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;\n    line-height: 1.5;\n    color: ",";\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th,\n  td {\n    padding: 0;\n    text-align: left;\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  input, textarea, button, select {\n    border: 0;\n    outline: none;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    -webkit-appearance: none;\n  }\n\n  input, textarea, button, select, label, a {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n\n  img, embed, iframe, object, audio, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n    border-bottom: 2px solid ",";\n    transition: color ease ",", border-color ease ",";\n\n    &:hover {\n      color: ",";\n      border-color: ",";\n      transition-duration: ",";\n    }\n  }\n\n  html."," {\n    overflow-y: scroll;\n  }\n\n  body."," {\n    overflow: hidden;\n    position: fixed;\n  }\n"],["\n  * {\n    min-width: 0;\n    min-height: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 16px;\n    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;\n    line-height: 1.5;\n    color: ",";\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th,\n  td {\n    padding: 0;\n    text-align: left;\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  input, textarea, button, select {\n    border: 0;\n    outline: none;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    -webkit-appearance: none;\n  }\n\n  input, textarea, button, select, label, a {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n\n  img, embed, iframe, object, audio, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n    border-bottom: 2px solid ",";\n    transition: color ease ",", border-color ease ",";\n\n    &:hover {\n      color: ",";\n      border-color: ",";\n      transition-duration: ",";\n    }\n  }\n\n  html."," {\n    overflow-y: scroll;\n  }\n\n  body."," {\n    overflow: hidden;\n    position: fixed;\n  }\n"]),o=n(32),i=n(92),a=n(20);(0,o.injectGlobal)(r,a.colors.text,a.colors.brand,a.colors.brand,a.dur.norm,a.dur.norm,a.colors.brandHover,a.colors.brandHover,a.dur.fast,i.defaultHtmlLockClass,i.defaultBodyLockClass)},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DragResistance=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=n(14),i=n(33),a=n(16),s=n(20),u=n(10);var c=o.DemoPage;t.DragResistance=function(){return r.createElement(c,{next:u.links.gravityAttraction,srcLink:"Forces/DragResistance.tsx",setup:function(e){var t=e.width;return{guys:Array.from(Array(6)).map(function(){return new i.Mover((0,a.random)(90,t-90),100)})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState;t.save(),t.fillStyle=s.colors.brandHover,t.globalAlpha=.25,t.fillRect(0,r/2,n,r),t.restore(),o.guys&&o.guys.forEach(function(e){if(e.gravity(),e.pos.y>r/2){var o=e.vel.copy(),i=e.vel.mag();o.mult(-.00125*(0,a.sqr)(i)),e.applyForce(o)}e.edges(n,r),e.update(),e.render(t)})}})}},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullScreenCanvas=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(32)),o=n(178);t.FullScreenCanvas=(0,r.default)(o.MeasuredCanvas).withConfig({componentId:"s1vbte3a-0"})(["width:100%;height:100vh;"])},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredCanvas=void 0;var r=l(n(4)),o=l(n(11)),i=l(n(3)),a=l(n(7)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),u=l(n(179)),c=n(184);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.MeasuredCanvas=function(e){function t(e){(0,r.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return(0,a.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.width,t.height,d(t,["className","width","height"])),o=this.state.size;return s.createElement(u.default,{bounds:!0,onResize:function(t){var n=t.bounds;return e.setState({size:n})}},function(e){var t=e.measureRef;return s.createElement("div",{className:n,ref:t},o&&s.createElement(c.CanvasAnimFrame,Object.assign({},o,r)))})}}]),t}(s.PureComponent)},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasAnimFrame=void 0;var r=c(n(4)),o=c(n(11)),i=c(n(3)),a=c(n(7)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),u=c(n(67));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.CanvasAnimFrame=function(e){function t(){(0,r.default)(this,t);var e=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.canvas=s.createRef(),e.scale=u.default&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1,e.renderFrame=function(t){var n=e.props,r=n.height,o=n.width;if(e.canvas.current&&o&&r){var i=e.getContext();i.save(),1!==e.scale&&i.scale(e.scale,e.scale),i.imageSmoothingEnabled=!0,i.clearRect(0,0,o,r),e.props.render({ctx:i,height:r,prevTime:e.prevTime,time:t,width:o}),i.restore(),e.prevTime=t}e.rafID=window.requestAnimationFrame(e.renderFrame)},e}return(0,a.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.rafID=window.requestAnimationFrame(this.renderFrame)}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.rafID)}},{key:"getContext",value:function(){return this.ctx||!this.canvas.current?this.ctx:(this.ctx=this.canvas.current.getContext("2d"),this.ctx)}},{key:"render",value:function(){var e=this.props,t=(e.render,e.width),n=e.height,r=l(e,["render","width","height"]);return s.createElement("canvas",Object.assign({height:n*this.scale||"",width:t*this.scale||"",ref:this.canvas},r,{style:Object.assign({display:"block",height:n||"100%",width:t||"100%"},r.style?r.style:{})}))}}]),t}(s.PureComponent)},185:function(e,t,n){var r=n(1);function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M408 178.5H96.9L239.7 35.7 204 0 0 204l204 204 35.7-35.7L96.9 229.5H408v-51z"}))}o.displayName="Arrow",o.defaultProps={viewBox:"0 0 408 408",width:"408",height:"408"},e.exports=o,o.default=o},186:function(e,t,n){var r=n(1);function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M8.661.001h.034c.019-.002.027 0 .039 0a8.58 8.58 0 0 1 5.955 2.42L16.447.645a.286.286 0 0 1 .314-.065.297.297 0 0 1 .186.271l-.294 6.066h-5.715a.294.294 0 0 1-.145-.548l1.73-1.751c-1.026-.988-2.36-1.529-3.832-1.529-2.993.017-5.433 2.47-5.433 5.51.023 2.978 2.457 5.4 5.481 5.422a5.511 5.511 0 0 0 4.719-3.221l2.803 1.293-.019.039c-1.92 3.713-4.946 5.277-8.192 4.944-4.375-.348-7.848-4.013-7.878-8.52C.171 3.876 3.976.042 8.661.001z"}))}o.displayName="Restart",o.defaultProps={viewBox:"0 0 17.12 17.12"},e.exports=o,o.default=o},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Forces=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=n(14),i=n(15),a=n(33),s=n(16),u=n(10);var c=new i.Vector(.5,0),l=o.DemoPage;t.Forces=function(){return r.createElement(l,{hint:"click for wind",next:u.links.dragResistance,srcLink:"Forces/Forces.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.isWind=!0},onMouseUp:function(){return t.isWind=!1}}},setup:function(e){var t=e.width,n=e.height;return{guys:Array.from(Array(6)).map(function(){return new a.Mover((0,s.random)(90,t-90),n/2)})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState;o.guys.forEach(function(e){o.isWind&&e.applyForce(c),e.gravity(),e.edges(n,r),e.update(),e.render(t)})}})}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HarmonicMotion=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(189)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),i=n(14),a=n(15),s=n(20),u=n(10);var c=i.DemoPage;t.HarmonicMotion=function(){return o.createElement(c,{next:u.links.pendulum,srcLink:"HarmonicMotion/HarmonicMotion.tsx",setup:function(e){e.width,e.height;return{balls:[].concat((0,r.default)(Array(21))).map(function(e,t,n){return new a.Vector(0,50*(t-n.length/2))})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState,i=e.time,a=o.balls;t.save(),t.translate(n/2,r/2),a.forEach(function(e,n){var r=100*Math.sin(i/3e3*(2*Math.PI)+100*n);t.beginPath(),t.moveTo(0,e.y),t.lineTo(r,e.y),t.strokeStyle="#ccc",t.stroke(),t.beginPath(),t.arc(r,e.y,20,0,360),t.fillStyle=s.colors.brand,t.fill()}),t.restore()}})}},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=function(e){return e&&e.__esModule?e:{default:e}}(n(32)),i=n(43),a=n(10);var s=o.default.div.withConfig({componentId:"r4defv-0"})(["margin:80px auto;padding:60px;max-width:600px;background-color:#fff;border:5px solid #f9f4f8;h2{font-weight:bold;font-size:42px;margin-bottom:20px;}p{font-size:18px;}"]),u=(0,o.default)(i.Link).withConfig({componentId:"r4defv-1"})(["margin:25px 0;display:block;width:fit-content;font-size:32px;"]),c=function(e){return r.createElement(u,{to:e.link},e.text)};t.Home=function(){return r.createElement(s,null,r.createElement("h2",null,"Hello!"),r.createElement("p",null,"Here I'm practicing in some math and physics programming while watching"," ",r.createElement("a",{target:"_blank",href:"https://www.youtube.com/user/shiffman/videos"},"Coding Train Videos"),r.createElement("br",null),r.createElement("br",null),"Sources are"," ",r.createElement("a",{target:"_blank",href:"https://github.com/manneredboor/coding-train-practice"},"here"),r.createElement("br",null),r.createElement("br",null),"You can check out the demos:"),Object.keys(a.links).slice(1).map(function(e,t){return r.createElement(c,Object.assign({key:t},a.links[e]))}),r.createElement("br",null),r.createElement("div",{style:{textAlign:"right",opacity:.5}},r.createElement("a",{target:"_blank",href:"https://twitter.com/dmitrypodlesny"},"my twitter"),"     ",r.createElement("a",{target:"_blank",href:"https://www.instagram.com/under.forest/"},"my insta")))}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scrollBarStyle=t.placeholderColor=t.cssEasings=t.noTouchClass=t.touchClass=t.media=t.deviceSizes=t.colors=t.dur=t.durNumbers=void 0;var r=n(32),o=t.durNumbers={fast:100,norm:350},i=(t.dur={fast:o.fast+"ms",norm:o.norm+"ms"},t.colors={bg:"#f7f7f7",border:"#f0f0f0",brand:"#d716ec",brandHover:"#9400a5",danger:"#ec1651",focus:"#c5c5c5",placeholder:"#bbbdbf",text:"#404041"}),a=t.deviceSizes={phone:767,phoneVertical:420,tablet:1279,tabletSmall:1023};t.media={phone:"max-width: "+a.phone+"px",phoneVertical:"max-width: "+a.phoneVertical+"px",tablet:"max-width: "+a.tablet+"px",tabletSmall:"max-width: "+a.tabletSmall+"px"},t.touchClass="m-touchevents",t.noTouchClass="m-no-touchevents",t.cssEasings={inSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",outSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",inOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",inQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",outQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",inOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",inCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",outCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",inOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",inQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",outQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",inOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",inQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",outQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",inOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",inExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",outExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",inOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",inCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",outCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",inOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",inBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",outBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",inOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},t.placeholderColor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.placeholder;return(0,r.css)(["::-webkit-input-placeholder{color:",";}::-moz-placeholder{color:",";}:-ms-input-placeholder{color:",";}:-moz-placeholder{color:",";}"],e,e,e,e)},t.scrollBarStyle=(0,r.css)(["&::-webkit-scrollbar{width:8px;background-color:transparent;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{border-radius:2px;border-width:2px;border-style:solid;border-color:#fff;background-color:",";}"],i.brand)},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MutalAttraction=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=n(14),i=n(15),a=n(95),s=n(33),u=n(16),c=n(10);var l=o.DemoPage;t.MutalAttraction=function(){return r.createElement(l,{hint:"click to create",next:c.links.portDefender,srcLink:"Forces/MutalAttraction.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.mouse&&t.guys.push(new s.Mover(t.mouse.x,t.mouse.y))},onMouseMove:function(e){return t.mouse=new i.Vector(e.pageX,e.pageY)}}},setup:function(e){var t=e.width,n=e.height;return{guys:Array.from(Array(5)).map(function(){var e=new i.Vector((0,u.random)(-1,1),(0,u.random)(-1,1)),r=new s.Mover((0,u.random)(0,t),(0,u.random)(0,n));return r.applyForce(e),r})}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState.guys;o.forEach(function(e){o.forEach(function(t){return(0,a.gravityAttraction)(e,t)}),e.edgesLoop(n,r),e.update(),e.render(t)})}})}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pendulum=void 0;var r=l(n(4)),o=l(n(11)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=n(14),s=n(15),u=n(20),c=n(10);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t){(0,r.default)(this,e),this.aAcc=0,this.aVel=0,this.angle=t.angle,this.bob=new s.Vector(0,0),this.len=t.len,this.mass=t.mass,this.origin=t.origin}return(0,o.default)(e,[{key:"update",value:function(){this.aAcc=-9e-4*this.mass*Math.sin(this.angle),this.aVel+=this.aAcc,this.angle+=this.aVel,this.aVel*=.999,this.bob.x=this.origin.x+this.len*Math.sin(this.angle),this.bob.y=this.origin.y+this.len*Math.cos(this.angle)}},{key:"draw",value:function(e){e.save(),e.beginPath(),e.moveTo(this.origin.x,this.origin.y),e.lineTo(this.bob.x,this.bob.y),e.strokeStyle="#ccc",e.stroke(),e.beginPath(),e.arc(this.bob.x,this.bob.y,20*Math.pow(this.mass,2),0,360),e.fillStyle=u.colors.brand,e.fill(),e.restore()}}]),e}(),f=a.DemoPage;t.Pendulum=function(){return i.createElement(f,{next:c.links.spring,srcLink:"Pendulum/Pendulum.tsx",setup:function(e){var t=e.width,n=e.height;return{pendulums:[new d({angle:Math.PI/4,len:.5*n,mass:.9,origin:new s.Vector(.25*t,0)}),new d({angle:Math.PI/4,len:.5*n,mass:1,origin:new s.Vector(.5*t,0)}),new d({angle:Math.PI/4,len:.5*n,mass:1.1,origin:new s.Vector(.75*t,0)})]}},render:function(e){var t=e.ctx,n=(e.width,e.height,e.drawState);e.time;n.pendulums.forEach(function(e){e.update(),e.draw(t)})}})}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PortDefender=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=n(14),i=n(15),a=n(16),s=n(96),u=n(203),c=n(10);var l=o.DemoPage;t.PortDefender=function(){return r.createElement(l,{next:c.links.harmonicMotion,srcLink:"PortDefender/PortDefender.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.fire=!0},onMouseMove:function(e){t.mouse.x=e.pageX,t.mouse.y=e.pageY},style:{cursor:"crosshair"}}},setup:function(e){var t=e.width,n=e.height;return{cannon:{h:30,pos:new i.Vector(100,235),w:60},enemies:[],missles:[],mouse:new i.Vector(t/2,n/2)}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState,c=e.time,l=o.mouse,d=o.cannon,f=o.fire,h=o.missles,p=o.reloadStart,v=o.enemies,m=function(e){return r-e},b=m(200),y=m(205),g=function(e){return new i.Vector(e.x,m(e.y))}(d.pos),w=l.copy();w.sub(g);var x=Math.atan(w.y/w.x);if(w.y>0&&(w.y=0,x=0),w.x<0&&(w.x=0,x=-90*Math.PI/180),w.mag()<150&&w.setMag(150),w.mag()>350&&w.setMag(350),f){if(!p||c>=p+800){var k=new u.Missle(g);k.applyForce(w),o.missles.push(k),o.reloadStart=c}o.fire=!1}var _=[];if(h.forEach(function(e,n){e.pos.y>b&&e.applyForce((0,u.waterResist)(e.vel)),e.gravity(),e.update(),e.render(t),e.pos.y>r&&_.push(n)}),_.forEach(function(e){return h.splice(e,1)}),o.nextSpawn&&o.nextSpawn<=c){var M=new u.Enemy(n,b);M.applyForce(new i.Vector(-100,0)),o.enemies.push(M),o.nextSpawn=void 0}o.nextSpawn||(o.nextSpawn=c+(0,a.random)(1e3,4e3));var P=[];v.forEach(function(e,n){e.isDead?(e.gravity(),e.applyForce((0,u.waterResist)(e.vel))):h.forEach(function(t){t.pos.x>e.pos.x-e.width/2&&t.pos.x<e.pos.x+e.width/2&&t.pos.y>e.pos.y-e.height/2&&t.pos.y<e.pos.y+e.height/2&&(e.isDead=!0,t.applyForce(e.vel),e.applyForce(t.vel),e.applyAngForce(2))}),e.update(),e.render(t),(e.pos.y>r||e.pos.x<0)&&P.push(n)}),P.forEach(function(e){return v.splice(e,1)}),(0,s.drawScene)({GROUND_WIDTH:200,WATER_HEIGHT:200,ctx:t,groundH:y,height:r,waterH:b,width:n}),(0,s.drawCannon)({GROUND_HEIGHT:205,angle:x,cannon:d,cannonPos:g,cannonToMouse:w,ctx:t})}})}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Enemy=t.Missle=t.waterResist=void 0;var r=d(n(4)),o=d(n(11)),i=d(n(3)),a=d(n(7)),s=n(15),u=n(33),c=n(16),l=n(96);function d(e){return e&&e.__esModule?e:{default:e}}t.waterResist=function(e){var t=e.copy(),n=e.mag();return t.mult(-.005*(0,c.sqr)(n)),t},t.Missle=function(e){function t(e){(0,r.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.x,e.y));return n.mass=10,n}return(0,a.default)(t,e),(0,o.default)(t,[{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,15,0,360),e.fillStyle="#000",e.fill()}}]),t}(u.Mover),t.Enemy=function(e){function t(e,n){(0,r.default)(this,t);var o=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.width=120,o.height=40,o.isDead=!1,o.ang=0,o.angVel=0,o.angAcc=0,o.mass=30,o}return(0,a.default)(t,e),(0,o.default)(t,[{key:"update",value:function(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new s.Vector(0,0),this.angVel+=this.angAcc,this.ang+=this.angVel,this.angAcc=0}},{key:"applyAngForce",value:function(e){this.angAcc+=e}},{key:"render",value:function(e){(0,l.drawShip)({ang:this.ang,ctx:e,height:this.height,isDead:this.isDead,pos:this.pos,width:this.width})}}]),t}(u.Mover)},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Spring=void 0;var r=c(n(4)),o=c(n(11)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=n(14),s=n(15),u=n(33);function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){(0,r.default)(this,e),this.elastic=.025,this.origin=t.origin.copy(),this.restLen=t.restLen,this.bob=new u.Mover(t.startPos.x,t.startPos.y)}return(0,o.default)(e,[{key:"update",value:function(){var e=this.bob.pos.copy();e.sub(this.origin);var t=e.mag()-this.restLen;e.norm(),e.mult(-this.elastic*t),this.bob.applyForce(e),this.bob.update()}},{key:"render",value:function(e){e.beginPath(),e.moveTo(this.origin.x,this.origin.y),e.lineTo(this.bob.pos.x,this.bob.pos.y),e.strokeStyle="#ccc",e.stroke(),this.bob.render(e)}}]),e}(),d=new s.Vector(.5,0),f=a.DemoPage;t.Spring=function(){return i.createElement(f,{hint:"click for wind",srcLink:"Pendulum/Spring.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.isWind=!0},onMouseUp:function(){return t.isWind=!1}}},setup:function(e){var t=e.width,n=e.height;return{spring:new l({origin:new s.Vector(.5*t,0),restLen:.5*n,startPos:new s.Vector(.5*t,.7*n)})}},render:function(e){var t=e.ctx,n=(e.width,e.height,e.drawState);e.time;n.isWind&&n.spring.bob.applyForce(d),n.spring.bob.gravity(),n.spring.update(),n.spring.render(t)}})}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vectors=t.Mover=void 0;var r=l(n(4)),o=l(n(11)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=n(14),s=n(206),u=n(20),c=n(10);function l(e){return e&&e.__esModule?e:{default:e}}var d=t.Mover=function(){function e(t){(0,r.default)(this,e),this.pos=t,this.acc=new s.Vector(0,0),this.vel=new s.Vector(0,0)}return(0,o.default)(e,[{key:"update",value:function(){this.vel=this.vel.add(this.acc),this.pos=this.pos.add(this.vel)}},{key:"bounce",value:function(e,t){(this.pos.x>e||this.pos.x<0)&&(this.vel.x*=-1),(this.pos.y>t||this.pos.y<0)&&(this.vel.y*=-1)}},{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,20,0,360),e.fillStyle=u.colors.brand,e.fill()}}]),e}(),f=a.DemoPage;t.Vectors=function(){return i.createElement(f,{hint:"Move mouse around",next:c.links.forces,srcLink:"Vectors/Vectors.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseMove:function(e){return t.mouse=new s.Vector(e.pageX,e.pageY)},onMouseOut:function(e){return t.mouse=void 0}}},setup:function(){return{bitch:new d(new s.Vector(100,100))}},render:function(e){var t=e.ctx,n=e.width,r=e.height,o=e.drawState,i=o.bitch,a=o.mouse;if(a){var s=a.sub(i.pos);i.acc=s.setMag(.5),t.beginPath(),t.moveTo(i.pos.x,i.pos.y),t.lineTo(a.x,a.y),t.strokeStyle="#ccc",t.stroke()}i.update(),i.bounce(n,r),i.render(t),a&&(t.beginPath(),t.arc(a.x,a.y,20,0,360),t.fillStyle=u.colors.brandHover,t.fill())}})}},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var r=a(n(4)),o=a(n(11)),i=n(16);function a(e){return e&&e.__esModule?e:{default:e}}t.Vector=function(){function e(t,n){(0,r.default)(this,e),this.x=t,this.y=n}return(0,o.default)(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"sub",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"mult",value:function(t){return new e(this.x*t,this.y*t)}},{key:"div",value:function(t){return new e(this.x/t,this.y/t)}},{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"mag",value:function(){return Math.sqrt((0,i.sqr)(this.x)+(0,i.sqr)(this.y))}},{key:"norm",value:function(){var e=this.mag();return 0===e?this.copy():this.div(e)}},{key:"setMag",value:function(e){return this.norm().mult(e)}},{key:"limit",value:function(e){return this.mag()<=e?this:this.setMag(e)}}]),e}()},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Mover=void 0;var r=u(n(4)),o=u(n(11)),i=n(15),a=n(20),s=n(16);function u(e){return e&&e.__esModule?e:{default:e}}var c=new i.Vector(0,.98);t.Mover=function(){function e(t,n){(0,r.default)(this,e),this.pos=new i.Vector(t,n),this.acc=new i.Vector(0,0),this.vel=new i.Vector(0,0),this.mass=(0,s.random)(1,4)}return(0,o.default)(e,[{key:"applyForce",value:function(e){var t=e.copy();t.div(this.mass),this.acc.add(t)}},{key:"gravity",value:function(){var e=c.copy();e.mult(this.mass),this.applyForce(e)}},{key:"update",value:function(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new i.Vector(0,0)}},{key:"edges",value:function(e,t){var n=this.pos,r=this.vel;n.x>e&&(n.x=e,r.x*=-1),n.x<0&&(n.x=0,r.x*=-1),n.y>t&&(n.y=t,r.y*=-1),n.y<0&&(n.y=0,r.y*=-1)}},{key:"edgesLoop",value:function(e,t){var n=this.pos;n.x>e&&(n.x=0),n.x<0&&(n.x=e),n.y>t&&(n.y=0),n.y<0&&(n.y=t)}},{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,10*this.mass,0,360),e.fillStyle=a.colors.brand,e.fill()}}]),e}()},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GravityAttraction=t.gravityAttraction=void 0;var r=f(n(4)),o=f(n(11)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=n(14),s=n(15),u=n(33),c=n(16),l=n(10),d=n(20);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(){function e(t,n){(0,r.default)(this,e),this.mass=3,this.pos=new s.Vector(t,n)}return(0,o.default)(e,[{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,10*this.mass,0,360),e.fillStyle=d.colors.brandHover,e.strokeStyle=d.colors.brand,e.lineWidth=20,e.stroke(),e.fill()}}]),e}(),p=t.gravityAttraction=function(e,t){var n=e.pos.copy();n.sub(t.pos);var r=n.mag(),o=9800*t.mass*e.mass/(0,c.sqr)(r);o>1?o=1:o<.01&&(o=.01);var i=n.copy();i.norm(),i.mult(o),t.applyForce(i)},v=a.DemoPage;t.GravityAttraction=function(){return i.createElement(v,{hint:"click to move attractor",next:l.links.mutalAttraction,srcLink:"Forces/GravityAttraction.tsx",canvasProps:function(e){var t=e.drawState;return{onMouseDown:function(){return t.isMoving=!0},onMouseMove:function(e){return t.mouse=new s.Vector(e.pageX,e.pageY)},onMouseUp:function(){return t.isMoving=!1}}},setup:function(e){var t=e.width,n=e.height,r=Array.from(Array(3)).map(function(){var e=.1*n,r=(n-2*e)/2,o=(0,c.random)(e,r),i=new u.Mover(t/2,o),a=(r-o)/(1/i.mass*20);return i.applyForce(new s.Vector(a,0)),i});return{attractor:new h(t/2,n/2),guys:r}},render:function(e){var t=e.ctx,n=(e.width,e.height,e.drawState),r=n.mouse,o=n.isMoving,i=n.attractor,a=n.guys;o&&r&&(i.pos=r),a.forEach(function(e){p(i,e),e.update(),e.render(t)}),i.render(t)}})}},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.drawShip=function(e){var t=e.ctx,n=r(e,["ctx"]);t.save(),t.beginPath(),t.fillStyle=n.isDead?"#611":"#e33",t.translate(n.pos.x,n.pos.y),t.rotate(n.ang*Math.PI/180);var o=n.height/3*-2;t.moveTo(-n.width/2,o),t.lineTo(-n.width/4,n.height/3),t.lineTo(n.width/2,n.height/3),t.lineTo(n.width/2,o),t.lineTo(n.width/2-10,o),t.lineTo(n.width/2-10,o-5),t.lineTo(0,o-10),t.lineTo(0,o+5),t.closePath(),t.fill(),t.restore()},t.drawScene=function(e){var t=e.ctx,n=r(e,["ctx"]);t.fillStyle="#dd3",t.fillRect(0,n.groundH,n.GROUND_WIDTH,10),t.fillStyle="#533",t.fillRect(0,n.waterH+5,n.GROUND_WIDTH,n.height),t.globalAlpha=.6,t.fillStyle="#46d",t.fillRect(n.GROUND_WIDTH,n.waterH,n.width-n.GROUND_WIDTH,n.WATER_HEIGHT),t.globalAlpha=1},t.drawCannon=function(e){var t=e.ctx,n=r(e,["ctx"]);t.save(),t.translate(n.cannonPos.x,n.cannonPos.y),t.beginPath(),t.moveTo(0,0),t.lineTo(n.cannonToMouse.x,n.cannonToMouse.y),t.strokeStyle="#f77",t.lineWidth=20,t.globalAlpha=.1,t.stroke(),t.globalAlpha=1,t.save(),t.rotate(n.angle),t.fillStyle="#222",t.fillRect(-20,-n.cannon.h/2,n.cannon.w,n.cannon.h),t.fillRect(-25,-4,6,9),t.restore();var o=n.cannon.pos.y-n.GROUND_HEIGHT+5;t.fillStyle="#333",t.fillRect(-5,-5,10,o),t.fillRect(-30,o-5,60,10),t.restore()}}});
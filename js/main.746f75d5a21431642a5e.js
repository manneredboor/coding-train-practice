!function(e){function t(t){for(var o,i,a=t[0],l=t[1],c=t[2],d=0,f=[];d<a.length;d++)i=a[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/coding-train-practice";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;s.push([0,1]),n()}({"./src/components/Forces/Forces.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Forces=t.Mover=void 0;var o=f(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),r=f(n("./node_modules/babel-runtime/helpers/inherits.js")),s=f(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),i=f(n("./node_modules/babel-runtime/helpers/createClass.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),l=n("./src/components/Layout/DemoPage.tsx"),c=n("./src/components/Utils/FullScreenCanvas.tsx"),u=n("./src/components/Vectors/VectorMutable.ts"),d=n("./src/utils/styles.ts");function f(e){return e&&e.__esModule?e:{default:e}}var p=t.Mover=function(){function e(t){(0,s.default)(this,e),this.pos=t,this.acc=new u.Vector(0,0),this.vel=new u.Vector(0,0)}return(0,i.default)(e,[{key:"update",value:function(e,t){this.edges(e,t),this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new u.Vector(0,0)}},{key:"applyForce",value:function(e){this.acc.add(e)}},{key:"edges",value:function(e,t){var n=this.pos,o=this.vel;n.x>e&&(n.x=e,o.x*=-1),n.x<0&&(n.x=0,o.x*=-1),n.y>t&&(n.y=t,o.y*=-1),n.y<0&&(n.y=0,o.y*=-1)}},{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,20,0,360),e.fillStyle=d.colors.brand,e.fill()}}]),e}(),h=new u.Vector(0,1),m=new u.Vector(.5,0);t.Forces=function(e){function t(){(0,s.default)(this,t);var e=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.drawState={},e}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this;return a.createElement(l.DemoPage,{hint:"click for wind",srcLink:"https://github.com/manneredboor/coding-train-practice/blob/master/src/components/Forces/Forces.tsx"},a.createElement(c.FullScreenCanvas,{onMouseDown:function(){e.drawState.isWind=!0},onMouseUp:function(){e.drawState.isWind=!1},render:function(t){var n=t.ctx,o=t.width,r=t.height;e.drawState.mrBall||(e.drawState.mrBall=new p(new u.Vector(o/2,r/2)));var s=e.drawState.mrBall;s.applyForce(h),e.drawState.isWind&&s.applyForce(m),s.update(o,r),s.render(n)}}))}}]),t}(a.PureComponent)},"./src/components/Home.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var o=a(n("./node_modules/react/index.js")),r=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/styled-components/dist/styled-components.browser.es.js")),s=n("./node_modules/react-router-dom/es/index.js"),i=a(n("./src/utils/links.ts"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var l=r.default.div.withConfig({componentId:"r4defv-0"})(["margin:80px auto;padding:60px;max-width:600px;background-color:#fff;border:5px solid #f9f4f8;h2{font-weight:bold;font-size:42px;margin-bottom:20px;}p{font-size:18px;}"]),c=(0,r.default)(s.Link).withConfig({componentId:"r4defv-1"})(["margin:25px 0;display:block;width:fit-content;font-size:32px;"]);t.Home=function(){return o.createElement(l,null,o.createElement("h2",null,"Hello!"),o.createElement("p",null,"Here I'm practicing in some math and physics programming while watching"," ",o.createElement("a",{target:"_blank",href:"https://www.youtube.com/user/shiffman/videos"},"Coding Train Videos"),".",o.createElement("br",null),o.createElement("br",null),"You can check out the demos:"),o.createElement(c,{to:i.vectors},"Vectors"),o.createElement(c,{to:i.forces},"Forces"))}},"./src/components/Layout/AppContainer.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppContainer=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),r=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/styled-components/dist/styled-components.browser.es.js")),s=n("./node_modules/react-router-config/es/index.js"),i=n("./node_modules/@gnarlycode/react-scroll-state/lib/index.js");n("./src/utils/defaultStyles.ts");var a=r.default.div.withConfig({componentId:"czanyq-0"})(["display:flex;flex-direction:column;width:100%;background:linear-gradient(#fcfde5,#f5ffef,#faf1fb,#ffe1f7);"]);t.AppContainer=function(e){var t=e.route;return o.createElement(i.ScrollStateProvider,null,o.createElement(i.ScrollRestorer,null),o.createElement(a,null,t&&(0,s.renderRoutes)(t.routes)))}},"./src/components/Layout/ClientAppRoot.tsx":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.ClientAppRoot=void 0;var o=n("./node_modules/react-hot-loader/index.js"),r=n("./node_modules/recompose/dist/Recompose.esm.js"),s=n("./node_modules/react-router-config/es/index.js"),i=n("./node_modules/react-router-dom/es/index.js"),a=n("./src/routes.tsx");t.ClientAppRoot=(0,r.compose)((0,o.hot)(e),i.withRouter)(function(){return(0,s.renderRoutes)(a.routes)})}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/components/Layout/DemoPage.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DemoPage=void 0;var o=d(n("./node_modules/react/index.js")),r=n("./node_modules/styled-components/dist/styled-components.browser.es.js"),s=u(r),i=n("./node_modules/react-router-dom/es/index.js"),a=n("./src/utils/styles.ts"),l=d(n("./src/utils/links.ts")),c=u(n("./src/svg/arrow.svg"));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var f=(0,r.css)(["position:fixed;padding:0 10px;background-color:#fff;text-transform:uppercase;border:5px solid #f9f4f8;"]),p=(0,r.css)(["display:flex;flex-direction:row;align-items:center;position:fixed;height:75px;border-radius:2px;cursor:pointer;border:none;font-size:16px;",";& svg{display:block;margin:0 10px;width:35px;height:35px;fill:",";transition:ease fill ",";}& div{margin:0 10px;}&:hover{border-color:#f9f4f8;& svg{fill:",";transition-duration:",";}}"],f,a.colors.brand,a.dur.norm,a.colors.brandHover,a.dur.fast),h=(0,s.default)(i.Link).withConfig({componentId:"s1xp6t1s-0"})(["",";top:40px;left:40px;"],p),m=(0,s.default)(i.Link).withConfig({componentId:"s1xp6t1s-1"})(["",";right:40px;top:40px;& svg{transform:rotate(180deg);}"],p),b=s.default.a.withConfig({componentId:"s1xp6t1s-2"})(["",";right:40px;bottom:40px;"],p),v=s.default.div.withConfig({componentId:"s1xp6t1s-3"})(["",";padding:20px;left:40px;bottom:40px;font-size:16px;font-weight:bold;color:",";"],f,a.colors.brand);t.DemoPage=function(e){var t=e.children,n=e.hint,r=e.nextLink,s=e.nextText,i=e.srcLink;return o.createElement(o.Fragment,null,o.createElement(h,{to:l.home},o.createElement(c.default,null),o.createElement("div",null,"Home")),r&&o.createElement(m,{to:r},o.createElement("div",null,s),o.createElement(c.default,null)),i&&o.createElement(b,{href:i,target:"_blank"},o.createElement("div",null,"Source")),n&&o.createElement(v,null,n),t)}},"./src/components/Utils/CanvasAnimFrame.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasAnimFrame=void 0;var o=c(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=c(n("./node_modules/babel-runtime/helpers/createClass.js")),s=c(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=c(n("./node_modules/babel-runtime/helpers/inherits.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),l=c(n("./node_modules/is-in-browser/dist/module.js"));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};t.CanvasAnimFrame=function(e){function t(){(0,o.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.canvas=a.createRef(),e.scale=l.default&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1,e.renderFrame=function(t){var n=e.props,o=n.height,r=n.width;if(e.canvas.current&&r&&o){var s=e.getContext();s.save(),1!==e.scale&&s.scale(e.scale,e.scale),s.imageSmoothingEnabled=!0,s.clearRect(0,0,r,o),e.props.render({ctx:s,height:o,prevTime:e.prevTime,time:t,width:r}),s.restore(),e.prevTime=t}e.rafID=window.requestAnimationFrame(e.renderFrame)},e}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.rafID=window.requestAnimationFrame(this.renderFrame)}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.rafID)}},{key:"getContext",value:function(){return this.ctx||!this.canvas.current?this.ctx:(this.ctx=this.canvas.current.getContext("2d"),this.ctx)}},{key:"render",value:function(){var e=this.props,t=(e.render,e.width),n=e.height,o=u(e,["render","width","height"]);return a.createElement("canvas",Object.assign({style:{display:"block",height:n||"100%",width:t||"100%"},height:n*this.scale||"",width:t*this.scale||"",ref:this.canvas},o))}}]),t}(a.PureComponent)},"./src/components/Utils/FullScreenCanvas.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullScreenCanvas=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/styled-components/dist/styled-components.browser.es.js")),r=n("./src/components/Utils/MeasuredCanvas.tsx");t.FullScreenCanvas=(0,o.default)(r.MeasuredCanvas).withConfig({componentId:"s1vbte3a-0"})(["width:100%;height:100vh;"])},"./src/components/Utils/MeasuredCanvas.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredCanvas=void 0;var o=u(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=u(n("./node_modules/babel-runtime/helpers/createClass.js")),s=u(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=u(n("./node_modules/babel-runtime/helpers/inherits.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),l=u(n("./node_modules/react-measure/lib/react-measure.js")),c=n("./src/components/Utils/CanvasAnimFrame.tsx");function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};t.MeasuredCanvas=function(e){function t(e){(0,o.default)(this,t);var n=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.width,t.height,d(t,["className","width","height"])),r=this.state.size;return a.createElement(l.default,{bounds:!0,onResize:function(t){var n=t.bounds;return e.setState({size:n})}},function(e){var t=e.measureRef;return a.createElement("div",{className:n,ref:t},r&&a.createElement(c.CanvasAnimFrame,Object.assign({},r,o)))})}}]),t}(a.PureComponent)},"./src/components/Vectors/VectorImmutable.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var o=i(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=i(n("./node_modules/babel-runtime/helpers/createClass.js")),s=n("./src/utils/index.ts");function i(e){return e&&e.__esModule?e:{default:e}}t.Vector=function(){function e(t,n){(0,o.default)(this,e),this.x=t,this.y=n}return(0,r.default)(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"norm",value:function(){var t=this.mag();return new e(this.x/t,this.y/t)}},{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"sub",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"mag",value:function(){return Math.sqrt((0,s.sqr)(this.x)+(0,s.sqr)(this.y))}},{key:"setMag",value:function(e){return this.norm().mult(e)}},{key:"mult",value:function(t){return new e(this.x*t,this.y*t)}},{key:"limit",value:function(e){return this.mag()<=e?this:this.setMag(e)}}]),e}()},"./src/components/Vectors/VectorMutable.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var o=i(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=i(n("./node_modules/babel-runtime/helpers/createClass.js")),s=n("./src/utils/index.ts");function i(e){return e&&e.__esModule?e:{default:e}}t.Vector=function(){function e(t,n){(0,o.default)(this,e),this.x=t,this.y=n}return(0,r.default)(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"norm",value:function(){var e=this.mag();this.x/=e,this.y/=e}},{key:"add",value:function(e){this.x+=e.x,this.y+=e.y}},{key:"sub",value:function(e){this.x-=e.x,this.y-=e.y}},{key:"mag",value:function(){return Math.sqrt((0,s.sqr)(this.x)+(0,s.sqr)(this.y))}},{key:"setMag",value:function(e){this.norm(),this.mult(e)}},{key:"mult",value:function(e){this.x*=e,this.y*=e}},{key:"limit",value:function(e){this.mag()>e&&this.setMag(e)}}]),e}()},"./src/components/Vectors/Vectors.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vectors=t.Mover=void 0;var o=h(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),r=h(n("./node_modules/babel-runtime/helpers/inherits.js")),s=h(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),i=h(n("./node_modules/babel-runtime/helpers/createClass.js")),a=p(n("./node_modules/react/index.js")),l=n("./src/components/Layout/DemoPage.tsx"),c=n("./src/components/Utils/FullScreenCanvas.tsx"),u=n("./src/components/Vectors/VectorImmutable.ts"),d=n("./src/utils/styles.ts"),f=p(n("./src/utils/links.ts"));function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}var m=t.Mover=function(){function e(t){(0,s.default)(this,e),this.pos=t,this.acc=new u.Vector(0,0),this.vel=new u.Vector(0,0)}return(0,i.default)(e,[{key:"update",value:function(){this.vel=this.vel.add(this.acc),this.pos=this.pos.add(this.vel)}},{key:"bounce",value:function(e,t){(this.pos.x>e||this.pos.x<0)&&(this.vel.x*=-1),(this.pos.y>t||this.pos.y<0)&&(this.vel.y*=-1)}},{key:"render",value:function(e){e.beginPath(),e.arc(this.pos.x,this.pos.y,20,0,360),e.fillStyle=d.colors.brand,e.fill()}}]),e}();t.Vectors=function(e){function t(){(0,s.default)(this,t);var e=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.drawState={},e}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this;return a.createElement(l.DemoPage,{hint:"Move mouse around",nextLink:f.forces,nextText:"Forces",srcLink:"https://github.com/manneredboor/coding-train-practice/blob/master/src/components/Vectors/Vectors.tsx"},a.createElement(c.FullScreenCanvas,{onMouseMove:function(t){e.drawState.mouse=new u.Vector(t.pageX,t.pageY)},onMouseOut:function(t){e.drawState.mouse=void 0},render:function(t){var n=t.ctx,o=t.width,r=t.height;e.drawState.bitch||(e.drawState.bitch=new m(new u.Vector(100,100)));var s=e.drawState.bitch,i=e.drawState.mouse;if(i){var a=i.sub(s.pos);s.acc=a.setMag(.5),n.beginPath(),n.moveTo(s.pos.x,s.pos.y),n.lineTo(i.x,i.y),n.strokeStyle="#ccc",n.stroke()}s.update(),s.bounce(o,r),s.render(n),i&&(n.beginPath(),n.arc(i.x,i.y,20,0,360),n.fillStyle=d.colors.brandHover,n.fill())}}))}}]),t}(a.PureComponent)},"./src/entries/client.tsx":function(e,t,n){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),r=n("./node_modules/react-dom/index.js"),s=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/components/Layout/ClientAppRoot.tsx");(0,r.hydrate)(o.createElement(s.BrowserRouter,null,o.createElement(i.ClientAppRoot,null)),document.getElementById("root"))},"./src/routes.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var o=n("./src/components/Home.tsx"),r=n("./src/components/Vectors/Vectors.tsx"),s=n("./src/components/Forces/Forces.tsx"),i=n("./src/components/Layout/AppContainer.tsx"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./src/utils/links.ts"));t.routes=[{component:i.AppContainer,routes:[{component:o.Home,exact:!0,path:a.home},{component:r.Vectors,exact:!0,path:a.vectors},{component:s.Forces,exact:!0,path:a.forces}]}]},"./src/svg/arrow.svg":function(e,t,n){var o=n("./node_modules/react/index.js");function r(e){return o.createElement("svg",e,o.createElement("path",{d:"M408 178.5H96.9L239.7 35.7 204 0 0 204l204 204 35.7-35.7L96.9 229.5H408v-51z"}))}r.displayName="Arrow",r.defaultProps={viewBox:"0 0 408 408",width:"408",height:"408"},e.exports=r,r.default=r},"./src/utils/defaultStyles.ts":function(e,t,n){"use strict";var o=(0,function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js")).default)(["\n  * {\n    min-width: 0;\n    min-height: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 16px;\n    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;\n    line-height: 1.5;\n    color: ",";\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th,\n  td {\n    padding: 0;\n    text-align: left;\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  input, textarea, button, select {\n    border: 0;\n    outline: none;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    -webkit-appearance: none;\n  }\n\n  input, textarea, button, select, label, a {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n\n  img, embed, iframe, object, audio, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n    border-bottom: 2px solid ",";\n    transition: color ease ",", border-color ease ",";\n\n    &:hover {\n      color: ",";\n      border-color: ",";\n      transition-duration: ",";\n    }\n  }\n\n  html."," {\n    overflow-y: scroll;\n  }\n\n  body."," {\n    overflow: hidden;\n    position: fixed;\n  }\n"],["\n  * {\n    min-width: 0;\n    min-height: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 16px;\n    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;\n    line-height: 1.5;\n    color: ",";\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th,\n  td {\n    padding: 0;\n    text-align: left;\n  }\n\n  textarea {\n    resize: none;\n  }\n\n  input, textarea, button, select {\n    border: 0;\n    outline: none;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    -webkit-appearance: none;\n  }\n\n  input, textarea, button, select, label, a {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n\n  img, embed, iframe, object, audio, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n    border-bottom: 2px solid ",";\n    transition: color ease ",", border-color ease ",";\n\n    &:hover {\n      color: ",";\n      border-color: ",";\n      transition-duration: ",";\n    }\n  }\n\n  html."," {\n    overflow-y: scroll;\n  }\n\n  body."," {\n    overflow: hidden;\n    position: fixed;\n  }\n"]),r=n("./node_modules/styled-components/dist/styled-components.browser.es.js"),s=n("./node_modules/@gnarlycode/react-scroll-state/lib/index.js"),i=n("./src/utils/styles.ts");(0,r.injectGlobal)(o,i.colors.text,i.colors.brand,i.colors.brand,i.dur.norm,i.dur.norm,i.colors.brandHover,i.colors.brandHover,i.dur.fast,s.defaultHtmlLockClass,s.defaultBodyLockClass)},"./src/utils/index.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sqr=function(e){return e*e};var o=t.minmax=function(e,t,n){return Math.max(e,Math.min(n,t))},r=t.normalize=function(e,t,n){return(n-e)/(t-e)};t.narrow=function(e,t,n){return o(0,r(e,t,n),1)},t.throttle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=void 0,o=void 0;return function(){var r=Date.now();!!n&&r<n+t?(clearTimeout(o),o=window.setTimeout(function(){n=r,e()},t)):(n=r,e())}}},"./src/utils/links.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return"/coding-train-practice"+e};t.home=o("/"),t.vectors=o("/vectors/"),t.forces=o("/forces/")},"./src/utils/styles.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scrollBarStyle=t.placeholderColor=t.cssEasings=t.noTouchClass=t.touchClass=t.media=t.deviceSizes=t.colors=t.dur=t.durNumbers=void 0;var o=n("./node_modules/styled-components/dist/styled-components.browser.es.js"),r=t.durNumbers={fast:100,norm:350},s=(t.dur={fast:r.fast+"ms",norm:r.norm+"ms"},t.colors={bg:"#f7f7f7",border:"#f0f0f0",brand:"#d716ec",brandHover:"#9400a5",danger:"#ec1651",focus:"#c5c5c5",placeholder:"#bbbdbf",text:"#404041"}),i=t.deviceSizes={phone:767,phoneVertical:420,tablet:1279,tabletSmall:1023};t.media={phone:"max-width: "+i.phone+"px",phoneVertical:"max-width: "+i.phoneVertical+"px",tablet:"max-width: "+i.tablet+"px",tabletSmall:"max-width: "+i.tabletSmall+"px"},t.touchClass="m-touchevents",t.noTouchClass="m-no-touchevents",t.cssEasings={inSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",outSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",inOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",inQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",outQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",inOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",inCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",outCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",inOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",inQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",outQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",inOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",inQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",outQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",inOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",inExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",outExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",inOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",inCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",outCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",inOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",inBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",outBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",inOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},t.placeholderColor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.placeholder;return(0,o.css)(["::-webkit-input-placeholder{color:",";}::-moz-placeholder{color:",";}:-ms-input-placeholder{color:",";}:-moz-placeholder{color:",";}"],e,e,e,e)},t.scrollBarStyle=(0,o.css)(["&::-webkit-scrollbar{width:8px;background-color:transparent;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{border-radius:2px;border-width:2px;border-style:solid;border-color:#fff;background-color:",";}"],s.brand)},0:function(e,t,n){e.exports=n("./src/entries/client.tsx")}});
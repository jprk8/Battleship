(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]),i.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background-color: grey;\n  font-family: monospace;\n  font-size: 18px;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.title {\n  font-weight: 800;\n  font-size: 46px;\n  text-align: center;\n}\n\nbutton.start,\nbutton.reset {\n  margin-top: 10px;\n}\n\n.status {\n  text-align: center;\n  height: 24px;\n}\n\n.menu {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.game-result {\n  text-align: center;\n  font-size: 20px;\n  width: max-content;\n  background-color: black;\n  color: yellow;\n  padding: 4px 8px;\n  margin: 0 auto;\n  position: absolute;\n  left: 50%;\n  top: 180px;\n  transform: translate(-50%, -50%);\n}\n\n.game-container {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  gap: 200px;\n}\n\n.player-side,\n.enemy-side {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.player-heading,\n.enemy-heading,\n.player-ship-count,\n.enemy-ship-count {\n  font-size: 20px;\n}\n\n.player-ship-count,\n.enemy-ship-count {\n  height: 30px;\n}\n\n.player-board,\n.enemy-board {\n  display: grid;\n  background-color: black;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  border: 1px solid black;\n}\n\n.square,\n.enemy-square,\n.hit-square,\n.miss-square {\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-family: Nunito;\n}\n\n.square,\n.enemy-square {\n  background-color: #ddd;\n}\n\n.enemy-square {\n  cursor: pointer;\n}\n\n.enemy-square:hover {\n  background-color: white;\n}\n\n.hit-square {\n  background-color: maroon;\n  color: yellow;\n}\n\n.miss-square {\n  background-color: #aaa;\n}\n\n.disable {\n  pointer-events: none;\n}\n\n.randomize {\n  margin-top: 20px;\n}\n\n.board-status {\n  display: flex;\n  font-size: 20px;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.player-sunk,\n.enemy-sunk {\n  color: red;\n  background-color: yellow;\n  padding: 0 4px;\n  font-weight: 800;\n  display: none;\n}\n",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var h=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var m=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),u=t.n(l),d=t(540),h=t.n(d),p=t(113),m=t.n(p),f=t(208),y={};y.styleTagTransform=m(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=h(),o()(f.A,y),f.A&&f.A.locals&&f.A.locals;class b{constructor(e){this.length=e,this.hp=e,this.sunk=!1}hit(){this.hp>0&&this.hp--,0===this.hp&&(this.sunk=!0)}isSunk(){return this.sunk}}class g{constructor(){this.arr=Array.from({length:10},(()=>Array(10).fill(null))),this.life=0,this.defeat=!1,this.carrier=new b(5),this.battleship=new b(4),this.cruiser=new b(3),this.submarine=new b(3),this.destroyer=new b(2)}clear(){this.arr=Array.from({length:10},(()=>Array(10).fill(null))),this.life=0}putShip(e,n,t,r="v"){if("v"===r){for(let r=0;r<e.length;r++)if(!this.checkPlace(n,t+r))return!1;for(let r=0;r<e.length;r++)this.arr[t+r][n]=e}if("h"===r){for(let r=0;r<e.length;r++)if(!this.checkPlace(n+r,t))return!1;for(let r=0;r<e.length;r++)this.arr[t][n+r]=e}return this.life++,!0}checkPlace(e,n){if(e<0||n<0||e>9||n>9)return!1;if(this.arr[n][e])return!1;const t=[];if(n>0)for(let r=-1;r<2;r++)e+r>=0&&e+r<=9&&t.push(this.arr[n-1][e+r]);if(n<9)for(let r=-1;r<2;r++)e+r>=0&&e+r<=9&&t.push(this.arr[n+1][e+r]);return 0!=e&&t.push(this.arr[n][e-1]),9!=e&&t.push(this.arr[n][e+1]),t.every((e=>!e))}receiveAttack(e,n){if(!this.arr[n][e])return this.arr[n][e]="miss",{result:!1,sunk:!1};const t=this.arr[n][e];return t.hit(),t.isSunk()&&this.life--,0===this.life&&(this.defeat=!0),this.arr[n][e]="hit",{result:!0,sunk:t.sunk}}loadDefault(){this.putShip(this.cruiser,5,0),this.putShip(this.destroyer,7,1),this.putShip(this.battleship,1,2),this.putShip(this.carrier,3,4),this.putShip(this.submarine,6,6,"h")}randomPlacement(){let e,n=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());e=Math.random()>=.5?"v":"h";const r=[this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer];let o=!1;for(;r.length>0;){let a=r[0];o=this.putShip(a,n,t,e),o?(r.shift(),o=!1):(n=Math.floor(9*Math.random()),t=Math.floor(9*Math.random()),e=Math.random()>=.5?"v":"h")}}}class v{constructor(e){this.name=e,this.board=new g}}function x(e,n=!1){let t=document.querySelector(".player-board");n&&(t=document.querySelector(".enemy-board"));const r=e.board.arr;for(let o=0;o<r.length;o++)for(let a=0;a<r[o].length;a++){const r=k(e,a,o,n);t.appendChild(r)}let o=document.querySelector(".player-ship-count");n&&(o=document.querySelector(".enemy-ship-count")),o.textContent=`Ship Count: ${e.board.life}`}function k(e,n,t,r=!1){const o=e.board.arr[t][n],a=document.createElement("div");return a.setAttribute("x",n),a.setAttribute("y",t),a.className=r?"enemy-square":"square",o instanceof b&&!r&&(a.style.backgroundColor="navy"),a}function q(e,n,t,r=!1){let o=document.querySelector(`.square[x='${n}'][y='${t}']`);r&&(o=document.querySelector(`.enemy-square[x='${n}'][y='${t}']`));let a=e.board.arr[t][n];"hit"===a?(o.className="hit-square",o.textContent="X"):"miss"===a&&(o.className="miss-square",o.textContent="+")}function S(e,n=!1){let t=document.querySelector(".player-ship-count");n&&(t=document.querySelector(".enemy-ship-count")),t.textContent=`Ship Count: ${e.board.life}`}function w(e){const n=document.querySelector(".game-result");n.textContent=`${e.name} Win!`,n.style.display="block"}function M(e="left"){let n=document.querySelector(".player-side"),t=document.querySelector(".player-board"),r=document.createElement("div");if(r.className="player-board","right"===e)n=document.querySelector(".enemy-side"),t=document.querySelector(".enemy-board"),r.className="enemy-board",n.removeChild(t),n.appendChild(r);else{const e=document.querySelector(".randomize");n.removeChild(t),n.insertBefore(r,e)}}const C=document.querySelector(".status");let A=document.querySelector(".game-result"),P=new v("Player"),E=new v("Computer");P.board.loadDefault(),E.board.randomPlacement(),x(P),x(E,!0);const T=document.querySelector("button.start"),N=document.querySelector(".reset");function z(){document.querySelector(".enemy-board").classList.add("disable")}function L(e){return new Promise((n=>setTimeout(n,e)))}function $(e=!1){let n=document.querySelector(".player-sunk");e&&(n=document.querySelector(".enemy-sunk")),n.style.display="block",setTimeout((()=>{n.style.display="none"}),500)}T.addEventListener("click",(()=>{document.querySelector(".enemy-board").addEventListener("click",(e=>{const n=e.target;if(n.classList.contains("enemy-square")){const e=n.getAttribute("x"),t=n.getAttribute("y"),{result:r,sunk:o}=E.board.receiveAttack(e,t);if(q(E,e,t,!0),o&&(S(E,!0),$(!0)),0===E.board.life)return z(),void w(P);r||(z(),async function(){let e=!1,n=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());const r=P.board.arr;let o=!1;for(;!e;){if(console.log(`cpu attack ${n} ${t}`),"miss"!=r[t][n]&&"hit"!=r[t][n]){if(!(r[t][n]instanceof b))return P.board.receiveAttack(n,t),await L(500),q(P,n,t,!1),void(e=!0);{const{result:e,sunk:r}=P.board.receiveAttack(n,t);await L(500),q(P,n,t,!1),r&&$(),o=!0}}if(o){let e,o,a,i;t>0&&(e=r[t-1][n]),t<9&&(o=r[t+1][n]),n<9&&(a=r[t][n+1]),n>0&&(i=r[t][n-1]),"hit"!=e&&"miss"!=e&&t>0?t--:"hit"!=o&&"miss"!=o&&t<9?t++:"hit"!=a&&"miss"!=a&&n<9?n++:"hit"!=i&&"miss"!=i&&n>0&&n--}else n=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());o=!1}return new Promise.resolve}().then((()=>S(P))).then((()=>{0===P.board.life?w(E):document.querySelector(".enemy-board").classList.remove("disable")})))}})),C.textContent="",A.textContent="FIGHT!",T.style.display="none",N.style.display="block"})),N.addEventListener("click",(()=>{P=new v("Player"),E=new v("Computer"),M("left"),M("right"),P.board.loadDefault(),E.board.randomPlacement(),x(P),x(E,!0),N.style.display="none",T.style.display="block",A.textContent="Ready your fleet"})),document.querySelector(".randomize").addEventListener("click",(()=>{P.board.clear(),P.board.randomPlacement(),M("left"),x(P)}))})();
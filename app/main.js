(()=>{"use strict";var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=require("fs"),t=require("path"),n=require("http");const r=n.createServer(((e,n)=>{return r=void 0,u=void 0,c=function*(){const r=t.resolve(t.dirname(""))+("/"===e.url?"/front/index.html":"/front"+e.url);o.readFile(r,(function(e,o){if(e)return n.writeHead(404),void n.end(JSON.stringify(e));n.writeHead(200),n.end(o)}))},new((s=void 0)||(s=Promise))((function(e,o){function t(e){try{a(c.next(e))}catch(e){o(e)}}function n(e){try{a(c.throw(e))}catch(e){o(e)}}function a(o){var r;o.done?e(o.value):(r=o.value,r instanceof s?r:new s((function(e){e(r)}))).then(t,n)}a((c=c.apply(r,u||[])).next())}));var r,u,s,c})),u=require("robotjs");var s=e.n(u);const c=require("ws");var a=e.n(c);console.log("Start static http server on the 3000 port!"),r.listen(3e3),new c.WebSocketServer({port:8080}).on("connection",(e=>{return o=void 0,t=void 0,r=function*(){console.log("New client connected");const o=a().createWebSocketStream(e,{decodeStrings:!1});o.on("data",(e=>{console.log(`Client has sent us: ${e}`);const t=e.toString(),n=s().getMousePos(),r=t.split(" ");let u,c=r[0];switch(u=r.length>2?{x:r[1],y:r[2]}:r.length>1?r[1]:null,c){case"mouse_up":((e,o)=>{s().moveMouse(e.x,e.y-Number(o))})(n,u);break;case"mouse_down":((e,o)=>{s().moveMouse(e.x,e.y+Number(o))})(n,u);break;case"mouse_left":((e,o)=>{s().moveMouse(e.x-Number(o),e.y)})(n,u);break;case"mouse_right":((e,o)=>{s().moveMouse(e.x+Number(o),e.y)})(n,u);break;case"mouse_position":c+=` ${n.x},${n.y}`;break;case"draw_circle":((e,o)=>{s().mouseToggle("down");const t=2*Math.PI/500,n=Number(o);for(let o=-Math.PI;o<=Math.PI;o+=t){const t=Math.round(n*Math.cos(o)),r=Math.round(n*Math.sin(o));s().dragMouse(e.x+t+n,e.y+r)}s().mouseToggle("up")})(n,u);break;case"draw_rectangle":((e,o)=>{if("object"==typeof o){s().mouseToggle("down");const t=null==o?void 0:o.x,n=null==o?void 0:o.y;s().moveMouseSmooth(e.x+Number(t),e.y),s().moveMouseSmooth(e.x+Number(t),e.y+Number(n)),s().moveMouseSmooth(e.x,e.y+Number(n)),s().moveMouseSmooth(e.x,e.y),s().mouseToggle("up")}})(n,u)}o.write(c)})),e.on("close",(()=>{console.log("Client has disconnected")}))},new((n=void 0)||(n=Promise))((function(e,u){function s(e){try{a(r.next(e))}catch(e){u(e)}}function c(e){try{a(r.throw(e))}catch(e){u(e)}}function a(o){var t;o.done?e(o.value):(t=o.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(o,t||[])).next())}));var o,t,n,r}))})();
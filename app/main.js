(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("fs"),n=require("path"),o=require("http");const r=o.createServer(((e,o)=>{return r=void 0,c=void 0,s=function*(){const r=n.resolve(n.dirname(""))+("/"===e.url?"/front/index.html":"/front"+e.url);t.readFile(r,(function(e,t){if(e)return o.writeHead(404),void o.end(JSON.stringify(e));o.writeHead(200),o.end(t)}))},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{a(s.next(e))}catch(e){t(e)}}function o(e){try{a(s.throw(e))}catch(e){t(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(n,o)}a((s=s.apply(r,c||[])).next())}));var r,c,i,s})),c=require("robotjs");var i=e.n(c);const s=require("ws");var a=e.n(s);console.log("Start static http server on the 3000 port!"),r.listen(3e3),new s.WebSocketServer({port:8080}).on("connection",(e=>{return t=void 0,n=void 0,r=function*(){console.log("New client connected");const t=a().createWebSocketStream(e,{decodeStrings:!1});t.on("data",(e=>{console.log(`Client has sent us: ${e}`);const n=e.toString(),o=i().getMousePos(),r=n.split(" ")[0],c=n.split(" ")[1];switch(r){case"mouse_up":i().moveMouse(o.x,o.y-Number(c));break;case"mouse_down":i().moveMouse(o.x,o.y+Number(c));break;case"mouse_left":i().moveMouse(o.x-Number(c),o.y);break;case"mouse_right":i().moveMouse(o.x+Number(c),o.y)}t.write(r)})),e.on("close",(()=>{console.log("Client has disconnected")}))},new((o=void 0)||(o=Promise))((function(e,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,s)}a((r=r.apply(t,n||[])).next())}));var t,n,o,r}))})();
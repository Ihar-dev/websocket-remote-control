(()=>{"use strict";const e=require("fs"),r=require("path"),t=require("http").createServer((function(t,i){const n=r.resolve(r.dirname(""))+("/"===t.url?"/front/index.html":"/front"+t.url);e.readFile(n,(function(e,r){if(e)return i.writeHead(404),void i.end(JSON.stringify(e));i.writeHead(200),i.end(r)}))}));console.log("Start static http server on the 3000 port!"),t.listen(3e3)})();
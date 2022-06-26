import { httpServer } from './http_server/http-server';

import { connection } from './websocket_server/websocket-server';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

connection();
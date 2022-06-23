import { httpServer } from './http_server/server';

import { connection } from './websocket_server/server';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

connection();
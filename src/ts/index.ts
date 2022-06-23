import Jimp from 'jimp';
import {httpServer} from './http_server/server';
import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
  port: 8080,
});

wss.on('connection', async ws => {
  console.log('New client connected');

  const duplex = WebSocket.createWebSocketStream(ws, { decodeStrings: false });

  duplex.on('data', (data: Buffer): void => {
    console.log(`Client has sent us: ${data}`);
    const textData = data.toString();
    const mouse = robot.getMousePos();
    const textDataArr = textData.split(' ');
    let command = textDataArr[0];
    let options: string | null;
    (textDataArr.length > 1) ? options = textDataArr[1] : options = null;
    switch (command) {
      case 'mouse_up':
        robot.moveMouse(mouse.x, mouse.y - Number(options));
      break;
      case 'mouse_down':
        robot.moveMouse(mouse.x, mouse.y + Number(options));
      break;
      case 'mouse_left':
        robot.moveMouse(mouse.x - Number(options), mouse.y);
      break;
      case 'mouse_right':
        robot.moveMouse(mouse.x + Number(options), mouse.y);
      break;
      case 'mouse_position':
        command += ` ${mouse.x},${mouse.y}`;
      break;
      default:
    }
    duplex.write(command);
  });

  ws.on('close', () => {
    console.log('Client has disconnected')
  });
});

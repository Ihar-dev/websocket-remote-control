import Jimp from 'jimp';
import {httpServer} from './http_server/server';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
  port: 8080,
});

wss.on('connection', ws => {
  console.log('New client connected');
  ws.on('message', data => {
    console.log(`Client has sent us: ${data}`);
    const textData = data.toString();
    const mouse = robot.getMousePos();
    const command = textData.split(' ')[0];
    const moveData = textData.split(' ')[1];
    switch (command) {
      case 'mouse_up':
        robot.moveMouse(mouse.x, mouse.y - Number(moveData));
      break;
      case 'mouse_down':
        robot.moveMouse(mouse.x, mouse.y + Number(moveData));
      break;
      case 'mouse_left':
        robot.moveMouse(mouse.x - Number(moveData), mouse.y);
      break;
      case 'mouse_right':
        robot.moveMouse(mouse.x + Number(moveData), mouse.y);
      break;
      default:
    }
    ws.send(command);
  });

   ws.on('close', () => {
    console.log('Client has disconnected')
  });
});

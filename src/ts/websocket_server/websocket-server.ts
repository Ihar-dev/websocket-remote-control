import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';

import {
  mouseUp,
  mouseDown,
  mouseLeft,
  mouseRight,
  drawCircle,
  drawRectangle,
  drawSquare
} from '../controllers/robot-controllers';

import OptionsType from '../models/options.model';

export const connection = (): void => {
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
      let options: string| OptionsType | null;
      if (textDataArr.length > 2) options = { x: textDataArr[1], y: textDataArr[2] };
      else if (textDataArr.length > 1) options = textDataArr[1];
      else options = null;
      
      switch (command) {
        case 'mouse_up':
          mouseUp(mouse, options);
        break;
        case 'mouse_down':
          mouseDown(mouse, options);
        break;
        case 'mouse_left':
          mouseLeft(mouse, options);
        break;
        case 'mouse_right':
          mouseRight(mouse, options);
        break;
        case 'mouse_position':
          command += ` ${mouse.x},${mouse.y}`;
        break;
        case 'draw_circle':
          drawCircle(mouse, options);
        break;
        case 'draw_rectangle':
          drawRectangle(mouse, options);
        break;
        case 'draw_square':
          drawSquare(mouse, options);
        break;
        default:
      }
      duplex.write(command);
    });
  
    ws.on('close', () => {
      console.log('Client has disconnected')
    });
  });
}
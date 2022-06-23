import robot from 'robotjs';
import Jimp from 'jimp';

import MouseType from '../models/mouse.model';
import OptionsType from '../models/options.model';

export const mouseUp = (mouse: MouseType, options: string | OptionsType | null): void =>
  robot.moveMouse(mouse.x, mouse.y - Number(options));

export const mouseDown = (mouse: MouseType, options: string | OptionsType | null): void =>
  robot.moveMouse(mouse.x, mouse.y + Number(options));

export const mouseLeft = (mouse: MouseType, options: string | OptionsType | null): void =>
  robot.moveMouse(mouse.x - Number(options), mouse.y);

export const mouseRight = (mouse: MouseType, options: string | OptionsType | null): void => 
  robot.moveMouse(mouse.x + Number(options), mouse.y);

export const drawCircle = (mouse: MouseType, options: string | OptionsType | null): void => {
  robot.mouseToggle("down");
  const fullCircle = 2 * Math.PI;
  const steps = 500;
  const fiAddition = fullCircle / steps;
  const radius = Number(options);
  for (let fi = -Math.PI; fi <= Math.PI; fi += fiAddition) {
    const x = Math.round(radius * Math.cos(fi));
    const y = Math.round(radius * Math.sin(fi));
    robot.dragMouse(mouse.x + x + radius, mouse.y + y);
  }
  robot.mouseToggle("up");
}

export const drawRectangle = (mouse: MouseType, options: string | OptionsType | null): void => {
  if (typeof options === 'object') {
    robot.mouseToggle("down");
    const x = options?.x;
    const y = options?.y;
    robot.moveMouseSmooth(mouse.x + Number(x), mouse.y);
    robot.moveMouseSmooth(mouse.x + Number(x), mouse.y + Number(y));
    robot.moveMouseSmooth(mouse.x, mouse.y + Number(y));
    robot.moveMouseSmooth(mouse.x, mouse.y);
    robot.mouseToggle("up");
  }
}

export const drawSquare = (mouse: MouseType, options: string | OptionsType | null): void => {
  robot.mouseToggle("down");
  robot.moveMouseSmooth(mouse.x + Number(options), mouse.y);
  robot.moveMouseSmooth(mouse.x + Number(options), mouse.y + Number(options));
  robot.moveMouseSmooth(mouse.x, mouse.y + Number(options));
  robot.moveMouseSmooth(mouse.x, mouse.y);
  robot.mouseToggle("up");
}

export const printScreen = async (mouse: MouseType): Promise < string > => {
  const size = 200;
  const leftX = mouse.x - size / 2;
  const leftY = mouse.y - size / 2;
  
  const bitMap = robot.screen.capture(leftX, leftY, size, size);

  const img = new Jimp(size, size);
  img.bitmap.data = bitMap.image;

  const base64 = await img.getBase64Async(Jimp.MIME_PNG);

  return base64;
}
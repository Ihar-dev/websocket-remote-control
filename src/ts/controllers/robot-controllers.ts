import robot from 'robotjs';
import Jimp from 'jimp';

type MouseType = {
  x: number,
  y: number,
}

export const mouseUp = (mouse: MouseType, options: string | null): void => robot.moveMouse(mouse.x, mouse.y - Number(options)); 

export const mouseDown = (mouse: MouseType, options: string | null): void => robot.moveMouse(mouse.x, mouse.y + Number(options)); 

export const mouseLeft = (mouse: MouseType, options: string | null): void => robot.moveMouse(mouse.x - Number(options), mouse.y); 

export const mouseRight = (mouse: MouseType, options: string | null): void => robot.moveMouse(mouse.x + Number(options), mouse.y);

export const drawCircle = (mouse: MouseType, options: string | null): void => {
  robot.mouseToggle("down");
  const fullCircle = 2 * Math.PI;
  const steps = 500;
  const fiAddition = fullCircle / steps;
  const radius = Number(options);
  for (let fi = -Math.PI; fi <= Math.PI; fi += fiAddition) {
    const x = Math.round(radius * Math.cos(fi));
    const y = Math.round(radius * Math.sin(fi));
    robot.moveMouse(mouse.x + x + radius, mouse.y + y);
  }
  robot.mouseToggle("up");
}
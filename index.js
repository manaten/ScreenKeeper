const robot = require("robotjs");

const WAIT_MSEC = 1000 * 20;

const wait = msec => new Promise(resolve => setTimeout(resolve, msec));
const log = message => console.log(`[${new Date().toLocaleString()}] ${message}`);

let oldX = 0;

const main = async () => {
  while(true) {
    try {
      const screenSize = robot.getScreenSize();
      const mouse = robot.getMousePos();

      if (oldX === mouse.x) {
        const newX = (mouse.x + 1 >= screenSize.width || mouse.x % 2 === 0) ? mouse.x - 1 : mouse.x + 1;
        const newY = mouse.y;

        robot.moveMouse(newX, newY);
        log(`move to (${newX}, ${newY}).`);
        oldX = newX;
      } else {
        oldX = mouse.x;
      }
    } catch(e) {
      console.error(e);
    }
    await wait(WAIT_MSEC);
  }
}
main();

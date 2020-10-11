const robot = require("robotjs");

const WAIT_MSEC = 1000 * 60 * 5;

const wait = msec => new Promise(resolve => setTimeout(resolve, msec));

const main = async () => {
  while(true) {
    try {
      const screenSize = robot.getScreenSize();
      const mouse = robot.getMousePos();

      const newX = mouse.x + 1 < screenSize.width ? mouse.x + 1 : mouse.x - 1;
      const newY = mouse.y;

      robot.moveMouse(newX, newY);
      console.log(`move to (${newX}, ${newY}).`);
    } catch(e) {
      console.error(e);
    }
    await wait(WAIT_MSEC);
  }
}
main();

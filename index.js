import { Player } from "./player.js";
import { Background } from "./background.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 475;
  canvas.height = 580;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.background = new Background(this);
      this.speed = 2;
      this.gameFrame = 0;
    }

    update(deltaTime) {
      this.background.update();
    }

    draw(ctx) {
      this.background.draw(ctx);
      this.player.draw(ctx);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
    game.gameFrame--;
  }
  animate(0);
});

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 475;
    this.height = 580 * 2;
    this.x = 0;
    this.y = -this.game.height;
    this.image = document.getElementById("background");
    this.speed = 1.5;
  }
  update() {
    //console.log(this.y);
    if (this.y >= 0) {
      this.y = -this.game.height + 20;
    } else {
      this.y += this.speed;
    }
    //this.y += this.speed;
    //if (this.y > 0) this.y -= this.height + this.game.height;
    //this.y = (this.game.gameFrame * this.speed) % this.height;
    // if (this.y < -this.height) this.y = 0;
    // else this.y -= this.speed;
    // this.y -= this.speed;
    // if (this.y < 0 - this.height) this.y = 0;
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width - this.speed,
      this.y,
      this.width,
      this.height
    );
  }
}

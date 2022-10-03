export class Player {
  constructor(game) {
    this.game = game;
    this.width = 30;
    this.height = 45;
    this.x = this.game.width * 0.5 - this.width * 0.5;
    this.y = this.game.height - this.height - 20;
  }

  update() {}
  draw(context) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 24,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.scoreDisplay = this.add.text(this.game.config.width * 0.3, 168, "Score: "+score, {
      fontFamily: 'monospace',
      fontSize: 24,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var keys = ["sprBg0", "sprBg1"];
      var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      var bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }

    celerx.submitScore(score);
  }
}

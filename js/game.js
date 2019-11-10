var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var config = {
  type: Phaser.WEBGL,
  width: 350,
  height: 700,
  scale: {
      mode: Phaser.Scale.FIT, //Fit or evelop based on device
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
};

var game = new Phaser.Game(config);

class About extends Phaser.Scene {
  constructor() {
    super({ key: 'About', active: false });
  }
  // init () {
  //   this.readyCount = 0;
  // }
  preload() {

    // load assets needed in our game
    this.load.image('about', 'assets/img/Contact.png');
  }

  create() {
    this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'about');
    this.image.displayHeight = game.config.height;
    this.image.displayWidth = game.config.width;

    this.about = this.add.text(game.config.width - game.config.width * 10 / 100, game.config.height - game.config.height * 5 / 100, "Back").setFontSize(30).setFontFamily("Arial").setOrigin(0.5);

    this.input.keyboard.on('keyup', function (e) {
      if (e.key == "SoftRight") {
        //console.log("soft left key");
        // this.scene.start('Menu');
        this.scene.transition({
          target: 'Menu',
          moveAbove: true,
          duration: 100,
        })
      }
    }, this);
  }

  update() {
  }


};
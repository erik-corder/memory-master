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

    //
    this.events.on('transitionstart', function (fromScene, duration) {
      this.cameras.main.setZoom(0.001);
    }, this);

    this.events.on('transitioncomplete', function (fromScene, duration) {
      // this.cameras.main.zoomTo(1, 300);
      this.cameras.main.zoomTo(1, 300);
    }, this);

    // this.events.on('transitioncomplete', function (fromScene) {

    // });

    this.events.on('transitionout', function (toScene, duration) {

      this.cameras.main.zoomTo(0.05, 300);

    }, this);
    //

    this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'about');
    this.image.displayHeight = game.config.height;
    this.image.displayWidth = game.config.width;

    this.about = this.add.text(game.config.width - game.config.width * 10 / 100, game.config.height - game.config.height * 5 / 100, "Back").setFontSize(30).setFontFamily("Arial").setOrigin(0.5);

    this.input.keyboard.on('keyup', function (e) {
      if (e.key == "SoftRight" || e.key == "Backspace") {
        //console.log("soft left key");
        // this.scene.start('Menu');
        this.scene.transition({
          target: 'Menu',
          moveAbove: true,
          duration: 300,
        })
      }
    }, this);
  }

  update() {
  }


};
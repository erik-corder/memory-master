class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: 'Preloader', active: false });
  }
  // init () {
  //   this.readyCount = 0;
  // }
  preload() {

    // load assets needed in our game
    this.load.image('splash', 'assets/img/Splash.png');
  }

  create() {
    this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'splash');
    this.image.displayHeight = game.config.height;
    this.image.displayWidth = game.config.width;

    this.time.addEvent({
      delay: 2000,
      callback: () => {
        //  this.gotoNextScreen();
        this.scene.transition({
          target: 'Menu',
          moveAbove: true,
          duration: 1000,
        })
        // this.scene.start('Menu')
      },
      loop: true
    })
  }

  update() {

  }

  transitionOut(progress) {
    // this.cameras.main.x = -(600 * progress);
    this.cameras.main.zoomTo(0.05, 300);
  }

  gotoNextScreen() {
    var isFirst = localStorage.getItem('isFirstTime')
    //console.log("is first"+ isFirst);
    if (isFirst == null) {
      // this.scene.start('IntroductionScene');
      this.scene.transition({
        target: 'IntroductionScene',
        moveAbove: true,
        duration: 300,
        onUpdate: this.transitionOut,
        data: { x: 400, y: 300 }
      })
    } else {
      // this.scene.start('Menu');
      this.scene.transition({
        target: 'Menu',
        moveAbove: true,
        duration: 300,
      })
    }
  }

};

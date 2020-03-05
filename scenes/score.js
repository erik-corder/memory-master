// playGame scene
class Score extends Phaser.Scene {
    constructor() {
        super({ key: "Score", active: false });
    }

    // preloading assets
    preload() {
        this.load.image("background", "assets/img/High-Scores.png");
    }

    // method to be executed once, when the scene has been created
    create() {

        //background
        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;



    }

    // method to be called at each frame
    update() {


    }
};

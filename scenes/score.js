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

        //kaiads
        getKaiAd({
            publisher: 'ca24f2d0-de89-4c1a-80c4-51e14d317000',
            app: 'Pelota',
            slot: 'Pelota',
            onerror: err => console.error('Custom catch:', err),
            onready: ad => {
                // Ad is ready to be displayed
                // calling 'display' will display the ad
                ad.call('display')
            }
        })

        //background
        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;
       
        //set tiny best score
        if (localStorage.getItem("tinyScore") === null) {
            this.tbscore = 0
        } else {
            this.tbscore = localStorage.getItem("tinyScore");
        }
        this.tinyBestScore = this.add.text(game.config.width - game.config.width / 1.6, game.config.height - game.config.height / 1.53, this.tbscore).setFontSize(40).setFontFamily("Arial").setOrigin(0.5);

        //set small best score
        if (localStorage.getItem("smallScore") === null) {
            this.sbscore = 0
        } else {
            this.sbscore = localStorage.getItem("smallScore");
        }
        this.smallBestScore = this.add.text(game.config.width - game.config.width / 5.5, game.config.height - game.config.height / 1.53, this.sbscore).setFontSize(40).setFontFamily("Arial").setOrigin(0.5);

        //set medium best score
        if (localStorage.getItem("mediumScore") === null) {
            this.mbscore = 0
        } else {
            this.mbscore = localStorage.getItem("mediumScore");
        }
        this.mediumBestScore = this.add.text(game.config.width - game.config.width / 1.85, game.config.height - game.config.height / 1.92, this.mbscore).setFontSize(40).setFontFamily("Arial").setOrigin(0.5);

        //set medium 2 best score
        if (localStorage.getItem("medium2Score") === null) {
            this.mb2score = 0
        } else {
            this.mb2score = localStorage.getItem("medium2Score");
        }
        this.mediumBestScore = this.add.text(game.config.width - game.config.width / 7.5, game.config.height - game.config.height / 1.92, this.mb2score).setFontSize(40).setFontFamily("Arial").setOrigin(0.5);

        //set large best score
        if (localStorage.getItem("largeScore") === null) {
            this.lbscore = 0
        } else {
            this.lbscore = localStorage.getItem("largeScore");
        }
        this.largeBestScore = this.add.text(game.config.width - game.config.width / 1.75, game.config.height - game.config.height / 2.56, this.lbscore).setFontSize(40).setFontFamily("Arial").setOrigin(0.5);

        //set huge best score
        if (localStorage.getItem("hugeScore") === null) {
            this.hbscore = 0
        } else {
            this.hbscore = localStorage.getItem("hugeScore");
        }
        this.largeBestScore = this.add.text(game.config.width - game.config.width / 5.5, game.config.height - game.config.height / 2.56, this.hbscore).setFontSize(40).setFontFamily("Arial").setOrigin(0.5);

        //for back
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

    // method to be called at each frame
    update() {


    }
};

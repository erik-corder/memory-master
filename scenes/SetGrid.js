// playGame scene
class SetGrid extends Phaser.Scene {
    constructor() {
        super({ key: "SetGrid", active: false });
    }

    // preloading assets
    preload() {
        //coin
        this.load.spritesheet('setButton', 'assets/spritesheet/size-buttons.png', { frameWidth: 400, frameHeight: 100 });
        this.load.image("bgMenus", "assets/img/Select_a_puzzle_size_bg.png");

        this.load.spritesheet('btn_Tiny', 'assets/img/Levels/Tiny.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_small', 'assets/img/Levels/Small.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_medium', 'assets/img/Levels/Medium.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_medium2', 'assets/img/Levels/Medium2.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_large', 'assets/img/Levels/Large.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_huge', 'assets/img/Levels/Huge.png', { frameWidth: 192, frameHeight: 180 });

        //this.load.spritesheet('btn_play_hover', 'assets/img/btn_play_hover_new.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_small_hover', 'assets/img/Levels/SmallHover.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_medium_hover', 'assets/img/Levels/MediumHover.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_medium2_hover', 'assets/img/Levels/Medium2Hover.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_large_hover', 'assets/img/Levels/LargeHover.png', { frameWidth: 192, frameHeight: 180 });
        this.load.spritesheet('btn_huge_hover', 'assets/img/Levels/HugeHover.png', { frameWidth: 192, frameHeight: 180 });

        this.load.image("btn_Tiny_hover", "assets/img/Levels/TinyHover.png");
    }

    // method to be executed once, when the scene has been created
    create() {

        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgMenus');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;

        // this.setGrid = this.add.text(game.config.width / 3.5, 50, 'SetGrid', { fontSize: '80px', fill: '#FFF' });



        this.selected_button = 'Tiny';

        this.upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.back_space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.key_home = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.HOME);


        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "SoftLeft") {
                //console.log("soft left key");
                this.goToOptionScene();
            } else if (e.key == "SoftRight") {
                //console.log("soft right key");
                this.goToContactScene();

            }
        }, this);

        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "Enter") {
                //console.log("soft left key");
                this.callMenuButton();
            }
        }, this);

        // Button tiny
        this.btn_tiny = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 2.5, 'btn_Tiny_hover', 0).setInteractive();
        this.btn_tiny.displayHeight = game.config.height / 8.9;
        this.btn_tiny.displayWidth = game.config.width / 2.8;

        // Button small
        this.btn_small = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 3.4, 'btn_small', 0).setInteractive();
        this.btn_small.displayHeight = game.config.height / 8.9;
        this.btn_small.displayWidth = game.config.width / 2.8;


        //Button medium
        this.btn_medium = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 4.2, 'btn_medium', 0).setInteractive();
        this.btn_medium.displayHeight = game.config.height / 8.9;
        this.btn_medium.displayWidth = game.config.width / 2.8;

        //Button medium2
        this.btn_medium2 = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 2.5, 'btn_medium2', 0).setInteractive();
        this.btn_medium2.displayHeight = game.config.height / 8.9;
        this.btn_medium2.displayWidth = game.config.width / 2.8;

        //Button large
        this.btn_large = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 3.4, 'btn_large', 0).setInteractive();
        this.btn_large.displayHeight = game.config.height / 8.9;
        this.btn_large.displayWidth = game.config.width / 2.8;

        //Button huge
        this.btn_huge = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 4.2, 'btn_huge', 0).setInteractive();
        this.btn_huge.displayHeight = game.config.height / 8.9;
        this.btn_huge.displayWidth = game.config.width / 2.8;


        this.about = this.add.text(game.config.width - game.config.width * 10 / 100, game.config.height - game.config.height * 5 / 100, "About").setFontSize(50).setFontFamily("Arial").setOrigin(0.5);


        // this.input.keyboard.on('keyup_ENTER', function (event) {
        //     console.log("aaaaa")
        //     gameOptions.col = 3;
        //     gameOptions.raw = 2;
        //     this.scene.start('Play');
        // }, this);
    }

    setGridSize(cols, rows) {
        Memory.gridCols = cols;
        Memory.gridRows = rows;
        this.scene.start('Play');
    }

    // method to be called at each frame
    update() {
        if (Phaser.Input.Keyboard.JustDown(this.upArrow)) {
            // console.log("UP CLICK");
            this.changeMenuButtonWithArrowUp();
        }

        if (Phaser.Input.Keyboard.JustDown(this.downArrow)) {
            // console.log("DOWN CLICK");
            this.changeMenuButtonWithArrowDown();
        }


        if (Phaser.Input.Keyboard.JustDown(this.back_space)) {
            //console.log("back CLICK");
            this.goToContactScene();
        }

    }

    goToContactScene() {
        this.scene.start('ContactScene');
    }


    goToOptionScene() {
        this.scene.start('OptionScene');
    }

    changeMenuButtonWithArrowDown() {

        switch (this.selected_button) {
            case "Tiny":
                this.btn_tiny.destroy();
                this.btn_tiny = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 2.5, 'btn_Tiny', 0).setInteractive();
                this.btn_tiny.displayHeight = game.config.height / 8.9;
                this.btn_tiny.displayWidth = game.config.width / 2.8;

                this.btn_small.destroy();
                this.btn_small = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 3.4, 'btn_small_hover', 0).setInteractive();
                this.btn_small.displayHeight = game.config.height / 8.9;
                this.btn_small.displayWidth = game.config.width / 2.8;

                this.selected_button = "small"
                break;
            case "small":
                this.btn_small.destroy();
                this.btn_small = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 3.4, 'btn_small', 0).setInteractive();
                this.btn_small.displayHeight = game.config.height / 8.9;
                this.btn_small.displayWidth = game.config.width / 2.8;

                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 4.2, 'btn_medium_hover', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 8.9;
                this.btn_medium.displayWidth = game.config.width / 2.8;

                this.selected_button = "medium"
                break;
            case "medium":
                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 4.2, 'btn_medium', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 8.9;
                this.btn_medium.displayWidth = game.config.width / 2.8;

                this.btn_medium2.destroy();
                this.btn_medium2 = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 2.5, 'btn_medium2_hover', 0).setInteractive();
                this.btn_medium2.displayHeight = game.config.height / 8.9;
                this.btn_medium2.displayWidth = game.config.width / 2.8;
                this.selected_button = "medium2"
                break;
            case "medium2":
                this.btn_medium2.destroy();
                this.btn_medium2 = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 2.5, 'btn_medium2', 0).setInteractive();
                this.btn_medium2.displayHeight = game.config.height / 8.9;
                this.btn_medium2.displayWidth = game.config.width / 2.8;

                this.btn_large.destroy();
                this.btn_large = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 3.4, 'btn_large_hover', 0).setInteractive();
                this.btn_large.displayHeight = game.config.height / 8.9;
                this.btn_large.displayWidth = game.config.width / 2.8;
                this.selected_button = "large"
                break;
            case "large":
                this.btn_large.destroy();
                this.btn_large = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 3.4, 'btn_large', 0).setInteractive();
                this.btn_large.displayHeight = game.config.height / 8.9;
                this.btn_large.displayWidth = game.config.width / 2.8;

                this.btn_huge.destroy();
                this.btn_huge = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 4.2, 'btn_huge_hover', 0).setInteractive();
                this.btn_huge.displayHeight = game.config.height / 8.9;
                this.btn_huge.displayWidth = game.config.width / 2.8;
                this.selected_button = "huge"
                break;
            case "huge":
                this.btn_huge.destroy();
                this.btn_huge = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 4.2, 'btn_huge', 0).setInteractive();
                this.btn_huge.displayHeight = game.config.height / 8.9;
                this.btn_huge.displayWidth = game.config.width / 2.8;

                this.btn_tiny.destroy();
                this.btn_tiny = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 2.5, 'btn_Tiny_hover', 0).setInteractive();
                this.btn_tiny.displayHeight = game.config.height / 8.9;
                this.btn_tiny.displayWidth = game.config.width / 2.8;
                this.selected_button = "Tiny"
                break;
            default:

        }
    }


    changeMenuButtonWithArrowUp() {

        switch (this.selected_button) {
            case "Tiny":
                this.btn_tiny.destroy();
                this.btn_tiny = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 2.5, 'btn_Tiny', 0).setInteractive();
                this.btn_tiny.displayHeight = game.config.height / 8.9;
                this.btn_tiny.displayWidth = game.config.width / 2.8;

                this.btn_huge.destroy();
                this.btn_huge = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 4.2, 'btn_huge_hover', 0).setInteractive();
                this.btn_huge.displayHeight = game.config.height / 8.9;
                this.btn_huge.displayWidth = game.config.width / 2.8;

                this.selected_button = "huge"
                break;
            case "small":
                this.btn_small.destroy();
                this.btn_small = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 3.4, 'btn_small', 0).setInteractive();
                this.btn_small.displayHeight = game.config.height / 8.9;
                this.btn_small.displayWidth = game.config.width / 2.8;

                this.btn_tiny.destroy();
                this.btn_tiny = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 2.5, 'btn_Tiny_hover', 0).setInteractive();
                this.btn_tiny.displayHeight = game.config.height / 8.9;
                this.btn_tiny.displayWidth = game.config.width / 2.8;

                this.selected_button = "Tiny"
                break;
            case "huge":
                this.btn_huge.destroy();
                this.btn_huge = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 4.2, 'btn_huge', 0).setInteractive();
                this.btn_huge.displayHeight = game.config.height / 8.9;
                this.btn_huge.displayWidth = game.config.width / 2.8;

                this.btn_large.destroy();
                this.btn_large = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 3.4, 'btn_large_hover', 0).setInteractive();
                this.btn_large.displayHeight = game.config.height / 8.9;
                this.btn_large.displayWidth = game.config.width / 2.8;
                this.selected_button = "large"
                break;
            case "large":
                this.btn_large.destroy();
                this.btn_large = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 3.4, 'btn_large', 0).setInteractive();
                this.btn_large.displayHeight = game.config.height / 8.9;
                this.btn_large.displayWidth = game.config.width / 2.8;

                this.btn_medium2.destroy();
                this.btn_medium2 = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 2.5, 'btn_medium2_hover', 0).setInteractive();
                this.btn_medium2.displayHeight = game.config.height / 8.9;
                this.btn_medium2.displayWidth = game.config.width / 2.8;
                this.selected_button = "medium2"
                break;
            case "medium2":
                this.btn_medium2.destroy();
                this.btn_medium2 = this.add.sprite(game.config.width / 1.35, (game.config.height / 6) * 2.5, 'btn_medium2', 0).setInteractive();
                this.btn_medium2.displayHeight = game.config.height / 8.9;
                this.btn_medium2.displayWidth = game.config.width / 2.8;

                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 4.2, 'btn_medium_hover', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 8.9;
                this.btn_medium.displayWidth = game.config.width / 2.8;
                this.selected_button = "medium"
                break;
            case "medium":
                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 4.2, 'btn_medium', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 8.9;
                this.btn_medium.displayWidth = game.config.width / 2.8;

                this.btn_small.destroy();
                this.btn_small = this.add.sprite(game.config.width / 4, (game.config.height / 6) * 3.4, 'btn_small_hover', 0).setInteractive();
                this.btn_small.displayHeight = game.config.height / 8.9;
                this.btn_small.displayWidth = game.config.width / 2.8;
                this.selected_button = "small"
            default:

        }
    }

    callMenuButton() {
        switch (this.selected_button) {
            case "Tiny":
                //console.log("Play SELECT");
                console.log("aaaaa")
                gameOptions.col = 4;
                gameOptions.raw = 3;
                this.scene.start('Play');
                break;
            case "small":
                //console.log("ScoreScene SELECT");
                console.log("aaaaa")
                gameOptions.col = 4;
                gameOptions.raw = 4;
                this.scene.start('Play');
                break;
            case "medium":
                //console.log("Option SELECT");
                console.log("aaaaa")
                gameOptions.col = 5;
                gameOptions.raw = 4;
                this.scene.start('Play');
                break;
            case "medium2":
                //console.log("Play SELECT");
                console.log("aaaaa")
                gameOptions.col = 6;
                gameOptions.raw = 4;
                this.scene.start('Play');
                break;
            case "large":
                //console.log("ScoreScene SELECT");
                console.log("aaaaa")
                gameOptions.col = 7;
                gameOptions.raw = 4;
                this.scene.start('Play');
                break;
            case "huge":
                //console.log("Option SELECT");
                console.log("aaaaa")
                gameOptions.col = 8;
                gameOptions.raw = 4;
                this.scene.start('Play');
                break;
            default:

        }
    }

}

// pure javascript to resize the canvas and scale the game
function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

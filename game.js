// the game itself
var game;

// global game options
var gameOptions = {

    // world gravity
    gravity: 0,

    // ball horizontal speed
    ballSpeed: 4,

    // jump force
    jumpForce: 25,

    col: 0,

    raw: 0,

    move: 0,

    score: 0,

    // amount of bars each wall is divided in
    bars: 4,

    // array with the colors to pick from
    barColors: [0x1abc9c, 0x2980b9, 0x9b59b6, 0xf1c40f, 0xc0392b, 0xecf0f1]
}

// constants used to pass "LEFT" and "RIGHT" as arguments rather than "0" and "1"
const LEFT = 0;
const RIGHT = 1;
var score = 0;
var scoreText;

// function to be executed when the windows has loaded
window.onload = function () {

    // object containing configuration options
    var gameConfig = {

        // render type: let the game decide if CANVAS of WEBGL
        type: Phaser.AUTO,

        // width of the game, in pixels
        width: 750,

        // height of the game, in pixels
        height: 800,

        // background color (black)
        backgroundColor: 0x60256B,

        // scene to play
        // scene: playGame,

        // physics settings
        physics: {

            // we are using Matter JS
            default: "matter",
            matter: {
                debug: true,
                // gravity settings
                gravity: {
                    x: 0,
                    y: gameOptions.gravity
                }
            }
        },
        url: '',
        pixelArt: true,
        scene: [Boot, Preloader, SetGrid, PlayGame, Score, , Menu, Play, About]
    }

    // game creation
    game = new Phaser.Game(gameConfig);

    game.URL = '';

    game.CONFIG = {
        width: gameConfig.width,
        height: gameConfig.height,
        centerX: Math.round(0.5 * gameConfig.width),
        centerY: Math.round(0.5 * gameConfig.height)
    };

    // giving focus to the frame (if any) where the game is running in
    window.focus();

    // pure javascript to scale the canvas
    resize();
    window.addEventListener("resize", resize, false);
}

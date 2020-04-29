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

    //gameWinNumber
    gameWinNumber: 0,

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

    // request an ad when the DOM is loaded
    // getKaiAd({
    //     publisher: 'ca24f2d0-de89-4c1a-80c4-51e14d317000',
    //     app: 'Pelota',
    //     slot: 'Pelota',

    //     h: 264,
    //     w: 240,

    //     // Max supported size is 240x264
    //     // container is required for responsive ads
    //     container: document.getElementById('ad-container'),
    //     onerror: err => console.error('Custom catch:', err),
    //     onready: ad => {

    //         // Ad is ready to be displayed
    //         // calling 'display' will display the ad
    //         ad.call('display', {

    //             // In KaiOS the app developer is responsible
    //             // for user navigation, and can provide
    //             // navigational className and/or a tabindex
    //             tabindex: 0,

    //             // if the application is using
    //             // a classname to navigate
    //             // this classname will be applied
    //             // to the container
    //             navClass: 'items',

    //             // display style will be applied
    //             // to the container block or inline-block
    //             display: 'block',
    //         })
    //     }
    // });

    // object containing configuration options
    var gameConfig = {

        // render type: let the game decide if CANVAS of WEBGL
        type: Phaser.AUTO,

        // width of the game, in pixels
        width: 480,

        // height of the game, in pixels
        height: 640,

        // background color (black)
        // backgroundColor: 0x60256B,

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
        scene: [Boot, Preloader, SetGrid, Score, , Menu, Play, About, GameOver, HelpScene]
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

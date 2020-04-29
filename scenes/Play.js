// playGame scene
class Play extends Phaser.Scene {
    constructor() {
        super({ key: "Play", active: false });
        this.move = 0;
        this.completed = 0;
    }

    // preloading assets
    preload() {
        this.load.image("gamePlayBg", "assets/img/bg.png");

        this.load.image("c0", "assets/img/cards/1.png");
        this.load.image("c1", "assets/img/cards/2.png");
        this.load.image("c2", "assets/img/cards/3.png");
        this.load.image("c3", "assets/img/cards/4.png");
        this.load.image("c4", "assets/img/cards/5.png");
        this.load.image("c5", "assets/img/cards/6.png");
        this.load.image("c6", "assets/img/cards/7.png");
        this.load.image("c7", "assets/img/cards/8.png");
        this.load.image("c8", "assets/img/cards/9.png");
        this.load.image("c9", "assets/img/cards/10.png");
        this.load.image("c10", "assets/img/cards/11.png");
        this.load.image("c11", "assets/img/cards/12.png");
        this.load.image("c12", "assets/img/cards/13.png");
        this.load.image("c13", "assets/img/cards/14.png");
        this.load.image("c14", "assets/img/cards/15.png");
        this.load.image("c15", "assets/img/cards/16.png");

        this.load.image("card", "assets/img/Default-Card.png");
        this.load.image("score", "assets/img/Score.png");
        this.load.image("move", "assets/img/Moves.png");

    }

    // method to be executed once, when the scene has been created
    create() {

        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'gamePlayBg');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;

        // this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'fireball');

        this.move = gameOptions.move;
        score = gameOptions.score;

        this.movepic = this.add.image(game.config.width / 4, 50, 'move');
        this.movepic.displayHeight = 69;
        this.movepic.displayWidth = 195;
        this.moveText = this.add.text(170, 26, this.move, { fontSize: '40px', fill: '#FFF' });

        this.scorepic = this.add.image(game.config.width / 1.3, 50, 'score');
        this.scorepic.displayHeight = 69;
        this.scorepic.displayWidth = 195;
        this.scoreText = this.add.text(game.config.width / 1.13, 26, score, { fontSize: '40px', fill: '#FFF' });

        this.raws = gameOptions.raw;
        this.columns = gameOptions.col;

        this._setCardsSizeCompatible();

        this.topBarHeight = game.config.width / 2;
        this.rowWidth = (this.cardWidth + this.cardSpacing) * (this.columns - 1) + this.cardWidth;
        this.columnHeight = (this.cardWidth + this.cardSpacing) * (this.raws - 1) + this.cardWidth;
        this.leftMargin = (game.config.width - this.rowWidth) / 1.5;
        this.topMargin = (game.config.height - this.topBarHeight - this.columnHeight) / 3 + this.topBarHeight;

        this.cards = new Array(); //  contains actual card elements
        this.cardValues = new Array(); // an array with the value of each card twice
        this.numValues = this.columns * this.raws / 2; // the number of possible pictures/values for the cards
        this.lastClickedIndex = -1; // the index of the card that was last clicked
        this.compaire_pic = new Array();
        this.compaire_pic_num = new Array();



        this.createGrid();
        this.assignCards();
        this.changeCard();
        this.SelectCardAssignPic();

        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "SoftRight") {
                //console.log("soft right key");
                this.scene.start('SetGrid');
            }
        }, this);
    }

    _setCardsSizeCompatible() {
        if (this.raws == 3 && this.columns == 4) {
            this.card_dis_width = 100;
            this.card_dis_height = 100;
            this.cardWidth = game.config.width / 10;
            this.cardSpacing = game.config.width / 8;
            this.pic_width = 90;
            this.pic_height = 90;
        } else if (this.raws == 4 && this.columns == 4) {
            this.card_dis_width = 100;
            this.card_dis_height = 100;
            this.cardWidth = game.config.width / 11;
            this.cardSpacing = game.config.width / 8;
            this.pic_width = 90;
            this.pic_height = 90;
        } else if (this.raws == 4 && this.columns == 5) {
            this.card_dis_width = 90;
            this.card_dis_height = 90;
            this.cardWidth = game.config.width / 37;
            this.cardSpacing = game.config.width / 6;
            this.pic_width = 80;
            this.pic_height = 80;
        } else if (this.raws == 4 && this.columns == 6) {
            this.card_dis_width = 80;
            this.card_dis_height = 80;
            this.cardWidth = game.config.width / 40;
            this.cardSpacing = game.config.width / 7;
            this.pic_width = 70;
            this.pic_height = 70;
        } else if (this.raws == 4 && this.columns == 7) {
            this.card_dis_width = 60;
            this.card_dis_height = 60;
            this.cardWidth = game.config.width / 15;
            this.cardSpacing = game.config.width / 15;
            this.pic_width = 50;
            this.pic_height = 50;
        } else if (this.raws == 4 && this.columns == 8) {
            this.card_dis_width = 50;
            this.card_dis_height = 50;
            this.cardWidth = game.config.width / 16;
            this.cardSpacing = game.config.width / 16;
            this.pic_width = 45;
            this.pic_height = 45;
        }
    }

    createGrid() {
        for (var i = 0; i < this.raws; i++) {
            for (var j = 0; j < this.columns; j++) {
                var c = this.add.sprite(this.leftMargin + (this.cardWidth + this.cardSpacing) * j,
                    this.topMargin + (this.cardWidth + this.cardSpacing) * i, 'card');
                c.displayWidth = this.card_dis_width;
                c.displayHeight = this.card_dis_height;
                this.cards.push(c);
                // c.setTint(0x2980b9);
                c.inputEnabled = true;
            }
        }
    }

    assignCards() {
        //  make an array to hold the possible values
        for (var i = 0; i < this.numValues; i++) {
            this.cardValues.push(i);
            this.cardValues.push(i);
        }
        //  add a value to each card
        for (var i = 0; i < this.cards.length; i++) {
            // get a rand num from the cardvalues arr
            var randNum = Math.floor(Math.random() * (this.cardValues.length));
            // assign it to the card's cardValue
            this.cards[i].cardValue = this.cardValues[randNum];
            // remove that value from the array so it can't be used again
            this.cardValues.splice(randNum, 1);
            this.cards[i].clickable = true;
        }
    }

    changeCard() {
        var i = -1;
        var j = 0;

        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "ArrowRight") {
                if (this.cards[i] != null) {
                    this.cards[i].clearTint();
                    this.cards[i].selected = 'unselected';
                }
                i++;
                if (this.cards[i] != null) {
                    this.cards[i].setTint(0x1abc9c);
                    this.cards[i].selected = 'selected';
                }

                if (i == this.cards.length) {
                    i = 0;
                    this.cards[i].setTint(0x1abc9c);
                    this.cards[i].selected = 'selected';
                }
                if (i == 1) {
                    this.cards[this.cards.length - 1].clearTint();
                    this.cards[this.cards.length - 1].selected = 'unselected';
                }
            }

            if (e.key == "ArrowLeft") {
                if (i == 0) {
                    i = this.cards.length;
                    this.cards[0].clearTint();
                    this.cards[0].selected = 'unselected';
                }
                i--;
                this.cards[i].setTint(0x1abc9c);
                this.cards[i].selected = 'selected';
                if (this.cards[i + 1] != null) {
                    this.cards[i + 1].clearTint();
                    this.cards[i + 1].selected = 'unselected';
                }
            }

            if (e.key == "ArrowDown") {
                if (this.cards[i + this.columns] != null) {
                    i = i + this.columns;
                    this.cards[i].setTint(0x1abc9c);
                    this.cards[i].selected = 'selected';
                }

                if (this.cards[i - this.columns] != null) {
                    this.cards[i - this.columns].clearTint();
                    this.cards[i - this.columns].selected = 'unselected';
                }
            }

            if (e.key == "ArrowUp") {
                if (this.cards[i - this.columns] != null) {
                    i = i - this.columns;
                    this.cards[i].setTint(0x1abc9c);
                    this.cards[i].selected = 'selected';
                }

                if (this.cards[i + this.columns] != null) {
                    this.cards[i + this.columns].clearTint();
                    this.cards[i + this.columns].selected = 'unselected';
                }
            }
            if (e.key == "Backspace") {
                this.scene.start('SetGrid');
            }
        }, this);
    }

    SelectCardAssignPic() {
        this.input.keyboard.on('keyup', function (e) {
            for (var i = 0; i < (gameOptions.col * gameOptions.raw); i++) {
                if (e.key == "Enter") {
                    if (this.cards[i].selected === "selected") {
                        var y = this.cards[i].y
                        var x = this.cards[i].x
                        var pic = this.add.sprite(x, y, "c" + this.cards[i].cardValue);
                        pic.displayWidth = this.pic_width;
                        pic.displayHeight = this.pic_height;
                        this.compaire_pic_num.push(this.cards[i].cardValue);
                        this.compaire_pic.push(pic);
                        if (this.compaire_pic_num.length == 2 || this.compaire_pic.length == 2) {
                            this.MatchChecked(this.compaire_pic_num, this.compaire_pic);
                        }
                    } else {
                        console.log('unselected');
                    }
                }
            }
        }, this);
    }

    MatchChecked(compaire_pic_num, compaire_pic) {
        if (compaire_pic_num[0] == compaire_pic_num[1]) {
            compaire_pic_num.splice(0, 2);
            setTimeout(function () {
                compaire_pic.splice(0, 2);
            }, 1000);
            this.scoreCollect();
            this.moveCollect();
            this.completed += 2;
            this._createEmitter(this.completed);

        } else {
            compaire_pic_num.splice(0, 2);
            setTimeout(function () {
                compaire_pic[0].destroy();
                compaire_pic[1].destroy();
                compaire_pic.splice(0, 2);
            }, 1000);
            this.moveCollect();
        }

    }

    _createEmitter(completed) {
        if (completed == (this.numValues * 2)) {
            this.scene.start('GameOver');
            this.completed = 0;
        }
    }

    moveCollect() {
        this.move += 1;
        this.moveText.setText(this.move);
    }

    scoreCollect() {
        score += 10;
        this.avgScore = (score / this.move).toFixed(0);
        this.scoreText.setText(this.avgScore*10);
        score = this.avgScore*10;
    }

    _setScoreLocalStorage(avgScore) {
        if (this.raws == 3 && this.columns == 4) {
            this.tinyScore = avgScore;
            if (localStorage.getItem("tinyScore") === null || localStorage.getItem('tinyScore') > this._tinyScore) {
                localStorage.setItem('tinyScore', this.tinyScore);
            }
            avgScore = 0;
        } else if (this.raws == 4 && this.columns == 4) {
            this.smallScore = avgScore;
            if (localStorage.getItem("smallScore") === null || localStorage.getItem('smallScore') > this.smallScore) {
                localStorage.setItem('smallScore', this.smallScore);
            }
            avgScore = 0;
        } else if (this.raws == 4 && this.columns == 5) {
            this.mediumScore = avgScore;
            if (localStorage.getItem("mediumScore") === null || localStorage.getItem('mediumScore') > this.mediumScore) {
                localStorage.setItem('mediumScore', this.mediumScore);
            }
            avgScore = 0;
        } else if (this.raws == 4 && this.columns == 6) {
            this.medium2Score = avgScore;
            if (localStorage.getItem("medium2Score") === null || localStorage.getItem('medium2Score') > this.medium2Score) {
                localStorage.setItem('medium2Score', this.medium2Score);
            }
            avgScore = 0;
        } else if (this.raws == 4 && this.columns == 7) {
            this.largeScore = avgScore;
            if (localStorage.getItem("largeScore") === null || localStorage.getItem('largeScore') > this.largeScore) {
                localStorage.setItem('largeScore', this.largeScore);
            }
            avgScore = 0;
        } else if (this.raws == 4 && this.columns == 8) {
            this.hugeScore = avgScore;
            if (localStorage.getItem("hugeScore") === null || localStorage.getItem('hugeScore') > this.hugeScore) {
                localStorage.setItem('hugeScore', this.hugeScore);
            }
            avgScore = 0;
        } else {
            console.log('error');
        }
    }

    // method to be called at each frame
    update() {
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

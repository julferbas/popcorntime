class Phase {
    constructor(level) {
        this.level = level;
        this.trigger = true;
        this.win = false;
    }
    preload() {
        this.bucket = new Bucket();
        this.bucket.preload();

        this.winScreen = loadImage("Imagens/Escolhidas/ready-04.png");

        this.corn = [];
        if (this.trigger) {
            this.createPopcorn();
        }

    }

    createPopcorn() {
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 7; i++) {
                if (random() < 0.5 && this.corn.length < 7 * this.level) {
                    this.corn.push(new Corn(470 + i * 32, 100 + j * 30))
                }

            }
        }
        this.corn.forEach(function (corn) {
            corn.preload();
        })
        this.trigger = false
    }

    next() {
        if (this.level < 5) {
            this.level++;
            this.corn = [];
            this.createPopcorn();
            // this.bucket.clearBucket();
        } else {
            this.win = true;
        }
    }

    setup() {
        this.phaseOver = false;
        this.corn.forEach(function (corn) {
            corn.setup();
        })
        this.bucket.setup();
    }

    draw() {
        if (this.win === true) {
            image(this.winScreen, 428, 130, 340, 450);
        } else {
            this.corn.forEach(function (corn) {
                corn.draw();
            })
            this.bucket.draw();
        }
    }

    mouseClicked() {
        this.corn.forEach(function (corn) {
            corn.pop();
        });
        let totalPopped = true;
        this.corn.forEach(function (corn) {
            totalPopped = totalPopped && corn.popped;
        });

        if (totalPopped === true) {
            this.bucket.changeBucket();
            this.phaseOver = true;
            //this.timer.resetTimer();
            // this.corn.forEach(function (corn) {
            //     corn.y += 4;
            // });
            //this.corn = [];
            //this.level++;
        }

    }

}
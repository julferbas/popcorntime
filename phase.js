class Phase {
    constructor(level) {
        this.level = level;
    }
    preload() {
        this.bucket = new Bucket();
        this.bucket.preload();

        this.corn = [];

        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 7; i++) {
                if (random() < 0.5 && this.corn.length < 7 * this.level) {
                    this.corn.push(new Corn(470 + i * 34, 100 + j * 40))
                }

            }
        }


        this.corn.forEach(function (corn) {
            corn.preload();
        })
    }

    setup() {
        this.phaseOver = false;
        this.corn.forEach(function (corn) {
            corn.setup();
        })
        this.bucket.setup();
    }

    draw() {
        this.corn.forEach(function (corn) {
            corn.draw();
        })
        this.bucket.draw();
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
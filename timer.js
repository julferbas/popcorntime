class Timer {
    constructor(timerValue) {
        this.timerValue = timerValue;
        this.originalTimerValue = timerValue;
        this.timeOver = true;
    }

    preload() {
        this.img = loadImage("Imagens/Escolhidas/game-over-04.png")
    }

    setup() {
        textSize(40);
        fill(250);
        this.clock = setInterval(timeIt, 1000);
    }

    draw() {
        if (this.timerValue >= 10) {
            text(this.timerValue, 415, 73);
        }
        if (this.timerValue < 10) {
            text(this.timerValue, 430, 73);
        }
        if (this.timerValue == 0) {
            // text('game over', width / 2, height / 2 + 15);
            image(this.img, 490, 160, 204, 270);
            this.timeOver = false;
        }
    }

    timeIt() {
        if (this.timerValue > 0) {
            this.timerValue--;
        }
    }

    resetTimer() {
        this.timerValue = this.originalTimerValue;
    }

    stop() {
        clearInterval(this.clock);
    }

}














// setup() {
//     noCanvas();//limit animation

//     this.timer = select('#timer');
//     timer.html('0'); //insert text

//     timeIt() {
//         counter++;
//         timer.html(counter);
//     }

//     setInterval(timeIt, 1000);//native function 1000ms =1 s
//     //request animationframe is also another func
// }
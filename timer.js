class Timer {
    constructor(timerValue) {
        this.timerValue = timerValue;
        this.originalTimerValue = timerValue;
        this.timeOver = true;
    }

    preload() {
        this.img = loadImage("Imagens/Escolhidas/gameover-03.png")
    }

    setup() {
        //createCanvas(100, 100);
        textSize(40);
        fill(250);
        setInterval(timeIt, 1000);
    }

    draw() {
        //background(250);
        if (this.timerValue >= 10) {
            text(this.timerValue, width / 2, 90);
        }
        if (this.timerValue < 10) {
            text(this.timerValue, width / 2, 90);
        }
        if (this.timerValue == 0) {
            // text('game over', width / 2, height / 2 + 15);
            image(this.img, 550, 200, 90, 115);
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
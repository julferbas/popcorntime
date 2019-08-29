let startScreen = true;
const phase = new Phase(1);
const timer = new Timer(25);


function preload() {
    borderImg = loadImage("Imagens/Escolhidas/border.png");
    startImg = loadImage("Imagens/Escolhidas/start.png");
    phase.preload();
    timer.preload();
}

function setup() {
    createCanvas(800, 650);
    phase.setup();
    timer.setup();

}


function draw() {
    if (startScreen && phase.level === 1) {
        background(color(250, 250, 250));
        image(borderImg, 0, 0, 800, 650);
        image(startImg, 460, 160, 276, 360);
        if (keyCode === 13) {
            startScreen = false;
            timer.resetTimer();
        }

    } else {
        background(color(250, 250, 250));
        image(borderImg, 0, 0, 800, 650);
        phase.draw();
        timer.draw();
        if (phase.phaseOver === true) {
            timer.resetTimer();
            phase.phaseOver = false;
            phase.trigger = true;
            phase.next();
            //phase.level = 2;
            //phase.createPopcorn();
        }
        if (phase.win === true) {
            timer.stop();
        }
    }
}

function mouseClicked() {
    if (timer.timeOver === true) {
        phase.mouseClicked();
    }
}


function timeIt() {
    timer.timeIt();
};



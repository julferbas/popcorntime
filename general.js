let startScreen = true;
const phase = new Phase(1);
const timer = new Timer(10);


function preload() {
    borderImg = loadImage("Imagens/Escolhidas/arte-02.png");
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
        if (keyCode === 32) startScreen = false

    } else if (phase.level === 1) {
        background(color(250, 250, 250));
        image(borderImg, 0, 0, 800, 650);
        phase.draw();
        timer.draw();
        if (phase.phaseOver === true) {
            timer.resetTimer();
            phase.phaseOver = false;
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


// function resetTimer() {
//     if (corn.)
// }
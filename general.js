const phase = new Phase(4);
const timer = new Timer(2);


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
    if (phase.level === 0) {
        background(color(250, 250, 250));
        image(borderImg, 0, 0, 800, 650);
        if (keyCode === 32) level += 1

    } else {
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
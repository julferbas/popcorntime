class Corn {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

    }

    preload() {
        this.corn = [loadImage("Imagens/Escolhidas/milho-1.png"),
        loadImage("Imagens/Escolhidas/milho-2.png"),
        loadImage("Imagens/Escolhidas/milho-3.png"),
        loadImage("Imagens/Escolhidas/milho-4.png"),
        loadImage("Imagens/Escolhidas/milho-5.png"),
        loadImage("Imagens/Escolhidas/milho-6.png")
        ]


        this.popcorn = [loadImage("Imagens/Escolhidas/pipoca-1.png"),
        loadImage("Imagens/Escolhidas/pipoca-2.png"),
        loadImage("Imagens/Escolhidas/pipoca-3.png"),
        loadImage("Imagens/Escolhidas/pipoca-4.png"),
        loadImage("Imagens/Escolhidas/pipoca-5.png"),
        loadImage("Imagens/Escolhidas/pipoca-6.png")
        ]


        this.image = random(this.corn);
        this.chosenPopcorn = random(this.popcorn);
        this.popped = false;
    }

    setup() {
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
        if (this.falling === true) {
            if (this.y < 355) {
                this.y += 3;
            } else {
                this.y = 900;
            }

        }

    }

    pop() {
        if (mouseX >= this.x && mouseX <= this.x + 40 && mouseY >= this.y && mouseY <= this.y + 40) {
            this.image = this.chosenPopcorn;
            this.popped = true;
            this.falling = true;
        }


    }
}    

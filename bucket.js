class Bucket {
    constructor() {
        this.x = 475;
        this.y = 335;
        this.width = 300;
        this.height = 300;

    }

    preload() {
        this.emptyBucket = loadImage("Imagens/Escolhidas/balde-vazio-01.png");
        this.fullBucket = loadImage("Imagens/Escolhidas/balde-cheio-3.png");
        this.bucket = this.emptyBucket;
    }

    setup() {
    }

    draw() {
        image(this.bucket, this.x, this.y, this.width, this.height);
    }

    changeBucket() {
        this.bucket = this.fullBucket;
    }

}

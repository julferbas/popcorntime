class Bucket {
    constructor() {
        this.x = 450;
        this.y = 325;
        this.width = 295;
        this.height = 295;

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

    clearBucket() {
        this.bucket = this.emptyBucket;
    }

}

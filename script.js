function setup() {
    createCanvas(400, 600);
}
function draw() {
    background("blue");
    nathanFace();
    smilyFaceTabita();
    checkLimitsSMGiorgi();

    smilyFaceGiorgi(smGiorgiX, smGiorgiY);
}
function nathanFace() {
    background("white")
    fill("orange");
    circle(400, 300, 50);
    fill("black");
    circle(400, 290, 13);
    fill("black");
    circle(410, 300, 10);
    fill("white");
    circle(400, 360, 100);
    fill("orange");
    circle(400, 360, 75);
    fill("white");
    circle(400, 360, 60);
    background("blue");

}
function smilyFaceTabita(x, y) {
    //Body
    // fill("white");
    fill("beige");
    stroke("black");
    circle(x, y, 50);
    //EYSE
    fill("black")
    stroke("black");
    ellipse(x - 10, y - 10, 10, 5);
    ellipse(x + 10, y - 10, 10, 5);
    //Eye pupils
    stroke("light green");
    fill("lightgreen");
    circle(x - 10, y - 10, 4);
    circle(x + 10, y - 10, 4);

    //Mounth
    fill("black")
    stroke("red");
    arc(x, y + 10, 17, 10, 0, Math.PI);

    //Cheeks
    stroke("red");
    fill("red");
    circle(x + 20, y + 5, 9);
    circle(x - 20, y + 5, 9);
}
let tabelWith = 400;
let tabelHeight = 600;

let smGiorgiX = 200;
let smGiorgiY = 300;

let directionX = 1;

function checkLimitsSMGiorgi() {
    if (smGiorgiX >= tabelWith)
        directionX *= -1;

    smGiorgiX += directionX;
}
function smilyFaceGiorgi(x, y) {
    //Body
    // fill("white");
    fill("beige");
    stroke("black");
    circle(x, y, 50);
    //EYSE
    fill("black")
    stroke("black");
    ellipse(x - 10, y - 10, 10, 5);
    ellipse(x + 10, y - 10, 10, 5);
    //Eye pupils
    stroke("light green");
    fill("lightgreen");
    circle(x - 10, y - 10, 4);
    circle(x + 10, y - 10, 4);

    //Mounth
    fill("black")
    stroke("red");
    arc(x, y + 10, 17, 10, 0, Math.PI);

    //Cheeks
    stroke("red");
    fill("red");
    circle(x + 20, y + 5, 9);
    circle(x - 20, y + 5, 9);
}




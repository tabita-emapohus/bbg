let tabWith = 800;
let tabHeight = 600;

let smTabitaX = 400;
let smTabitaY = 100;

let directionTabitaX = 1;
let smGiorgiX = 200;
let smGiorgiY = 300;

let directionNathanX = 1;
let directionNathanY = 1;
let smNathanX = 100;
let smNathanY = 300;

let directionGiorgiX = 1;
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background("blue");
  smilyFaceTabita(smTabitaX, smTabitaY);
  smilyFaceGiorgi(smGiorgiX, smGiorgiY);
  smilyFaceNathan(smNathanX, smNathanY);
  checkLimitsSMTabita();
  checkLimitsSMGiorgi();
  checkLimitsSMNathan()

}

function checkLimitsSMGiorgi() {
  if (smGiorgiX >= tabWith)
    directionGiorgiX *= -1;

  smGiorgiX += directionGiorgiX;
}


function checkLimitsSMTabita() {
  if (smTabitaX >= tabWith)
    directionTabitaX *= -1;

  smTabitaX += directionTabitaX;
}

function checkLimitsSMNathan() {
    if (smNathanX >= tabWith)
      directionNathanX *= -1;
  
    smNathanX += directionNathanX;

    if (smNathanY >= tabHeight)
    directionNathanY *= -1;

    smNathanY += directionNathanY;
  }
function smilyFaceTabita(x, y) {
  //Body
  // fill("white");
  fill("gray");
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

function smilyFaceNathan(x, y) {
    //Body
    // fill("white");
    fill("red");
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


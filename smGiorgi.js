let smGiorgiX = 200;
let smGiorgiY = 300;

let directionGiorgiX = 3;

function checkLimitsSMGiorgi() {
    if (smGiorgiX >= tabWith || smGiorgiX <= 0)
      directionGiorgiX *= -1;
  
    smGiorgiX += directionGiorgiX;
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
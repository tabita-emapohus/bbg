let smNathan={
  x: 100,
  y: 400,
  directionX: 4,
  directionY: 4
}
// let directionNathanX = 4;
// let directionNathanY = 4;
// let smNathanX = 100;
// let smNathanY = 300;

function checkLimitsSMNathan() {
    if (smNathan.x >= tabWith || smNathan.x <= 0)
    smNathan.directionX *= -1;
  
    smNathan.x += smNathan.directionX;

    if (smNathan.y >= tabHeight || smNathan.y <= 0)
    smNathan.directionY *= -1;

    smNathan.y += smNathan.directionY;
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
  }
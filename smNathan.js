let smNathan={
  x: 100,
  y: 400,
  directionX: 1,
  directionY: 1,
  speed: 5,
  ray: 50
}

function checkLimitsSMNathan() {
    if (smNathan.x >= tabWidth || smNathan.x <= 0)
    smNathan.directionX *= -1;
  
    smNathan.x += smNathan.directionX*smNathan.speed;

    if (smNathan.y >= tabHeight || smNathan.y <= 0)
      smNathan.directionY *= -1;
//checking with the paddle
    if (
      // smNathan.y + smNathan.ray == pdNathan.y && 
      smNathan.y + smNathan.ray/2 == pdNathan.y && 
      smNathan.x >= pdNathan.x -pdNathan.width/2 && 
      smNathan.x <= pdNathan.x + pdNathan.width
      )
      {smNathan.directionY *= -1;}

    smNathan.y += smNathan.directionY*smNathan.speed;
}

function smilyFaceNathan(x, y) {
    //Body
    // fill("white");
    fill("red");
    stroke("black");
    circle(x, y, smNathan.ray);
    
    //eyes
    fill("lightgreen");
    circle(x - smNathan.ray/5, y - smNathan.ray/5, smNathan.ray/10);
    circle(x + smNathan.ray/5, y - smNathan.ray/5, smNathan.ray/10);

    //Mounth
    fill("black")
    stroke("red");
    arc(x, y + smNathan.ray/5, smNathan.ray/3, smNathan.ray/3, 0, Math.PI);
  }
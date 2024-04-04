let smGiorgi = {
  x: 200,
  y: 300,
  ray: 45,
  directionX: 3,
  directionY: 3,
  speedX: 5,
  speedY: 5
}

function checkLimitsSMGiorgi() {
    if (smGiorgi.x >= tabWith - smGiorgi.ray || smGiorgi.x <= 0 + smGiorgi.ray) {
      smGiorgi.directionX *= -1;
    }

    smGiorgi.x += smGiorgi.directionX * smGiorgi.speedX;

    if (smGiorgi.y >= tabWith - smGiorgi.ray || smGiorgi.y <= 0 + smGiorgi.ray) {
      smGiorgi.directionY *= -1;
    }

    smGiorgi.y += smGiorgi.directionY * smGiorgi.speedY;
    }
  function smilyFaceGiorgi(x, y) {
    //Body
    // fill("white");
    fill("beige");
    stroke("black");
    circle(x, y, smGiorgi.ray * 2);
    //EYSE
    fill("black")
    stroke("black");
    ellipse(x - (smGiorgi.ray * 2) / 5, y - (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 10);
    ellipse(x + (smGiorgi.ray * 2) / 5, y - (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 10);
    //Eye pupils
    stroke("light green");
    fill("lightgreen");
    circle(x - (smGiorgi.ray * 2) / 5, y - (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 12.5);
    circle(x + (smGiorgi.ray * 2) / 5, y - (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 12.5);
  
    //Mounth
    fill("black")
    stroke("red");
    arc(x, y + (smGiorgi.ray * 2) / 5, (smGiorgi.ray * 2) / 2.94, (smGiorgi.ray * 2) / 5, 0, Math.PI);
  
    //Cheeks
    stroke("red");
    fill("red");
    circle(x + (smGiorgi.ray * 2) / 2.5, y + (smGiorgi.ray * 2) / 10, (smGiorgi.ray * 2) / 5.5);
    circle(x - (smGiorgi.ray * 2) / 2.5, y + (smGiorgi.ray * 2) / 10, (smGiorgi.ray * 2) / 5.5);
  }
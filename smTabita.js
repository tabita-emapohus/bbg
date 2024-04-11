let smTabita = {
    x: 200,
    y: 300,
    ray: 25,
    directionX: 1,
    directionY: 1,
    speedX: 2,
    speedY: 2
}


function checkLimitsSMTabita() {
    if (smTabita.x >= tabWidth - smTabita.ray || smTabita.x <= 0 + smTabita.ray) {
        smTabita.directionX *= -1;
    }

    smTabita.x += smTabita.directionX * smTabita.speedX;

    if(smTabita.y <= 0 + smTabita.ray) {
        smTabita.directionY *= -1;
    }  
    // verificare paddle 
    if ( 
        smTabita.y >= pdTabita.y -smTabita.ray &&
        smTabita.y <= pdTabita.y + pdTabita.height + smTabita.ray && 
        smTabita.x >= pdTabita.x - smTabita.ray && 
        smTabita.x <= pdTabita.x + pdTabita.width + smTabita.ray
        ){
            smTabita.directionY *= -1;
        }
        smTabita.y += smTabita.directionY * smTabita.speedY;
  }
function smilyFaceTabita(x, y) {
    //Body
    // fill("white");
    fill("gray");
    stroke("black");
    circle(x, y, smTabita.ray * 2);
    //EYSE
    fill("black")
    stroke("black");
    ellipse(x - (smTabita.ray * 2) / 5, y - (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 10);
    ellipse(x + (smTabita.ray * 2) / 5, y - (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 10);
    //Eye pupils
    stroke("light green");
    fill("lightgreen");
    circle(x - (smTabita.ray * 2) / 5, y - (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 12.5);
    circle(x + (smTabita.ray * 2) / 5, y - (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 12.5);

    //Mounth
    fill("black")
    stroke("red");
    arc(x, y + (smTabita.ray * 2) / 5, (smTabita.ray * 2) / 2.95, (smTabita.ray * 2) / 5, 0, Math.PI);

    //Cheeks
    stroke("red");
    fill("red");
    circle(x + (smTabita.ray * 2) / 2.5, y + (smTabita.ray * 2) / 10, (smTabita.ray * 2) / 5.5);
    circle(x - (smTabita.ray * 2) / 2.5, y + smTabita.ray * 2 / 10, (smTabita.ray * 2) / 5.5);
}

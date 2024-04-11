let pdNathan = {
    x: 200,
    y: 400,
    color: "red",
    width: 100,
    height: 50
}

function createPdNathan(){
    fill(pdNathan.color);
    // pdNathan.x=mouseX-pdNathan.width/2;
    pdNathan.x=mouseX-pdNathan.width/2;
    rect(pdNathan.x, pdNathan.y, pdNathan.width, pdNathan.height);
}
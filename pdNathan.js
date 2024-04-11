let pdNathan = {
    x: 200,
    y: 500,
    color: "red",
    width: 100,
    height: 10
}

function createPdNathan(){
    fill(pdNathan.color);
    // pdNathan.x=mouseX-pdNathan.width/2;
    pdNathan.x=mouseX-pdNathan.width/2;
    rect(pdNathan.x, pdNathan.y, pdNathan.width, pdNathan.height);
}
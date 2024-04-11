let pdNathan = {
    x: 100,
    y: 400,
    color: "red",
    width: 50,
    height: 25
}

function createPdNathan(){
    fill(pdNathan.color);
    rect(mouseX, pdNathan.y, pdNathan.width, pdNathan.height);
}
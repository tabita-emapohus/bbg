let pdGiorgi = {
    y: 200,
    color: "#00ff00",
    width: 70,
    heigth: 10
}

function createPaddleGiorgi() {
   fill(pdGiorgi.color)
   rect(mouseX, pdGiorgi.y, pdGiorgi.width, pdGiorgi.heigth)
}
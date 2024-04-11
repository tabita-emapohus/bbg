let pdGiorgi = {
    x: tabWidth/2,
    y: 580,
    color: "yellow",
    width: 80,
    heigth: 10
}
function createPaddleGiorgi() {
   fill(pdGiorgi.color)
   pdGiorgi.x = mouseX-pdGiorgi.width/2;
   rect(pdGiorgi.x, pdGiorgi.y, pdGiorgi.width, pdGiorgi.heigth)
}
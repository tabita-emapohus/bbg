let pdTabita = {
    y:300,
    color: " #00ffcc",
    width: 70,
    height: 10
}
function createPaddleTabita(){
    fill(pdTabita.color);
    stroke(pdTabita.color);
    rect(mouseX,pdTabita.width,pdTabita.width,pdTabita.height);

}
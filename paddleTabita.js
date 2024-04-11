let pdTabita = {
    y:570,
    color: " #99ffcc",
    width: 80,
    height: 10
}
function createPaddleTabita(){
    fill(pdTabita.color);
    stroke(pdTabita.color);
    rect(mouseX-pdTabita.with/2,pdTabita.with,pdTabita.height);

}
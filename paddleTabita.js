let pdTabita = {
    y:200,
    color: " #99ffcc",
    with: 70,
    height: 10
}
function createPaddleTabita(){
    fill(pdTabita.color);
    stroke(pdTabita.color);
    rect(mouseX,pdTabita.y,pdTabita.with,pdTabita.height);

}
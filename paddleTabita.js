let pdTabita = {
    x : tabWidth/2,
    y:550,
    color: " #ff66ff",
    width: 90,
    height: 10
}
function createPaddleTabita(){
    fill(pdTabita.color);
    stroke("black");
    pdTabita.x=mouseX-pdTabita.width/2;
    rect(pdTabita.x,pdTabita.y,pdTabita.width,pdTabita.height);

}
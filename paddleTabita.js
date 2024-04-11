let pdTabita = {
    x : tabWidth/2,
    y:550,
    color: " #66ccffc",
    width: 70,
    height: 10
}
function createPaddleTabita(){
    fill(pdTabita.color);
    pdTabita.x=mouseX-pdTabita.width/2;
    rect(pdTabita.x,pdTabita.y,pdTabita.width,pdTabita.height);

}
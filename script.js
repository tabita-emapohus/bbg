let tabWith = 800;
let tabHeight = 600;

function setup() {
  createCanvas(tabWith, tabHeight);
}
function draw() {
  background("blue");
  smilyFaceTabita(smTabitaX, smTabitaY);
  smilyFaceGiorgi(smGiorgi.x, smGiorgi.y);
  smilyFaceNathan(smNathan.x, smNathan.y);
  checkLimitsSMTabita();
  checkLimitsSMGiorgi();
  checkLimitsSMNathan()

}


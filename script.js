let tabWith = 800;
let tabHeight = 600;

function setup() {
  createCanvas(tabWith, tabHeight);
}
function draw() {
  background("blue");
  smilyFaceTabita(smTabita.x, smTabita.y);
  smilyFaceGiorgi(smGiorgiX, smGiorgiY);
  smilyFaceNathan(smNathanX, smNathanY);
  checkLimitsSMTabita();
  checkLimitsSMGiorgi();
  checkLimitsSMNathan()

}


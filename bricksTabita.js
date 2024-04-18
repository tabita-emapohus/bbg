let bricksTabita = []

const marginTabita = 10
const distanceBetweenBricksTabita= 10
const bricksRowTabita = 3
const rowBricksNumberTabita = 10
const bricksWidthTabita =Math.floor(
    (tabWidth -
      marginTabita * 2 -
      (rowBricksNumberTabita - 1) * distanceBetweenBricksTabita) /
      rowBricksNumberTabita
  );

function initBriksTabita() {
    let x = marginTabita;
    for (let i = 0; i < bricksRowTabita * rowBricksNumberTabita; i++) {
        const row = Math.floor(i / rowBricksNumberTabita) + 1;
        x = x + bricksWidthTabita + distanceBetweenBricksTabita ;
        if (i % rowBricksNumberTabita == 0)
            x = marginTabita;
        bricksTabita.push({
            hit: false,
            x,
            y: row * 30,
            color: "#ff6600",
            width: bricksWidthTabita,
            height: 15,
            row,
        })
    }
}
function createBricksTabita() {

    bricksTabita.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })

}

let bricksGiorgi = []

const marginGiorgi = 10
const distanceBetweenBricksGiorgi = 10

const bricksRowsGiorgi = 3
const bricksColsGiorgi = 1
const rowBricksNumberGiorgi = 10

const brickWidthGiorgi = (tabWidth - marginGiorgi*2 - (rowBricksNumberGiorgi-1)*distanceBetweenBricksGiorgi) / rowBricksNumberGiorgi

function initBriks() {
    let x = marginGiorgi;
    for (let i = 0; i < bricksRowsGiorgi * rowBricksNumberGiorgi; i++) {
        const row = Math.floor(i / rowBricksNumberGiorgi) + 1;
        x = x + brickWidthGiorgi +  distanceBetweenBricksGiorgi;
        if (i % rowBricksNumberGiorgi == 0)
            x = marginGiorgi;

        bricksGiorgi.push({
            hit: false,
            x,
            y: row * 30,
            color: "yellow",
            width: brickWidthGiorgi,
            height: 15,
            row
        })
    }

}

function createBricksGiorgi() {

    bricksGiorgi.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })

}
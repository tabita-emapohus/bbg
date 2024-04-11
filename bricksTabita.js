let bricks = []

const bricksRow = 1 
const bricksCols = 1
const rowBricksNumber = 4

function initBriks(){
        for (let i = 0; i < bricksRow * rowBricksNumber; i++) {
            bricks.push({
                hit: false,
                x: i*70,
                y: 15,
                color: "#ff6600",
                width: 50,
                height: 20,
            })
        }
    }
function createBricks(){

    bricks.forEach(brick => {
        fill(brick.color);
        rect(brick.x,brick.y,brick.width, brick.height)
    })
    
}
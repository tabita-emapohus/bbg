let tabelWith=400;
let tabelHeight=600;

let smGiorgiX=200;
let smGiorgiY=300;

let directionX=1;

function setup(){
    createCanvas(800,600);
   }
   function draw(){
       background ("blue");
   smilyFaceTabita();
   }
   function smilyFaceTabita(){
        //Body
      // fill("white");
      fill("beige");
       stroke("black");
       circle(400,300,50);
       //EYSE
       stroke("green");
       ellipse(390, 290,10,5);
       ellipse(410,290,10,5);
       //Eye pupils
       stroke("black");
       fill("black");
       circle(390,290,4);
       circle(410,290,4);
   
       //Mounth
       stroke("red");
       fill("white");
       arc(400, 310, 17, 10 ,0,Math.PI);
   
       //Cheeks
       stroke("pink");
       fill("pink");
       circle(420,305,9);
       circle(380,305,9);
   }
function setup(){
 createCanvas(400,600);
}
function draw(){
    background ("blue");

    checkLimitsSMGiorgi();

smilyFaceGiorgi(smGiorgiX ,smGiorgiY);
}
function checkLimitsSMGiorgi(){
      if( smGiorgiX >= tabelWith) 
      directionX *= -1;

      smGiorgiX += directionX;
}
function smilyFaceGiorgi(x,y){
     //Body
   // fill("white");
   fill("beige");
    stroke("black");
    circle(x,y,50);
    //EYSE
    fill("black")
    stroke("black");
    ellipse(x-10,y-10,10,5);
    ellipse(x+10,y-10,10,5);
    //Eye pupils
    stroke("light green");
    fill("lightgreen");
    circle(x-10,y-10,4);
    circle(x+10,y-10,4);

    //Mounth
    fill("black")
    stroke("red");
    arc(x, y+10, 17, 10 ,0,Math.PI);

    //Cheeks
    stroke("red");
    fill("red");
    circle(x+20,y+5,9);
    circle(x-20,y+5,9);
}



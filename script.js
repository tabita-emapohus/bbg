function setup(){
 createCanvas(800,600);
}
function draw(){
    nathanFace()
    smilyFaceTabita();
}

function nathanFace(){
    background("white")
    fill("orange");
    circle(400, 300, 50);
    fill("black");
    circle(400, 290, 13);
    fill("black");
    circle(410, 300, 10);
    fill("white");
    circle(400, 360, 100);
    fill("orange");
    circle(400, 360, 75);
    fill("white");
    circle(400, 360, 60);
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

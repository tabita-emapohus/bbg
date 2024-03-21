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

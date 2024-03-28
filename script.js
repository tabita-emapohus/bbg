function setup(){
 createCanvas(800,600);
}
function draw(){
    background ("blue");
smilyFaceTabita(400,300);
}
function smilyFaceTabita(x,y){
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



var Hball,database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    Hball = createSprite(250,250,10,10);
    Hball.shapeColor = "red";
    
    var Hballposition = database.ref('Ball/position');
    Hballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position = data.val();    
    Hball.x = position.x;
    Hball.y = position.y;
}

function writePosition(x,y){
    database.ref('Ball/position').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
  

function showerror(){
    console.log("has an error")
}



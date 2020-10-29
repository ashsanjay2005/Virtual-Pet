//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
loadImage(images/dogIMG.png)
loadImage(images/dogIMG1.png)
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  drawSprites();
  dog= createSprite();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
    getState();
    update();
  }

}


function getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
     gameState = data.val();
  })
 
}

function update{
  database.ref('/').update({
    gameState: state
  });
}

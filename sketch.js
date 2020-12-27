//Create variables here
var dog, happyDog, foodS, foodStock;
var dogImg,happyDogImg,database;
function preload()
{
  //load images here
  
 
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.3;

  var foodStock = database.ref('Food');
  foodStock.on("value",readStock);


  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    
    dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here
  textSize(30);
text ("Food Remaining"+ foodS,100,100);
}

function readStock(data){
foodS = data.val();

}

function writeStock(s){
if(s<=0){
  s=0;
}
else{
  s-=1;
}

  database.ref('/').update({
    'Food':s
  })
}





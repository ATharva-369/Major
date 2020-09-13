var gameState = 0;
var form, game;
var p1, p2;
var p;
var allPlayers;
var playerCount;
var player;
var enemyGroup
var bulletsGroup
var enemy,bullet
var time;
var playerImage;
var enemyImage;
var bulletImage
var a = 0;  
function preload(){
  playerImage=loadImage("man.png")
  enemyImage=loadImage("Attack (2).png")
  bulletImage=loadImage("fireblast1_0.png")
  bgSound=loadSound("Nighttime-Escape.mp3")
  shoot=loadSound("shoot.mp3")
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bulletsGroup = new Group();
  enemyGroup = new Group();
  
}

function draw() {


  if (playerCount === 2) {
    game.update(1);

  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    
    game.end();
  }

}
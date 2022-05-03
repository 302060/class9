var sprite1
function setup() {
  createCanvas(400,400);
sprite1=createSprite(100,100,50,50)
}

function draw() 
{
  background("red");

  if(keyIsDown(DOWN_ARROW)){
sprite1.y+=5
  }
  if(keyIsDown(UP_ARROW)){
    sprite1.y-=5
      }
 if(keyIsDown(LEFT_ARROW)){
        sprite1.x-=5
          }
 if(keyIsDown(RIGHT_ARROW)){
            sprite1.x+=5
              }
drawSprites()
}





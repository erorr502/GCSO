function bounceOff(o1,o2){
    if(o1.x-o2.x<o2.width/2+o1.width/2&&o2.x-o1.x<o2.width/2+o1.width/2){
      o1.velocityX = o1.velocityX*(-1);
      o2.velocityX = o2.velocityX*(-1);
    }
    if(o1.y-o2.y<o2.height/2+o1.height/2&&o2.y-o1.y<o2.height/2+o1.height/2){
      o1.velocityY = o1.velocityY*(-1);
      o2.velocityY = o2.velocityY*(-1);
    }
    }
<template>
</template>

<style scoped>

#dataPanel{

width:100%;
height:100%;

}

</style>
<script>

import P5 from "p5";

export default {
    name:"recursiveTree",

mounted() {   
    let theta;
 const script = function (p5) {    
  p5.setup = _ => {      
    const cnv = p5.createCanvas(900, 900);      
    cnv.parent('dataPanel')
  }     
  // NOTE: Draw is here
  p5.draw = _ => {      
      p5.background("#16838A");
  p5.frameRate(30);
  p5.stroke(255);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (p5.mouseX / p5.width) * 90;
  // Convert it to radians
  theta = p5.radians(a);
  // Start the tree from the bottom of the screen
  p5.translate(p5.width/2,p5.height);
  // Draw a line 250 pixels
  p5.line(0,0,0,-250);
  // Move to the end of that line
  p5.translate(0,-250);
  // Start the recursive branching!
  branch(250);

  }  

  

    const branch = function(h){
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    p5.push();    // Save the current state of transformation (i.e. where are we now)
    p5.rotate(theta);   // Rotate by theta
    p5.line(0, 0, 0, -h);  // Draw the branch
    p5.translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    p5.pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    p5.push();
    p5.rotate(-theta);
    p5.line(0, 0, 0, -h);
    p5.translate(0, -h);
    branch(h);
    p5.pop();
  }
}
}

 new P5(script)
}
};



</script>

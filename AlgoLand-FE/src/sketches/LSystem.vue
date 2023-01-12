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
    name:"LSystem",

mounted() {   
    // TURTLE STUFF:
let x, y; // the current position of the turtle
let currentangle = 0; // which way the turtle is pointing
let step = 20; // how much the turtle moves with each 'F'
let angle = 90; // how much the turtle turns with a '-' or '+'

// LINDENMAYER STUFF (L-SYSTEMS)
let thestring = 'A'; // "axiom" or start of the string
let numloops = 5; // how many iterations to pre-compute
let therules = []; // array for rules
therules[0] = ['A', '-BF+AFA+FB-']; // first rule
therules[1] = ['B', '+AF-BFB-FA+']; // second rule

let whereinstring = 0; // where in the L-system are we?

 const script = function (p5) {    
  p5.setup = _ => {      
    const cnv = p5.createCanvas(900, 900);      
    cnv.parent('dataPanel')
        x = 0;
  y = p5.height-1;

  // COMPUTE THE L-SYSTEM
  for (let i = 0; i < numloops; i++) {
    thestring = lindenmayer(thestring);
  }
  }     
  // NOTE: Draw is here
  p5.draw = _ => {
      // draw the current character in the string:
  drawIt(thestring[whereinstring]);

  // increment the point for where we're reading the string.
  // wrap around at the end.
  whereinstring++;
  if (whereinstring > thestring.length-1) whereinstring = 0;

  }  
function lindenmayer(s) {
  let outputstring = ''; // start a blank output string

  // iterate through 'therules' looking for symbol matches:
  for (let i = 0; i < s.length; i++) {
    let ismatch = 0; // by default, no match
    for (let j = 0; j < therules.length; j++) {
      if (s[i] == therules[j][0])  {
        outputstring += therules[j][1]; // write substitution
        ismatch = 1; // we have a match, so don't copy over symbol
        break; // get outta this for() loop
      }
    }
    // if nothing matches, just copy the symbol over.
    if (ismatch == 0) outputstring+= s[i];
  }

  return outputstring; // send out the modified string
}

// this is a custom function that draws turtle commands
function drawIt(k) {

  if (k=='F') { // draw forward
    // polar to cartesian based on step and currentangle:
    let x1 = x + step*p5.cos(p5.radians(currentangle));
    let y1 = y + step*p5.sin(p5.radians(currentangle));
    p5.line(x, y, x1, y1); // connect the old and the new

    // update the turtle's position:
    x = x1;
    y = y1;
  } else if (k == '+') {
    currentangle += angle; // turn left
  } else if (k == '-') {
    currentangle -= angle; // turn right
  }

  // give me some random color values:
  let r = p5.random(128, 255);
  let g = p5.random(0, 192);
  let b = p5.random(0, 50);
  let a = p5.random(50, 100);

  // pick a gaussian (D&D) distribution for the radius:
  let radius = 0;
  radius += p5.random(0, 15);
  radius += p5.random(0, 15);
  radius += p5.random(0, 15);
  radius = radius / 3;

  // draw the stuff:
  p5.fill(r, g, b, a);
  p5.ellipse(x, y, radius, radius);
}
  

}

 new P5(script)
}
};



</script>

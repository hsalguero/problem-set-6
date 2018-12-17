/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
const ctx = document.getElementById('canvas1').getContext('2d');
 ctx.clearRect(0, 0, 50, 10)
 ctx.font = '48px sans-serif';
 ctx.strokeText('Hello, world!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
const ctx = document.getElementById('canvas2').getContext('2d');
  ctx.clearRect(0, 0, canvas2.width, canvas2.height)
  let height;
  let width;
  let x;
  let y;
   while(true){
      height=prompt("Height: ")
      width=prompt("Width: ")
      x=prompt("X: ")
      y=prompt("Y: ")
      if(x<5 || y<5 || width<1 || height<1 || canvas2.width-x-width<0 || canvas2.height-y-height<0) {
        continue;
      }
      else{
        break;
      }
    }
ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
const ctx = document.getElementById('canvas3').getContext('2d');
   ctx.clearRect(0, 0, canvas3.width, canvas3.height);
   let color = prompt("Color: ");
   if (color === "black" || color === "blue" || color === "green" || color === "orange" || color === "purple" || color === "red" || color === "yellow") {
       ctx.fillStyle = color;
       ctx.fillRect(10, 10, 100, 50)
   } else {
       alert("Try another color.")
   }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let xCo=10;
  let yCo=10;
  let a;
  let b;
  let c;
  let triangle = document.getElementById("canvas4");
  let context = triangle.getContext("2d");
  context.clearRect(0, 0, triangle.width, triangle.height);
  while(true){
	a = Number(prompt("Side 1:"));
	b = Number(prompt("Side 2:"));
	c = Number(prompt("Side 3:"));
	if (((a**2) + (b**2) == (c**2)) && a > 0 && b > 0 && c > 0 && triangle.width - xCo - a >= 0 && triangle.height - yCo - b >= 0){
		break;
	}else{
		alert("One or more of your inputs is invalid.")
    break;
	}
  }

 context.beginPath(); 
 context.moveTo(xCo,yCo); 
 context.lineTo(xCo,yCo+a); 
 context.stroke(); 

 context.beginPath();
 context.moveTo(xCo,yCo+a);
 context.lineTo(xCo+b,yCo+a);
 context.stroke();

 context.beginPath();
 context.moveTo(xCo,yCo);
 context.lineTo(xCo+b,yCo+a);
 context.stroke();
}
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
let radius;
  let canvas = document.getElementById('canvas5');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	while(true){
		radius=Number(prompt("Radius:"));
		if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
			break;
		}
	}
  let x=canvas.width;
  let y=canvas.height;
  let eye=radius*.1
  let mouth=radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2 - radius/3, y/2-radius/4, eye,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2+radius/3, y/2-radius/4, eye,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2, y/2, mouth,0, Math.PI);
  ctx.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      let outerRadius=Number(prompt())
      let innerRadius=Number(prompt())
      if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
        let points=5;
        let xOutside=[];
        let yOutside=[];
        let xInside=[];
        let yInside=[];
        for(let i=0;i<points;i++){
          xOutside.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          yOutside.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          xInside.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
          yInside.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        }
        ctx.beginPath();
        ctx.moveTo(xOutside[0], yOutside[0]);
        for(let j=0;j<xOutside.length;j++){
          ctx.lineTo(xInside[j], yInside[j]);
          ctx.lineTo(xOutside[j+1], yOutside[j+1]);
        }
        ctx.lineTo(xOutside[0], yOutside[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('One or more of your inputs is invalid.');
      }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
 let radius = 40 / Math.sin(0.125 * Math.PI);
  let canvas = document.getElementById('canvas7');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.moveTo(Math.cos(0.125 * Math.PI) * radius + 110, Math.sin(0.125 * Math.PI) * radius + 110);
  let x = 0;
  let angle = 0.25 * Math.PI;
  while (x < 8) {
    context.lineTo(Math.cos(0.125 * Math.PI + angle) * radius + 110, Math.sin(0.125 * Math.PI + angle) * radius + 110);
    angle = angle + 0.25 * Math.PI;
    x = x + 1;
  }
  context.closePath();
  context.fillStyle = "red";
  context.fill();
  context.font = "65px Arial";
  context.fillStyle = "white";
  context.fillText("STOP", 22, 130);
  lineWidth = 1;
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let sideLength=Number(prompt("Side length:"));
  let x=10;
  let y=canvas.height-10;
  let i=0;
  lineNumber=1;
  while(i<5){
    for(let j=0+lineNumber;j<=5;j++){
      ctx.strokeRect(x,y-sideLength,sideLength,sideLength);
      x+=sideLength;
    }
    x=10+(sideLength/2)*lineNumber;
    y=sideLength;
    lineNumber++;
    i++;
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
let canvas = document.getElementById('canvas9');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
  doorColor=prompt("Door color:");
  houseColor=prompt("House color:");
  if((doorColor=="brown" || doorColor=="blue" || doorColor=="green" || doorColor=="orange" || doorColor=="purple" || doorColor=="red" || doorColor=="yellow")
  && (houseColor=="brown" || houseColor=="blue" || houseColor=="green" || houseColor=="orange" || houseColor=="purple" || houseColor=="red" || houseColor=="yellow")) {
    break;
  }
  else{
      alert("Your color(s) is invalid.")
  }
}

let x=150;
let houseLength=576;
let heightHouse=400;
let y=canvas.height-heightHouse-10;
ctx.beginPath();
ctx.fillStyle=houseColor;
ctx.fillRect(x,y,houseLength,heightHouse);
ctx.fillStyle=doorColor;
ctx.fillRect(x+(houseLength/2)-30,y+300,60,100);
ctx.fillStyle="gray";
ctx.moveTo(x,y);
ctx.lineTo(x+286,150);
ctx.lineTo(x+houseLength,y);
ctx.lineTo(x,y);
ctx.fill();
ctx.fillStyle="#ADD8E6";	
ctx.fillRect(300,y+100, 50, 50);
ctx.fillRect(526,y+100, 50, 50);
ctx.fillRect(300,y+200, 50, 50);
ctx.fillRect(526,y+200, 50, 50);
ctx.closePath();
}

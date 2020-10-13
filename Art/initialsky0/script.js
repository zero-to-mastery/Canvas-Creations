class RainbowCircle {
   // Object for the canvas art
   constructor(canvasId) {
      this.ctx = this.initCanvas(canvasId);
   }

   initCanvas(canvasId) {
      // initiate ctx of the canvas based element's ID
      const canvas = document.getElementById(canvasId);
      if(canvas.getContext) {
         return canvas.getContext('2d');
      }
   }

   drawCircle(origin, radOut, radIn, fill=false) {
      // method for drawing circle, origin is a array of [x, y] for center of the circle
      const startAngle = 0;
      const endAngle = 2* Math.PI;
      
      this.ctx.beginPath();
      this.ctx.arc(...origin, radOut, startAngle, endAngle);
      if(radIn) {
         this.ctx.arc(...origin, radIn, startAngle, endAngle);
      }
      fill ? this.ctx.fill() : this.ctx.fill('evenodd');
      this.ctx.closePath();
   }

   changeLinGrad3C(grad1, grad2, grad3, gradCoord) {
      // gradCoord is the arguement for createLinearGradient, so the array should be [x0, y0, x1, y1]
      const linGrad = this.ctx.createLinearGradient(...gradCoord);
      linGrad.addColorStop(0, grad1);
      linGrad.addColorStop(.5, grad2);
      linGrad.addColorStop(1, grad3);
      this.ctx.fillStyle = linGrad;
   }
}



// practice draw
function draw() {
   const origin = [75, 75]
   const rainCirc = new RainbowCircle('rainbow-circle');

   rainCirc.ctx.save();
   rainCirc.changeLinGrad3C('#0077b6', '#00b4d8', '#2b9348', [10, 0, 150, 0]);
   rainCirc.drawCircle(origin, 75, 55);
   

   rainCirc.ctx.restore();
   rainCirc.changeLinGrad3C('#2b9348', '#80b918', '#dddf00', [0, 10, 0, 150]);
   rainCirc.drawCircle(origin, 55, 35);

   rainCirc.ctx.restore();
   rainCirc.changeLinGrad3C('#dddf00', '#ffb700', '#ff8800', [10, 0, 150, 0]);
   rainCirc.drawCircle(origin, 35, 0, true);
}

draw();

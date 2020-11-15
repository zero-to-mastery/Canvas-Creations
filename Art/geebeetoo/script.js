console.log(`hello`);
function draw() {
    const newLocal = 'canvas';
    var ctx = document.getElementById(newLocal).getContext('2d');
    // draw background
    ctx.fillStyle = '#F30';
    ctx.fillRect(0, 0, 95, 95);
    ctx.fillStyle = '#09F';
    ctx.fillRect(95, 0, 95, 95);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(0, 95, 95, 95);
    ctx.fillStyle = '#FFF';
    ctx.fillRect(95, 95, 95, 95);
    ctx.fillStyle = '#FFF';
  
    // set transparency value
    ctx.globalAlpha = 0.1;
  
    // Draw semi transparent circles
    for (var i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(50, 50, 30 + 30 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  
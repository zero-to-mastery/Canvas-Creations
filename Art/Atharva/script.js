function draw() {
    var w3rcanvas=document.getElementById("w3rCanvasTag");
    var w3rcontext=w3rcanvas.getContext('2d');
    w3rcontext.fillStyle='rgb(0,0,255)'; 
    w3rcontext.fillRect(30,30,400,400);           
    w3rcontext.fillStyle='rgba(0,255,0,0.5)';  
    w3rcontext.fillRect(60,60,400,400);    
    w3rcontext.fillStyle='rgba(255,0,0,0.25)';  
    w3rcontext.fillRect(90,90,400,400); 
  }
var canvas= document.getElementById("cvs");
var ctx= cvs.getContext("2d");


	
function draw(){
		ctx.fillStyle="#152190"
		ctx.fillRect(300,300,50,50);
		ctx.lineWidth=1;
		ctx.strokeStyle="black";
		ctx.strokeRect(300,300,50,50);

		ctx.beginPath();
		ctx.rect(250,250,50,100);
		ctx.rect(50,300,50,50);
		ctx.fillStyle="#F2871C"
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.rect(100,250,50,100);
		ctx.rect(200,250,50,100);
		ctx.fillStyle="white";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
			ctx.moveTo(100,200);
			ctx.lineTo(250,200);
			ctx.lineTo(250,250);
			ctx.lineTo(200,250);
			ctx.arc(175,250,25,Math.PI*2,Math.PI,true);
			ctx.lineTo(100,250);
			ctx.closePath();
		ctx.fillStyle="khaki";
		ctx.fill()
		ctx.stroke();

		ctx.beginPath();
			ctx.moveTo(100,200);
			ctx.lineTo(175,150);
			ctx.lineTo(250,200);
		ctx.closePath();
		ctx.fillStyle="#F2871C";
		ctx.fill();
		ctx.stroke();

		//flag
		ctx.beginPath();
			ctx.moveTo(175,150);
			ctx.lineTo(175,100);
			ctx.lineTo(200,110);
			ctx.lineTo(175,120);
		ctx.closePath();
		ctx.fillStyle="red";
		ctx.fill();
		ctx.stroke();
	}
draw();


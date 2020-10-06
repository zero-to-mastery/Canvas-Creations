const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let size = 0;
let positionX = 0;

const drawFlower = () => {
  context.fillStyle = '#dad5d5';
  context.strokeStyle = '#326ebb';
  context.lineWidth = 5;
  context.beginPath();
  context.arc(positionX, 300, size, 0, Math.PI * 2);
  context.closePath();
  context.fill();
  context.stroke();
};

const animate = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  size += 0.05;
  positionX += 0.1;
  drawFlower();
  requestAnimationFrame(animate);
};

animate();

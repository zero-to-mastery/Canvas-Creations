const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = '#dad5d5';
context.strokeStyle = '#326ebb';
context.lineWidth = 5;
context.beginPath();
context.arc(100, 300, 50, 0, Math.PI * 2);
context.closePath();
context.fill();
context.stroke();

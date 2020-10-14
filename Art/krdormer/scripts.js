// Select Canvas from DOM
const canvas = document.getElementById('canvas');
// Create Canvas Context for Drawing - 2D
const ctx = canvas.getContext('2d');

// Draws outer squares
function drawOuterSquares() {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(440, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(420, 30, 50, 50);

    ctx.fillRect(375, 25, 100, 100);
    ctx.clearRect(395, 45, 60, 60);
    ctx.strokeRect(400, 50, 50, 50);

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 440, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 420, 50, 50);

    ctx.fillRect(25, 375, 100, 100);
    ctx.clearRect(45, 395, 60, 60);
    ctx.strokeRect(50, 400, 50, 50);

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(440, 440, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(420, 420, 50, 50);

    ctx.fillRect(375, 375, 100, 100);
    ctx.clearRect(395, 395, 60, 60);
    ctx.strokeRect(400, 400, 50, 50);
}

function drawMiddleSquares() {
    var delayInMilliseconds = 1000; //2 second

    setTimeout(function() {
        ctx.fillStyle = '#BF200E';
        ctx.fillRect(125, 125, 125, 125);
    }, delayInMilliseconds);

    setTimeout(function() {
        ctx.fillStyle = '#FA4113';
        ctx.fillRect(250, 125, 125, 125);
    }, delayInMilliseconds * 2);

    setTimeout(function() {
        ctx.fillStyle = '#FE9B13';
        ctx.fillRect(125, 250, 125, 125);
    }, delayInMilliseconds * 3);

    setTimeout(function() {
        ctx.fillStyle = '#F9C10E';
        ctx.fillRect(250, 250, 125, 125);
    }, delayInMilliseconds * 4);
}

drawOuterSquares();
drawMiddleSquares();

function textDisplay() { 
    setTimeout(function() {
        ctx.font = '30px serif'; 
        ctx.fillStyle = '#F9C10E';
        ctx.fillText('HAPPY', 200, 230);
    }, 5000);

    setTimeout(function() {
        ctx.font = '25px serif'; 
        ctx.fillStyle = '#BF200E';
        ctx.fillText('HACKTOBERFEST', 150, 300);
    }, 6000);

    setTimeout(function() {
        ctx.font = '50px serif'; 
        ctx.fillStyle = '#BF200E';
        ctx.fillText('20', 50, 250);
    }, 7000);

    setTimeout(function() {
        ctx.font = '50px serif'; 
        ctx.fillStyle = '#BF200E';
        ctx.fillText('20', 395, 250);
    }, 8000);
}

textDisplay();
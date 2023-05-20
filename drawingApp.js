// drawingApp.js
let drawings = [];
let isDrawing = false;
let color = '#000000';

// Setup
const canvas = document.getElementById('drawingBoard');
canvas.style.height = '80vh';
canvas.style.width = '80vh';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(event) {
    isDrawing = true;
    draw(event);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!isDrawing) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

document.getElementById('rectangle').addEventListener('click', () => {
    const rectangle = createRectangle(350, 350, 100, 100);
    addDrawing(rectangle);
    rectangle.draw(ctx);
});

document.getElementById('circle').addEventListener('click', () => {
    const circle = createCircle(350, 350, 50);
    addDrawing(circle);
    circle.draw(ctx);
});

document.getElementById('oval').addEventListener('click', () => {
    const oval = createOval(350, 350, 50, 30);
    addDrawing(oval);
    oval.draw(ctx);
});

document.getElementById('addText').addEventListener('click', () => {
    const textValue = document.getElementById('inputText').value;
    const text = createText(250, 250, textValue);
    addDrawing(text);
    text.draw(ctx);
});

document.getElementById('save').addEventListener('click', async () => {
    console.log(JSON.stringify(drawings));
});

document.getElementById('load').addEventListener('click', async () => {
    console.log('Loading drawing...');
});

document.getElementById('colorPicker').addEventListener('change', function () {
    color = this.value;
});

document.getElementById('clear').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function addDrawing(drawing) {
    drawings.push(drawing);
}

function createRectangle(x, y, width, height) {
    return {
        type: 'rectangle',
        x, y, width, height,
        draw(ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };
}

function createCircle(x, y, radius) {
    return {
        type: 'circle',
        x, y, radius,
        draw(ctx) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };
}

function createOval(x, y, rx, ry) {
    return {
        type: 'oval',
        x, y, rx, ry,
        draw(ctx) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.rx, this.ry, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    };
}

function createText(x, y, text) {
    return {
        type: 'text',
        x, y, text,
        draw(ctx) {
            ctx.fillStyle = color;
            ctx.font = '20px Arial';
            ctx.fillText(this.text, this.x, this.y);
        }
    };
}

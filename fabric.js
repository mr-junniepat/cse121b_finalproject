// Create a new fabric.js canvas
let canvas = new fabric.Canvas('drawingCanvas');

// Draw a simple line
let line = new fabric.Line([50, 50, 200, 200], {
    left: 170,
    top: 150,
    stroke: 'black'
});
canvas.add(line);

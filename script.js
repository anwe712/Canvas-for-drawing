// Get the canvas element from the DOM
const canvas = document.getElementById("myCanvas");

// Create the drawing context
const context = canvas.getContext("2d");

// Set the initial position variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Event listeners for drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Function to start drawing
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw
function draw(e) {
  if (!isDrawing) return; // Exit if the mouse is not being held down

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
}

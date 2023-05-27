

# CSE121B-FinalProject

## Description

This is a simple drawing application built with JavaScript. This project was created by Patrick Igwe, a student at Brigham Young University - Idaho (BYUI). The application allows users to draw freely on a canvas, as well as add various shapes including rectangles, circles, ovals, and text. Users can also select the color of their drawing objects and clear the canvas.

## Functionality

The project comprises of a single HTML file that sets up the UI for the drawing application, and a JavaScript file (`drawingApp.js`) that implements the functionality of the application. 

Here's a brief overview of the functionalities:

- **Free drawing**: Click and drag your cursor on the canvas to draw freely.
- **Shape Drawing**: You can draw rectangles, circles, and ovals by clicking the respective buttons. The shapes are drawn at a static position on the canvas.
- **Add Text**: Enter text in the input field and click on "Add Text" to add the text to the canvas. The text is added at a static position.
- **Select Color**: Use the color picker to select the color of your drawing objects.
- **Clear Canvas**: Clears the canvas completely.

## Project Structure

### `drawingApp.js`

This file includes the implementation of the drawing functionalities:

- Freehand drawing on the canvas
- Drawing shapes (rectangle, circle, and oval) and text
- Changing the drawing color
- Clearing the canvas

It uses the HTML5 Canvas API for drawing and manipulates the DOM to respond to user interactions. 

The `createRectangle`, `createCircle`, `createOval`, and `createText` functions each return a drawing object that has a `type` property and a `draw` method, which is used to draw the object on the canvas. These drawing objects are stored in the `drawings` array.

### `index.html`

This file includes the HTML for the drawing application's UI. It includes a canvas element for drawing, buttons for drawing shapes and text, a color picker, and buttons to save and load drawings.

## Future Improvements

Currently, the shapes and text are added at static positions on the canvas. This can be enhanced to allow users to click on the canvas to decide the position of the shape or text. Similarly, there's a save button but it does not yet save the drawing to a backend server. This feature can be implemented in the future.

## Installation and Usage

1. Clone this repository.
2. Open `index.html` in your browser to start the application. 
3. Download 

That's it! No additional steps are necessary because this project does not have any external dependencies. 

## Contributing

This project is open for improvements and enhancements, so feel free to fork this repository and create a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or comments, please reach out to Patrick Igwe.
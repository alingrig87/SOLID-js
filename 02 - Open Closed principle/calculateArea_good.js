class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	draw() {
		console.log('Draw circle with radius: ' + this.radius);
	}
}

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	draw() {
		console.log(
			'Draw rectangle with: ' +
				'height: ' +
				this.height +
				' width: ' +
				this.width
		);
	}
}

class Text {
	constructor(font, content) {
		this.font = font;
		this.content = content;
	}

	draw() {
		console.log(
			'Draw text with: ' + 'font: ' + this.font + ' content: ' + this.content
		);
	}
}

function drawShapes(shapes) {
	shapes.forEach((shape) => {
		shape.draw();
	});
}

const shapes = [
	new Circle(5),
	new Rectangle(20, 2),
	new Text('Arial', 'lorem ipsum'),
];

drawShapes(shapes);

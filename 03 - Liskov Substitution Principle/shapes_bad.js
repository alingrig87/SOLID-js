class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
	}

	setWidth(width) {
		this.setSide(width);
	}

	setHeight(height) {
		this.setSide(height);
	}

	setSide(side) {
		super.setHeight(side);
		super.setWidth(side);
	}
}

const square = new Square(10);
const rectangle = new Rectangle(20, 30);

function showRectangleInfo(rectangle) {
	rectangle.setHeight(21);
	rectangle.setWidth(31);

	console.log(rectangle.width);
	console.log(rectangle.height);
}

showRectangleInfo(rectangle);
showRectangleInfo(square);

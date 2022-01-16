class Shape {
	getArea() {
		console.log('This method must pe overriden by any sub class');
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
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

class Square extends Shape {
	constructor(side) {
		super();
		this.side = side;
	}

	setSide(side) {
		super.setHeight(side);
		super.setWidth(side);
	}

	getArea() {
		return this.side * this.side;
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
//showRectangleInfo(square);

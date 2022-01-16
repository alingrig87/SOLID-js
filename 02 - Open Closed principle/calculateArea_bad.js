function drawShapes(shapes) {
	shapes.forEach((shape) => {
		switch (shape.type) {
			case 'circle':
				console.log('Draw circle with radius: ' + shape.radius);
				break;
			case 'rectangle':
				console.log(
					'Draw rectangle with: ' +
						'height: ' +
						shape.height +
						' width: ' +
						shape.width
				);
				break;
		}
	});
}

const shapes = [
	{ type: 'circle', radius: 5 },
	{
		type: 'rectangle',
		width: 10,
		height: 20,
	},
];

drawShapes(shapes);

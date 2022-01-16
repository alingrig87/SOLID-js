class Car {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
	// to be overriden by any class
	showFuelType() {}
}

class DieselCar extends Car {
	constructor(brand, model) {
		super(brand, model);
		this.fuel = 'Diesel';
	}
	showRemaningFuel() {
		console.log(this.fuel);
	}
}

class ElectricCar extends Car {
	constructor(brand, model) {
		super(brand, model);
	}
	// this violates interface segregation principle
	showRemaningFuel() {}
}

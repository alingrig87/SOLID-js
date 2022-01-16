class Car {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
}

class FuelCar extends Car {
	constructor(brand, model) {
		super(brand, model);
	}
	// to be overriden by any class
	showFuelType() {}
}

class DieselCar extends FuelCar {
	constructor(brand, model) {
		super(brand, model);
		this.fuelType = 'Diesel';
	}
	showRemaningFuel() {
		console.log(this.fuelType);
	}
}

class ElectricCar extends Car {
	constructor(brand, model, capacity) {
		super(brand, model);
		this.capacity = capacity;
	}
	showCapicity() {
		console.log(this.capacity);
	}
}

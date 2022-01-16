class Store {
	constructor(user) {
		this.paymentMethod = new Revolut(user);
	}

	pay() {
		this.paymentMethod.makePayments();
	}
}

class Revolut {
	constructor(user) {
		this.user = user;
	}

	makePayments() {
		console.log('Stripe payment successful!');
	}
}

class Paypal {
	constructor(user) {
		this.user = user;
	}

	makePayments() {
		console.log('Stripe payment successful!');
	}
}

const store = new Store('Daniel');
store.pay();

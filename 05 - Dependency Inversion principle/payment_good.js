class Store {
	constructor(paymentProcessor) {
		this.paymentProcessor = paymentProcessor;
	}

	pay(amount, currency) {
		this.paymentProcessor.pay(amount, currency);
	}
}

class RevolutPaymentProcessor {
	constructor(user) {
		this.paymentProcessor = new Revolut(user);
	}

	pay(ammount, currency) {
		this.paymentProcessor.makePayments(ammount, currency);
	}
}

class Revolut {
	constructor(user) {
		this.user = user;
	}

	makePayments(amount, currency) {
		console.log('Revolut payment successful!', this.user, amount, currency);
	}
}

class PayPalPaymentProcessor {
	constructor(user) {
		this.user = user;
	}

	pay(amount, currency) {
		const payPal = new Paypal();
		payPal.makePayments(this.user, amount, currency);
	}
}

class Paypal {
	makePayments(user, amount, currency) {
		console.log('Paypal payment successful!', user, amount, currency);
	}
}

let store = new Store(new RevolutPaymentProcessor('Alin'));
store.pay(200, 'EURO');

store = new Store(new PayPalPaymentProcessor('Vasile'));
store.pay(300, 'USD');

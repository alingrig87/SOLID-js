import { log } from './log.js';

class CalorieTracker {
	constructor(maxCaloriesPerDay) {
		this.maxCaloriesPerDay = maxCaloriesPerDay;
		this.consumedCalories = 0;
	}

	track(calories) {
		this.consumedCalories += calories;
		if (this.consumedCalories > this.maxCaloriesPerDay) {
			log('Max calories exceeded');
		}
	}
}

const calorieTracker = new CalorieTracker(1200);

calorieTracker.track(500);
calorieTracker.track(100);
calorieTracker.track(700);

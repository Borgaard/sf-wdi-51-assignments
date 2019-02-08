var user {
	name: `Paris`,
	bornOn: `6/8/89`,
	calorieTarget: 2000,
	meals: {
		breakfast: {
			title: `quinoa`.
			date: `yesterday`,
			description: `artisan ancient grains`,
			calories: 400
		},
		lunch: {
			title: `quinoa`.
			date: `yesterday`,
			description: `fatty, and worth it. Like me`,
			calories: 1200
		},
		dinner: {
			title: `more quinoa`.
			date: `yesterday`,
			description: `let's get this grain`,
			calories: 500
		}
	};
};


carloriesEatenOn: function(){
	return this.date + ` : ` + (this.breakfast.calories + this.lunch.calories + this.dinner.calories)
}
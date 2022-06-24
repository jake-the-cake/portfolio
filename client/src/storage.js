export const schoolProjects = [
	{
		name: 'Real Time Bus Tracker',
		slug: 'bus-tracker',
		screenShot: '/portfolio/images/tracker.png',
		git: 'https://github.com/jake-the-cake/school-work/tree/main/portfolio/bus-tracker',
		address: 'https://jake-the-cake.github.io/school-work/portfolio/bus-tracker/index.html'
	},
	{
		name: 'Responsive Eye Movement',
		slug: 'eye-movement',
		screenShot: '/portfolio/images/eyes.png',
		git: 'https://github.com/jake-the-cake/school-work/tree/main/portfolio/eye-movement',
		address: 'https://jake-the-cake.github.io/school-work/portfolio/eye-movement/index.html'
	},
	{
		name: 'Pacmen Factory',
		slug: 'pacmen',
		screenShot: '/portfolio/images/pacmen.png',
		git: 'https://github.com/jake-the-cake/school-work/tree/main/portfolio/pacmen',
		address: 'https://jake-the-cake.github.io/school-work/portfolio/pacmen/index.html'
	}
]

export const myProjects = [
	{
		name: 'Cash Counter',
		slug: 'cash-reg',
		screenShot: false,
		git: 'https://github.com/jake-the-cake/jake-the-cake.github.io/tree/main/cash-reg',
		address: 'https://jake-the-cake.github.io/cash-reg/index.html',
		filters: [
			'freeware'
		],
		description: [
			'This freeware project is a single-page cash counting app. It takes in data from individual inputs that correspond with denominations of USD.',
			'It includes data validation and sanitation that warns you if you\'ve entered invalid data, or inform you if the inputed data was changed by the function (an empty string will be changed to "0"). The clear button resets the input elements back to empty text fields.',
			'Future improvements will include a toggle display of input for uncommon denominations, such as $2 bills, as well as state management abilities for saving settings preferences, and providing logging functionality.'
		]
	},
	{
		name: 'Price Calculator',
		slug: 'price-calc',
		screenShot: false,
		git: 'https://github.com/jake-the-cake/jake-the-cake.github.io/tree/main/price-calc',
		address: 'https://jake-the-cake.github.io/price-calc/index.html',
		filters: [
			'client',
			'freeware'
		]
	},
]
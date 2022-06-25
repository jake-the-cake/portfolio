export const schoolProjects = [
	{
		name: 'Real Time Bus Tracker',
		slug: 'bus-tracker',
		screenShot: '/portfolio/images/tracker.png',
		git: 'https://github.com/jake-the-cake/school-work/tree/main/portfolio/bus-tracker',
		address: 'https://jake-the-cake.github.io/school-work/portfolio/bus-tracker/index.html',
		description: [
			'The Real Time Bus Tracker exercise uses Mapbox mapping to bind markers to the current location of buses on a given route. The default data used for this map is from bus route 1 in the city of Boston, MA, which runs from Harvard, through the MIT campus, and further south down Massachusetts Ave.',
			'In the top left corner of the screen, you can click a button the activates the tracker. In the bottom left, the statistics box displays the most recent number of buses being tracked, and when the last refresh occured.',
			'Future updates will include the ability to toggle between routes, and eventually cities, as well as more control options, to pause and reset.'
		]
	},
	{
		name: 'Responsive Eye Movement',
		slug: 'eye-movement',
		screenShot: '/portfolio/images/eyes.png',
		git: 'https://github.com/jake-the-cake/school-work/tree/main/portfolio/eye-movement',
		address: 'https://jake-the-cake.github.io/school-work/portfolio/eye-movement/index.html',
		description: [
			'The responsive eye movement exercise came with a prewritten design and function of one eye with the pupil that follows your mouse around the screen. The task was as simple as "make it two eyes" which involved a simple copy and paste along with minor adjustments to the function.',
			'I\'ve expanded on this project by adding a blink action, triggered by a mouse click. It might give you nightmares for days, but just remember that "Dom" can\'t hurt you.',
			'In the future, I would like to work on an algorithm to control each eye individually, and create a right-click action for winking.'
		]
	},
	{
		name: 'Pacmen Factory',
		slug: 'pacmen',
		screenShot: '/portfolio/images/pacmen.png',
		git: 'https://github.com/jake-the-cake/school-work/tree/main/portfolio/pacmen',
		address: 'https://jake-the-cake.github.io/school-work/portfolio/pacmen/index.html',
		description: [
			'The Pacmen Factory is a DOM manipulation exercise that uses a button to add a new Pac to an array, and map it out to a randomized location on the page. The RUN button sets all of the Pacmen in motion. They travel in any direction of X or Y, and are bounded by the page size.',
			'When the boundary is hit, the Pac bounces off, and if it is a side boundary, the object faces the other way as it moves back across the screen, all while the mouth opens and closes.',
			'The only planned improvement is to add a counter, that will have to reach a certain number of cycles, before resetting, and triggering the mouth to open or close only at that point. This will slow down the movement.'
		]	
		
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
		name: 'Pricing Calculator',
		slug: 'price-calc',
		screenShot: false,
		git: 'https://github.com/jake-the-cake/jake-the-cake.github.io/tree/main/price-calc',
		address: 'https://jake-the-cake.github.io/price-calc/index.html',
		filters: [
			'client',
			'freeware'
		],
		description: null
	},
]
export const extend = (a, b) => Object.assign({}, a, b)

export const serverAdapter = (obj) =>
	Object.keys(obj).reduce((newObj, key) => {
		const value = obj[key]
		const newKey = key.replace(/\_([a-z])/g, (_, chr) => chr.toUpperCase())
		newObj[newKey] =
			value.constructor.name === 'Object' ? serverAdapter(value) : value
		return newObj
	}, {})

export const formattingDataServerToClinet = (arrData) =>
	arrData.map((obj) => serverAdapter(obj))

export const videoAdapter = {
	time: (timeSeconds) => {
		const oneHours = 3600
		const oneMinutes = 60
		const hours = `0${Math.floor(timeSeconds / oneHours)}`.slice(-2)
		const minutes = `0${Math.floor(
			(timeSeconds - hours * oneHours) / oneMinutes
		)}`.slice(-2)

		const seconds = `0${Math.floor(
			timeSeconds - hours * oneHours - minutes * oneMinutes
		)}`.slice(-2)

		return `${hours}:${minutes}:${seconds}`
	},

	progress: (currentTime, duration) =>
		Math.floor(currentTime) / (Math.floor(duration) / 100),
}

export const getDate = (dateTime) => {
	const arrDate = dateTime.split('T')
	const date = arrDate[0].split('-')
	const time = arrDate[1].split(':')

	return {
		fullDate: arrDate[0],
		year: date[0],
		monthNumber: date[1],
		month: new Date(arrDate[0]).toLocaleString('eng', {
			month: 'long',
		}),
		dayPresent: date[2],
		hours: time[0],
		minutes: time[1],
		seconds: time[2].slice(0, -1),
	}
}

export const getTime = (timeMinutes) => {
	const oneHours = 3600
	const oneMinutes = 60
	const seconds = timeMinutes * oneMinutes
	const hours = `${Math.floor(seconds / oneHours)}`
	const minutes = `0${Math.floor(
		(seconds - hours * oneHours) / oneMinutes
	)}`.slice(-2)

	return {
		hours,
		minutes,
	}
}

export const sortArrOnGenres = (arr) =>
	arr.reduce(
		(accumulator, currentValue) => {
			const { genre } = currentValue
			accumulator[genre] = accumulator[genre]
				? [...accumulator[genre], currentValue]
				: [currentValue]
			return accumulator
		},
		{ 'All genres': arr }
	)

export const transformBoolToNumber = (boolean) => (boolean ? 1 : 0)

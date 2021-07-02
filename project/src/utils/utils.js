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

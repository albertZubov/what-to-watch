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

import { extend } from '../../utils/utils'
import { ActionType } from '../action'

const loadData = () => {
	const initialState = {
		films: [],
		filmsSimilar: [],
	}

	return (state = initialState, action) => {
		switch (action.type) {
			case ActionType.LOAD_FILMS:
				return extend(state, {
					films: action.payload,
				})
			case ActionType.LOAD_FILMS_SIMILAR:
				return extend(state, {
					filmsSimilar: action.payload,
				})
		}

		return state
	}
}

export { loadData }

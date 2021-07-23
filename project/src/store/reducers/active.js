import { extend } from '../../utils/utils'
import { ActionType } from '../action'
import { DEFAULT_GENRE } from '../../const/const'

const active = () => {
	const initialState = {
		activeGenre: DEFAULT_GENRE,
	}

	return (state = initialState, action) => {
		switch (action.type) {
			case ActionType.GENRE_SELECTION:
				return extend(state, {
					activeGenre: action.payload,
				})
		}

		return state
	}
}

export { active }

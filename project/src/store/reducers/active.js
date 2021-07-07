import { extend } from '../../utils/utils'
import { ActionType } from '../action'

const active = () => {
	const initialState = {
		activeTab: 'Overview',
	}

	return (state = initialState, action) => {
		switch (action.type) {
			case ActionType.CHANGE_TAB:
				return extend(state, {
					activeTab: action.payload,
				})
		}

		return state
	}
}

export { active }

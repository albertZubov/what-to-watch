import { combineReducers } from 'redux'
import { active } from './active'
import { loadData } from './load-data'
import { user } from './user'

export default combineReducers({
	PROCESS: active(),
	DATA: loadData(),
	USER: user(),
})

import { combineReducers } from 'redux'
import { NameSpace } from '../../const/const'
import { process } from './process'
import { loadData } from './load-data'
import { user } from './user'

export const rootReducer = combineReducers({
	[NameSpace.Process]: process.reducer,
	[NameSpace.Data]: loadData.reducer,
	[NameSpace.User]: user.reducer,
})

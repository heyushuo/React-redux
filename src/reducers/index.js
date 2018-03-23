//combineReducers 这个是用来合并多个reducers
import { combineReducers } from 'redux'
import counter from './store.js'

export default combineReducers({
	counter
})

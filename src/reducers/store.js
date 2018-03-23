
import { ADD , REMOVE } from '../redux'
export default function counter(state = 10, action) {
	switch (action.type){
		case ADD:
			return state+1;
		case REMOVE:
			return state-1;
		default:
			return state;
	}
}
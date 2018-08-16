import { actionTypes } from '../actions/selectAction';

export default (state = {result: {
	firstName: "Alex",
	lastName: "Abrines",
	playerId: 203518,
	teamId: 1610612760
}}, action) => {
	switch (action.type) {
		case actionTypes.SET_SELECT:
			return {
				result: action.payload
			}
		default:
			return state
	}
}
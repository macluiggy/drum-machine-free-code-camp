const POWER = 'POWER';

const initialState = {
	power: true,
}

const switchReducer = (state = initialState, action) => {
	switch (action.type) {
		case POWER:
			return {
				...state,
				power: action.on,
			}
		default:
			return state;
	}
}

export default switchReducer;
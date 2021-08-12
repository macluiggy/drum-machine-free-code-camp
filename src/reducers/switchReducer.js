const POWER = 'POWER';

const initialState = {
	power: true,
	bank: false,
}

const switchReducer = (state = initialState, action) => {
	switch (action.type) {
		case POWER:
			return {
				...state,
				power: action.on,
			}
		case 'BANK':
			return {
				...state,
				bank: action.on,
			}
		default:
			return state;
	}
}

export default switchReducer;
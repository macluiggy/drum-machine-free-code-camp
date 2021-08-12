const initialState = {
	clipText: '',
}

const changeClipTextReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'CHANGE_CLIP_TEXT':
			return {
				...state,
				clipText: action.text,
			}
		default:
			return state;
	}
}

export default changeClipTextReducer
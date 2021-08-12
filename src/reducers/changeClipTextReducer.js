const initialState = {
	clipText: 'hello',
}

const changeClipTextReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'CHANGE_CLIP_TEXT':
			return {
				...state,
				text: action.text,
			}
		default:
			return state;
	}
}

export default changeClipTextReducer
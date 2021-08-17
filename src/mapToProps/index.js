

export const mapStateToProps = state => {
	return {
		state: state,
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		switchPower: (on) => dispatch({type: 'POWER', on:on,}),
		changeClipText: (text) => dispatch({ type: 'CHANGE_CLIP_TEXT', text: text}),
		switchBank: on => dispatch({ type: 'BANK', on: on }),
		switchVolume: newVolume => dispatch({ type: 'CHANGE_VOLUME', newVolume: newVolume, })
	}
}

//comment added
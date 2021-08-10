

export const mapStateToProps = state => {
	return {
		state: state,
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		switchPower: (on) => dispatch({type: 'POWER', on:on,}),
	}
}
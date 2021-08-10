import React from 'react';
import { bankOne, bankTwo } from '../drum-pads/'
import InputWithLabel from './InputWithLabel'
import DrumPad from './DrumPad';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'

const Main = ({ state, switchPower }) => {
	const { power, /*clipText*/ } = state.switchStatus

	return (
		<div id='drum-machine'>
			<div className='drum_pad_container'>
				{(false ? bankOne : bankTwo ).map(items =>
						<DrumPad power={power} key={items.keyCode} {...items}/> )}
			</div>
			<div id='display'>
				<InputWithLabel
				 id='power'
				 name='power'
				 type='checkbox'
				 swtchPwr={(e) => {
				 	switchPower(e.target.checked)
				 	console.log(power)
				 }}
				 power={power} >Power</InputWithLabel>

			</div>
		</div>
		)
}




export default connect(mapStateToProps, mapDispatchToProps)(Main)
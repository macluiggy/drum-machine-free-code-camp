import React from 'react';
import { bankOne, bankTwo } from '../drum-pads/'
import InputWithLabel from './InputWithLabel'
import DrumPad from './DrumPad';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'

const Main = ({ state, switchPower, switchBank, changeClipText }) => {
	const { power, bank } = state.switchStatus
	const { clipText } = state.clipTextStatus

	return (
		<div id='drum-machine'>
			<div className='drum_pad_container'>
				{(bank ? bankTwo : bankOne ).map(items =>
						<DrumPad
						 power={power}
						 key={items.keyCode}
						 {...items}
						 changeClipText={changeClipText} /> )}
			</div>
			<div id='display'>
				<InputWithLabel
				 id='power'
				 name='power'
				 type='checkbox'
				 fn={(e) => switchPower(e.target.checked)}
				 power={power} >Power</InputWithLabel>
				 <span>{clipText}</span>

				 <InputWithLabel
				 id='power'
				 name='power'
				 type='checkbox'
				 fn={(e) => {
				 	switchBank(e.target.checked);
				 	changeClipText(bank ? 'heater kit' : 'smooth piano kit');
				 }}
				 toggle={bank} >Bank</InputWithLabel>

			</div>
		</div>
		)
}




export default connect(mapStateToProps, mapDispatchToProps)(Main)
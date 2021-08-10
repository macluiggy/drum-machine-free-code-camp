import React from 'react';
import { bankOne, bankTwo } from '../drum-pads/'

const Main = () => {
	return (
		<div id='drum-machine'>
			<div id='display'></div>
			<div className='drum_pad_container'>
				{(false ? bankOne : bankTwo ).map(items =>
						<DrumPad key={items.keyCode} {...items}/> )}
			</div>
		</div>
		)
}

const DrumPad = ({ keyTrigger, id, keyCode, url }) => {
	let sound = new Audio(url);
	const fn = () => {
	    sound.play();
	}
	return (
		<div>
			
				<button className='drum-pad' id={id} key={keyCode} onClick={fn}>
					{keyTrigger}
					<audio
					 
					 autoPlay
					 src={url}
					 className='clip'
					 id={keyTrigger} ></audio>
				</button>
		</div>
		)
}

export default Main
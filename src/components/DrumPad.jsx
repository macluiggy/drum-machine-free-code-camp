import React from 'react';
const DrumPad = ({ keyTrigger, id, keyCode, url, power, changeClipText, volume }) => {
	let sound = new Audio(url);
	const fn = e => {
	    if(power) {
	    	sound.play();
	    	sound.currentTime = 0;
	    	//console.log(id)
	    	changeClipText(id)
	    	console.log(sound.volume)
			sound.volume = volume / 100
			console.log(sound.volume)
	    }
	    return
	}
	return (
		<div className='drum_pad'>
				<button
				 disabled={!power}
				 className='drum-pad'
				 id={id}
				 key={keyCode}
				 onClick={fn} >
					{keyTrigger}
					<audio
					 volume='0.0'
					 src={url}
					 className='clip'
					 id={keyTrigger} ></audio>
				</button>
		</div>
		)
}

export default DrumPad
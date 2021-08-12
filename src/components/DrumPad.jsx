const DrumPad = ({ keyTrigger, id, keyCode, url, power, changeClipText }) => {
	let sound = new Audio(url);
	const fn = e => {
	    if(power) {
	    	sound.play();
	    	console.log()
	    }
	    return
	}
	return (
		<div>
			
				<button className='drum-pad' id={id} key={keyCode} onClick={fn}>
					{keyTrigger}
					<audio
					 src={url}
					 className='clip'
					 id={keyTrigger} ></audio>
				</button>
		</div>
		)
}

export default DrumPad
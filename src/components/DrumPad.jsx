const DrumPad = ({ keyTrigger, id, keyCode, url, power }) => {
	let sound = new Audio(url);
	const fn = () => {
	    if(power) {
	    	sound.play();
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
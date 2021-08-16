import React from 'react';
const InputWithLabel = ({ type, id, name, children, fn, toggle }) => {
	return (
		<form>
			<label htmlFor={id}>{children}</label>
			<input
			 type={type}
			 id={id}
			 name={name}
			 onClick={fn}
			 defaultChecked={toggle} />
			<span className="slider"></span>
		</form>
		)
}
export default InputWithLabel
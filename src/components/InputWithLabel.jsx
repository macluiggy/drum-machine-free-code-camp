const InputWithLabel = ({ type, id, name, children, swtchPwr, power }) => {
	return (
		<>
			<label htmlFor={id}>{children}</label>
			<input
			 type={type}
			 id={id}
			 name={name}
			 onClick={swtchPwr}
			 checked={power} />
		</>
		)
}
export default InputWithLabel
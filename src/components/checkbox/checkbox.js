import React, {useState} from 'react';

const Checkbox = () => {
	const [checked, setChecked] = useState(true);
	const description = checked ? 'Set case sensitive' : 'Set case insensitive';
	const changeChecked = () => {
		setChecked((prev) => !prev);
	};

	return (
		<div className='checkbox'>
			<input type='checkbox' onChange={changeChecked}/>
			<span>{description}</span>
		</div>
	);
};

export {Checkbox};
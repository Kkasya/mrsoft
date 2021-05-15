import React, {useState} from 'react';

const Checkbox = ({changeSensitive}) => {
	const [checked, setChecked] = useState(true);
	const description = checked ? 'Set case sensitive' : 'Set case insensitive';

	const changeChecked = (e) => {
		const sensitive = e.target.checked;
		setChecked(sensitive);
		changeSensitive(sensitive);
	};

	return (
		<div className='checkbox'>
			<input type='checkbox' checked={checked} onChange={changeChecked} />
			<span>{description}</span>
		</div>
	);
};

export {Checkbox};

import React from 'react';

const Input = ({defineSearchTerm}) => {
	const description = 'Enter number of length or substr for search';

	return (
		<div className={"input"}>
			<p>{description}</p>
			<input placeholder="Enter" onChange={defineSearchTerm}/>
		</div>
	);
};

export {Input};
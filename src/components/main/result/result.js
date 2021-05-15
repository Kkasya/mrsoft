import React from 'react';

const Result = ({result}) => {
	return (
		<>
			<h3 >Result of search:</h3 >
			<textarea value={result} readOnly />
		</>
	);
};

export {Result};
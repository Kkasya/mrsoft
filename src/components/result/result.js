import React from 'react';

const Result = ({result}) => {
console.log(result)
	return (
		<textarea value={result}>
		</textarea>
	);
};

export {Result};
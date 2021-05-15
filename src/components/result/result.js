import React from 'react';

const Result = ({result}) => {
	return (
		<textarea value={result} readOnly />
	);
};

export {Result};
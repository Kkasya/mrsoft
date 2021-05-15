import React from 'react';
import {TYPEBTN} from "../../../common";

const Search = ({searchTerm, getResult}) => {
	const btnName = isNaN(searchTerm) ? TYPEBTN.substr :	TYPEBTN.number;

	return (
		<div className='search'>
			<button onClick={getResult}>{btnName}</button>
		</div>
	);
};

export {Search};
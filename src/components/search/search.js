import React, {useState} from 'react';
import {TYPEBTN} from "../../common";

const Search = ({data}) => {
	const btnName = Number.isInteger(data) ? TYPEBTN[0] :	TYPEBTN[1];

	return (
		<div className='search'>
			<button>{btnName}</button>
		</div>
	);
};

export {Search};
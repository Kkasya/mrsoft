import React, {useState} from 'react';
import {Input} from "../input";
import {Checkbox} from "../checkbox";
import {Search} from "../search";
import {Result} from "../result";
import {data} from "../../common/data.json";

const Main = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [result, setResult] = useState('');

	const defineSearchTerm = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
	};

	const getResult = () => {
		const resultSearch = isNaN(searchTerm) ?
			data.filter((word) => word.includes(searchTerm)) :
			data.filter((word) => word.length > searchTerm)
		setResult(resultSearch);
	};


return (
	<div className={"main"} >
		<Input defineSearchTerm={defineSearchTerm} />
		<Checkbox />
		<Search
			searchTerm={searchTerm}
			getResult={getResult}
		/>
		<Result result={result} />
	</div >
);
}
;

export {Main};
import React, {useState} from 'react';
import {Input} from "../input";
import {Checkbox} from "../checkbox";
import {Search} from "../search";
import {Result} from "../result";
import {data} from "../../common/data.json";

const Main = () => {
		const [searchTerm, setSearchTerm] = useState('');
		const [result, setResult] = useState('');
		const [sensitive, setSensitive] = useState(true);

		const searchBySbtr = () => {
			if (sensitive){
				return data.filter((word) => word.includes(searchTerm));
			} else {
				return data.filter((word) => word.toUpperCase().includes(searchTerm.toUpperCase()));
			}
		};

		const searchByLength = () => {
			return data.filter((word) => word.length > searchTerm);
		}

		const defineSearchTerm = (e) => {
			const term = e.target.value;
			setSearchTerm(term);
			if (term === '') setResult('');
		};

		const getResult = () => {
			if (searchTerm !== '') {
				const resultSearch = isNaN(searchTerm) ?
					searchBySbtr() :
					searchByLength();
				setResult(resultSearch);
			}
		};

		const changeSensitive = (isSensitive) => {
			setSensitive(isSensitive);
		};

		return (
			<div className={"main"} >
				<Input defineSearchTerm={defineSearchTerm} />
				<Checkbox changeSensitive={changeSensitive}/>
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
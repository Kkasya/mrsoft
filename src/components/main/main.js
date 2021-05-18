import React, {useState, useEffect} from 'react';
import {Input} from "./input";
import {Checkbox} from "./checkbox";
import {Search} from "./search";
import {Result} from "./result";
import {getData} from "../../common";

const Main = () => {
		const [searchTerm, setSearchTerm] = useState('');
		const [result, setResult] = useState('');
		const [sensitive, setSensitive] = useState(true);
		const [data, setData] = useState([]);

		 useEffect(() => {
			 getData().then((res) => {
				 setData(res.data);
			 });
		 }, []);

		const searchBySbtr = () => {
			if (sensitive){
				return data.filter((word) => word.includes(searchTerm));
			} else {
				return data.filter((word) => word.toUpperCase().includes(searchTerm.toUpperCase()));
			}
		};

		const searchByLength = () => {
			return data.filter((word) => word.length > searchTerm);
		};

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
			<main >
				<Input defineSearchTerm={defineSearchTerm} />
				<Checkbox changeSensitive={changeSensitive}/>
				<Search
					searchTerm={searchTerm}
					getResult={getResult}
				/>
				<Result result={result} />
			</main >
		);
	}
;

export {Main};
import React, {useState} from 'react';
import {Input} from "./input";
import {Checkbox} from "./checkbox";
import {Search} from "./search";
import {Result} from "./result";
//import {data} from "../../common/data.json";

const Main = () => {
		const [searchTerm, setSearchTerm] = useState('');
		const [result, setResult] = useState('');
		const [sensitive, setSensitive] = useState(true);

		const getData = async () => {
			let res;
		//	const res = await fetch('http://www.mrsoft.by/data.json').json;
			let response = await fetch('http://www.mrsoft.by/data.json', { mode: 'no-cors'});
			//
			// if (response.ok) { // если HTTP-статус в диапазоне 200-299
			// 									 // получаем тело ответа (см. про этот метод ниже)
			// 	res = await response.json();
			// } else {
			// 	alert("Ошибка HTTP: " + response.status);
			// }
			// console.log(await res)

			const proxyUrl = 'https://robwu.nl/cors-anywhere.html/',
				targetUrl = 'http://www.mrsoft.by/data.json'
			fetch(proxyUrl + targetUrl)
				.then(blob => blob.json())
				.then(data => {
					console.table(data);
					//document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
					return data;
				})
				.catch(e => {
					console.log(e);
					return e;
				});

			//return res;
		};

		const data = getData();

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
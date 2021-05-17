import {data} from "./data.json";

const getData = async () => {
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	const	targetUrl = 'http://www.mrsoft.by/data.json';
	const res = await fetch(proxyUrl + targetUrl);
	if (!res.ok) {
		return data;
	}

	return await res.json();
};

export {getData};
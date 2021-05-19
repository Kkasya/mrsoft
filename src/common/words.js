import data from './data.json';

const getData = async () => {
	const	targetUrl = 'http://www.mrsoft.by/data.json';
	const res = await fetch(targetUrl, {mode: 'no-cors'});
	if (!res.ok) {
		return data;
	}
	return await res.json();

};

export {getData};

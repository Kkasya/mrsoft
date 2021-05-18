const getData = async () => {
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	const targetUrl = 'http://www.mrsoft.by/data.json';
	const res = await fetch(proxyUrl + targetUrl);
	if (!res.ok) {
		throw new Error('data not available');
	}

	return await res.json();
};

export {getData};
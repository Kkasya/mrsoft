const getData = async () => {
	const targetUrl = 'http://www.mrsoft.by/data.json';
	const res = await fetch(targetUrl);
	if (!res.ok) {
		throw new Error('data not available');
	}

	return await res.json();
};

export {getData};
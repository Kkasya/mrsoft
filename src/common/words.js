const getData = async () => {
	const targetUrl = 'data.json';
	const res = await fetch(targetUrl);
	if (!res.ok) {
		throw new Error('data not available');
	}

	return await res.json();
	// let headers = new Headers();
	//
	// headers.append('Content-Type', 'application/json');
	// headers.append('Accept', 'application/json');
	// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
	// headers.append('Origin','http://localhost:3000');
	//
	// fetch(sign_in, {
	// 	mode: 'cors',
	// 	credentials: 'include',
	// 	method: 'POST',
	// 	headers: headers
	// })
	// 	.then(response => response.json())
	// 	.then(json => console.log(json))
	// 	.catch(error => console.log('Authorization failed : ' + error.message));
};

export {getData};

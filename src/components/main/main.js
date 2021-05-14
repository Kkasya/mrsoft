import React from 'react';
import {Input} from "../input";
import {Checkbox} from "../checkbox";
import {Search} from "../search";

const Main = () => {

	return (
		<div className={"main"}>
			<Input />
			<Checkbox />
			<Search data={1}/>
		</div>
	);
};

export {Main};
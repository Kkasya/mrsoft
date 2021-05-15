import React from 'react';

const Footer = () => {

	return (
		<div className='footer' >
			<div className='footer__developer'>
				<span >Anastassia Kozlovskaya</span >
				<span >
					<a target='_blank' href="https://github.com/Kkasya/" >
       			 <img className="footer__developer-icon"
						 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
						 alt="github" />
      		</a >
				</span >
			</div >
			<span >2021</span >
		</div >
	);
};

export {Footer};

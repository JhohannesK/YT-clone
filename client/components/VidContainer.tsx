import React from 'react';
import Card from './Card';

const VidContainer = () => {
	return (
		<div className=' sm:mt-10 p-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default VidContainer;

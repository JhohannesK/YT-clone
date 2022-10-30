import React from 'react';

type Props = {
	icon: React.ReactNode;
	title: string;
};

const IconAndName = ({ icon, title }: Props) => {
	return (
		<div className='flex items-center space-x-6 hover:bg-gray-600 py-3 pl-3 group'>
			<div className=' '>{icon}</div>
			<div>{title}</div>
		</div>
	);
};

export default IconAndName;

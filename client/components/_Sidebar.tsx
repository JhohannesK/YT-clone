import React from 'react';

type Props = {
	icon: React.ReactNode;
	title: string;
};

const IconAndName = ({ icon, title }: Props) => {
	return (
		<div className='flex items-center space-x-6 hover:bg-gray-600 py-3 px-3 md:px-0 md:pl-3 group'>
			<div className='text-2xl md:textxl '>{icon}</div>
			<div className='hidden md:inline-flex'>{title}</div>
		</div>
	);
};

export default IconAndName;

import React from 'react';

type Props = {
	icon: React.ReactNode;
	title: string;
};

const IconAndName = ({ icon, title }: Props) => {
	return (
		<div className='flex items-center justify-center lg:justify-start w-full md:space-x-6 hover:bg-gray-600 transition-all duration-300 rounded-md py-3 px-3 md:px-0 lg:pl-3 group'>
			<div className='text-2xl lg:text-xl '>{icon}</div>
			<div className='hidden lg:inline-flex text-sm'>{title}</div>
		</div>
	);
};

export default IconAndName;

import React from 'react';

const filtertext = [
	'All',
	'Real Madrid',
	'Barcelona',
	'Music',
	'Gaming',
	'Sports',
	'News',
	'Movies',
	'Fashion',
	'Learning',
	'Live',
	'360° Video',
	'UEFA Champions League',
	'La Liga',
	'Apple',
	'Microsoft',
	'Google',
	'Amazon',
	'Comedy',
	'Science & Technology',
	'Travel',
	'Food',
	'Animals',
];

const Feedfilter: React.FC = () => {
	return (
		<div className='hidden  w-full absolute top-0 mt-14 bg-primary sm:block h-[3rem] '>
			<div className='flex items-center justify-between gap-x-4 overflow-x-scroll scrollbar-hide h-full px-3'>
				{filtertext.map((text) => (
					<div className='flex items-center justify-center w-max h-full cursor-pointer'>
						<p className='text-sm w-max inline-block bg-gray-700 py-1 px-3 rounded-md text-center hover:bg-gray-600 transition-all duration-500'>
							{text}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Feedfilter;

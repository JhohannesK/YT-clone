import React from 'react';
import Feedfilter from './Feedfilter';
import VidContainer from './VidContainer';

const VidContent = () => {
	return (
		<div className='relative flex flex-col items-center md:ml-20 lg:ml-[16rem] pt-[4rem]'>
			<Feedfilter />
			<VidContainer />
		</div>
	);
};

export default VidContent;

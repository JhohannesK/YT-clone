import React from 'react';
import Feedfilter from './Feedfilter';
import VidContainer from './VidContainer';

const VidContent = () => {
	return (
		<div className='md:ml-[16rem] pt-[4rem]'>
			<Feedfilter />
			<VidContainer />
		</div>
	);
};

export default VidContent;

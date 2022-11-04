import React from 'react';
import { BsClock } from 'react-icons/bs';
import { GiThumbUp, GiVideoCamera } from 'react-icons/gi';
import { IoHome, IoLibrary } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { RiHistoryFill, RiVideoChatFill, RiVideoFill } from 'react-icons/ri';
import IconAndName from './_Sidebar';

const Sidebar = () => {
	return (
		<div className='md:pt-16 px-5 rounded-t-md absolute bottom-0 md:top-0 flex items-center md:items-start justify-between md:flex-col w-full md:w-max gap-y-2 bg-gray-800 lg:pr-2 lg:w-[15rem] md:h-screen overflow-y-auto'>
			<IconAndName icon={<IoHome />} title='Home' />
			<IconAndName icon={<GiVideoCamera />} title='Shorts' />
			<IconAndName icon={<RiVideoChatFill />} title='Subscriptions' />
			<IconAndName icon={<IoLibrary />} title='Library' />
			<IconAndName icon={<RiHistoryFill />} title='History' />
			<div className='hidden md:inline-flex w-full'>
				<IconAndName icon={<RiVideoFill />} title='Your Vidoes' />
			</div>
			<div className='hidden md:inline-flex w-full'>
				<IconAndName icon={<BsClock />} title='Watch Later' />
			</div>
			<div className='hidden md:inline-flex w-full'>
				<IconAndName icon={<GiThumbUp />} title='Liked Videos' />
			</div>
			<div className='hidden md:inline-flex w-full'>
				<IconAndName icon={<IoIosArrowDown />} title='Show More' />
			</div>
			<div className='hidden lg:inline-flex'>
				<p className='uppercase'>Subscriptions</p>
			</div>
		</div>
	);
};

export default Sidebar;

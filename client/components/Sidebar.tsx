import React from 'react';
import { BsClock } from 'react-icons/bs';
import { GiThumbUp, GiVideoCamera } from 'react-icons/gi';
import { IoHome, IoLibrary } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { RiHistoryFill, RiVideoChatFill, RiVideoFill } from 'react-icons/ri';
import IconAndName from './_Sidebar';

const Sidebar = () => {
	return (
		<div className='md:pt-16 absolute bottom-0 md:top-0 flex items-center md:items-start justify-between md:justify-start md:flex-col w-full gap-y-2 bg-gray-800 md:pr-2 md:w-[17rem] md:h-screen overflow-y-auto'>
			<IconAndName icon={<IoHome />} title='Home' />
			<IconAndName icon={<GiVideoCamera />} title='Shorts' />
			<IconAndName icon={<RiVideoChatFill />} title='Subscriptions' />
			<hr className='hidden md:inline-block' />
			<IconAndName icon={<IoLibrary />} title='Library' />
			<div className='hidden md:inline-flex'>
				<IconAndName icon={<RiHistoryFill />} title='History' />
			</div>
			<div className='hidden md:inline-flex'>
				<IconAndName icon={<RiVideoFill />} title='Your Vidoes' />
			</div>
			<div className='hidden md:inline-flex'>
				<IconAndName icon={<BsClock />} title='Watch Later' />
			</div>
			<div className='hidden md:inline-flex'>
				<IconAndName icon={<GiThumbUp />} title='Liked Videos' />
			</div>
			<div className='hidden md:inline-flex'>
				<IconAndName icon={<IoIosArrowDown />} title='Show More' />
			</div>
			<hr className='hidden md:inline-block' />
			<div className='hidden md:inline-flex'>
				<p className='uppercase'>Subscriptions</p>
			</div>
		</div>
	);
};

export default Sidebar;

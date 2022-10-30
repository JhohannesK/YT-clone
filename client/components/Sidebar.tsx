import React from 'react';
import { BsClock } from 'react-icons/bs';
import { GiThumbUp, GiVideoCamera } from 'react-icons/gi';
import { IoHome, IoLibrary } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { RiHistoryFill, RiVideoChatFill, RiVideoFill } from 'react-icons/ri';
import IconAndName from './_Sidebar';

const Sidebar = () => {
	const [user, setUser] = React.useState<string[]>([]);
	return (
		<div className='pt-16 absolute top-0 flex flex-col gap-y-2 bg-gray-800 pr-2 w-[17rem] h-screen overflow-y-auto'>
			<IconAndName icon={<IoHome />} title='Home' />
			<IconAndName icon={<GiVideoCamera />} title='Shorts' />
			<IconAndName icon={<RiVideoChatFill />} title='Subscriptions' />
			<hr />
			<IconAndName icon={<IoLibrary />} title='Library' />
			<IconAndName icon={<RiHistoryFill />} title='History' />
			<IconAndName icon={<RiVideoFill />} title='Your Vidoes' />
			<IconAndName icon={<BsClock />} title='Watch Later' />
			<IconAndName icon={<GiThumbUp />} title='Liked Videos' />
			<IconAndName icon={<IoIosArrowDown />} title='Show More' />
			<hr />
			<p className='uppercase'>Subscriptions</p>
		</div>
	);
};

export default Sidebar;

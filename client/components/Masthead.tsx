import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { RiVideoAddFill } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { NextPage } from 'next';

const Masthead: NextPage = () => {
	return (
		<main className='border-b-2 border-red-500 bg-gray-800 px-3 fixed z-20 w-full h-[56px] flex items-center justify-between'>
			<div className='flex items-center justify-center gap-x-5'>
				{/* Menu icon */}
				<div className='hidden sm:inline-flex cursor-pointer'>
					<GiHamburgerMenu className='text-2xl' />
				</div>
				{/* logo */}
				<div className='flex items-center justify-center gap-x-2 cursor-pointer'>
					<BsYoutube className='text-red-500 text-2xl' />
					<p className='font-bold text-[10px] sm:text-sm'>
						YOUTUBE <sup className='font-light'>GH</sup>
					</p>
				</div>
			</div>

			{/* Search box and mic */}
			<div className='flex flex-1 min-w-0 items-center justify-end sm:justify-center h-full md:mx-36'>
				<div className='hidden relative sm:flex items-center justify-center flex-1 basis-[1e-9px] ml-2 sm:ml-10'>
					<div className='w-full'>
						<input
							type='text'
							placeholder='Search'
							className='p-2 flex-1 basis-[1e-9px] max-w-full w-full bg-gray-100 focus:outline-none text-black'
						/>
					</div>
				</div>
				<div className='px-7 py-2 sm:bg-gray-500 h-[40px] flex items-center justify-center '>
					<BsSearch />
				</div>
			</div>
			<div className='flex items-center justify-center space-x-5 sm:ml-3'>
				<RiVideoAddFill className='hidden sm:inline-flex text-2xl' />
				<IoNotificationsOutline className='hidden sm:inline-flex text-2xl' />
				<div className='h-8 w-8 rounded-full bg-red-400'></div>
			</div>
		</main>
	);
};

export default Masthead;

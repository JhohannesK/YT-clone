import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masthead from '../components/Masthead';
import Sidebar from '../components/Sidebar';
import VidContent from '../components/VidContent';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Masthead />
			<div className='2xl:max-w-7xl mx-auto'>
				<Sidebar />
				<VidContent />
			</div>
		</div>
	);
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masthead from '../components/Masthead';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Masthead />
			<Sidebar />
		</div>
	);
};

export default Home;

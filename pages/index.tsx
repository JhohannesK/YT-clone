import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import Masthead from '../components/Masthead';
import Sidebar from '../components/Sidebar';
import VidContent from '../components/VidContent';

const Home: NextPage = () => {
	const { data: session, status } = useSession();

	if (session) {
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
	}
	return (
		<>
			Not SignIn
			<button onClick={() => signIn('github')}>
				<BsGithub />
			</button>
		</>
	);
};

export default Home;

import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextPage,
} from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import Masthead from '../components/Masthead';
import Sidebar from '../components/Sidebar';
import VidContent from '../components/VidContent';
import { getServerAuthSession } from '../server/common/getServerAuthSession';

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

export const getServerSideProps: GetServerSideProps = async (
	ctx: GetServerSidePropsContext
) => {
	const session = await getServerAuthSession(ctx);
	console.log('🚀 ~ file: index.tsx:48 ~ session', session);

	if (!session) {
		return {
			redirect: {
				destination: '/Login',
				permanent: false,
			},
		};
	}
	return {
		props: { session },
	};
};

export default Home;

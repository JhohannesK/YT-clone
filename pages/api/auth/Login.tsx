import { signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
	return (
		<div>
			This is the Login Page
			<button onClick={() => signIn()}>Click me to Login</button>
		</div>
	);
};

export default Login;

import React from 'react';
import './LoginMain.scss';
import useToken from '../../Hooks/useToken';
import SingUp from '../SingUp/SingUp';

function LoginMain() {
	const [, setState] = useToken();
	const [modal, setModal] = React.useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, userpassword } = evt.target.elements;

		setState({
			username: username.value,
			userpassword: userpassword.value,
		});
	};

	return (
		<>
			<main className='login-main'>
				<div className='container'>
					<div className='login__box'>
						<img
							className='logo'
							src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg'
							alt='twitter logo'
							width='50'
							height='41'
						/>

						<h1 className='login__heading'>Log in to Twitter</h1>

						<form method='POST' onSubmit={handleSubmit}>
							<input
								className='user__login'
								type='text'
								placeholder='Phone number, email address'
								name='username'
								value={'abcdefg@gmail.com'}
								required
							/>
							<input
								className='user__password'
								type='password'
								placeholder='Password'
								name='userpassword'
								required
								value={'12345678'}
							/>

							<button className='login-btn'>Log In</button>
						</form>

						<div className='btns'>
								<button className='btn'>Forgot password?</button>
								<button
									className='btn'
									onClick={() => setModal((prev) => !prev)}>
									Sign up to Twitter
								</button>

								{modal && <SingUp setModal={setModal}/>}
								
							</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default LoginMain;

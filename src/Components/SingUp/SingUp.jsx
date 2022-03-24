import React from 'react';
import './SingUp.scss';

function SingUp({ setModal }) {
	return (
		<>
			<div className='singUp-modal'>
				<div className='modal-box'>
					<img
						className='SingUp__img'
						src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg'
						alt='Twitter logo'
						width='40'
						height='33'
					/>

					<h2 className='SingUp__heading'>Create an account</h2>

					<input
						className='user__login user__login--singUp'
						type='text'
						placeholder='Name'
						name='username'
						required
					/>
					<input
						className='user__login user__login--singUp'
						type='tel'
						placeholder='Phone number'
						name='userphone'
						required
					/>

					<button className='btn btn--singUp'>Use email</button>

					<h3 className='date__heading'>Date of birth</h3>

					<p className='date__info'>
						Facilisi sem pulvinar velit nunc, gravida scelerisque amet
						nibh sit. Quis bibendum ante phasellus metus, magna lacinia
						sed augue. Odio enim nascetur leo mauris vel eget. Pretium id
						ullamcorper blandit viverra dignissim eget tellus. Nibh mi
						massa in molestie a sit. Elit congue.
					</p>

					<input
						className='date__month'
						type='text'
						placeholder='Month'
						name='userBirthMonth'
						required
					/>
					<input
						className='date__day'
						type='number'
						placeholder='Day'
						name='userBirthDay'
						required
					/>
					<input
						className='date__year'
						type='number'
						placeholder='Year'
						name='userBirthYear'
						required
					/>

					<button
						className='login-btn login-btn--singUp'
						onClick={() => setModal((prev) => !prev)}>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default SingUp;

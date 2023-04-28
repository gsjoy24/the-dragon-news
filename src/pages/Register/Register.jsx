import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
	const { createUser, addPhotoAndName } = useContext(AuthContext);
	const [termsAccepted, setTermsAccepted] = useState(false);

	const handleTerms = (event) => {
		setTermsAccepted(event.target.checked);
	};
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photoURL.value;
		// console.log(name, email, password, photo);
		createUser(email, password)
			.then((result) => {
				addPhotoAndName(name, photo)
					.then(() => {
						console.log('successfully added');
					})
					.catch((err) => {
						console.log(err.message);
					});
				navigate('/category/0');
				console.log(result.user);
			})
			.catch((error) => {
				console.log(error.message);
			});

		form.reset();
	};
	return (
		<Container>
			<div
				style={{
					maxWidth: '420px',
					margin: '30px auto',
					backgroundColor: '#fff'
				}}
				className='p-5'>
				<h2 className='pb-4'>Login your account</h2>
				<hr />
				<Form onSubmit={handleRegister}>
					<Form.Group className='mb-3' controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							className='bg-secondary bg-opacity-25 p-2'
							name='name'
							type='text'
							placeholder='Enter your name'
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='email'>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							className='bg-secondary bg-opacity-25 p-2'
							name='email'
							type='email'
							placeholder='Enter your email'
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='photoURL'>
						<Form.Label>Photo URL</Form.Label>
						<Form.Control
							className='bg-secondary bg-opacity-25 p-2'
							name='photoURL'
							type='text'
							placeholder='Photo URL'
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							className='bg-secondary bg-opacity-25 p-2'
							name='password'
							type='password'
							placeholder='Enter a new password'
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3' id='formBasicCheckbox'>
						<Form.Check
							onClick={handleTerms}
							type='switch'
							name='accept'
							label={
								<>
									Accept <Link to='/terms'>terms and condition</Link>
								</>
							}
						/>
					</Form.Group>

					<Button className='d-block' variant='primary' type='submit' disabled={!termsAccepted}>
						Submit
					</Button>

					<Form.Text className='text-center mt-4 d-block fw-semibold'>
						Already have an Account?
						<Link to='/login' className='ms-2 text-decoration-none text-danger'>
							Login Now
						</Link>
					</Form.Text>
				</Form>
			</div>
		</Container>
	);
};

export default Register;

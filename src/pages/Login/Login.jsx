import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
	const { signInUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/category/0';

	const handleSignIn = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signInUser(email, password)
			.then((result) => {
				console.log(result.user);
				navigate(from, { replace: true });
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
				<Form onSubmit={handleSignIn}>
					<Form.Group className='mb-3' controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control className='bg-secondary bg-opacity-25 p-2' type='email' placeholder='Enter email' required />
					</Form.Group>
					<Form.Group className='mb-3' controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control className='bg-secondary bg-opacity-25 p-2' type='password' placeholder='Password' required />
					</Form.Group>
					<Button className='d-block' variant='primary' type='submit'>
						Submit
					</Button>
					<Form.Text className='text-center mt-4 d-block fw-semibold'>
						Dont't Have An Account ?
						<Link to='/register' className='ms-2 text-decoration-none text-danger'>
							Register Now
						</Link>
					</Form.Text>
				</Form>
			</div>
		</Container>
	);
};

export default Login;

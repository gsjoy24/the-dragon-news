import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const RightNav = () => {
	const { googleAuthentication, githubAuthentication } = useContext(AuthContext);

	// Google Authentication Handler
	const handleGoogleAuthentication = () => {
		googleAuthentication()
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	// Google Authentication Handler
	const handleGithubAuthentication = () => {
		githubAuthentication()
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div style={{ maxWidth: '280px', margin: '20px auto' }}>
			<h4>Login With</h4>
			<div className='d-flex flex-column gap-2 mb-4'>
				<Button
					onClick={handleGoogleAuthentication}
					className='d-flex align-items-center p-2 justify-content-center'
					variant='outline-secondary'>
					<FaGoogle />
					<span className='ms-2'>Login with Google</span>
				</Button>
				<Button
					onClick={handleGithubAuthentication}
					className='d-flex align-items-center justify-content-center p-2'
					variant='outline-secondary'>
					<FaGithub />
					<span className='ms-2'> Login with GitHub</span>
				</Button>
			</div>

			<div className='mb-4'>
				<h4>Find Us On</h4>
				<ListGroup>
					<ListGroup.Item className='d-flex align-items-center justify-content-center p-2 py-3 '>
						<FaFacebook /> <span className='ms-2'>Facebook</span>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-center p-2 py-3 '>
						<FaTwitter /> <span className='ms-2'>Twitter</span>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-center p-2 py-3 '>
						<FaInstagram /> <span className='ms-2'>Instagram</span>
					</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone></QZone>
		</div>
	);
};

export default RightNav;

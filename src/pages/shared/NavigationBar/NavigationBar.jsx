import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
	const { user, signOutUser } = useContext(AuthContext);

	const handleSignOut = () => {
		signOutUser()
			.then()
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<Container>
			<Navbar
				className='mt-3 w-100 position-sticky top-0 start-0 '
				collapseOnSelect
				expand='lg'
				style={{ backgroundColor: '#F3F3F3' }}
				variant='light'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mx-auto d-flex gap-3'>
							<Link to='/category/0' className='text-decoration-none text-secondary'>
								Home
							</Link>

							<Link to='/about' className='text-decoration-none text-secondary'>
								About
							</Link>

							<Link to='/career' className='text-decoration-none text-secondary'>
								Career
							</Link>

							{!user && (
								<Link to='/register' className='text-decoration-none text-secondary'>
									Register
								</Link>
							)}
						</Nav>
						<Nav className='d-flex gap-3 align-items-center'>
							<Link to='/'>{user && <FaUserCircle style={{ fontSize: '30px' }} className='w-100' />}</Link>

							{user && (
								<img
									style={{ width: '40px', borderRadius:'100%' }}
									src={user?.photoURL}
									alt={user?.displayName}
								/>
							)}

							{user ? (
								<Button onClick={handleSignOut} variant='secondary'>
									Logout
								</Button>
							) : (
								<Link to='/login'>
									<Button variant='secondary'>Login</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;

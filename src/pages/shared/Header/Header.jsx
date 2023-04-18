import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
	return (
		<Container>
			<div className='text-center mt-5'>
				<img className='img-fluid' src={logo} alt='the dragon news' />
				<p className='text-secondary'>
					<small>Journalism Without Fear or Favour</small>
				</p>
				<p className='text-secondary'>
					<small>{moment().format('dddd, MMM D, YYYY')}</small>
				</p>
			</div>

			<div className='d-flex p-3 bg-secondary bg-opacity-25 align-items-center'>
				<Button variant='danger'>Latest</Button>
				<Marquee className='m-lg-2 fw-semibold' pauseOnHover={true} speed={80} gradient={false}>
					I can be a React component, multiple React components, or just some text..... I can be a React component,
					multiple React components, or just some text. ..... I can be a React component, multiple React components, or
					just some text... I can be a React component, multiple React components, or just some text.
				</Marquee>
			</div>

			{/* navigation */}
			<Navbar className='mt-3' collapseOnSelect expand='lg' bg='light' variant='light'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mx-auto'>
							<Nav.Link href='#features'>Home</Nav.Link>
							<Nav.Link href='#pricing'>About</Nav.Link>
							<Nav.Link href='#pricing'>Career</Nav.Link>
						</Nav>
						<Nav className='d-flex align-items-center'>
							<Nav.Link href='#deets'>
								<FaUserCircle className='w-100' />
							</Nav.Link>
							<Nav.Link eventKey={2} href='#memes'>
								<Button variant='secondary'>Login</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;

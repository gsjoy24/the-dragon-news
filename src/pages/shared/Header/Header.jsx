import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Container } from 'react-bootstrap';

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
		</Container>
	);
};

export default Header;

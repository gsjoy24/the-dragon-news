import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const MarqueeInNav = () => {
	return (
		<Container>
			<div className='d-flex p-3 bg-secondary bg-opacity-25 align-items-center'>
				<Button variant='danger'>Latest</Button>
				<Marquee className='m-lg-2 fw-semibold' pauseOnHover={true} speed={80} gradient={false}>
					I can be a React component, multiple React components, or just some text..... I can be a React component,
					multiple React components, or just some text. ..... I can be a React component, multiple React components, or
					just some text... I can be a React component, multiple React components, or just some text.
				</Marquee>
			</div>
		</Container>
	);
};

export default MarqueeInNav;

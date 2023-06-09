import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Marquee from '../pages/shared/MarqueeInNav/MarqueeInNav';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Marquee></Marquee>
			<NavigationBar></NavigationBar>
			<Container className='my-3'>
				<Row>
					<Col lg={2}>
						<LeftNav></LeftNav>
					</Col>
					<Col lg={7}>
						<Outlet></Outlet>
					</Col>
					<Col lg={3}>
						<RightNav></RightNav>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Main;

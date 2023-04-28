import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
	return (
		<div>
			<Header></Header>
			<NavigationBar />
			<Container className='my-3'>
				<Row>
					<Col lg={9}>
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

export default NewsLayout;

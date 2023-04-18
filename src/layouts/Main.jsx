import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Container>
				<Row>
					<Col slg={2}>
						<LeftNav></LeftNav>
					</Col>
					<Col slg={8}>
						<h2>main content</h2>
					</Col>
					<Col slg={2}>
						<RightNav></RightNav>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Main;

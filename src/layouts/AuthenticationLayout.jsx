import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const AuthenticationLayout = () => {
	return (
		<div style={{ backgroundColor: '#F3F3F3', marginTop: '-15px', paddingTop: '20PX' }}>
			<NavigationBar />

			<div style={{ minHeight: 'calc(82vh)' }} className='d-flex align-items-center'>
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default AuthenticationLayout;

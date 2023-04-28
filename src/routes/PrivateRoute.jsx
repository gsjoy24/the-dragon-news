import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div
				style={{ minWidth: '100%', minHeight: '500px' }}
				className='d-flex justify-content-center align-items-center '>
				<Button variant='primary' disabled>
					<Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
					Loading...
				</Button>
			</div>
		);
	}
	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to='/login' replace />;
};

export default PrivateRoute;

import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
	return (
		<div className='mb-4 bg-secondary bg-opacity-25 p-3'>
			<h4>QZone</h4>
			<div className='text-center'>
				<img className='w-100' src={qZone1} alt='' />
				<img className='w-100' src={qZone2} alt='' />
				<img className='w-100' src={qZone3} alt='' />
			</div>
		</div>
	);
};

export default QZone;

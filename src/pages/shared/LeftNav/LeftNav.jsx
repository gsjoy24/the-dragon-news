import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/categories')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div style={{top:'50px'}} className='position-sticky start-0'>
			<h4>All Categories</h4>
			<div className='ps-3'>
				{categories.map((category) => (
					<p key={category.id}>
						<Link to={`/category/${category.id}`} className='text-decoration-none text-black p-2'>
							{category.name}
						</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export default LeftNav;

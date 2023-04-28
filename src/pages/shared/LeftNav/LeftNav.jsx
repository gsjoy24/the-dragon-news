import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('https://the-dragon-news-server-gsjoy24.vercel.app/categories')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div style={{ top: '50px',margin:'30px 0' }} className='position-sticky start-0'>
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

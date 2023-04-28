import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
	const categoryData = useLoaderData();
	return (
		<div>
			{categoryData.length !== 0 ? (
				categoryData.map((news) => <NewsCard key={news._id} news={news}></NewsCard>)
			) : (
				<h2 className='px-1 text-center'>Sorry! No NEWS for this category.</h2>
			)}
		</div>
	);
};

export default Category;

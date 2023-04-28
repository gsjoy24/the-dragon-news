import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';

const News = () => {
	const { category_id, title, details, image_url } = useLoaderData();

	return (
		<div>
			<h3 className='mb-4'>Dragon NEWS</h3>
			<Card>
				<Card.Img className='p-3' variant='top' src={image_url} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{details}</Card.Text>

					<Link className='text-decoration-none text-white' to={`/category/${category_id}`}>
						<Button variant='danger'>
							<FaArrowLeft className='me-2' />
							All news in this category
						</Button>
					</Link>
				</Card.Body>
			</Card>
			<EditorsInsight></EditorsInsight>
		</div>
	);
};

export default News;

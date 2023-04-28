import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import { HiEye, HiOutlineShare } from 'react-icons/hi2';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
	const { _id, title, image_url, details, author, rating, total_view } = news;

	return (
		<Card className='mb-5'>
			<Card.Header>
				<div className='d-flex  align-items-center justify-content-between'>
					<div className='d-flex  align-items-center'>
						<Image src={author.img} style={{ height: '60px', marginRight: '15px' }} roundedCircle />
						<div>
							<h6>{author.name || 'Unknown'}</h6>
							<p className='m-0'>
								<small>{author.published_date?.slice(0, 10) || 'Not Found'}</small>
							</p>
						</div>
					</div>
					<div style={{ fontSize: '28px', cursor: 'pointer' }}>
						<FaRegBookmark className='me-2' />
						<HiOutlineShare />
					</div>
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title className='p-3 fw-bolder'>{title}</Card.Title>
				<Card.Img className='mb-3' variant='top' src={image_url} />
				<Card.Text>
					{details.length < 250 ? (
						<>{details}</>
					) : (
						<>
							{details.slice(0, 250)}...
							<Link to={`/news/${_id}`} className='text-decoration-none btn btn-danger d-block mt-3'>
								Read More
							</Link>
						</>
					)}
				</Card.Text>
			</Card.Body>
			<Card.Footer className='d-flex justify-content-between align-items-center'>
				<div className='d-flex align-items-center'>
					<Rating
						placeholderRating={rating?.number}
						readonly
						emptySymbol={<FaRegStar />}
						placeholderSymbol={<FaStar className='text-danger' />}
						fullSymbol={<FaStar />}
					/>
					<span className='ms-2'>{rating.number}</span>
				</div>
				<div>
					<HiEye /> <span>{total_view}</span>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default NewsCard;

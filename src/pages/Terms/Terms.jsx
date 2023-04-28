import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<Container>
			<div>
				<h2 className='mb-3'>Our terms and conditions</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio pariatur, voluptas accusantium quidem
					culpa facilis sint. Id eligendi autem fugit eveniet sunt doloribus tenetur unde, atque earum, amet similique
					vero.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi consectetur doloribus id laborum ab debitis
					nam architecto nobis minima quas repudiandae unde, dolor cumque placeat perferendis. Atque voluptate, quod a
					numquam odio illum, culpa optio dolorem sit, commodi voluptas!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut dignissimos eveniet. Molestiae delectus
					deleniti dolor. Totam modi excepturi natus!
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt optio est placeat laborum iure cum
					architecto ex, similique quae, nam, harum blanditiis numquam voluptatibus incidunt facilis! Repellendus minima
					odit corrupti consequuntur illo quibusdam incidunt, maiores quis quia quidem obcaecati recusandae repudiandae
					optio ipsam, assumenda deleniti exercitationem vitae, sed alias enim excepturi. Sed quasi architecto eius quos
					velit similique omnis accusamus.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem veritatis suscipit quam quos
					alias placeat asperiores cum incidunt consequuntur. Veniam asperiores ratione quidem itaque? Distinctio minima
					nobis, vero nam, dolor qui reiciendis sint provident veniam doloremque, vel molestiae architecto!
				</p>
				<Link to='/register'>
					<Button className='btn btn-danger'>Go back to register</Button>
				</Link>
			</div>
		</Container>
	);
};

export default Terms;

import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Category from '../pages/Category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/News/News';
import AuthenticationLayout from '../layouts/AuthenticationLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Terms from '../pages/Terms/Terms';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthenticationLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to='../category/0' />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			},

			{
				path: 'terms',
				element: <Terms />
			}
		]
	},
	{
		path: '/category',
		element: <Main></Main>,
		children: [
			{
				path: ':id',
				element: <Category></Category>,
				loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
			}
		]
	},
	{
		path: 'news',
		element: <NewsLayout></NewsLayout>,
		children: [
			{
				path: ':id',
				element: (
					<PrivateRoute>
						<News></News>
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
			}
		]
	}
]);
export default router;

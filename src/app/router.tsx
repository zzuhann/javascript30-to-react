import { createBrowserRouter } from 'react-router-dom';
import Home from 'src/pages/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'drum-kit',
		element: <div>Drum Kit</div>,
	},
]);

export default router;

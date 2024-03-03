import { createBrowserRouter } from 'react-router-dom';
import DrumKit from 'src/pages/drum-kit';
import Home from 'src/pages/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'drum-kit',
		element: <DrumKit />,
	},
]);

export default router;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './features/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;

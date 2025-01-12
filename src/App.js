import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Topbar from './components/Topbar';
import Menu from './components/Menu';
import Home from './features/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<Router>
			<Topbar open={drawerOpen} setDrawerOpen={setDrawerOpen} />
			<Menu open={drawerOpen} setDrawerOpen={setDrawerOpen} />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;

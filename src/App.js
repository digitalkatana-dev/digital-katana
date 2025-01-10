import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './features/Home';

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

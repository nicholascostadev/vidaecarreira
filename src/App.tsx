import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Help from './pages/Help';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ajuda" element={<Help />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

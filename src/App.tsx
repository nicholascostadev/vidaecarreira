import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BetterHabits from './pages/BetterHabits';

function App() {
	return (
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/habitos-melhores" element={<BetterHabits />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

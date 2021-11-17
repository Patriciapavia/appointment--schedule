import Home from './components/Home';
import AvailableTimeAppointment from './components/AvailableTimeAppointment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} exact />
				<Route
					path='/avaiable-schedule/:id'
					element={<AvailableTimeAppointment />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

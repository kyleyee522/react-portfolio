// import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import '../src/styles/App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
	// const [count, setCount] = useState(0);

	return (
		// <div>
		// 	<h1>Hello World</h1>
		// </div>

		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Portfolio />} />
				<Route path="/aboutme" element={<AboutMe />} />
				<Route path="/contactme" element={<Contact />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

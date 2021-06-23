import React, { useState } from 'react';
import {
	Navbar,
	Projects,
	Sidebar,
	// About,
	Skills,
	Contact,
	Footer,
} from './Components/index';
function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const sidebarToggle = () => {
		setIsSidebarOpen(prev => !isSidebarOpen);
	};

	return (
		<>
			<Navbar isSidebarOpen={isSidebarOpen} sidebarToggle={sidebarToggle} />
			<Sidebar isSidebarOpen={isSidebarOpen} sidebarToggle={sidebarToggle} />
			<Projects />

			{/* <About /> */}
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

export default App;

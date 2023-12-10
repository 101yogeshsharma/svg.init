import "@/App.css";

import { useState } from "react";

import Navbar from "@/layout/Navbar/Navbar.jsx";
import Customization from "@/layout/Customization/Customization.jsx";
import Playground from "@/layout/Playground/Playground.jsx";
import Actions from "@/layout/Actions/Actions.jsx";

function App() {
	const [shapeProperties, setShapePropties] = useState({
		borderRadius: 0,
		width: 50,
		height: 50,
		filled: false,
		backgroundColor: 'transparent',
		strokeColor: 'white',
		strokeWidth: 1,
		selectedShape: 'square'
	})
	return (
		<div className='app'>
			<div className='header'>
				<Navbar />
			</div>
			<div className='content'>
				<Customization
					setShapePropties={setShapePropties}
				/>
				<Actions />
				<Playground
					shapeProperties={shapeProperties}
				/>
			</div>
		</div>
	);
}

export default App;

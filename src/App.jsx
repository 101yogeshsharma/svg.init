import "@/App.css";
import Navbar from "@/layout/Navbar/Navbar";
import Customization from "@/layout/Customization/Customization";
import Playground from "@/layout/playground/Playground";
import { useState } from "react";
import Actions from "@/layout/Actions/Actions";

function App() {
	const [radius, setRadius] = useState(0);
	const [width, setWidth] = useState(50);
	const [height, setHeight] = useState(50);
	const [filled, setFilled] = useState(false);
	const [backgroundColor, setBackgroundColor] = useState("transparent");
	const [strokeColor, setStrokeColor] = useState("white");
	const [strokeWidth, setStrokeWidth] = useState(1);
	return (
		<div className='app'>
			<div className='header'>
				<Navbar />
			</div>
			<div className='content'>
				<Customization
					setRadius={setRadius}
					setWidth={setWidth}
					setHeight={setHeight}
					setFilled={setFilled}
					setBackgroundColor={setBackgroundColor}
					setStrokeColor={setStrokeColor}
					setStrokeWidth={setStrokeWidth}
				/>
				<Actions />
				<Playground
					borderRadius={radius}
					width={width}
					height={height}
					filled={filled}
					backgroundColor={backgroundColor}
					strokeColor={strokeColor}
					strokeWidth={strokeWidth}
				/>
			</div>
		</div>
	);
}

export default App;

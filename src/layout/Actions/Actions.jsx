import { useState } from "react";
import "./Actions.css";

export default function Actions() {
	const [buttonText, setButtonText] = useState("Copy SVG");
	const addSvgToClipboard = () => {
		let svg = document.getElementById("playground-content");
		navigator.clipboard.writeText(svg.childNodes[0].outerHTML);
		setButtonText("Copied.");
		setTimeout(() => setButtonText("Copy SVG"), 1000);
	};
	return (
		<div className='action-segment'>
			<button className='copy-button' onClick={addSvgToClipboard}>
				{buttonText}
			</button>
		</div>
	);
}

import { useState } from "react";
import "./Actions.css";

export default function Actions() {
	const [buttonText, setButtonText] = useState("Copy");
	const addSvgToClipboard = () => {
		let svg = document.getElementById("playground-content");
		navigator.clipboard.writeText(svg.childNodes[0].outerHTML);
		setButtonText("Copied.");
		setTimeout(() => setButtonText("Copy"), 1000);
	};
	const downloadSvg = () => {
		const image = new Image();
		let svg = document.getElementById("playground-content").childNodes[0];
		const svgData = new XMLSerializer().serializeToString(svg);
		const svgDataBase64 = btoa(unescape(encodeURIComponent(svgData)));
		const svgDataUrl = `data:image/svg+xml;charset=utf-8;base64,${svgDataBase64}`;
		console.log(svgDataUrl);

		const output = document.createElement('a');
		output.href = svgDataUrl;
		output.download = "image.svg";
		console.log(output);
		output.click();
	}

	return (
		<div className='action-segment'>
			<div className="copy-button-segment">
				<div className="copy-button-handle"><div id="handle-pin"></div></div>
				<button className='copy-button' onClick={addSvgToClipboard}>
					{buttonText}
				</button>
			</div>
			<div className="download-button-segment">
				<div className="download-button-handles-segment">
					<div className="download-button-handle left"><div id="handle-pin"></div></div>
					<div className="download-button-handle right"><div id="handle-pin"></div></div>
				</div>
				<button className='download-button' onClick={downloadSvg}>
					Download
				</button>
			</div>
		</div>
	);
}

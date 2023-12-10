import { useEffect, useState, useMemo } from "react";
import "./Actions.css";

function Actions({ contextMenuState }) {
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

	useEffect(() => {
		if (contextMenuState.show) {
			var menu = document.getElementById("action-segment")
			menu.style.display = 'block';
			menu.style.left = contextMenuState.left + "px";
			menu.style.top = contextMenuState.top + "px";
		} else {
			document.getElementById("action-segment").style.display = "none"
		}
	});

	return (
		<div className='action-segment' id="action-segment" style={{ display: 'none' }}>
			<div className="copy-button-segment">
				<button className='copy-button' onClick={addSvgToClipboard}>
					{buttonText}
				</button>
			</div>
			<div className="download-button-segment">
				<button className='download-button' onClick={downloadSvg}>
					Download
				</button>
			</div>
		</div>
	);
}

export default Actions;

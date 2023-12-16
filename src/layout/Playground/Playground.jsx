/* eslint-disable react/no-unknown-property */
import Actions from "../Actions/Actions";
import "./Playground.css";

export default function Playground({ shapeProperties, setContextMenuState, hideContextMenu }) {
	const {
		selectedShape,
		borderRadius,
		filled,
		backgroundColor,
		backgroundImage,
		strokeWidth,
		strokeType,
		strokeColor,
	} = shapeProperties;

	const handleShowContextMenu = (e) => {
		e.preventDefault();
		setContextMenuState((prev) => {
			return {
				show: !prev.show,
				top: e.pageY,
				left: e.pageX
			}
		});
	}

	const fillColor = filled ? backgroundColor || "transparent" : "transparent";
	const imageBackground = filled && backgroundImage ? backgroundImage : '';

	const style = `fill: "url(${imageBackground});"`;
	console.log(backgroundImage);

	return (
		<div className='playground' id="playground" onContextMenu={handleShowContextMenu} onClick={hideContextMenu}>
			<div className='playground-content' id='playground-content' style={{ width: '500px', height: '500px' }}>
				<svg height="500px" width="500px">
					{selectedShape === "square" && <rect x='120px' y='120px' rx={borderRadius} ry={borderRadius} width="200px" height="200px" fill={fillColor} stroke={strokeColor} stroke-width={strokeWidth + "px"} />}
					{selectedShape === "circle" && <circle cx="220" cy="220" r="95" fill={fillColor} stroke={strokeColor} stroke-width={strokeWidth + "px"} />}
					{selectedShape === "ellipse" && <ellipse cx="220" cy="220" rx="95" ry="48" fill={fillColor} stroke={strokeColor} stroke-width={strokeWidth + "px"} />}
					{selectedShape === "line" && <line x1="130" x2="310" y1="220" y2="220" fill={fillColor} stroke={strokeColor} stroke-width={strokeWidth + "px"} />}
				</svg>
			</div>
		</div>
	);
}

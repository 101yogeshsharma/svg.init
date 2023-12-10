/* eslint-disable react/no-unknown-property */
import "./Playground.css";

export default function Playground({ shapeProperties }) {
	const {
		selectedShape,
		borderRadius,
		filled,
		backgroundColor,
		strokeWidth,
		strokeType,
		strokeColor,
	} = shapeProperties;

	const fillColor = filled ? backgroundColor || "transparent" : "transparent"

	return (
		<div className='playground'>
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

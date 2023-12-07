/* eslint-disable react/no-unknown-property */
import "./Playground.css";

export default function Playground({
	borderRadius,
	filled,
	backgroundColor,
	height,
	width,
	strokeWidth,
	strokeType,
	strokeColor,
}) {
	const svgSegmentStyles = {
		width: width > 20 ? "20vw" : width + "vw",
		height: height > 20 ? "20vh" : height + "vh",
	};
	const svgStyle = {
		width: width > 20 ? "18vw" : width - 2 + "vw",
		height: height > 20 ? "18vh" : height - 2 + "vh",
	};

	const addSvgToClipboard = () => {
		console.log(document.getElementById("playground-content"));
	};

	return (
		<div className='playground'>
			<div
				className='playground-content'
				id='playground-content'
				style={svgSegmentStyles}
			>
				<svg
					height={svgSegmentStyles.height}
					width={svgSegmentStyles.width}
				>
					<rect
						x='0'
						y='0'
						width={svgStyle.width}
						height={svgStyle.height}
						fill={backgroundColor}
						stroke={strokeColor}
						stroke-width={strokeWidth + "px"}
					/>
				</svg>
			</div>
		</div>
	);
}

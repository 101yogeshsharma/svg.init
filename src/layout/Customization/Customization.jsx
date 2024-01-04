import Divider from "@/components/Divider/Divider.jsx";
import "./Customization.css";

export default function Customization(props) {
	const handleRadiusChange = (e) => {
		props.setShapePropties((prev) => {
			return {
				...prev,
				borderRadius: e.target.value
			}
		});
	};
	const toggleBackground = (e) => {
		props.setShapePropties((prev) => {
			return {
				...prev,
				filled: e.target.checked
			}
		});
	};
	const handleBackgroundColorChange = (e) => {
		props.setShapePropties((prev) => {
			return {
				...prev,
				backgroundColor: e.target.value
			}
		});
	};
	const handleStrokeColorChange = (e) => {
		props.setShapePropties((prev) => {
			return {
				...prev,
				strokeColor: e.target.value
			}
		});
	};
	const handleStrokeWidthChange = (e) => {
		props.setShapePropties((prev) => {
			return {
				...prev,
				strokeWidth: e.target.value
			}
		});
	};
	const handleShapeSelection = (shape) => {
		props.setShapePropties((prev) => {
			return {
				...prev,
				selectedShape: shape
			}
		});
	}

	return (
		<div className='customization-segment'>
			<div className='customization-content'>
				<PresetShapes handleShapeSelection={handleShapeSelection} />
				<Divider />
				{ props.shapeProperties.selectedShape !== "circle" && <div className='slider-container'>
					<p>Border Radius</p>
					<input
						type='range'
						min='0'
						max='100'
						className='slider'
						name='radius'
						onChange={handleRadiusChange}
					></input>
				</div> }
				<div className='slider-container'>
					<p>Stroke Width</p>
					<input
						type='range'
						min='2'
						max='10'
						className='slider'
						name='width'
						onChange={handleStrokeWidthChange}
					></input>
				</div>
				<Divider />
				<ColorFilters
					toggleBackground={toggleBackground}
					handleBackgroundColorChange={handleBackgroundColorChange}
					handleStrokeColorChange={handleStrokeColorChange}
				/>
			</div>
		</div>
	);
}

const ColorFilters = (props) => {
	return (
		< div className='filters-container' >
			<label className='checkbox-container'>
				Filled
				<input
					type='checkbox'
					onChange={props.toggleBackground}
				></input>
				<span className='checkmark'></span>
			</label>
			<Divider />
			<div className="color-selectors-container">
				<label className='color-picker-container'>
					<input
						type='color'
						id='colorpicker'
						value='transparent'
						onChange={props.handleBackgroundColorChange}
					></input>
					<span htmlFor='colorpicker'>Fill Color</span>
				</label>
				<label className='color-picker-container'>
					<input
						type='color'
						id='colorpicker'
						value='white'
						onChange={props.handleStrokeColorChange}
					></input>
					<span htmlFor='colorpicker'>Stroke Color</span>
				</label>
			</div>
		</div >
	)
}

const PresetShapes = ({ handleShapeSelection }) => {
	return (
		<div className="shapes-container">
			<div className="square-shape" onClick={() => handleShapeSelection("square")}>
				<label>
					Square
				</label>
				<svg height="40px" width="40px" style={{ margin: "2px" }}>
					<rect x="2" y="2" width="35" height="35" fill="transparent" stroke="white" stroke-width="2px" />
				</svg>
			</div>
			<div className="circle-shape" onClick={() => handleShapeSelection("circle")}>
				<label>
					Circle
				</label>
				<svg height="40px" width="40px" style={{ margin: "2px" }}>
					<circle cx="20" cy="20" r="18" fill="transparent" stroke="white" stroke-width="2px" />
				</svg>
			</div>
			<div className="ellipsis-shape" onClick={() => handleShapeSelection("ellipse")}>
				<label>
					Ellipsis
				</label>
				<svg height="40px" width="40px" style={{ margin: "2px" }}>
					<ellipse cx="20" cy="20" rx="18" ry="10" fill="transparent" stroke="white" stroke-width="2px" />
				</svg>
			</div>
			<div className="line-shape" onClick={() => handleShapeSelection("line")}>
				<label>
					Line
				</label>
				<svg height="40px" width="40px" style={{ margin: "2px" }}>
					<line x1="0" x2="35" y1="15" y2="35" fill="white" stroke="white" stroke-width="2px" />
				</svg>
			</div>
		</div>
	)
}

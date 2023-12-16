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
	const handleBackgroundUpload = (e) => {
		const backgroundImageDataBase64 = btoa(unescape(encodeURIComponent(e.target.value)));
		const backgroundImageData = `data:image/svg+xml;charset=utf-8;base64,${backgroundImageDataBase64}`;
		props.setShapePropties(prev => {
			return {
				...prev,
				backgroundImage: backgroundImageData
			}
		});
	}

	return (
		<div className='customization-segment'>
			<div className='customization-content'>
				<PresetShapes handleShapeSelection={handleShapeSelection} />
				<Divider />
				<div className='slider-container'>
					<p>Border Radius</p>
					<input
						type='range'
						min='0'
						max='100'
						className='slider'
						name='radius'
						onChange={handleRadiusChange}
					></input>
				</div>
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
					handleBackgroundUpload={handleBackgroundUpload}
				/>
			</div>
		</div>
	);
}

const ColorFilters = (props) => {
	return (
		< div className='filters-container' >
			<div className="background-selectors-container">
				<label className='checkbox-container'>
					Filled
					<input
						type='checkbox'
						onChange={props.toggleBackground}
					></input>
					<span className='checkmark'></span>
				</label>
				<UploadBackground handleBackgroundUpload={props.handleBackgroundUpload} />
			</div>
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

const UploadBackground = (props) => {
	return (
		<div className="image-upload-segment">
			<label htmlFor="image-upload">
				{/* <svg width="30px" height="30px">
					<path stroke="white" d="M819.52 819.2h-179.52c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h179.52c84.518 0 153.28-68.762 153.28-153.28s-68.762-153.28-153.28-153.28c-18.005 0-35.626 3.086-52.368 9.173-11.168 4.056-23.654-0.099-30.163-10.035-6.507-9.938-5.323-23.048 2.859-31.659 18.154-19.106 28.152-44.15 28.152-70.518 0-56.464-45.936-102.4-102.4-102.4-32.858 0-62.912 15.187-82.456 41.667-11.704 15.859-18.533 34.638-19.746 54.307-0.67 10.867-8.141 20.122-18.622 23.069s-21.682-1.059-27.915-9.984l-0.238-0.342c-5.49-7.795-11.549-15.443-17.952-22.653-48.587-54.694-118.374-86.064-191.47-86.064-141.158 0-256 114.842-256 256 0 141.16 114.842 256 256 256h128c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6h-128c-169.39 0-307.2-137.81-307.2-307.2s137.81-307.2 307.2-307.2c82.050 0 160.621 32.933 218.142 90.901 4.47-9.989 10.026-19.52 16.608-28.438 28.867-39.112 75.090-62.462 123.65-62.462 84.696 0 153.6 68.904 153.6 153.6 0 17.976-3.099 35.542-9.035 52.050 3.11-0.139 6.23-0.21 9.357-0.21 112.75 0 204.48 91.73 204.48 204.48-0.002 112.75-91.731 204.48-204.482 204.48z"></path>
					<path stroke="white" d="M658.101 621.899l-102.4-102.4c-9.997-9.997-26.206-9.997-36.203 0l-102.4 102.4c-9.997 9.997-9.997 26.206 0 36.203s26.206 9.997 36.205 0l58.698-58.698v194.195c0 14.139 11.461 25.6 25.6 25.6s25.6-11.461 25.6-25.6v-194.195l58.699 58.698c4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499c9.998-9.997 9.998-26.205 0-36.202z"></path>
				</svg> */}
				Image Upload
			</label>
			<input
				type="file"
				// id="image-upload"
				onChange={props.handleBackgroundUpload}></input>
		</div>
	)
}

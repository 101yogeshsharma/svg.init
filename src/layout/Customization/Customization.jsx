import Divider from "@/components/Divider/Divider.jsx";
import "./Customization.css";

export default function Customization(props) {
	const handleRadiusChange = (e) => {
		props.setRadius(e.target.value);
	};
	const handleWidthChange = (e) => {
		props.setWidth(e.target.value);
	};
	const handleHeightChange = (e) => {
		props.setHeight(e.target.value);
	};
	const toggleBackground = (e) => {
		props.setFilled(e.target.checked);
	};
	const handleBackgroundColorChange = (e) => {
		props.setBackgroundColor(e.target.value);
	};
	const handleStrokeColorChange = (e) => {
		props.setStrokeColor(e.target.value);
	};
	const handleStrokeWidthChange = (e) => {
		props.setStrokeWidth(e.target.value);
	};

	return (
		<div className='customization-segment'>
			<div className='customization-content'>
				{/* <div className='slider-container'>
					<p>Border Radius</p>
					<input
						type='range'
						min='1'
						max='32'
						className='slider'
						name='radius'
						onChange={handleRadiusChange}
					></input>
				</div> */}
				<div className='slider-container'>
					<p>Stroke Width</p>
					<input
						type='range'
						min='1'
						max='10'
						className='slider'
						name='width'
						onChange={handleStrokeWidthChange}
					></input>
				</div>
				<div className='slider-container'>
					<p>Width</p>
					<input
						type='range'
						min='4'
						max='20'
						className='slider'
						name='width'
						onChange={handleWidthChange}
					></input>
				</div>
				<div className='slider-container'>
					<p>Height</p>
					<input
						type='range'
						min='4'
						max='20'
						className='slider'
						height='height'
						onChange={handleHeightChange}
					></input>
				</div>
				<Divider />
				<div className='filters-container'>
					<label className='checkbox-container'>
						Filled
						<input
							type='checkbox'
							onChange={toggleBackground}
						></input>
						<span className='checkmark'></span>
					</label>
					<label className='color-picker-container'>
						<input
							type='color'
							id='colorpicker'
							value='transparent'
							onChange={handleBackgroundColorChange}
						></input>
						<span htmlFor='colorpicker'>Fill Color</span>
					</label>
					<label className='color-picker-container'>
						<input
							type='color'
							id='colorpicker'
							value='white'
							onChange={handleStrokeColorChange}
						></input>
						<span htmlFor='colorpicker'>Stroke Color</span>
					</label>
				</div>
			</div>
		</div>
	);
}

// TimeSliderControl.js

const TimeSliderControl = ({ sliderValue, onSliderChange }) => {
	const handleSliderChange = (event) => {
		const newValue = event.target.value;
		onSliderChange(newValue);
	};

	return (
		<div class="cart-notifications-slider">
			<h4>Close After (Seconds)</h4>
			<div className="cart-notifications-slider-inner">
				<input
					type="range"
					min="1"
					max="10"
					value={sliderValue}
					className="slider"
					id="notifications-range"
					onChange={handleSliderChange}
				/>
				<p id="range-value">{sliderValue}</p>
			</div>
		</div>
	);
};

export default TimeSliderControl;

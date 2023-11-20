// PositionRadioControl.js
import { Fragment } from '@wordpress/element';

const PositionRadioControl = ({ selected, onPositionChange }) => {
	return (
		<div className="cart-notifications-btn-group">
			<h4>Position</h4>
			<div className="cart-notifications-inner-btn">
				<input
					id="top"
					type="radio"
					name="position"
					checked={selected === 'top'}
					onChange={() => onPositionChange('top')}
				/>
				<label htmlFor="top">Top</label>
				<input
					id="bottom"
					type="radio"
					name="position"
					checked={selected === 'bottom'}
					onChange={() => onPositionChange('bottom')}
				/>
				<label htmlFor="bottom">Bottom</label>
			</div>
		</div>
	);
};

export default PositionRadioControl;

// LayoutRadioControl.js

const LayoutRadioControl = ({ selected, onLayoutChange }) => {
	const layoutImg1 = cartNotificationsData.imagesUrl + 'layout1.svg';
	const layoutImg2 = cartNotificationsData.imagesUrl + 'layout2.svg';

	return (
		<div className="cart-notifications-layouts">
			<h4>Layout</h4>
			<div className="cart-notifications-frames">
				<input
					id="layout1"
					type="radio"
					name="layout"
					checked={selected === 'layout1'}
					onChange={() => onLayoutChange('layout1')}
				/>
				<label htmlFor="layout1" className="view-frame">
					<img src={layoutImg1} alt="Layout 1" />
				</label>
				<input
					id="layout2"
					type="radio"
					name="layout"
					checked={selected === 'layout2'}
					onChange={() => onLayoutChange('layout2')}
				/>
				<label htmlFor="layout2" className="view-frame">
					<img src={layoutImg2} alt="Layout 2" />
				</label>
			</div>
		</div>
	);
};

export default LayoutRadioControl;

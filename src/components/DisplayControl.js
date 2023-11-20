// DisplayControl.js

const DisplayControl = ({
	conditions,
	initialOptions,
	onConditionChange,
	onAddCondition,
	onRemoveCondition,
}) => {
	const isOptionSelected = (optionValue) => {
		return conditions.includes(optionValue);
	};

	const delIcon = cartNotificationsData.imagesUrl + 'del.svg';

	return (
		<div className="cart-notifications-conditions">
			<h4>Display Condition</h4>
			{conditions.map((condition, index) => (
				<div
					key={index}
					className="cart-notifications-conditions-inner"
				>
					<div className="field">
						<select
							value={condition}
							onChange={(e) =>
								onConditionChange(index, e.target.value)
							}
						>
							<option value="">Select Condition</option>
							{initialOptions.map((option, optionIndex) => (
								<option
									key={optionIndex}
									value={option.value}
									disabled={
										index !== 0 &&
										isOptionSelected(option.value)
									}
								>
									{option.label}
								</option>
							))}
						</select>
						<button
							type="button"
							onClick={() => onRemoveCondition(index)}
							className="cart-notifications-delete-condition"
						>
							<img src={delIcon} alt="Delete" />
						</button>
					</div>
				</div>
			))}
			<button
				type="button"
				onClick={onAddCondition}
				className="add-more-field"
			>
				Add Display Condition
			</button>
		</div>
	);
};

export default DisplayControl;

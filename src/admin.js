// admin.js
// Importing styles and necessary packages from WordPress.

import './admin.scss';

import api from '@wordpress/api';

import {
	Button,
	Icon,
	Panel,
	PanelBody,
	Placeholder,
	Spinner,
} from '@wordpress/components';

import { dispatch } from '@wordpress/data';

import { Fragment, render, useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

// Importing custom components for the settings page.
import LayoutRadioControl from './components/LayoutRadioControl';
import PositionRadioControl from './components/PositionRadioControl';
import TimeSliderControl from './components/TimeSliderControl';
import DisplayControl from './components/DisplayControl';
import Notices from './components/Notices';

// The main App component where the state and logic of the plugin's admin page is managed.
const App = () => {
	const [state, setState] = useState({
		layout: 'layout1',
		position: 'top',
		time: 3,
		conditions: [],
		isAPILoaded: false,
	});

	// Fetch settings when the component mounts.
	useEffect(() => {
		api.loadPromise.then(() => {
			const settings = new api.models.Settings();

			if (!state.isAPILoaded) {
				settings.fetch().then((response) => {
					setState({
						...state,
						layout:
							response['cart_notifications_plugin_layout'] ||
							layout,
						position:
							response['cart_notifications_plugin_position'] ||
							position,
						time:
							response['cart_notifications_plugin_slider'] ||
							time,
						conditions:
							response['cart_notifications_plugin_display'] ||
							conditions,
						isAPILoaded: true,
					});
				});
			}
		});
	}, []); // Empty dependency array ensures this effect runs only once.

	const initialOptions = [
		{ label: 'All pages', value: 'all_pages' },
		{ label: 'Shop Archive', value: 'shop_archive' },
		{ label: 'Shop Archive Categories', value: 'shop_archive_categories' },
		{ label: 'Shop Archive Tags', value: 'shop_archive_tags' },
		{
			label: 'Shop Archive Product Attributes',
			value: 'shop_archive_product_attributes',
		},
		{ label: 'Single Products', value: 'single_products' },
	];

	// Handler functions for setting changes.
	const onLayoutChange = (layout) => {
		setState({ ...state, layout });
	};

	const onPositionChange = (position) => {
		setState({ ...state, position });
	};

	const onSliderChange = (time) => {
		setState({ ...state, time });
	};

	const onConditionChange = (index, newCondition) => {
		if (newCondition !== '') {
			const newConditions = state.conditions.map((condition, i) => {
				return i === index ? newCondition : condition;
			});
			setState({ ...state, conditions: newConditions });
		}
	};

	const addCondition = () => {
		setState((prevState) => ({
			...prevState,
			conditions: [...prevState.conditions, ''],
		}));
	};

	const removeCondition = (index) => {
		const newConditions = state.conditions.filter((_, i) => i !== index);
		setState({ ...state, conditions: newConditions });
	};

	// Handler functions for saving setting.
	const savingData = () => {
		const settings = new api.models.Settings({
			['cart_notifications_plugin_layout']: state.layout,
			['cart_notifications_plugin_position']: state.position,
			['cart_notifications_plugin_slider']: state.time,
			['cart_notifications_plugin_display']: state.conditions,
		});
		settings.save();
		dispatch('core/notices').createNotice(
			'success',
			__('Settings Saved', 'wholesome-plugin'),
			{
				type: 'snackbar',
				isDismissible: true,
			}
		);
	};

	const { layout, position, time, isAPILoaded, conditions } = state;

	// Rendering the settings page layout.
	if (!isAPILoaded) {
		return (
			<Placeholder>
				<Spinner />
			</Placeholder>
		);
	}
	return (
		<Fragment>
			<div className="cart-notifications__header">
				<div className="cart-notifications__container">
					<div className="cart-notifications__title">
						<h1>
							{__(
								'Cart Notifications Settings',
								'cart-notifications'
							)}{' '}
							<Icon icon="admin-plugins" />
						</h1>
					</div>
				</div>
			</div>
			<div className="cart-notifications__main">
				<Panel>
					<PanelBody
						title={__(
							'Make adjustments to cart notification settings',
							'cart-notifications'
						)}
						icon="admin-plugins"
					>
						<LayoutRadioControl
							selected={layout}
							onLayoutChange={onLayoutChange}
						/>

						<PositionRadioControl
							selected={position}
							onPositionChange={onPositionChange}
						/>

						<TimeSliderControl
							sliderValue={time}
							onSliderChange={onSliderChange}
						/>

						<DisplayControl
							conditions={conditions}
							initialOptions={initialOptions}
							onConditionChange={onConditionChange}
							onAddCondition={addCondition}
							onRemoveCondition={removeCondition}
						/>
					</PanelBody>

					<PanelBody>
						<Button isPrimary isLarge onClick={savingData}>
							{__('Save Settings', 'cart-notifications')}
						</Button>
					</PanelBody>
				</Panel>
			</div>
			<div className="cart-notifications__notices">
				<Notices />
			</div>
		</Fragment>
	);
};

// Rendering the App component once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
	const htmlOutput = document.getElementById('cart-notifications-settings');

	if (htmlOutput) {
		render(<App />, htmlOutput);
	}
});

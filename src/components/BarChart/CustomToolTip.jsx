import PropTypes from 'prop-types';

/**
 * @description Render a custom ToolTip for the BarChart component
 * @param {boolean} props.active - the tooltip is active or not
 * @param {Array} props.payload - the payload of data to display in the tooltip
 * @returns {JSX.Element|null} Custom tooltip component or null if not active.
 */
function CustomToolTip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip" style={{ backgroundColor: '#E60000', padding: '10px', color: 'white' }}>
				<p style={{ margin: 0 }}>{`${payload[0].value} kg`}</p>
				<p style={{ margin: 0 }}>{`${payload[1].value} kCal`}</p>
			</div>
		);
	}
	return null
}

CustomToolTip.propTypes = {
	/**
     * @type {boolean}
	 * Whether or not the tooltip is active
	 */
	active: PropTypes.bool,
	/**
     * @type {Array.<{value: number}>}
	 * The payload of the tooltip
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default CustomToolTip;
import PropTypes from 'prop-types';

/**
 * @description Render a custom legend for the BarChartActivity
 * @param {Array} props.payload - Data passed from the BarChart to be displayed in the legend
 * @returns {JSX.Element} custom legend component
 */
function CustomLegend (props) {
	const { payload } = props;
	return (
		<ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'flex-end', }}>
			{payload.map((entry, index) => (
				<li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginRight:'15px', }}>
					{/* Pastille colorée */}
					<div
						style={{
							width: 10,
							height: 10,
							backgroundColor: entry.color,
							borderRadius: '50%',
							marginRight: 8,
						}}
					/>
					{/* Texte gris */}
					<span style={{ color: '#74798C', fontWeight: "500" }}>{entry.value}</span>
				</li>
			))}
		</ul>
	);
};

CustomLegend.propTypes = {
	/**
	 * Array of objects representing the legend items, each containing color and value properties.
	 * @type {Array.<{color: string, value: string}>}
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomLegend;
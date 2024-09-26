import "./style.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * @description
 * @component
 * @param {Array.<{value: number, kind: number}>} props.data - user performance data
 *  -'value'(number): performance value
 * - 'kind'(number): identifier the type of performance which will be transformed into label
 * @returns {JSX.Element} Render RadarChart component
 */
function RadarChartPerformance({ data }) {
  const kindMapping = {
    1: "Intensite",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  const formatData = data.map((item) => {
    return { ...item, kind: kindMapping[item.kind] };
  });

  return (
    <div className="container-radarchart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={formatData}>
          <PolarGrid
            gridType="polygon"
            polarRadius={[10, 20, 40, 60]}
            stroke="#fff"
            radialLines={false}
          />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 10 }}
            tickSize={3}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarChartPerformance.propTypes = {
  /**
   * @type {Array.<{value: number, kind: number}>}
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RadarChartPerformance;

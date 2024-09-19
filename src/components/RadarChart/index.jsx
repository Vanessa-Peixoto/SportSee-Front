import "./style.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
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
  const formatData = data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: "Cardio" };
      case 2:
        return { ...data, kind: "Energie" };
      case 3:
        return { ...data, kind: "Endurance" };
      case 4:
        return { ...data, kind: "Force" };
      case 5:
        return { ...data, kind: "Vitesse" };
      case 6:
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });

  return (
    <div className="container-radarchart">
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={80}
        width={262}
        height={262}
        data={formatData}
      >
        <PolarGrid
          gridType="polygon"
          polarRadius={[10, 20, 40, 60, 80]}
          stroke="#fff"
          radialLines={false}
        />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          tick={{ fontSize: 10 }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
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

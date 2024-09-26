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

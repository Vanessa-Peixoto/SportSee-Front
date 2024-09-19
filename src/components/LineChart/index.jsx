import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./style.scss";
import CustomToolTip from "./CustomToolTip.jsx";
import PropTypes from "prop-types";

/**
 * @description Render a LineChart using Recharts
 * @component
 * @param {Array<Object>} props.data - Array of session to be displayed in the chart
 *    - `day` {string|number}
 *    - `sessionLength` {number}
 * @returns {JSX.Element} LineChart component
 */
function LineChartSession({ data }) {
  const formatDayData = (value) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[value - 1] || value;
  };

  return (
    <>
      <div className="linechart-container">
        <div className="line-legend">
          <h2 className="line-barchart-title">Durée moyenne des sessions</h2>
        </div>

        <LineChart
          width={262}
          height={262}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={true}
            stroke="#FF0000"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
            tickFormatter={formatDayData}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip
            content={CustomToolTip}
            wrapperStyle={{
              backgroundColor: "white",
              padding: "0px 15px",
              outline: "none",
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            strokeWidth={2}
            dot={false}
            stroke="rgba(255, 255, 255, 0.7)"
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </div>
    </>
  );
}

LineChartSession.propTypes = {
  /**
   * Data to be displayed in the chart
   * @type {Array.<{day: number, sessionLength: number}>}
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChartSession;

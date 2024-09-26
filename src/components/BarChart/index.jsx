import {
  XAxis,
  Tooltip,
  BarChart,
  CartesianGrid,
  YAxis,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import CustomToolTip from "./CustomToolTip.jsx";
import CustomLegend from "./CustomLegend.jsx";
import "./style.scss";

/**
 * @description Render a BarChart using Recharts
 * @component
 * @param { Array } - Array of activity to be displayed in the chart
 * @returns { JSX.Element } BarChart component
 */
function BarChartActivity({ data }) {
  return (
    <>
      <h3 className="barchartactivity-title">Activité quotidienne</h3>
      <ResponsiveContainer height="0%" minHeight="250px">
        <BarChart data={data} barSize={7} barGap={8}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={<CustomToolTip />}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
          <Legend content={<CustomLegend />} height={80} verticalAlign="top" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

BarChartActivity.propTypes = {
  /**
   * Data to be displayed in the chart
   * @type {Array.<{day: string, kilogram: number, calories: number}>}
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChartActivity;

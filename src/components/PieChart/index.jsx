import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./style.scss";
import PropTypes from "prop-types";

/**
 * @description Render PieChart representing the user score
 * @component
 * @param {number} props.score - user score
 * @returns {JSX.Element} Render PieChart element
 */
function PieChartGoal({ score }) {
  const scoreData = [
    { name: "Score", value: score },
    { name: "Reste", value: 1 - score },
  ];

  return (
    <div className="container-piechart">
      <h2 className="title-piechart">Score</h2>

      <ResponsiveContainer width="100%" height={260}> 
      <PieChart>
        <Pie
          data={[{ value: 1 }]}
          dataKey="value"
          outerRadius={70}
          fill="#FFFFFF"
        />
        <Pie
          data={scoreData}
          dataKey="value"
          innerRadius={70}
          outerRadius={82}
          startAngle={90}
          endAngle={450}
        >
          {scoreData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              cornerRadius={10}
              fill={index === 0 ? "#FF0000" : "#FFFFFF"}
            />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      <div className="container-score">
        <div className="score">
          {score * 100}%<br />
        </div>
        de votre <br /> objectif
      </div>
    </div>
  );
}

PieChartGoal.propTypes = {
  /**
   * @type {number}
   */
  score: PropTypes.number.isRequired,
};

export default PieChartGoal;

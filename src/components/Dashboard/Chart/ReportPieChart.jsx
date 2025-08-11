
import PropTypes from "prop-types";
import { Cell,  Legend,  Pie, PieChart, Tooltip } from "recharts";

const ReportPieChart = ({ yesCount, noCount }) => {

  const data = [
    { name: "Yes", value: yesCount },
    { name: "No", value: noCount },
  ];
  const COLORS = ["#4CAF50", "#F44336"];
  return (
    <div>
     
        <PieChart width={400} height={300}>
        <Pie
          dataKey="value"  
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
           {data.map((entry, index) => (
             <Cell key={index} fill={COLORS[index % COLORS.length]}/>
           ))}
        </Pie>
        <Tooltip/>
      </PieChart>
      
    </div>
  );
};

ReportPieChart.propTypes = {
    yesCount: PropTypes.number,
    noCount:  PropTypes.number,
}

export default ReportPieChart;

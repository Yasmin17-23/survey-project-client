import PropTypes from "prop-types";
import { Chart } from "react-google-charts";

const SurveyBarChart = ({ yesCount, noCount }) => {

    const chartData = [
        ["Vote", "Count", { role: "style" }],
       ["Yes", yesCount, "color: #4CAF50"],
       ["No", noCount, "color: #dc3545"]
  ];
  return (
    <div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="300px"
        data={chartData}
        options={{
            title: 'Survey Votes',
            legend: { position: "none" },
            chartArea: { width: "60%"},
            hAxis: { minValue: 0 },
        }}
      />
    </div>
  );
};

SurveyBarChart.propTypes = {
    yesCount: PropTypes.number,
    noCount:  PropTypes.number,
}
export default SurveyBarChart;

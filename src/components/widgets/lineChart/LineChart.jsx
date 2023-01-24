import Chart from "react-apexcharts";
import { lineData } from "../../../data/chartData";
import { ToggleButton } from "../../toggleButton/ToggleButton";
const LineChart = () => {
  return (
    <div className="card line-chart-widget p-1">
      <div className="flex-row items-center content-between ">
        <h2 className="fw-400 text-sm">Total revenue</h2>
        <ToggleButton labels={["Month", "Week"]} toggled={true} />
      </div>
      <Chart
        height={"360px"}
        options={lineData.options}
        series={lineData.series}
        type="line"
      />
    </div>
  );
};

export { LineChart };

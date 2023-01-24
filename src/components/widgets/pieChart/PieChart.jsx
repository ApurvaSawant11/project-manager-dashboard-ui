import Chart from "react-apexcharts";
import { pieData } from "../../../data/chartData";
import { ToggleButton } from "../../toggleButton/ToggleButton";
const PieChart = () => {
  return (
    <div className="card pie-chart-widget p-1">
      <div className="flex-row items-center content-between">
        <h2 className="fw-400 text-sm">Budget</h2>
        <ToggleButton labels={["Profitability", "Status"]} toggled={true} />
      </div>
      <div className="">
        <Chart
          height={"395px"}
          options={pieData.options}
          series={pieData.series}
          type="donut"
        />
      </div>
    </div>
  );
};

export { PieChart };

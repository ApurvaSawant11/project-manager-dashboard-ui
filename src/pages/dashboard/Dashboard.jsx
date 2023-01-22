import {
  BudgetFilterBar,
  LineChart,
  NumberStatus,
  PieChart,
  ProjectBudget,
  TeamMood,
} from "../../components";
import { employees, numberStatusData } from "../../data/data";

const Dashboard = () => {
  return (
    <>
      <div className="flex-container">
        <div className="grid-container">
          {numberStatusData.map((item) => (
            <NumberStatus key={item.id} item={item} />
          ))}

          <LineChart />
          <PieChart />
        </div>
        <TeamMood team={employees} />
      </div>

      <BudgetFilterBar />
      <ProjectBudget />
    </>
  );
};

export { Dashboard };

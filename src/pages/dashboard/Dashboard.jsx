import {
  BudgetFilterBar,
  LineChart,
  NumberStatus,
  PieChart,
  ProjectBudget,
  TeamMood,
} from "../../components";
import { employees, numberStatusData, projectBudgets } from "../../data/data";

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
      <div className="budget-container flex-row mt-1p5">
        {projectBudgets.map((project) => (
          <ProjectBudget key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export { Dashboard };

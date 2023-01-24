import { WarningIcon, CheckCircleIcon } from "../../../assets";

const ProjectBudget = ({ project }) => {
  const {
    projectName,
    companyName,
    projectImg,
    totalBudget,
    profitability,
    overBudgetHours,
    actualHours,
    soldHours,
    progressBar,
    progressColor,
    projectStatus,
  } = project;
  return (
    <div className="card budget-widget">
      <div className="flex-row content-between items-center">
        <div className="flex-column">
          <span className="text-xl fw-500">{projectName}</span>
          <span className="text-gray text-xs">{companyName}</span>
        </div>
        <img className="user-img" src={projectImg} alt={companyName} />
      </div>

      <div className="relative">
        <div className="flex-column gap-0p5 text-xxs w-100 py-1">
          <p className="flex-row">
            <span className="text-gray fw-200 w-40">Total Budget</span>
            {totalBudget}
          </p>
          <p className="flex-row">
            <span className="text-gray fw-200 w-40">Profitability (100%)</span>
            <span className={`${overBudgetHours && "text-red fw-600 text-sm"}`}>
              {profitability}
            </span>
          </p>
        </div>
        {projectStatus === "danger" && (
          <WarningIcon size={20} className="status-icon text-red" />
        )}
        {projectStatus === "completed" && (
          <CheckCircleIcon size={20} className="status-icon text-secondary" />
        )}
      </div>

      <div
        className={`progress-bar bg-light-${
          progressColor === "green" ? "secondary" : progressColor
        }`}
      >
        <div
          className={`completed w-${progressBar} bg-${
            progressColor === "green" ? "secondary" : progressColor
          }`}
        ></div>
      </div>

      <div className="pt-0p5 flex-row content-between items-center text-xxs fw-300">
        <span>Actual hours: {actualHours}</span>
        {overBudgetHours ? (
          <span className="text-red fw-600">
            {overBudgetHours} hours over Budget!
          </span>
        ) : (
          <span>{soldHours} sold hours</span>
        )}
      </div>
    </div>
  );
};

export { ProjectBudget };

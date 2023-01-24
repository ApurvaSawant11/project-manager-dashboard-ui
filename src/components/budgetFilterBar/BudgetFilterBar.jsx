import { CalendarIcon, DownloadIcon, FilterIcon, PlusIcon } from "../../assets";
const BudgetFilterBar = () => {
  return (
    <div className="flex-row items-start mt-2">
      <p className="pr-1 fw-600 budget-status">Budget status</p>

      <button className="flex-row content-between items-center gap-0p5  btn secondary-btn">
        <PlusIcon />
        Add New Project
      </button>
      <button className="flex-row content-between items-center gap-0p5  btn teal-outline-btn">
        <DownloadIcon /> Download Report
      </button>
      <button className="flex-row content-between items-center gap-0p5  btn teal-outline-btn">
        <CalendarIcon /> dd/mm/yyyy - dd/mm/yyy
      </button>
      <button className="flex-row content-between items-center gap-0p5  btn teal-outline-btn">
        <FilterIcon /> Filter
      </button>
    </div>
  );
};

export { BudgetFilterBar };

import {
  CheckCircleIcon,
  DashboardIcon,
  LoopIcon,
  UsersIcon,
  WarningIcon,
} from "../assets";

import alvaro from "../assets/alvaro.jpg";
import andrea from "../assets/andrea.jpg";
import jose from "../assets/jose.jpg";
import juan from "../assets/juan.jpg";
import maria from "../assets/maria.jpg";
import projectImage from "../assets/projectImage.jpg";

export const numberStatusData = [
  {
    id: 101,
    icon: <DashboardIcon size={28} />,
    num: 5,
    title: "Total Projects",
  },
  {
    id: 102,
    icon: <CheckCircleIcon size={28} />,
    num: 1,
    title: "Completed",
  },
  {
    id: 103,
    icon: <LoopIcon size={28} />,
    num: 3,
    title: "Ongoing",
  },
  {
    id: 104,
    icon: <WarningIcon size={28} />,
    num: 1,
    title: "Delayed",
  },
  {
    id: 105,
    icon: <UsersIcon size={28} />,
    num: 5,
    title: "Employees",
  },
];

export const employees = [
  {
    id: "e01",
    name: "Andrea",
    designation: "UX Junior",
    profileImg: andrea,
    mood: 2,
  },
  {
    id: "e02",
    name: "Alvaro",
    designation: "Back end developer",
    profileImg: alvaro,
    mood: 5,
  },
  {
    id: "e03",
    name: "Juan",
    designation: "UX Senior",
    profileImg: juan,
    mood: 4,
  },
  {
    id: "e04",
    name: "Jose",
    designation: "Marketing",
    profileImg: jose,
    mood: 1,
  },
  {
    id: "e05",
    name: "Maria",
    designation: "UX Junior",
    profileImg: maria,
    mood: 3,
  },
];

export const projectBudgets = [
  {
    id: "b01",
    projectName: "Insurance App",
    companyName: "Verti",
    projectImg: projectImage,
    totalBudget: "70,000 €",
    profitability: "-2,500 €",
    overBudgetHours: "100",
    actualHours: "1,100",
    soldHours: "1200",
    progressBar: 100,
    progressColor: "red",
    projectStatus: "danger",
  },
  {
    id: "b02",
    projectName: "Neo",
    companyName: "Bankia",
    projectImg: projectImage,
    totalBudget: "70,000 €",
    profitability: "4,000 €",
    overBudgetHours: "",
    actualHours: "1,100",
    soldHours: "1000",
    progressBar: 50,
    progressColor: "yellow",
    projectStatus: "ongoing",
  },
  {
    id: "b03",
    projectName: "VR Website",
    companyName: "Barca",
    projectImg: projectImage,
    totalBudget: "70,000 €",
    profitability: "4,000 €",
    overBudgetHours: "",
    actualHours: "1,100",
    soldHours: "1000",
    progressBar: 50,
    progressColor: "green",
    projectStatus: "ongoing",
  },
  {
    id: "b04",
    projectName: "VR Website",
    companyName: "Barca",
    projectImg: projectImage,
    totalBudget: "70,000 €",
    profitability: "4,000 €",
    overBudgetHours: "",
    actualHours: "1,100",
    soldHours: "1000",
    progressBar: 100,
    progressColor: "green",
    projectStatus: "completed",
  },
];

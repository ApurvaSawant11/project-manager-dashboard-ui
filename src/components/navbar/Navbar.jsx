import mario from "../../assets/mario.jpg";
import "./navbar.css";
import { ArrowDownIcon, BellIcon } from "../../assets";

const Navbar = () => {
  const navbarOptions = [
    "Dashboard",
    "Projects",
    "Team",
    "Clients",
    "Time",
    "Reports",
  ];
  return (
    <header>
      <h1 className="m-0 logo fw-500">
        <span className="text-teal">H</span>OURS
      </h1>
      <section>
        <ul className="navbar-options">
          {navbarOptions.map((option, index) => (
            <li
              key={index}
              className={`px-1 cursor-pointer ${
                index === 0 ? "option-decoration" : "option"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex-row-center">
        <div className="bell-icon cursor-pointer mr-2">
          <BellIcon size={20} />
          <div className="badge"></div>
        </div>
        <img src={mario} alt="user image" className="user-img" />
        <div className="px-0p5 fw-300">Mario</div>
        <ArrowDownIcon size={14} className="cursor-pointer" />
      </section>
    </header>
  );
};

export { Navbar };

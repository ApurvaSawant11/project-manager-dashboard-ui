import React, { useState } from "react";
import "./toggleButton.css";

const ToggleButton = ({ labels, toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  return (
    <div className="flex-row-center pr-1">
      <span className={`text-xs mr-1 ${!isToggled ? "" : "text-gray"}`}>
        {labels[0]}
      </span>
      <label className="toggle-label">
        <input
          className="toggle-input"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={() => setIsToggled(!isToggled)}
        />
        <span className="toggle-track" />
      </label>
      <span className={`text-xs ml-1 ${isToggled ? "" : "text-gray"}`}>
        {labels[1]}
      </span>
    </div>
  );
};

export { ToggleButton };

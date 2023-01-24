import React from "react";
import "./teamMood.css";

const TeamMood = ({ team }) => {
  const emojisForMoods = {
    1: "angry",
    2: "sad",
    3: "neutral",
    4: "smile",
    5: "happy",
  };
  return (
    <div className="card mood-widget">
      <p className="fw-500">Team mood</p>
      <div>
        {team.map(({ id, name, designation, profileImg, mood }) => (
          <div className="team-member-details" key={id}>
            <div className="team-member">
              <img className="user-img" src={profileImg} alt={name} />
              <div className="flex-column pl-0p5">
                <span>{name}</span>
                <small className="designation text-gray">{designation}</small>
              </div>
            </div>
            <label>
              <input
                type="range"
                min={1}
                max={5}
                className={`mood-emoji ${emojisForMoods[mood]}`}
                value={mood}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TeamMood };

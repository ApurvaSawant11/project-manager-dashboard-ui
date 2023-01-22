import React from "react";
import angry from "../../../assets/angry.png";
import happy from "../../../assets/happy.png";
import neutral from "../../../assets/neutral.png";
import sad from "../../../assets/sad.png";
import smile from "../../../assets/smile.png";

const TeamMood = ({ team }) => {
  const emojisForMoods = {
    1: angry,
    2: sad,
    3: neutral,
    4: smile,
    5: happy,
  };
  return (
    <div className="card mood-widget p-1">
      <p className="fw-500">Team mood</p>
      <div>
        {team.map(({ id, name, designation, profileImg, mood }) => (
          <div className="team-member-details py-1">
            <div className="team-member">
              <img className="user-img" src={profileImg} alt={name} />
              <div className="flex-column pl-0p5">
                <span>{name}</span>
                <small className="text-gray">{designation}</small>
              </div>
            </div>
            <div className="mood-scale">
              <img
                className="mood-emoji"
                src={emojisForMoods[mood]}
                alt={mood}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TeamMood };

import { useState } from "react";
import skills from "../../data/skills.json";

function Skills() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div id="skills" className="skills">
      <div className="skills__title fs-3 mb-5">Skills:</div>
      <div
        className="skills__items"
        style={{
          height: showMore ? "230px" : "100%",
          overflow: "hidden",
        }}
      >
        {skills.map((item) => (
          <div className="skills__items__progress" key={item.id}>
            <div>{item.name}</div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: `${item.percentage}%` }}
              >
                {item.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="skills__btn">
        <button onClick={() => setShowMore(!showMore)}>
          {showMore === true ? "show more" : "show less"}
        </button>
      </div>
    </div>
  );
}

export default Skills;

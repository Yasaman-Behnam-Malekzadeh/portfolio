import { useState } from "react";
import curveSvg from "../../svg/bottom experiences section.png";

function Skills() {
  const skills = [
    {
      id: 1,
      name: "React",
      percentage: 95,
    },
    {
      id: 2,
      name: "Vue.js",
      percentage: 85,
    },
    {
      id: 3,
      name: "TypeScript",
      percentage: 80,
    },
    {
      id: 4,
      name: "Bootstrap",
      percentage: 95,
    },
    {
      id: 5,
      name: "sass",
      percentage: 95,
    },
    {
      id: 6,
      name: "Styled-component",
      percentage: 90,
    },
    {
      id: 7,
      name: "Axios",
      percentage: 90,
    },
    {
      id: 8,
      name: "Github",
      percentage: 80,
    },
    {
      id: 9,
      name: "jQuery",
      percentage: 90,
    },
    {
      id: 10,
      name: "JavaScript",
      percentage: 90,
    },
    {
      id: 11,
      name: "css",
      percentage: 100,
    },
    {
      id: 12,
      name: "html",
      percentage: 100,
    },
    {
      id: 13,
      name: "Graph-Ql",
      percentage: 60,
    },
  ];
  const [showMore, setShowMore] = useState(true);

  return (
    <div id="skills" className="skills">
      <div className="skills__svg">
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
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

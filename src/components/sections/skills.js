import { useState } from "react";
import skills from "../../data/skills.json";
import { useTranslation } from "react-i18next";
// import Portfolio from "./portfolio";

function Skills() {
  const [showMore, setShowMore] = useState(true);
  const { t } = useTranslation("skills");

  return (
    <div id="skills" className="skills">
      <div className="skills__title fs-3 mb-5">{t("skills.title")}:</div>
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

      {/* <Portfolio /> */}
    </div>
  );
}

export default Skills;

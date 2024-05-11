import { useTranslation } from "react-i18next";
import skills from "../../../data/skills.json";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import project from "../../../data/project.json";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio__skills">
        {skills.map((item) => (
          <button key={item.id} className="btn btn-sm">
            {item.name}
          </button>
        ))}
      </div>
      <div className="portfolio__cards">
        {project.map((item) => (
          <div key={item.id} className="card portfolio__cards__item">
            <img
              class="card-img"
              src={item.imgAddress}
              alt="portfolio-overview"
            />
            <div className="card-body card-details">
              <h5 class="card-title">{t(item.name)}</h5>
              <div className="card-text card-details__describe mb-3">
                {t(item.description)}
              </div>
              <div className="card-details__technologies">
                {item.technologies.map((item) => (
                  <div className="card-text"> {item} / </div>
                ))}
              </div>

              <a
                href={item.websiteAddress}
                rel="noreferrer"
                className="btn btn-sm"
              >
                <BoxArrowUpRight />
              </a>
              <a
                href={item.githubAddress}
                target="_blank"
                rel="noreferrer"
                className="ms-2 btn btn-sm"
              >
                <Github />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

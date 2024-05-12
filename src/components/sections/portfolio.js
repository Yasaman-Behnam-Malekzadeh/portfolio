import { useTranslation } from "react-i18next";
import { Github } from "react-bootstrap-icons";
import project from "../../data/project.json";

function Portfolio() {
  const { t } = useTranslation("portfolio");
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio__title fs-3 mt-5">{t("projects.title")}:</div>
      <div className="portfolio__cards">
        {project.map((item) => (
          <a
            key={item.id}
            className="card portfolio__cards__item"
            href={item.websiteAddress}
          >
            <img
              className="card-img"
              src={item.imgAddress}
              alt={`${t(item.name)}-overview`}
            />
            <div className="card-body card-details">
              <h5 className="card-title">{t(item.name)}</h5>
              <div className="card-text card-details__describe mb-3">
                {t(item.description)}
              </div>
              <div className="card-details__technologies">
                {item.technologies.map((item) => (
                  <div className="card-text"> {item} / </div>
                ))}
              </div>

              <a
                href={item.githubAddress}
                target="_blank"
                rel="noreferrer"
                className="ms-2 btn btn-sm"
              >
                <Github /> Github
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

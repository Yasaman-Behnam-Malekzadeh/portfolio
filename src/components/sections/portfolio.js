import { useTranslation } from "react-i18next";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import project from "../../data/project.json";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio__title fs-3 mt-5">{t("projects.title")}:</div>
      <div className="portfolio__cards">
        {project.map((item) => (
          <div key={item.id} className="card portfolio__cards__item">
            <img
              class="card-img"
              src={item.imgAddress}
              alt={`${item.name}-overview`}
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
                target={item.websiteAddress === "#" ? "_blank" : "_self"}
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

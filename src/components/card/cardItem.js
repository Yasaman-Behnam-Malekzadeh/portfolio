import Tippy from "@tippyjs/react";
import { useState } from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { useTranslation, Trans } from "react-i18next";

function CardItem({
  name,
  position,
  start_date,
  end_date,
  description,
  linkedin_address,
  website_address,
  logo_address,
  skills,
}) {
  const { t } = useTranslation();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className=" card-item card m-5">
      <div className="row m-2">
        <div className="card-item__body card-body ">
          <img
            className="rounded-circle"
            src={t(logo_address)}
            alt={`${t(name)}-logo`}
            height={"50px"}
            width={"50px"}
          />
          <div className="card-title m-0 fs-3">
            {t(name)} - {t(position)}
          </div>
          <div className="card-text">
            {t(start_date)} - {t(end_date)}
          </div>
          <Trans>
            <div className="card-text card-item__body__description mb-2">
              {isReadMore ? t(description).slice(0, 130) : t(description)}
              {t(description).length > 50 && (
                <span onClick={toggleReadMore} className="more">
                  {isReadMore
                    ? t("public.readMoreText")
                    : t("public.showLessText")}
                </span>
              )}
            </div>
          </Trans>
          <div className="card-item__body__skills-btn">
            {t(skills) !== "" && (
              <div>
                <strong>Skills:</strong> {t(skills)}
              </div>
            )}

            <div className="buttons">
              <Tippy content="Website address">
                <a
                  href={t(website_address)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm"
                >
                  <BoxArrowUpRight />
                </a>
              </Tippy>
              <Tippy content="Linkdin address">
                <a
                  href={t(linkedin_address)}
                  target="_blank"
                  rel="noreferrer"
                  className="ms-2 btn btn-sm"
                >
                  <Linkedin />
                </a>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

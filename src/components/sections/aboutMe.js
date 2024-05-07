import curveSvg from "../../svg/Mediamodifier-Design(dark).png";
import { useTranslation, Trans } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation("about me");

  return (
    <div id="about-me" className="about-me">
      <div className="about-me__left"></div>
      <img
        className="about-me__img"
        src="https://i.ibb.co/7tcFY4x/file.png"
        alt="about-me"
      />

      <div className="about-me__right m-4">
        <strong className="fs-3">{t("aboutMe.title")}</strong>
        <Trans>{t("aboutMe.description")}</Trans>
      </div>
      <div className="about-me__bottom">
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default AboutMe;

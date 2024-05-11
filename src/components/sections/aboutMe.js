import SvgBottom from "../../files/aboutMe/svg-bottom.png";
import { useTranslation, Trans } from "react-i18next";
import YasamanPortrait from "../../files/aboutMe/yasaman-portrait-2.png";

function AboutMe() {
  const { t } = useTranslation("about me");

  return (
    <div id="about-me" className="about-me">
      <div className="about-me__left"></div>
      <img
        className="about-me__img"
        src={YasamanPortrait}
        alt={t("aboutMe.title")}
      />

      <div className="about-me__right m-4">
        <strong className="fs-3">{t("aboutMe.title")}</strong>
        <Trans>{t("aboutMe.description")}</Trans>
      </div>
      <div className="about-me__bottom">
        <img src={SvgBottom} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default AboutMe;

import SvgBottom from "../../files/home/svg-bottom.png";
import { useTranslation, Trans } from "react-i18next";
import Resume from "../../files/home/Front end developer- Yasaman Behnam Malekzadeh.pdf";
import FlowerBackground from "../../files/home/flower-background.png";
import YasamanPortrait from "../../files/home/yasaman-portrait-1.png";

function Home() {
  const { t } = useTranslation("home");

  return (
    <div id="home" className="home-section">
      <div className="home-section__left">
        <div className="fs-1 mb-3 animate__animated animate__fadeInUp">
          <Trans>{t("home.firstDescription")}</Trans>
        </div>
        <h2 className="animate__animated animate__fadeInUp">
          {t("home.position")}
        </h2>
        <div className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="fs-4">{t("home.location")}</div>
          <Trans>{t("home.secondDescription")}</Trans>
        </div>
        <a
          href={Resume}
          download
          target="_blank"
          rel="noreferrer"
          className="home-section__left__btn btn-lg animate__animated animate__fadeInUp animate__delay-2s"
        >
          {t("home.downloadResume")}
        </a>
      </div>
      <div className="home-section__right">
        <div className="home-section__right__background">
          <img
            className="animate__animated animate__fadeInLeft"
            src={FlowerBackground}
            alt="home-flower"
          />
        </div>
        <img
          className="logo-pic animate__animated animate__fadeInUp"
          src={YasamanPortrait}
          alt="first-page"
        />
      </div>
      <div className="home-section__svg">
        <img src={SvgBottom} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default Home;

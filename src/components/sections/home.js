import curveSvg from "../../svg/k7dazo80g18lvr72nxf.png";
import { useTranslation, Trans } from "react-i18next";

function Home() {
  const { t } = useTranslation("home");
  return (
    <div id="#" className="home-section">
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
          href="#contact"
          className="home-section__left__btn btn-lg animate__animated animate__fadeInUp animate__delay-2s"
        >
          {t("home.btnName")}
        </a>
      </div>
      <div className="home-section__right">
        <div className="home-section__right__background">
          <img
            className="animate__animated animate__fadeInLeft"
            src="https://elementorpress.com/templatekit-pro/layout48/wp-content/uploads/2022/07/services-design-element.png"
            alt="home-flower"
          />
        </div>
        <img
          className="logo-pic animate__animated animate__fadeInUp"
          src="https://i.ibb.co/6YqFy13/file-1.png"
          alt="first-page"
        />
      </div>
      <div className="home-section__svg">
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default Home;

import SvgBottom from "../../files/home/svg-bottom.png";
import { useTranslation, Trans } from "react-i18next";
import Resume from "../../files/home/Yasaman-BM--Front-end.pdf";
import FlowerBackground from "../../files/home/flower-background.png";
import YasamanPortrait from "../../files/home/yasaman-portrait-1.png";
import figmaIcon from "../../files/home/figma-icon.png";
import { Meta } from "react-bootstrap-icons";
import Tippy from "@tippyjs/react";
import { FileEarmarkPerson } from "react-bootstrap-icons";

function Home() {
  const { t } = useTranslation("home");

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div id="home" className="home-section">
      <div className="home-section__left">
        // eslint-disable-next-line react/react-in-jsx-scope
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
        <Tippy content={t("home.downloadResumeTooltip")}>
          <a
            href={Resume}
            download
            target="_blank"
            rel="noreferrer"
            className="home-section__left__btn btn-lg animate__animated animate__fadeInUp animate__delay-2s"
          >
            <FileEarmarkPerson size={"20px"} />
          </a>
        </Tippy>
        <Tippy content={t("home.metaTooltip")}>
          <a
            className="m-3 home-section__left__btn btn-lg animate__animated animate__fadeInUp animate__delay-2s"
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/697CY3FTQTKT"
            target="_blank"
            rel="noreferrer"
          >
            <Meta size={"20px"} />
          </a>
        </Tippy>
        <Tippy content={t("home.figmaTooltip")}>
          <a
            className="home-section__left__btn btn-lg animate__animated animate__fadeInUp animate__delay-2s"
            href="https://www.figma.com/design/Xeqf0XmZT12rMknRPAbSto/Untitled?node-id=32-15&t=P85t2hBwl526iWcg-0"
            target="_blank"
            rel="noreferrer"
          >
            <img height={"23px"} src={figmaIcon} alt="figma-icon"></img>
          </a>
        </Tippy>
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

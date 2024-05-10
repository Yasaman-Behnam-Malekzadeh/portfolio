import { Phone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

import waveCopyright from "../../svg/copyright.png";

function ContactMe() {
  const { t } = useTranslation("contact me");
  return (
    <div id="contact" className="contact-me">
      <din className="contact-me__info ">
        <div className="contact-me__info__title mb-5">
          <strong className="fs-1 mb-2">{t("contactMe.mainTitle")}</strong>
        </div>
        <div className="mb-3">
          <Phone className="me-2" />
          <strong>{t("contactMe.phone")}</strong>
        </div>
        <div className="mb-3">
          <Envelope className="me-2" />
          <strong>{t("contactMe.email")}</strong>
        </div>
        <div className="mb-3">
          <House className="me-2" />
          <strong>{t("contactMe.location")}</strong>
        </div>
        <div className="contact-me__info__btn mt-4">
          <div className="mb-3 fs-5">{t("contactMe.socialTitle")}</div>
          <a
            href="https://www.linkedin.com/in/yasaman-behnam-malekzadeh/"
            target="_blank"
            rel="noreferrer"
            className="btn me-3 rounded-circle fs-5"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Yasaman-Behnam-Malekzadeh?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn me-3 rounded-circle fs-5"
          >
            <Github />
          </a>
        </div>
      </din>
      <form className="contact-me__form">
        <input
          type="text"
          placeholder={t("contactMe.emailNameTitle")}
          className="p-3 form-control mb-3"
        />
        <input
          type="email"
          placeholder={t("contactMe.emailTitle")}
          className="p-3 form-control mb-3"
        />
        <input
          type="text"
          placeholder={t("contactMe.emailSubject")}
          className="p-3 form-control mb-3"
        />
        <textarea
          placeholder={t("contactMe.emailMessage")}
          className="p-3 form-control mb-3"
        ></textarea>
        <button type="submit" className="btn px-5">
          {t("contactMe.btnSubmit")}
        </button>
      </form>
      <img className="contact-me__svg" src={waveCopyright} alt="wave" />
    </div>
  );
}

export default ContactMe;

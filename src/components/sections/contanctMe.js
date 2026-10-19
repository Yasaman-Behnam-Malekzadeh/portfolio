import React from "react";
import { Phone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import Tippy from "@tippyjs/react";

function ContactMe() {
  const { t } = useTranslation("translation");

  return (
    <div id="contact" className="contact-me">
      <div className="contact-me__info ">
        <div className="contact-me__info__title mb-5">
          <strong className="fs-1 mb-2">{t("contactMe.mainTitle")}</strong>
        </div>
        <div className="mb-3">
          <Phone className="me-2" />
          <strong>{t("contactMe.phone")}</strong>
        </div>
        <div className="mb-3">
          <Envelope className="me-2" />
          <strong>
            <a href={`mailto:${t("contactMe.email")}?body=Hello%20Yasaman%20,`}>
              {t("contactMe.email")}
            </a>
          </strong>
        </div>
        <div className="mb-3">
          <House className="me-2" />
          <strong>{t("contactMe.location")}</strong>
        </div>
        <div className="contact-me__info__btn mt-4 d-flex align-items-center flex-column">
          <div className="mb-3 fs-5">{t("contactMe.socialTitle")}</div>
          <div className="">
            <Tippy content="LinkedIn address">
              <a
                href="https://www.linkedin.com/in/yasaman-behnam-malekzadeh/"
                target="_blank"
                rel="noreferrer"
                className="btn me-3 rounded-circle fs-5"
              >
                <Linkedin />
              </a>
            </Tippy>
            <Tippy content="Github address">
              <a
                href="https://github.com/Yasaman-Behnam-Malekzadeh?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="btn me-3 rounded-circle fs-5"
              >
                <Github />
              </a>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

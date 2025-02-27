import React from "react";
import { Phone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { TwitterX } from "react-bootstrap-icons";
// import { useState } from "react";
import Tippy from "@tippyjs/react";

function ContactMe() {
  const { t } = useTranslation("translation");
  // const [formData, setFormData] = useState({
  //   senderEmail: "",
  //   emailAddress: "",
  //   emailTopic: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setFormData({ [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       console.log("Email sent successfully");
  //     } else {
  //       console.error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

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
            <Tippy content="Twitter address">
              <a
                href="https://x.com/FrontEnd90"
                target="_blank"
                rel="noreferrer"
                className="btn me-3 rounded-circle fs-5"
              >
                <TwitterX />
              </a>
            </Tippy>
            <Tippy content="Xing address">
              <a
                href="https://www.xing.com/profile/Yasaman_BM/web_profiles?sc_o=navigation_profile_icon&sc_o_PropActionOrigin=navigation_neffi_50&expandNeffi=true"
                target="_blank"
                rel="noreferrer"
                className="btn rounded-circle fs-5"
              >
                <img
                  src="https://www.elisabeth-mantl.de/wp-content/uploads/2019/05/xing-icon-logo-black-and-white.png"
                  alt="Xing"
                  height={"22px"}
                />
              </a>
            </Tippy>
          </div>
        </div>
      </div>
      {/* <form
        // onSubmit={handleSubmit}
        className="contact-me__form"
        data-static-form-name="contact"
      >
        <input
          type="text"
          name="senderEmail"
          // value={formData.senderName}
          // onChange={handleChange}
          placeholder={t("emailNameTitle")}
          className="p-3 form-control mb-3"
        />
        <input
          type="email"
          name="emailAddress"
          // value={formData.emailAddress}
          // onChange={handleChange}
          placeholder={t("emailTitle")}
          className="p-3 form-control mb-3"
        />
        <input
          type="text"
          name="emailTopic"
          // value={formData.emailTopic}
          // onChange={handleChange}
          placeholder={t("emailSubject")}
          className="p-3 form-control mb-3"
        />
        <textarea
          // value={formData.message}
          name="message"
          // onChange={handleChange}
          placeholder={t("emailMessage")}
          className="p-3 form-control mb-3"
        ></textarea>
        <button type="submit" className="btn px-5">
          {t("btnSubmit")}
        </button>
      </form> */}
    </div>
  );
}

export default ContactMe;

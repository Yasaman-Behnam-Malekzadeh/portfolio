import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const navbarItems = [
    {
      id: 1,
      name: t("home.title"),
      address: "#",
    },
    {
      id: 2,
      name: t("aboutMe.title"),
      address: "#about-me",
    },
    {
      id: 3,
      name: t("skills.title"),
      address: "#skills",
    },
    {
      id: 4,
      name: t("Portfolio"),
      address: "/Portfolio",
    },
    {
      id: 5,
      name: t("contactMe.title"),
      address: "#contact",
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="navbar" className="header-section fixed-top">
      <div className="header-section__wrapped container-md ">
        <div className="fs-3 header-section__wrapped__logo">Yasaman.BM</div>
        <div className=" header-section__wrapped__menu">
          {navbarItems.map((item) => {
            return (
              <a className="nav-link p-3" href={item.address} key={item.id}>
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="header-section__wrapped__language">
          <img
            onClick={() => changeLanguage("en")}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
            alt={t("English")}
            height={"30px"}
            width={"40px"}
            className="me-3"
          />
          <img
            onClick={() => changeLanguage("de")}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
            alt={t("Deutsch")}
            height={"30px"}
            width={"40px"}
            className=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import { List } from "react-bootstrap-icons";
import navbarItems from "../../data/navbarItems.json";
import { Link as ScrollLink } from "react-scroll";
import FlagOfGermany from "../../files/header/Flag_of_Germany.png";
import FlagOfTheUK from "../../files/header/Flag_of_the_United_Kingdom.png";

function Header() {
  const { t, i18n } = useTranslation("header");
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {isMobile ? (
        <Navbar className="navbar header-section fixed-top">
          <div className="header-section__wrapped container-md">
            <Nav.Link
              href="https://yasaman.dev/"
              className="fs-3 header-section__wrapped__logo"
            >
              {"< Yasaman.dev />"}
            </Nav.Link>
            <Offcanvas
              show={showMenu}
              onHide={() => setShowMenu(false)}
              placement="end"
            >
              <Offcanvas.Body>
                <Scrollspy
                  items={[
                    "home",
                    "about-me",
                    "experience-education",
                    "courses",
                    "contact",
                  ]}
                  currentClassName="active"
                  className="menu-list d-flex flex-column"
                >
                  {navbarItems.map((item) => {
                    return (
                      <ScrollLink
                        className="menu-list__item nav-link mb-3"
                        to={`${item.address}`}
                        smooth={true}
                        duration={100}
                        key={item.id}
                        onClick={() => setShowMenu(false)}
                      >
                        {t(item.name)}
                      </ScrollLink>
                    );
                  })}
                </Scrollspy>
                <Nav className="menu-language">
                  <Nav.Link onClick={() => changeLanguage("en")}>
                    <img
                      src={FlagOfTheUK}
                      alt={t("English")}
                      height="30px"
                      width="40px"
                      className="me-1"
                    />
                  </Nav.Link>
                  <Nav.Link onClick={() => changeLanguage("de")}>
                    <img
                      src={FlagOfGermany}
                      alt={t("Deutsch")}
                      height="30px"
                      width="40px"
                    />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
            <button
              type="button"
              className="btn"
              onClick={() => setShowMenu(true)}
            >
              <List size={"35px"} />
            </button>
          </div>
        </Navbar>
      ) : (
        <Navbar id="navbar" className="navbar header-section fixed-top">
          <div className="header-section__wrapped container-md">
            <Nav.Link
              href="#home"
              className="fs-3 header-section__wrapped__logo"
            >
              {"< Yasaman.dev />"}
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="header-section__wrapped__menu"
            >
              <Scrollspy
                items={[
                  "home",
                  "about-me",
                  "experience-education",
                  "courses",
                  "contact",
                ]}
                currentClassName="active"
                className="menu-list d-flex"
              >
                {navbarItems.map((item) => {
                  return (
                    <ScrollLink
                      className="menu-list__item nav-link me-3 p-2"
                      to={`${item.address}`}
                      smooth={true}
                      duration={100}
                      key={item.id}
                    >
                      {t(item.name)}
                    </ScrollLink>
                  );
                })}
              </Scrollspy>

              <Nav className="menu-language">
                <Nav.Link onClick={() => changeLanguage("en")}>
                  <img
                    src={FlagOfTheUK}
                    alt={t("English")}
                    height="30px"
                    width="40px"
                    className="me-1"
                  />
                </Nav.Link>
                <Nav.Link onClick={() => changeLanguage("de")}>
                  <img
                    src={FlagOfGermany}
                    alt={t("Deutsch")}
                    height="30px"
                    width="40px"
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </>
  );
}

export default Header;

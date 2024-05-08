import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import { List } from "react-bootstrap-icons";

function Header() {
  const { t, i18n } = useTranslation();
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

  const navbarItems = [
    {
      id: 1,
      name: t("home.title"),
      address: "home",
    },
    {
      id: 2,
      name: t("aboutMe.title"),
      address: "about-me",
    },
    {
      id: 3,
      name: t("experienceEducation"),
      address: "experience-education",
    },
    {
      id: 4,
      name: t("skills.title"),
      address: "skills",
    },
    {
      id: 6,
      name: t("contactMe.title"),
      address: "contact",
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {isMobile ? (
        <Navbar className="navbar header-section fixed-top">
          <div className="header-section__wrapped container-md">
            <Navbar.Brand className="fs-3 header-section__wrapped__logo">
              {"< Yasaman.BM />"}
            </Navbar.Brand>
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
                    "skills",
                    "contact",
                  ]}
                  currentClassName="active"
                  className="menu-list d-flex flex-column"
                >
                  {navbarItems.map((item) => {
                    return (
                      <Nav.Link
                        className="menu-list__item nav-link mb-3"
                        href={`#${item.address}`}
                        key={item.id}
                        onClick={() => setShowMenu(false)}
                      >
                        {item.name}
                      </Nav.Link>
                    );
                  })}
                </Scrollspy>
                <Nav className="menu-language">
                  <Nav.Link onClick={() => changeLanguage("en")}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                      alt={t("English")}
                      height="30px"
                      width="40px"
                      className="me-1"
                    />
                  </Nav.Link>
                  <Nav.Link onClick={() => changeLanguage("de")}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
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
            <Navbar.Brand className="fs-3 header-section__wrapped__logo">
              {"< Yasaman.BM />"}
            </Navbar.Brand>
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
                  "skills",
                  "contact",
                ]}
                currentClassName="active"
                className="menu-list d-flex"
              >
                {navbarItems.map((item) => {
                  return (
                    <Nav.Link
                      className="menu-list__item nav-link me-3 p-2"
                      href={`#${item.address}`}
                      key={item.id}
                    >
                      {item.name}
                    </Nav.Link>
                  );
                })}
              </Scrollspy>

              <Nav className="menu-language">
                <Nav.Link onClick={() => changeLanguage("en")}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                    alt={t("English")}
                    height="30px"
                    width="40px"
                    className="me-1"
                  />
                </Nav.Link>
                <Nav.Link onClick={() => changeLanguage("de")}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
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

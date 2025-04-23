import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import { List } from "react-bootstrap-icons";
import navbarItems from "../../data/navbarItems.json";
import { Link as ScrollLink } from "react-scroll";
import FlagOfGermany from "../../files/header/Flag_of_Germany.png";
import FlagOfTheUK from "../../files/header/Flag_of_the_United_Kingdom.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation("header");
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMyBlog = location.pathname === "/myblog";

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

  const renderNavItems = () =>
    navbarItems.map((item) => {
      const isMyBlogItem = item.address === "myblog";
      const isActive =
        (location.hash === `#${item.address}` && !isHomePage) ||
        (location.pathname === "/myblog" && isMyBlogItem);

      if (isMyBlogItem) {
        return (
          <Link
            key={item.id}
            to="/myblog"
            className={`menu-list__item nav-link me-3 p-2 ${
              isMyBlog ? "active" : ""
            }`}
          >
            {t(item.name)}
          </Link>
        );
      }

      if (isHomePage) {
        return (
          <ScrollLink
            key={item.id}
            to={item.address}
            className="menu-list__item nav-link me-3 p-2"
            smooth={true}
            duration={100}
            spy={true}
            offset={-80}
          >
            {t(item.name)}
          </ScrollLink>
        );
      }

      return (
        <Link
          key={item.id}
          to={`/#${item.address}`}
          className={`menu-list__item nav-link me-3 p-2 ${
            isActive ? "active" : ""
          }`}
        >
          {t(item.name)}
        </Link>
      );
    });

  const scrollSpyItems = navbarItems
    .filter((item) => item.address !== "myblog")
    .map((item) => item.address);

  return (
    <>
      {isMobile ? (
        <Navbar className="navbar header-section fixed-top">
          <div className="header-section__wrapped container-md">
            <Nav.Link href="/" className="fs-3 header-section__wrapped__logo">
              {"< Yasaman.dev />"}
            </Nav.Link>
            <Offcanvas
              show={showMenu}
              onHide={() => setShowMenu(false)}
              placement="end"
            >
              <Offcanvas.Body>
                <Scrollspy
                  items={scrollSpyItems}
                  currentClassName="active"
                  className="menu-list d-flex flex-column"
                >
                  {renderNavItems()}
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
            <Nav.Link href="/" className="fs-3 header-section__wrapped__logo">
              {"< Yasaman.dev />"}
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="header-section__wrapped__menu"
            >
              <Scrollspy
                items={scrollSpyItems}
                currentClassName="active"
                className="menu-list d-flex"
              >
                {renderNavItems()}
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

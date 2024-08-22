import React, { useState, useEffect, useRef } from "react";
import { Offcanvas, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./navigation.module.css";
import logo from "../../img/logo3.png"

const Navigation: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShowOffcanvas(true);
    document.body.classList.add(styles.bodyFixed);
  };

  const handleClose = () => {
    setShowOffcanvas(false);
    document.body.classList.remove(styles.bodyFixed);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
        <a href="/" className={styles.logo}>
            <img className={styles.logo} src={logo} alt="LOGO" />
          </a>
          <Button
            className={styles.navbarToggler}
            type="button"
            onClick={handleShow}
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </Button>

          <Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            placement="end"
            className={styles.offcanvas}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasDarkNavbarLabel">
                PC-SHOP
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={styles.nav}>
                <Nav.Link href="/" className={styles.navLink} active>
                  Home
                </Nav.Link>
                <Nav.Link href="login" className={styles.navLink}>
                  Login
                </Nav.Link>
                <Nav.Link href="#" className={styles.navLink}>
                  Account
                </Nav.Link>
                <Nav.Link href="#" className={styles.navLink}>
                  Sale %
                </Nav.Link>
                <Nav.Link href="#" className={styles.navLink}>
                  Contact
                </Nav.Link>
                <div
                  className={styles.dropdownContainer}
                  ref={dropdownRef}
                >
                  <button
                    className={styles.dropdownButton}
                    aria-expanded={showDropdown}
                    onClick={handleDropdownToggle}
                  >
                    Computers
                  </button>
                  <div
                    className={`${styles.dropdownMenu} ${
                      showDropdown ? styles.showDropdown : ""
                    }`}
                  >
                    <a href="#" className={styles.dropdownItem}>
                      Desktop-PC
                    </a>
                    <a href="#" className={styles.dropdownItem}>
                      Notebooks
                    </a>
                    <a href="#" className={styles.dropdownItem}>
                      Tablets
                    </a>
                  </div>
                </div>
              </Nav>
              <form
                className={`${styles.searchForm} ${
                  showDropdown ? styles.formPushedDown : ""
                }`}
                role="search"
              >
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                  Search
                </button>
              </form>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

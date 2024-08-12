import React, { useState, useEffect } from "react";
import { Offcanvas, Button, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./navigation.module.css";

const Navigation: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleShow = () => {
    setShowOffcanvas(true);
    document.body.classList.add(styles.bodyFixed); // Добавляем класс при открытии
  };
  
  const handleClose = () => {
    setShowOffcanvas(false);
    document.body.classList.remove(styles.bodyFixed); // Удаляем класс при закрытии
  };
  
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a className={styles.navbarBrand} href="/">
            PC-SHOP
          </a>
          <Button
            className={styles.navbarToggler}
            type="button"
            onClick={handleShow}
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className={styles.navbarTogglerIcon}></span>
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
                <Nav.Link href="#" className={styles.navLink}>
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
                <NavDropdown
                  title="Computers"
                  id="navbarScrollingDropdown"
                  show={dropdownOpen}
                  onClick={handleDropdownToggle}
                  className={styles.navDropdown}
                >
                  <NavDropdown.Item href="#" className={styles.navDropdownItem}>
                    Desktop-PC
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className={styles.navDropdownItem}>
                    Notebooks
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#" className={styles.navDropdownItem}>
                    Tablets
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <form
                className={`${styles.searchForm} ${
                  dropdownOpen ? styles.formPushedDown : ""
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

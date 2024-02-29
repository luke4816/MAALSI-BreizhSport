import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.scss";

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <NavbarBS
            bg="dark"
            expand="lg"
            variant="dark"
            data-bs-theme="dark"
            sticky="top"
        >
            <Container>
                <NavbarBS.Brand as={Link} to="/">
                    Breizh Sport
                </NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" active={pathname === "/"}>
                            <span
                                className={pathname === "/" ? style.active : ""}
                            >
                                Home
                            </span>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            active={pathname === "/contact"}
                        >
                            <span
                                className={
                                    pathname === "/contact" ? style.active : ""
                                }
                            >
                                Contact
                            </span>
                        </Nav.Link>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    );
}

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Link from "next/link";

export default function NavbarComponent(props) {
    return (
        <>
            <Navbar bg="light" variant="light" expand="sm">
                <Nav className="mr-auto">
                    <div className="bm-burger-button">
                    <button id="react-burger-menu-btn" className="bm-burger-bars" onClick={props.toggleSidebar}></button>
                        <span className="bm-burger-bars" style={{top:"0%"}}></span>
                        <span className="bm-burger-bars" style={{top:"40%"}}></span>
                        <span className="bm-burger-bars" style={{top:"80%"}}></span>
                    </div>
                    <Link href="/"><Nav.Link>Home</Nav.Link></Link>
                    <Link href="/"><Nav.Link>Features</Nav.Link></Link>
                    <Link href="/"><Nav.Link>Pricing</Nav.Link></Link>
                </Nav>
            </Navbar>
        </>
    )
}

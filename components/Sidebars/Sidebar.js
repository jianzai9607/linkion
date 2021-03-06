import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styles from '../../styles/components/Sidebars/Sidebar.module.css'

export default function Sidebar() {

  const [sidebarExpand, sidebarToggle] = useState(false);
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref, isExpand) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && isExpand) {
          sidebarToggle(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, sidebarExpand]);
  }

  useOutsideAlerter(wrapperRef, sidebarExpand);

  return (
    <Navbar bg="light" variant="light" expanded={sidebarExpand} collapseOnSelect onToggle={isExpand => sidebarToggle(isExpand)} expand="md" className={[...(sidebarExpand ? [styles.expand] : []), styles.flexColumn, styles.sidebar]} ref={wrapperRef}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.sidebarToggleBtn} />
      <Navbar.Collapse id="responsive-navbar-nav" className={styles.flexColumn}>
        <Nav className="" className={styles.flexColumn}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Portal
          </Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portal/invoice_builder">Invoice Builder</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

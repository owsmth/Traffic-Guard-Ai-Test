import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      fixed="top"
      className="py-2"
    >
      <Container fluid="lg">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          🏠 FrED IoT Home System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#iot-devices" className="px-3">
              IoT Devices
            </Nav.Link>
            <Nav.Link href="#network-status" className="px-3">
              Network Status
            </Nav.Link>
            <NavDropdown
              title="More Options"
              id="collapsible-nav-dropdown"
              className="custom-dropdown px-3"
              align="end"
            >
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#activity-logs">
                Activity Logs
              </NavDropdown.Item>
              <NavDropdown.Item href="#alerts">Alerts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#notifications" className="px-3">
              Notifications
            </Nav.Link>
            <Nav.Link eventKey={2} href="#account" className="px-3">
              Exit ↪
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

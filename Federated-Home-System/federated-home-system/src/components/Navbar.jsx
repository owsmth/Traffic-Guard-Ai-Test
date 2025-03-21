import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "./layout.css";

function CollapsibleExample() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  // Sample notifications - replace with your actual notifications
  const notifications = [
    {
      id: 1,
      message: "Router Status Update",
      time: "5 minutes ago",
    },
    {
      id: 2,
      message: "Security Alert",
      time: "1 hour ago",
    },
  ];

  const handleExit = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container fluid="lg">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          🏠 FrED IoT Home System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#iot-devices"
              className="px-3"
              onClick={() => setExpanded(false)}
            >
              IoT Devices
            </Nav.Link>
            <Nav.Link
              href="#network-status"
              className="px-3"
              onClick={() => setExpanded(false)}
            >
              Network Status
            </Nav.Link>
            <NavDropdown
              title="More Options"
              id="collapsible-nav-dropdown"
              className="custom-dropdown px-3"
              align="end"
            >
              <NavDropdown.Item
                href="#settings"
                onClick={() => setExpanded(false)}
              >
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#activity-logs"
                onClick={() => setExpanded(false)}
              >
                Activity Logs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#alerts"
                onClick={() => setExpanded(false)}
              >
                Alerts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#support"
                onClick={() => setExpanded(false)}
              >
                Support
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <div className="notification-icon">
                  <span>🔔</span>
                  <span>Notifications</span>
                  {notifications.length > 0 && (
                    <span className="notification-badge" />
                  )}
                </div>
              }
              id="notifications-dropdown"
              className="px-3"
              align="end"
            >
              {notifications.map((notification) => (
                <NavDropdown.Item
                  key={notification.id}
                  onClick={() => setExpanded(false)}
                >
                  <div className="notification-message">
                    {notification.message}
                  </div>
                  <div className="notification-time">{notification.time}</div>
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#all-notifications"
                onClick={() => setExpanded(false)}
              >
                View All Notifications
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => {
                handleExit();
                setExpanded(false);
              }}
              className="px-3"
              style={{ cursor: "pointer" }}
            >
              Exit ↪
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

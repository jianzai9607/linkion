import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbars/Navbar.js";
import Footer from "../Footers/Footer.js";
import Sidebar from "../Sidebars/Sidebar.js";

const PortalLayout = (props) => {
  const [sidebarExpand, sidebarToggle] = useState(false);

  const toggleSidebar = () => {
    sidebarToggle(!sidebarExpand);
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Sidebar isOpen={sidebarExpand} sidebarToggle={sidebarToggle} />
      <div style={{ width: "100%" }}>
        <div style={{ minHeight: "100vh" }}>
          <Navbar toggleSidebar={toggleSidebar} />
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PortalLayout;

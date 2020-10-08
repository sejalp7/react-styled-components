import React from "react";

import styled from "styled-components";

import "./SideBar.css";

function SideBar() {
  const StyledMenu = styled.nav`
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 300px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 90px; /* Stay at the top */
        left: 0;
        background-color: #111; /* Black */
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 20px;

    a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        text-align: justify;
    }

    a:hover {
        color: #f1f1f1;
    }
  `;

  const Menu = () => {
    return (
      <StyledMenu>
        <a href="/">
          About us
        </a>
        <a href="/">
          Pricing
        </a>
        <a href="/">
          Contact
        </a>
      </StyledMenu>
    );
  };

  return (
    <div>
      <div className="main">  
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default SideBar;

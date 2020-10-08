import React from 'react'
import styled from 'styled-components'
import './NavBar.css';

function NavBar() {
    /**
     * A styled navigation bar.
     */
    const NavBar = styled.div`      
        background: orange;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 5px 16px rgba(0, 0, 0, 0.15);
        padding: 30px;
        color: #ffff;
        display: flex;
        font-size: 24px; 
        position: absolute;
        top: 0;
        right: 0;
        left:0;
        width: 100%;
        font-weight: bold;`;

    return (
           <div>
              <NavBar>Annotation UI</NavBar>     
            </div>
    )
}

export default NavBar

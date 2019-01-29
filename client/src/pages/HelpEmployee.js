import React from "react";
import NavTabsEmployee from "../components/NavTabsEmployee";
import '../style.css';

function HelpEmployee(props) {
  return (
    <div>
      <NavTabsEmployee />
      <div className='opacContainer'>
      <h1 >Help Page</h1>
      <p>
      Need assistance? Refer to the manual before reaching out to upper management.
      </p>
      </div>
    </div>
  );
}

export default HelpEmployee;

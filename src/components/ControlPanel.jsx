import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "gray", padding: -4 }}>
      <nav>
        <ul>
          {/* Add links */}
          <li style={{ color: "black" }}>Start</li>
          <li style={{ color: "black" }}>Pause</li>
          <li style={{ color: "black" }}>Restart</li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;

import React from "react";

const NavBar = () => {
  return (
    <div className="bg-transparent flex w-full p-4 justify-between items-center">
      <nav className="flex gap-8">
        <button className="bg-green-300 w-28 rounded-3xl justify-items-center">
          Start
        </button>
        <button className="bg-green-300 w-28 rounded-3xl justify-items-center">
          Pause
        </button>
        <button className="bg-green-300 w-28 rounded-3xl justify-items-center">
          Restart
        </button>
      </nav>
      <p>VIDA</p>
    </div>
  );
};
export default NavBar;

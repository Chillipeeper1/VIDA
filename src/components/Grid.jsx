import React from "react";
import "../components/Grid.css";
import { createWorld } from "../engine/world";

debugger;

const worldGrid = () => {
  /* 20x20 cell drawing*/
  const cells = createWorld();
  return (
    <div className="grid-container">
      {cells.flat().map((index) => (
        <div key={index} className="grid-cell bg-green-100 ">
          {/* Cell content*/}
          {index}
        </div>
      ))}
    </div>
  );
};
export default worldGrid;

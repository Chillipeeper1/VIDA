import React from "react";
import "../components/Grid.css";

const worldGrid = () => {
  /* 20x20 cell drawing*/
  const cells = Array.from({ length: 400 }, (_, i) => i);
  return (
    <div className="grid-container">
      {cells.map((index) => (
        <div key={index} className="grid-cell">
          {/* Cell content*/}
          {"ola"}
        </div>
      ))}
    </div>
  );
};
export default worldGrid;

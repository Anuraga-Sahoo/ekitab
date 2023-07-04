import React from "react";

const Grid = ({ rows, cols, elems }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: cols ? `repeat(auto-fit, min-max(10rem, 1fr))` : "",
      }}
    >
      <div style={{
        display: "flex"
      }}>{elems ? elems : ""}</div>
    </div>
  );
};

export default Grid;

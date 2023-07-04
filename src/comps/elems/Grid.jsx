import React, { Children, cloneElement } from "react";

const Grid = ({ minWidth, children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
      }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            textAlign: "center",
          },
        });
      })}
    </div>
  );
};

export default Grid;

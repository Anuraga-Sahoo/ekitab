import React from "react";
import Input from "./elems/Input";

const HeroInput = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Input type={"text"} placeholder={"Email"}></Input>
      <button
        style={{
          flexGrow: "1",
          margin: "0 4rem",
          minWidth: "0",
          background: "var(--indigo)",
          alignItems: "center",
          color: "var(--white)",
          height: "2.5rem",
        }}
      >
        Get started
      </button>
    </div>
  );
};

export default HeroInput;

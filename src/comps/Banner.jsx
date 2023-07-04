import React from "react";
import styles from "./styles/Banner.module.css";

const Banner = ({ background, children, color, style }) => {
  return (
    <div
      style={{
        background: background ? background : "var(--body-background)",
        color: color ? color : "var(--white)",
        ...style,
      }}
      className={styles.content}
    >
      {children}
    </div>
  );
};

export default Banner;

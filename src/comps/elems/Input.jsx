import React, { useRef, useState } from "react";
import styles from "./../styles/Input.module.css";

const Input = ({ type, placeholder }) => {
  const input = useRef(null);
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={styles.parent}>
      <input
        style={{
          boxShadow: isFocused || value ? "var(--border-focused)" : "",
          background: "var(--body-background)",
        }}
        ref={input}
        onBlur={() => {
          setIsFocused(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        className={styles.input}
        type={type}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <span
        style={{
          pointerEvents: "none",
          userSelect: "none",
          fontSize: isFocused || value ? "0.8rem" : "1rem",
          position: "absolute",
          fontWeight: isFocused || value ? "bold" : "",
          color: isFocused || value ? "var(--indigo)" : "",
          left: "5rem",
          transition: "0.3s",
          padding: "0 0.2rem",
          top: isFocused || value ? "-0.2rem" : "1rem",
          background: "var(--body-background)",
        }}
      >
        {placeholder}
      </span>
    </div>
  );
};

export default Input;

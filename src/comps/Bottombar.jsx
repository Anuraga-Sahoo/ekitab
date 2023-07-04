import React from "react";
import styles from "./styles/Bottombar.module.css";
import Icon from "./elems/Icon";
import { NavLink } from "react-router-dom";

const Bottombar = ({ activeIndex, menu, setActiveIndex }) => {
  const changeBottombarIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.bottom_bar}>
      {menu.map((item, index) => {
        return (
          <NavLink
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
            className={styles.cont}
            to={item.slug}
            key={index}
            onClick={() => {
              changeBottombarIndex(index);
            }}
          >
            <div className={styles.item_icon}>
              <Icon>{item.icon}</Icon>
            </div>
            {/* <span
                className={styles.item_lable}
                style={{ display: activeIndex == index ? "block" : "none" }}
              >
                {item.lable}
              </span> */}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Bottombar;

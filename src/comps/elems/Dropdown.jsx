import React from "react";
// import {signOut, auth} from 'firebase/auth'
import styles from "./../styles/Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <div>
        <li>
          <select
            name="theme"
            id="theme"
            onChange={(e) => {
              document.body.setAttribute("data-theme", e.target.value);
               //change theme
              }
            }
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="default">system default</option>
          </select>
        </li>
        <li>
          <select name="class" id="class">
            <option value="1">class 1</option>
            <option value="2">class 2</option>
            <option value="3">class 3</option>
            <option value="4">class 4</option>
            <option value="5">class 5</option>
            <option value="6">class 6</option>
            <option value="7">class 7</option>
            <option value="8">class 8</option>
            <option value="9">class 9</option>
            <option value="10">class 10</option>
            <option value="11">class 11</option>
            <option value="12">class 12</option>
          </select>
        </li>
        {/* <li>
          <input type="text" />
        </li> */}
        <li>
          <button onClick={() => {}}>logout</button>
        </li>
      </div>
    </div>
  );
};

export default Dropdown;

import React from "react";
import NavStyle from "./styles/Topbar.module.css";
import logo from "./../logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "./elems/Icon";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";
import Avatar from "./elems/Avatar";

const Topbar = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  return (
    <div className={NavStyle.Navbar} id="navbar">
      <div>
        <div
          onClick={() => {
            return navigate(-1);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Icon>arrow_back</Icon>
        </div>
        <div className={NavStyle.logo}>
          <img
            style={{
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
            }}
            src={logo}
            alt="logo"
          />
          <span>E-Kitab</span>
        </div>

        {user ? (
          <Avatar picUrl={user.photoURL}></Avatar>
        ) : (
          <NavLink to={"/login"}>
            <button className={NavStyle.btn}>Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Topbar;

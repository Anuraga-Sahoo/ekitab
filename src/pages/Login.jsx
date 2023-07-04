import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../recoil";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ googleSignIn }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname.split("/")[1] == "login") {
    navigate("/");
  }
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          googleSignIn();
        }}
      >
        login with google
      </button>
    </div>
  );
};

export default Login;

import React from "react";
import styles from "./../styles/Avatar.module.css";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil";

const Avatar = () => {
  const user = useRecoilValue(userState);
  return <img className={styles.Avatar} src={user.photoURL} />;
};

export default Avatar;

import { atom } from "recoil";

const userState = atom({
  key: "userAtom",
  default: {},
});

export { userState };

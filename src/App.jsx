import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Bottombar from "./comps/Bottombar";
import Topbar from "./comps/Topbar";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Study from "./pages/Study";
import Login from "./pages/Login";

import { userState } from "./recoil.js";
import { useRecoilState } from "recoil";

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVkLR-ex9Crrzz8sApbV6cmOkSE5VCVio",
  authDomain: "ekitabindia.firebaseapp.com",
  projectId: "ekitabindia",
  storageBucket: "ekitabindia.appspot.com",
  messagingSenderId: "136532694512",
  appId: "1:136532694512:web:df2bab4ac7d3ec56bbb935",
  measurementId: "G-EJY4B1STCB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = () => {
    try {
      const provider = new GoogleAuthProvider();
      setPersistence(auth, browserLocalPersistence);
      signInWithRedirect(auth, provider);
      getRedirectResult(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app" style={{ background: "var(--body-background)" }}>
      <Topbar></Topbar>
      <div className="container">
        <div>
          <Routes>
            <Route path="/" index element={<Home></Home>}></Route>
            <Route path="/account" element={<Account></Account>}></Route>
            <Route path="/test" element={<div>test</div>}></Route>
            <Route path="/study" element={<Study></Study>}></Route>
            <Route
              path="/login"
              element={<Login googleSignIn={signInWithGoogle}></Login>}
            ></Route>
            <Route path="/notice" element={<div>notifications</div>}></Route>
            <Route
              path="*"
              element={
                <div>
                  Whow!! you spelt it wrong. Try putting the fair things.
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
      {console.log(user)}
      {user && (
        <Bottombar
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          menu={[
            { lable: "Home", slug: "/", icon: "home", index: 0 },
            { lable: "Study", slug: "/study", icon: "local_library", index: 1 },
            { lable: "Test", slug: "/test", icon: "quiz", index: 2 },
            { lable: "Saved", slug: "/saved", icon: "bookmark", index: 3 },
            {
              lable: "Account",
              slug: "/account",
              icon: "settings",
              index: 4,
            },
          ]}
        ></Bottombar>
      )}
    </div>
  );
}

export default App;

import React from "react";

import Hero from "./../comps/Hero";
import HeroInput from "./../comps/HeroInput";
import Banner from "./../comps/Banner";
import ScrollSnapX from "./../comps/ScrollSnapX";
import Cards from "./../comps/elems/Cards";
import Grid from "./../comps/elems/Grid";
import { Link } from "react-router-dom";
import PhotoCard from "../comps/PhotoCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero
          style={{
            marginBottom: "1rem",
          }}
        ></Hero>
        <HeroInput></HeroInput>
        <Banner style={{ marginTop: "2rem" }}>
          <header>
            Let's unlock some <span className="fancy"> MAGIC</span>
          </header>
          <ScrollSnapX
            style={{
              background: "#222222",
            }}
          >
            <Link to={"/study/class/xii"}>
              <Cards>Class XII</Cards>
            </Link>
            <Link to={"/study/class/xi"}>
              <Cards>Class XI</Cards>
            </Link>
            <Link to={"/study/class/x"}>
              <Cards>Class X</Cards>
            </Link>
            <Link to={"/study/class/ix"}>
              <Cards>Class IX</Cards>
            </Link>
            <Link to={"/study/class/viii"}>
              <Cards>Class VIII</Cards>
            </Link>
            <Link to={"/study/class/vii"}>
              <Cards>Class VII</Cards>
            </Link>
            <Link to={"/study/class/vi"}>
              <Cards>Class VI</Cards>
            </Link>
            <Link to={"/study/class/v"}>
              <Cards>Class V</Cards>
            </Link>
            <Link to={"/study/class/iv"}>
              <Cards>Class IV</Cards>
            </Link>
            <Link to={"/study/class/iii"}>
              <Cards>Class III</Cards>
            </Link>
            <Link to={"/study/class/ii"}>
              <Cards>Class II</Cards>
            </Link>
            <Link to={"/study/class/i"}>
              <Cards>Class I</Cards>
            </Link>
          </ScrollSnapX>
        </Banner>
      </div>
      <Banner background={"var(--indigo)"}>
        <header>India's Most Loved Educational Platform</header>
        <Grid minWidth={"150px"}>
          <p style={{ fontWeight: "bold" }}>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Grid>
      </Banner>
      <Banner style={{ marginTop: "2rem" }}>
        <header>
          <span className="fancy">Wizardly</span> verse you will get
        </header>
        <ScrollSnapX
          style={{
            background: "#222222",
          }}
        >
          <Link to={"/study/class/xii"}>
            <Cards>Books</Cards>
          </Link>
          <Link to={"/study/class/xi"}>
            <Cards>Class XI</Cards>
          </Link>
          <Link to={"/study/class/x"}>
            <Cards>Class X</Cards>
          </Link>
          <Link to={"/study/class/ix"}>
            <Cards>Class IX</Cards>
          </Link>
          <Link to={"/study/class/viii"}>
            <Cards>Class VIII</Cards>
          </Link>
          <Link to={"/study/class/vii"}>
            <Cards>Class VII</Cards>
          </Link>
          <Link to={"/study/class/vi"}>
            <Cards>Class VI</Cards>
          </Link>
          <Link to={"/study/class/v"}>
            <Cards>Class V</Cards>
          </Link>
          <Link to={"/study/class/iv"}>
            <Cards>Class IV</Cards>
          </Link>
          <Link to={"/study/class/iii"}>
            <Cards>Class III</Cards>
          </Link>
          <Link to={"/study/class/ii"}>
            <Cards>Class II</Cards>
          </Link>
          <Link to={"/study/class/i"}>
            <Cards>Class I</Cards>
          </Link>
        </ScrollSnapX>
      </Banner>
      <Banner className="testimonials">
          <ScrollSnapX>
            <PhotoCard></PhotoCard>
          </ScrollSnapX>
      </Banner>
    </>
  );
};

export default Home;

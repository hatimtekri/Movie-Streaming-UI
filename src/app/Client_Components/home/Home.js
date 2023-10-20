"use client";

import DisplaySeries from "@/Business_Components/DisplaySeries/DisplaySeries";
import { HomeStyle } from "./Home.style";

const Home = () => {
  return (
    <>
      <HomeStyle>
        <div className="main-section">
          <div className="display-series">
            <DisplaySeries></DisplaySeries>
          </div>
          <div className="channels"></div>
          <div className="recent-watched"></div>
        </div>
        <div className="side-bar">
          <div className="top-movies"></div>
          <div className="favorites"></div>
        </div>
      </HomeStyle>
    </>
  );
};
export default Home;

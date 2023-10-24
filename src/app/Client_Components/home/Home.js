"use client";

import Channel from "@/Business_Components/Channel/Channel";
import DisplaySeries from "@/Business_Components/DisplaySeries/DisplaySeries";
import RecentWatchedPlayer from "@/Business_Components/RecentWatchedPlayer/RecentWatchedPlayer";
import { HomeStyle } from "./Home.style";

const Home = () => {
  return (
    <>
      <HomeStyle>
        <div className="main-section">
          <div className="display-series">
            <DisplaySeries></DisplaySeries>
          </div>
          <div className="channels">
            <Channel link={"/assets/disney.png"}></Channel>
            <Channel link={"/assets/marvel.png"}></Channel>
            <Channel link={"/assets/national-geographic.png"}></Channel>
            <Channel link={"/assets/star-wars.png"}></Channel>
            <Channel link={"/assets/disney.png"}></Channel>
            <Channel link={"/assets/marvel.png"}></Channel>
            <Channel link={"/assets/national-geographic.png"}></Channel>
            <Channel link={"/assets/star-wars.png"}></Channel>
            <Channel link={"/assets/star-wars.png"}></Channel>
            <Channel link={"/assets/disney.png"}></Channel>
            <Channel link={"/assets/marvel.png"}></Channel>
            <Channel link={"/assets/national-geographic.png"}></Channel>
            <Channel link={"/assets/star-wars.png"}></Channel>
          </div>
          <div className="recent-watched">
            <RecentWatchedPlayer
              link={"/assets/rwatch1.png"}
              state={"pause"}
              title="Moon Knight"
              year={"2022"}
            ></RecentWatchedPlayer>
            <RecentWatchedPlayer
              link={"/assets/rwatch2.png"}
              state={"playing"}
              title="Moon Knight"
              year={"2022"}
              currentTime={"1:05"}
              totalTime={"2:35:50"}
              loadedTime={"1:30:30"}
            ></RecentWatchedPlayer>
            <RecentWatchedPlayer
              link={"/assets/rwatch1.png"}
              state={"pause"}
              title="React JS"
              year={"2023"}
             
            ></RecentWatchedPlayer>
            <RecentWatchedPlayer
              link={"/assets/rwatch2.png"}
            ></RecentWatchedPlayer>
          </div>
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

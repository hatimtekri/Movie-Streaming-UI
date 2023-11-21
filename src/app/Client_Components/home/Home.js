"use client";

import Channel from "@/Business_Components/Channel/Channel";
import DisplaySeries from "@/Business_Components/DisplaySeries/DisplaySeries";
import RecentWatchedPlayer from "@/Business_Components/RecentWatchedPlayer/RecentWatchedPlayer";
import TopMovies from "@/Business_Components/TopMovies/TopMovies";
import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Title from "@/Components/Title/Title";
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
          <div className="top-movies">
            <Title level={6} className="movie-player-title">
              Top Movies
            </Title>
            <TopMovies
              imagePath="/assets/top-movie-1.png"
              tag="PG-13"
              title="The Shawshank Redemption (1994)"
              type="Drama"
              rating={9.2}
            ></TopMovies>
            <TopMovies
              imagePath="/assets/top-movie-2.png"
              tag="PG-13"
              title="The Godfather"
              type="Crime • Drama"
              rating={9.2}
            ></TopMovies>
            <TopMovies
              imagePath="/assets/top-movie-3.png"
              tag="PG-13"
              title="The Dark Knight (2008)"
              type="Action • Crime"
              rating={9.1}
            ></TopMovies>
            <Button className="outline-button">See All</Button>
          </div>
          <div className="favorites">
            <Title level={6} className="movie-player-title">
              Favorites Genres
            </Title>
            <div className="tags">
              <Tag className="favorites-tag" >Action</Tag>
              <Tag className="favorites-tag" >Fantasy</Tag>
              <Tag className="favorites-tag" >Comedy</Tag>
              <Tag className="favorites-tag" >Sci-Fi</Tag>
              <Tag className="favorites-tag" >Drama</Tag>
              <Tag className="favorites-tag" >Romance</Tag>
              <Tag className="favorites-tag" >Mystery</Tag>

              <Tag className="favorites-tag" >Action</Tag>
              <Tag className="favorites-tag" >Fantasy</Tag>
              <Tag className="favorites-tag" >Comedy</Tag>
              <Tag className="favorites-tag" >Sci-Fi</Tag>
             
              
            </div>
          </div>
        </div>
      </HomeStyle>
    </>
  );
};
export default Home;

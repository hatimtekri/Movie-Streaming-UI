"use client";

import BestMovies from "@/Business_Components/BestMovies/BestMovies";
import Channel from "@/Business_Components/Channel/Channel";
import DisplaySeries from "@/Business_Components/DisplaySeries/DisplaySeries";
import RecentWatchedPlayer from "@/Business_Components/RecentWatchedPlayer/RecentWatchedPlayer";
import TopMovies from "@/Business_Components/TopMovies/TopMovies";
import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Title from "@/Components/Title/Title";

import { TopRatedStyle } from "./TopRated.style";

const TopRated = () => {
  return (
    <TopRatedStyle>
      <div className="top-rated-section">
        <Title level={6} className="movie-player-title">
          Top Movies
        </Title>
        <div className="movies">
          <TopMovies
            imagePath="/assets/top-movie-1.png"
            tag="PG-13"
            title="The Shawshank Redemption (1994)"
            type="Drama"
            rating={9.2}
            className="top-rated-movie"
          ></TopMovies>
          <TopMovies
            imagePath="/assets/top-movie-2.png"
            tag="PG-13"
            title="The Godfather"
            type="Crime • Drama"
            rating={9.2}
            className="top-rated-movie"
          ></TopMovies>
          <TopMovies
            imagePath="/assets/top-movie-3.png"
            tag="PG-13"
            title="The Dark Knight (2008)"
            type="Action • Crime"
            rating={9.1}
            className="top-rated-movie"
          ></TopMovies>

          <TopMovies
            imagePath="/assets/top-movie-1.png"
            tag="PG-13"
            title="The Shawshank Redemption (1994)"
            type="Drama"
            rating={9.2}
            className="top-rated-movie"
          ></TopMovies>
          <TopMovies
            imagePath="/assets/top-movie-2.png"
            tag="PG-13"
            title="The Godfather"
            type="Crime • Drama"
            rating={9.2}
            className="top-rated-movie"
          ></TopMovies>
          <TopMovies
            imagePath="/assets/top-movie-3.png"
            tag="PG-13"
            title="The Dark Knight (2008)"
            type="Action • Crime"
            rating={9.1}
            className="top-rated-movie"
          ></TopMovies>

          <TopMovies
            imagePath="/assets/top-movie-1.png"
            tag="PG-13"
            title="The Shawshank Redemption (1994)"
            type="Drama"
            rating={9.2}
            className="top-rated-movie"
          ></TopMovies>
          <TopMovies
            imagePath="/assets/top-movie-2.png"
            tag="PG-13"
            title="The Godfather"
            type="Crime • Drama"
            rating={9.2}
            className="top-rated-movie"
          ></TopMovies>
          <TopMovies
            imagePath="/assets/top-movie-3.png"
            tag="PG-13"
            title="The Dark Knight (2008)"
            type="Action • Crime"
            rating={9.1}
            className="top-rated-movie"
          ></TopMovies>
        </div>
      </div>
      <div className="best-of-action">
      <Title level={6} className="movie-player-title">
      Best of Action
        </Title>
        <div className="row-1">
          <BestMovies
            imagePath="/assets/best-1.png"
            title="The Man from Toronto"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2.png"
            title="Extraction"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-3.png"
            title="Godzilla: King of the Monsters"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-4.png"
            title="Jumanji: The Next Level"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-1.png"
            title="The Man from Toronto"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2.png"
            title="Extraction"
            rating={4.6}
          ></BestMovies>

          {/*  <BestMovies
            imagePath="/assets/best-3.png"
            title="Godzilla: King of the Monsters"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-4.png"
            title="Jumanji: The Next Level"
            rating={4.6}
          ></BestMovies> */}
        </div>

        <div className="row-2">
          <BestMovies
            imagePath="/assets/best-2-1.png"
            title="The Man from Toronto"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2-2.png"
            title="Extraction"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2-3.png"
            title="Godzilla: King of the Monsters"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2-4.png"
            title="Jumanji: The Next Level"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2-1.png"
            title="The Man from Toronto"
            rating={4.6}
          ></BestMovies>

          <BestMovies
            imagePath="/assets/best-2-2.png"
            title="Extraction"
            rating={4.6}
          ></BestMovies>
        </div>
      </div>
    </TopRatedStyle>
  );
};
export default TopRated;

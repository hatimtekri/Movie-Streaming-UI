import Button from "@/Components/Button/Button";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React from "react";
import { DisplaySeriesStyle } from "./DisplaySeries.style";
import Tag from "@/Components/Tag/Tag";



function DisplaySeries() {
  return (
    <DisplaySeriesStyle>
      <Image
        src={"/assets/display-series.png"}
        className="image"
        width="1319"
        height="881"
      ></Image>

      <div className="action-part">
        <div className="tag">
          <Tag>Series</Tag>
        </div>
        <div className="title">
        <Title className="movie-player-title" >MS. Marvel</Title>
       <Text className="display-series-title-description-text" >1 Season • 6 Episodes • Superhero • Marvel</Text>
        </div>
        <div className="action-button">
          <Button className="dark-button watch-button">Watch Thriller</Button>
          <div className="add-watchlist">Add Watchlist</div>
        </div>
      </div>
    </DisplaySeriesStyle>
  );
}

export default DisplaySeries;

import Button from "@/Components/Button/Button";
import Image from "next/image";
import React from "react";
import { DisplaySeriesStyle } from "./DisplaySeries.style";

function DisplaySeries() {
  return (
    <DisplaySeriesStyle>
      <Image
        src={"/assets/display-series.png"}
        className="image"
        width="1319"
        height="881"
      ></Image>

<div className="action-part" >
    <div className="tag" ></div>
    <div className="title" > </div>
    <div className="action-button">
    <Button className="dark-button watch-button">Watch Thriller</Button>
    <div className="add-watchlist" >

    </div>
    </div>

</div>

    </DisplaySeriesStyle>
  );
}

export default DisplaySeries;

import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React from "react";

import { IoMdFilm } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BestMoviesStyle } from "./BestMovies.style";

const BestMovies = ({ imagePath, tag, title, type, rating, ...props }) => {
  return (
    <BestMoviesStyle {...props}>
      <div className="thumbnail-img">
        <Image
          src={imagePath}
          className="image"
          width="264"
          height="183"
        ></Image>
      </div>
      <div className="description">
        
        <Title className="movie-player-title" level={8}>
          {title}
        </Title>
       
        <div className="rating">
          <FaStar color="#FFCD1A" size={16} />
         <Title className="movie-player-title" level={8}>
            {rating}
          </Title>
          <Text className="display-series-title-description-text" >| Action • Movie</Text>
        </div>
      </div>
    </BestMoviesStyle>
  );
};

export default BestMovies;

import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React from "react";
import { TopMoviesStyle } from "./TopMovies.style";
import { IoMdFilm } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const TopMovies = ({ imagePath, tag, title, type, rating }) => {
  return (
    <TopMoviesStyle>
      <div className="thumbnail-img">
        <Image
          src={imagePath}
          className="image"
          width="112"
          height="137"
        ></Image>
      </div>
      <div className="description">
        <Tag className="top-movies-tag">{tag}</Tag>
        <Title className="movie-player-title" level={8}>
          {title}
        </Title>
        <Text className="movie-player-text">
          <div>
            <IoMdFilm />
          </div>
          {type}
        </Text>
        <div className="rating">
          <FaStar color="#FFCD1A" size={16} />
          <Title className="movie-player-title" level={8}>
            {rating}
          </Title>
        </div>
      </div>
    </TopMoviesStyle>
  );
};

export default TopMovies;

import IconWrapper from "@/Components/IconWrapper/IconWrapper";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React from "react";
import { RecentWatchedPlayerStyle } from "./RecentWatchedPlayer.style";
import { FaPlay } from "react-icons/fa";
import Text from "@/Components/Text/Text";
function RecentWatchedPlayer({ link, state, title, year }) {
  return (
    <RecentWatchedPlayerStyle>
      <Image src={link} className="image" width="110" height="50"></Image>

      {state === "playing" && (
        <>
          <div className="player-playing-info">
            <Title className="movie-player-title" strong={true} level={7}>
              {title}
            </Title>

            <Text size="extraSmall" className="movie-player-text">
              {year}
            </Text>

            <div className="action-button">
              <IconWrapper borderRadius={25}>
                <FaPlay size={15} color="white"></FaPlay>
              </IconWrapper>
            </div>
          </div>
        </>
      )}

      {state === "pause" && (
        <>
          <div className="player-pause-info">
            <div className="action-button">
              <IconWrapper borderRadius={25}>
                <FaPlay size={20} color="white"></FaPlay>
              </IconWrapper>
            </div>
            <div className="title">
              <Title className="movie-player-title" strong={true} level={6}>
                {title}
              </Title>
            </div>
            <div className="year">
              <Text className="movie-player-text">{year}</Text>
            </div>
          </div>
        </>
      )}
    </RecentWatchedPlayerStyle>
  );
}

export default RecentWatchedPlayer;

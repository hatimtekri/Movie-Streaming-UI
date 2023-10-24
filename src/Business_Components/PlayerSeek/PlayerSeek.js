import Button from "@/Components/Button/Button";
import Image from "next/image";
import React from "react";
import { PlayerSeekStyle } from "./PlayerSeek.style";

const PlayerSeek = ({ currentTime, totalTime, loadedTime }) => {
    function durationToSeconds(duration) {
        const parts = duration.split(":").map(Number);
        if (parts.length === 2) {
          // If there are only two parts (HH:MM), assume 0 seconds.
          const [hours, minutes] = parts;
          const totalSeconds = (hours * 3600) + (minutes * 60);
          return totalSeconds;
        } else if (parts.length === 3) {
          // If there are three parts (HH:MM:SS), calculate total seconds.
          const [hours, minutes, seconds] = parts;
          const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
          return totalSeconds;
        } else {
          // Handle invalid input.
          return NaN;
        }
      }


      const currentTimeValue = durationToSeconds(currentTime);
      const totalTimeValue = durationToSeconds(totalTime);
      const loadedTimeValue = durationToSeconds(loadedTime);

      const currentTimePercent = currentTimeValue/totalTimeValue * 100
      const loadedTimePercent = loadedTimeValue/totalTimeValue * 100


  return (
    <PlayerSeekStyle currentTimePercent={currentTimePercent} loadedTimePercent={loadedTimePercent} >
      <div className="current-timeline"></div>
       <div className="load-timeline"></div>
      <div className="total-timeline"></div>
    </PlayerSeekStyle>
  );
};

export default PlayerSeek;

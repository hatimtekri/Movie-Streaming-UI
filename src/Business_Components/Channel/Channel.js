import Button from "@/Components/Button/Button";
import Image from "next/image";
import React from "react";
import { ChannelStyle } from "./Channel.style";


function Channel({link}) {
  return (
    <ChannelStyle>
      <Image
        src={link}
        className="image"
        width="110"
        height="50"
      ></Image>



    </ChannelStyle>
  );
}

export default Channel;

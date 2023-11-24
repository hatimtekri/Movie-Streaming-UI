import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React from "react";

import { IoMdFilm } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import { SubscriptionPlanStyle } from "./SubscriptionPlan.style";
import { Divider } from "antd";
import Points from "./Points";

const SubscriptionPlan = ({
  amount,
  title,
  type,
  ...props
}) => {
  return (
    <SubscriptionPlanStyle type={type} {...props}>
      <div className="heading">
        <Text size="extraLarge">{title}</Text>
        <Title className="movie-player-title" level={5}>
          ${amount}<Text size="small">/month</Text>{" "}
        </Title>
      </div>
      <Divider></Divider>
      <div className="information">
        <Points pointName={"Streaming in high quality"}></Points>
        <Points pointName={"With the best audio quality"}></Points>
        <Points pointName={"Stream on multiple devices"}></Points>
        <Points pointName={"Ad-free viewing experience"}></Points>
        <Points pointName={"Download to watch later"}></Points>
      </div>
      <Button className="outline-button" >Get Started</Button>
    </SubscriptionPlanStyle>
  );
};

export default SubscriptionPlan;

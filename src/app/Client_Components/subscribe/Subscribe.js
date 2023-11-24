"use client";

import BestMovies from "@/Business_Components/BestMovies/BestMovies";
import Channel from "@/Business_Components/Channel/Channel";
import DisplaySeries from "@/Business_Components/DisplaySeries/DisplaySeries";
import RecentWatchedPlayer from "@/Business_Components/RecentWatchedPlayer/RecentWatchedPlayer";
import SubscriptionPlan from "@/Business_Components/SubscriptionPlan/SubscriptionPlan";
import TopMovies from "@/Business_Components/TopMovies/TopMovies";
import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import { SubscribeStyle } from "./Subscribe.style";

const Subscribe = () => {
  return (
    <SubscribeStyle>
      <div className="title">
        <Title level={7}>CineMax</Title>
      </div>
      <div className="main-section">
        <div className="title-container">
          <Tag>Access Premium</Tag>
          <Title level={4}>It’s easy to get started</Title>
          <Text className="text" size="medium">
            Choose the best plan to enjoy the best movies and series
          </Text>
        </div>
        <div className="plan-container">

           
            <SubscriptionPlan amount={0} title={"Free Trial"} type={"normal"} ></SubscriptionPlan>
            <SubscriptionPlan amount={4.99} title={"Monthly Subscription"}  type="special" ></SubscriptionPlan>
            <SubscriptionPlan amount={49.99} title={"Yearly Subscription"} type="normal" ></SubscriptionPlan>
        </div>
      </div>
    </SubscribeStyle>
  );
};
export default Subscribe;

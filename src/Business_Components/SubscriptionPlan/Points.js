import CheckIcon from "@/Common/Icons/Check";
import Button from "@/Components/Button/Button";
import Tag from "@/Components/Tag/Tag";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React from "react";

const Points = ({ pointName }) => {
  return (
    <div className="point-container">
        <div className="icon-wrapper" >
        <CheckIcon size={24} color="#00C566" ></CheckIcon>

        </div>
      <Text size="medium">{pointName}</Text>
    </div>
  );
};

export default Points;

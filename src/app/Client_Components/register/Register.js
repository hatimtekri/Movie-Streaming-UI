"use client";

import Button from "@/Components/Button/Button";
import Input from "@/Components/Input/Input";
import InputWithTitle from "@/Components/InputWithTitle/InputWithTitle";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React, { useEffect } from "react";
import { RegisterStyle } from "./Register.style";
const Register = () => {
  return (
    <>
      <RegisterStyle className="register-container">
        <div className="login-left-side">
          <div className="login-left-side-text-wrapper">
            <div className="login-left-side-text">
              <Title strong={true} level={5}>
                The biggest international and local film streaming
              </Title>
              <Text size="medium">
                Semper in cursus magna et eu varius nunc adipiscing. Elementum
                justo, laoreet id sem semper parturient.{" "}
              </Text>
            </div>
          </div>

          <div className="login-left-side-image">
            <div className="login-left-side-image-wrapper">
              <Image
                src={"/assets/MacBook_Pro_16.png"}
                width="1319"
                height="881"
              ></Image>
            </div>
          </div>
        </div>
        <div className="login-right-side">
          <div className="login-right-side-upper">
            <div>
              <Text size="medium">CineMax</Text>
            </div>
            <div>
              <div>
                <Text fontSize={32}>Register</Text>
              </div>
            </div>
          </div>
          <div className="login-right-side-down">
            <div className="login-right-side-down-input">
              <InputWithTitle
                key={"name"}
                title={"username"}
                placeholder={"Enter your name"}
              ></InputWithTitle>
              <InputWithTitle
                key={"emailaddress"}
                title={"Email Address"}
                placeholder={"Enter your email address"}
              ></InputWithTitle>
              <InputWithTitle
                key={"password"}
                title={"Password"}
                placeholder={"Enter your password"}
              ></InputWithTitle>
              <InputWithTitle
                key={"confirmpassword"}
                title={"Confirm Password"}
                placeholder={"Enter your password"}
              ></InputWithTitle>
            </div>
            <div className="register-button">
              <Button className="dark-button">Login</Button>
            </div>
            <div className="login-button">
                <Text>Already have account? Login</Text>
            </div>
          </div>
        </div>
      </RegisterStyle>
    </>
  );
};

export default Register;

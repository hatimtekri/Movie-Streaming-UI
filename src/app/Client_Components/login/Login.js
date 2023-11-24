"use client";

import FacebookSymbol from "@/Common/Icons/FacebookSymbol";
import GoogleSymbol from "@/Common/Icons/GoogleSymbol";
import Button from "@/Components/Button/Button";
import Input from "@/Components/Input/Input";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React, { useEffect } from "react";
import { LoginStyle } from "./Login.style";
const Login = () => {
  return (
    <LoginStyle className="login-container">
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
              <Text fontSize={32}>Hey there,</Text>
            </div>
            <div>
              <Text fontSize={32}>welcome back</Text>
            </div>
          </div>
          <div className="login-right-side-upper-button">
            <Button className="light-button">
              <GoogleSymbol></GoogleSymbol>
              Login with Google</Button>
            <Button className="light-button">
              <FacebookSymbol></FacebookSymbol>
              Login with Facebook</Button>
          </div>
        </div>
        <div className="login-right-side-down">
          <div className="login-right-side-down-input"  >
          <div className="login-right-side-down-username">
            <div className="login-right-side-down-username-title">
              <Text>Full Name</Text>
            </div>

            <Input placeholder="Enter your name"></Input>
          </div>

          <div className="login-right-side-down-password">
            <div className="login-right-side-down-password-title">
              <Text>Password</Text>
            </div>
            <Input placeholder="Enter your password"></Input>
          </div>
          </div>
         
          <Button className="dark-button">Login</Button>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;

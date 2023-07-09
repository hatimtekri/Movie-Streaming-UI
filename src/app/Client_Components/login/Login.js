"use client";

import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import React, { useEffect } from "react";
import { LoginStyle } from "./Login.style";
const Login = () => {
  return (
    <LoginStyle className="login-container">
      <div className="login-left-side">
        <div className="login-left-side-text-wrapper" >
        <div className="login-left-side-text" >
            <Title strong={true} level={5} >The biggest international and local film streaming</Title>
            <Text size="medium" >Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. </Text>
             </div>    

        </div>
        
        <div className="login-left-side-image" >
            <Image src={"/assets/MacBook_Pro_16.png"} width="100" height="100" ></Image>
        </div>

        </div>
      <div className="login-right-side">
        <div >test2</div>
        </div>
    </LoginStyle>
  );
};

export default Login;

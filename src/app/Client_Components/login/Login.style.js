import styled, { css } from "styled-components";
export const LoginStyle = styled.div`
  &.login-container {
    display: flex;
    background-color: red;
    height: 100vh;
    .login-left-side {
      width: 50%;
      background-color: ${(props) => props.theme.Base_01};
    
      color: ${(props) => props.theme.Primary_01};
      .login-left-side-text-wrapper{
        height: 35%;
       display: flex;
       justify-content: center;
       align-items :center ;
       
      }
      .login-left-side-text{
        height: 204px;
        width: 403px;
       // background-color: red;
        //position: absolute;
        //left: 20%;
        //top: 20%;
      }
      .login-left-side-image{
        height: 65%;
        //background-color: green;
        >img{
            width: 100%;
            height: 100%;

        }
      }
    }
    .login-right-side {
      width: 50%;
      background-color: ${(props) => props.theme.Base_12};
      display: flex;
      justify-content: center;
    }
  }
`;

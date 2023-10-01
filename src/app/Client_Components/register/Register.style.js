import styled, { css } from "styled-components";
export const RegisterStyle = styled.div`
  &.register-container {
    display: flex;
    background-color: red;
    height: 100vh;
    .login-left-side {
      width: 50%;
      background-color: ${(props) => props.theme.Base_01};

      overflow: hidden;
      color: ${(props) => props.theme.Primary_01};
      .login-left-side-text-wrapper {
        height: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .login-left-side-text {
        max-width: 403px;
        width: 100%;
        // background-color: red;
        //position: absolute;
        //left: 20%;
        //top: 20%;
      }
      .login-left-side-image {
        position: relative;
        height: 65%;
        //background-color: green;
        .login-left-side-image-wrapper {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
          > img {
            object-fit: cover;
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .login-right-side {
      width: 50%;
      background-color: ${(props) => props.theme.Base_12};
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .login-right-side-upper {
      height: 20%;
      width: 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      text-align: center;
      //background-color: aqua;
    }
    .login-right-side-upper-button {
      display: flex;
      flex-direction: column;

      height: 25%;
      width: 100%;
      justify-content: space-between;
    }
    .login-right-side-down {
      height: 80%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      text-align: center;
      //  background-color: red;

      width: 50%;

      .login-right-side-down-input {
        // background-color: aqua;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        height: 50%;
        margin-top: 20px;
        .login-right-side-down-username {
          //  background-color: beige;
          .login-right-side-down-username-title {
            text-align: start;
          }
        }
        .login-right-side-down-password {
          // background-color: blanchedalmond;
          .login-right-side-down-password-title {
            text-align: start;
          }
        }
      }
      .register-button {
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
      }
      .login-button {
        margin-top: 8px;
      }
    }
  }
`;

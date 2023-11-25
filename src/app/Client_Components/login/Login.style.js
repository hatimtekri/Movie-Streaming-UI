import styled, { css } from "styled-components";
export const LoginStyle = styled.div`
  &.login-container {
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
      //justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .login-right-side-upper {
      height: 40%;
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
    .login-right-side-upper-button {
      display: flex;
      flex-direction: column;

      width: 100%;
      margin-top: 40px;
      gap: 24px;
      .light-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border-radius: 20px;
        height: 48px;
        width: 500px;
        background-color: #29282f;
      }
    }
    .login-right-side-down {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: center;

      width: 50%;
      margin-top: 70px;

      width: 500px;
      height: 320px;

      .login-right-side-down-input {
        // background-color: aqua;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        //  height: 40%;
        .login-right-side-down-username {
          // background-color: beige;
          .login-right-side-down-username-title {
            text-align: start;
            .text {
              color: #78828a;
            }
          }

          input {
            background-color: #29282f;
            width: 500px;
            height: 50px;
            border-radius: 24px;
            border: 1px solid #29282f;
          }
        }
        .login-right-side-down-password {
          // background-color: blanchedalmond;
          .login-right-side-down-password-title {
            text-align: start;
            .text {
              color: #78828a;
            }
          }

          input {
            background-color: #29282f;
            width: 500px;
            height: 50px;
            border-radius: 24px;
            border: 1px solid #29282f;
          }
        }
      }
      .forget-password{
        align-self: flex-end;
        .text {
          color: #B43FEB;
        }
      }
      .register{
        margin-top: 20px;
        .text {
          color: #9CA4AB;
          span {
            color: #B43FEB;
          }
        }
      }
      .dark-button {
        width: 500px;
        height: 58px;
      }
    }
  }
`;

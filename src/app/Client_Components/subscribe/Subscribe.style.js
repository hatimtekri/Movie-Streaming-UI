import styled, { css } from "styled-components";
export const SubscribeStyle = styled.div`
  height: 100vh;
  .title {
    //background-color: red;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-section {
    height: calc(100% - 72px);

    width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;

    .title-container {
      height: fit-content;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;
      .customTag {
        width: fit-content;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
        color: #ffcd1a;
        border-radius: 16px;
      }
      .text {
        width: 306px;
        text-align: center;
      }
    }
    .plan-container {
      height: 518px;
      width: fit-content;
      
      margin-top: 63px;
      display: flex;
      gap: 32px;
    }
  }
`;

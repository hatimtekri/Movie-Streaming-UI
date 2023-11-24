import styled, { css } from "styled-components";
export const SubscriptionPlanStyle = styled.div`
  width: 374px;
  height: 518px;
  border-radius: 24px;
  background-color: #1a161f;
  padding: 40px;
  border: 1px solid #29282f;

  display: flex;
  flex-direction: column;

  ${({ type }) =>
    type == "special" &&
    `
    background-color: #B43FEB;
  `}

  .heading {
    height: 88px;
    width: 100%;
    margin-bottom: 32px;
    //background-color: red;
    .price {
      height: fit-content;
    }
  }
  .ant-divider {
    background-color: #29282f;
    margin: 0;
    padding: 0;
  }

  .information {
    margin-top: 32px;
    width: 290px;
    display: flex;
    flex-direction: column;
    gap: 19px;
    //background-color: red;

    .point-container {
      width: 100%;
      // background-color: yellow;
      display: flex;
      gap: 12px;
      .icon-wrapper {
        height: 24px;
        width: 24px;
        border-radius: 12px;
        background-color: rgba(249, 249, 249, 0.12);
        opacity: 12%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          z-index: 5;
        }
      }
    }
  }

  .outline-button {
    margin-top: 32px;
    height: 58px;
    width: 294px;
    ${({ type }) =>
    type == "special" &&
    `
    color: white;
    border-color: white;
    span {
        color:white
    }
  `}
  }
`;

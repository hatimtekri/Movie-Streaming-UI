import styled, { css } from "styled-components";
export const DisplaySeriesStyle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
  }

  .action-part {
    width: 354px;
    height: 206px;
    background-color: azure;
    position: absolute;
    bottom: 35px;
    left: 35px;
    border: 1px solid red;
    background-color: transparent;
    padding: 5px;
    .tag {
      width: 100%;
      height: 25%;
      border: 1px solid blue;
    }
    .title {
      width: 100%;
      height: 40%;
      border: 1px solid yellow;
    }
    .action-button {
      width: 100%;
      height: 35%;
   
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      .watch-button {
        width: 50%;
        height: 70%;
        
      }
      .add-watchlist{
        width: 50%;
        height: 70%;

      }
    }
  }
`;

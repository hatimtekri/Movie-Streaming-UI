import styled, { css } from "styled-components";
export const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .main-section {
    width: 70%;
    height: 100%;
    padding: 10px;
    .display-series {
      width: 100%;
      height: 50%;

      padding: 10px;
    }

    .channels {
      width: 100%;
      height: 18%;
      background-color: transparent;
      display: flex;
      padding: 10px;
      white-space: nowrap;
      overflow-x: auto;
    }
    .channels::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .recent-watched {
      width: 100%;
      height: 32%;
      background-color: transparent;

      white-space: nowrap;
      overflow-x: auto;
    }
    .recent-watched::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  .side-bar {
    width: 30%;
    height: 100%;
    background-color: transparent;

    .top-movies {
      width: 100%;
      height: 70%;
      background-color: transparent;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    }
    .favorites {
      width: 100%;
      height: 30%;
      background-color: red;
    }
  }
`;

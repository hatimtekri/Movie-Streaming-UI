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
      background-color: black;
    }

    .recent-watched {
      width: 100%;
      height: 32%;
      background-color: antiquewhite;
    }
  }
  .side-bar {
    width: 30%;
    height: 100%;
    background-color: green;

    .top-movies{
        width: 100%;
      height: 70%;
      background-color: black;
    }
    .favorites {
        width: 100%;
      height: 30%;
      background-color: red;
    }
  }
`;

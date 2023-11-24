import styled, { css } from "styled-components";
export const TopRatedStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //background-color: red;
  flex-direction: column;

  .top-rated-section {
    width: 100%;
    height: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    .movie-player-title {
      margin-bottom: 24px;
    }
    .movies {
      display: flex;
      height: 274px;
      .top-rated-movie {
        width: 317px;
        flex: 0 0 317px;
      }
      overflow: hidden;
    }
  }
  .best-of-action {
    width: 100%;
    height: 75%;
    margin-top: 10px;
    // background-color: yellow;
    .row-1 {
      height: 251px;
      height: 50%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      overflow: hidden;
    }
    .row-2 {
      height: 251px;
      height: 50%;
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      overflow: hidden;
    }
  }
`;

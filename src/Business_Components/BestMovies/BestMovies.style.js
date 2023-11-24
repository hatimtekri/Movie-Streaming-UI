import styled, { css } from "styled-components";
export const BestMoviesStyle = styled.div`
  width: 264px;
  height: 251px;
  display: flex;
  flex-direction: column;
  //background-color: aqua;

  .thumbnail-img {
    height: 183px;
    width: 100%;
    border-radius: 16px;

    .image {
      border-radius: 16px;
    }
  }
  .description {
    width: 100%;
    height: calc(100% - 183px);
    margin-top: 10px;

    .movie-player-title {
      width: calc(100% - 20px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .rating {
      width: 100%;
      height: 24px;
      display: flex;
      margin-top: 10px;
      align-items: center;

      .movie-player-title {
        padding-left: 10px;
        padding-right: 10px;
        width: fit-content;
      }
    }
  }
`;

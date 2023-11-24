import styled, { css } from "styled-components";
export const TopMoviesStyle = styled.div`
  width: 100%;
  height: 137px;
  display: flex;

  .thumbnail-img {
    height: 100%;
    width: 112px;
    border-radius: 16px;
    background-color: green;
    .image {
      border-radius: 16px;
    }
  }

  .description {
    height: 100%;
    width: calc(100% - 112px);

    padding-left: 5px;
    .top-movies-tag {
      border-radius: 8px;
    }
    .movie-player-title {
      margin-top: 10px;
   
      width: calc(100% - 20px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .movie-player-text {
      display: flex;
      margin-top: 10px;
      padding: 0;
      div {
        text-align: center;
        vertical-align: middle;
        padding-top: 2px;
      }
    }
    .rating {
      width: 49px;
      height: 24px;
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      .movie-player-title {
        padding: 0;
      }
    }
  }
`;

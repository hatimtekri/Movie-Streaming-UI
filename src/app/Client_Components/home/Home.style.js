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
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      .outline-button {
        max-width: 274px;
        width: 100%;
        height: 48px;
        padding: 12px 24px 12px 24px;
        border-radius: 24px;
      }
    }
    .favorites {
      width: 100%;
      height: 30%;
      background-color: #0D0C0F;

      padding-left: 20px;
      padding-right: 20px;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;


      .tags{
        width: 100%;
        height: 200px;
       //  background-color: aqua;
        padding: 5px;
        display: flex;
        
        flex-wrap: wrap;
      }


    }
  }

  
`;

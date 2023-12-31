import styled, { css } from "styled-components";
export const RecentWatchedPlayerStyle = styled.div`
  width: 366px;
  height: calc(100% - 10px);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 8px;
  text-align: center;
  align-self: center;
  align-content: center;
  top: 50%;
  transform: translate(0, -50%);

  .image {
    width: 100%;
    height: auto;
    display: block;
  }

  .player-playing-info {
    position: absolute;
    bottom: 0;
    height: 35%;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
   
    
    margin: 10px;


 .player-action-bar {
    display: flex;
    width: 100%;
    
    align-items: center;
    .action-button {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .current-time{
        width: 50px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }

    .seek{
     width: calc(100% - 180px);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      //background-color: yellow;
    }
 }
    
  }

  .player-pause-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .action-button {
      width: 48px;
      height: 48px;
    }
  }
`;

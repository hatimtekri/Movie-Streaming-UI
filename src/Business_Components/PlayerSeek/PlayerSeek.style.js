import styled, { css } from "styled-components";
import { hexToRGBA } from "@/Utils/getRGBAColor";
export const PlayerSeekStyle = styled.div`
width: calc(100% - 10px);
height: 10px;
border-radius: 25px;
//background-color: red;
position: relative;

.total-timeline {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color:${(props) =>  hexToRGBA(props.theme.Primary_01,0.18)};
    
}
.load-timeline {
    position: absolute;
    left: 0;
    width: ${(props) => props.loadedTimePercent}%;
    height: 100%;
    border-radius: 25px;
    background-color:${(props) =>  hexToRGBA(props.theme.Primary_01,0.25)};
  
}

.current-timeline {
    position: absolute;
    left: 0;
    width: ${(props) => props.currentTimePercent}%;
    height: 100%;
    border-radius: 25px;
    background-color:${(props) => props.theme.Base_01};
    
}

`
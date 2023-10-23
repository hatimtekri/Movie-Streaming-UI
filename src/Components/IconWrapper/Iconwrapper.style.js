import styled, { css } from "styled-components";
export const IconWrapperStyle = styled.div`
&.icon-wrapper {

    background-color:rgba(74,66,64,0.7);
    height: calc(100%);
    width: calc(100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.borderRadius}px;

}
`
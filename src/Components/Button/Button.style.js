import { Button } from 'antd';
import styled, { css } from "styled-components";

export const ButtonStyle = styled(Button)`
&.button{
    
}
&.light-button {
    background-color: ${(props) => props.theme.Base_13};
    color: ${(props) => props.theme.Base_03};
    border-color: transparent;
    border-radius: 20px;
}
&.dark-button{
    background-color: ${(props) => props.theme.Base_01};
    color: ${(props) => props.theme.Base_03};
    border-color: transparent;
    border-radius: 20px;
}
`
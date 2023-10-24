import { Typography } from 'antd';
const { Text } = Typography;
import styled, { css } from "styled-components";

export const TextStyle = styled(Text)`
&.text{
    &.ant-typography
    {
        color: ${(props) => props.theme.Base_03};
        font-size: ${(props) => props.fontSize}px;
        font:inter;
    }
}
&.movie-player-text{
    &.ant-typography
    {
        color: ${(props) => props.theme.Primary_02};
        font-size: ${(props) => props.fontSize}px;
        font:inter;
        
    }
}
&.movie-player-time-text {
    &.ant-typography
    {
        color: ${(props) => props.theme.Primary_01};
        font-size: ${(props) => props.fontSize}px;
        font:inter;
        
    }
}
`
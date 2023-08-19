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
`
import { Typography } from 'antd';
const { Text } = Typography;
import styled, { css } from "styled-components";

export const TextStyle = styled(Text)`
&.text{
    &.ant-typography
    {
        color: inherit;
        font-size: ${(props) => props.fontSize}px;
        font:inter;
    }
}
`
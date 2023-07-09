import { Typography } from 'antd';
const { Title } = Typography;
import styled, { css } from "styled-components";

export const TitleStyle = styled(Title)`
&.title{
    &.ant-typography
    {
        color: inherit;
        font-size: ${(props) => props.fontSize}px;
        font:inter;
    }
}
`
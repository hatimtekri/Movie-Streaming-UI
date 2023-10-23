import { Typography } from "antd";
const { Title } = Typography;
import styled, { css } from "styled-components";

export const TitleStyle = styled(Title)`
  &.title {
    &.ant-typography {
      color: ${(props) => props.theme.Base_03};
      font-size: ${(props) => props.fontSize}px;
      font: inter;
    }
  }
  &.movie-player-title {
    &.ant-typography {
      color: ${(props) => props.theme.Primary_01};
      font-size: ${(props) => props.fontSize}px;
      font: inter;

      margin: 0;
    }
  }
`;

import { Button } from "antd";
import styled, { css } from "styled-components";

export const ButtonStyle = styled(Button)`
  &.button {
  }
  &.light-button {
    background-color: ${(props) => props.theme.Base_13};
    color: ${(props) => props.theme.Base_03};
    border-color: transparent;
    border-radius: 20px;
  }
  &.dark-button {
    background-color: ${(props) => props.theme.Base_01};
    color: ${(props) => props.theme.Primary_01};
    border-color: transparent;
    border-radius: 20px;
  }
  &.outline-button {
    background-color: transparent;
    color: #b43feb;
    border-color: #b43feb;
    border-radius: 24px;
    span {
      color: #b43feb;
    }
  }
`;

import { Tag } from "antd";
import styled, { css } from "styled-components";

export const TagStyle = styled(Tag)`
  &.customTag {
    background-color: rgba(253, 253, 253, 0.08);
    color: white;
    height: fit-content;
    border: transparent;
    font-size: 1rem;
  }
  &.top-movies-tag {
    background-color: transparent;
    color: #d1d8dd;
    border-color: #d1d8dd;
    border: 1px solid #29282f;
    height: fit-content;

    font-size: 0.8rem;
  }
`;

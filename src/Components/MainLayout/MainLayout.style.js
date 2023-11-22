import { Layout } from "antd";

import styled, { css } from "styled-components";
const { Header, Content, Sider } = Layout;
export const LayoutStyle = styled(Layout)``;

export const HeaderStyle = styled(Header)`
  &.customHeader {
    display: flex;
    padding: 0;
    margin: 0;
    background-color: #0d0c0f;

    .title {
      &.ant-typography {
        background-color: transparent;
        color: white;
        width: 17%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .buttons {
      // background-color: red;
      width: 50%;
      padding-left: 10px;
      .ant-typography {
        padding-left: 15px;
        color: white;
      }
    }
    .profile {
      // background-color: yellow;
      width: 33%;
      display: flex;
      justify-content: flex-end;
      padding-right: 25px;
      align-items: center;
      .subscribe-button {
        font-size: 1rem;
        font-weight: 600;
        padding: 8px;
        border-radius: 24px;
        padding-left: 24px;
        padding-right: 24px;
        width: fit-content;
        height: fit-content;
      }
      .ant-badge {
        margin-left: 32px;
        vertical-align: middle;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
      }
      .picture {
        width: 56px;
        height: 32px;
        margin-left: 24px;

        display: flex;
        justify-content: center;
        align-items: center;
        .ant-avatar {
          background-color: gray;
          width: 32px;
          height: 32px;
          margin-right: 7.5px;
          border: 1px solid #f9f9f9;
        }
      }
    }
  }
`;

export const ContentStyle = styled(Content)`
  background-color: #0d0c0f;
`;
export const SiderStyle = styled(Sider)`
  .ant-menu-root {
    background-color: #1a161f;

    .ant-menu-submenu {
      background-color: #1a161f;
      .ant-menu-submenu-title {
        color: #78828a;

        :hover {
          color: #78828a;
          background-color: transparent;
          cursor: pointer;
        }
      }

      // background-color: ${(props) => props.theme.Primary_Two};
      .ant-menu-sub {
        color: ${(props) => props.theme.Primary_06};
        .ant-menu-item-selected {
          color: #f9f9f9;
          background-color: transparent;
        }
        .ant-menu-item-active {
          :hover {
            color: #f9f9f9;
            background-color: transparent;
          }
        }
      }
    }
    &.ant-menu {
      :hover {
        color: #78828a;
      }

      .ant-menu-item {
        background-color: #1a161f;

        color: #78828a;
        font-weight: 600;
        font-size: 1rem;
        padding-left: 36px;
        line-height: 24px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        &-selected {
          color: #f9f9f9;
          background-color: #1a161f;

          position: relative;
          ::before {
            position: absolute;
            top: 6px;
            width: 4px;
            height: 30px;
            left: 0px;
            content: "";
            display: block;
            background-color: #b43feb;
            z-index: 1;
          }

          svg {
            color: #b43feb;
            font-size: 24px;
            margin-right: 12px;
            :hover {
              color: #b43feb;
            }
          }
        }
        svg {
          margin-right: 12px;
          :hover {
            color: #78828a;
          }
        }

        :hover {
          color: #78828a;
        }
        .ant-menu-title-content {
          :hover {
            color: #78828a;
          }
        }
        .ant-menu-item-active {
          :hover {
            color: #f9f9f9;
            background-color: transparent;
          }
        }
      }
    }
    .text {
      &.ant-typography {
        color: #78828a;
        margin-left: 4px;
        margin-right: 4px;
        padding-left: 36px;
        padding-right: 16px;
        display: inline-block;
        margin-bottom: 15px;
      }
    }
  }
`;

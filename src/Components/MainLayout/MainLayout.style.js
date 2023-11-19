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
      //  background-color: yellow;
      width: 33%;
      display: flex;
      justify-content: center;
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
    }
  }
`;

export const ContentStyle = styled(Content)`
  background-color: #0d0c0f;
`;
export const SiderStyle = styled(Sider)`
  
  

  
  .ant-menu-root {
    background-color: #1A161F;

    .ant-menu-submenu {
      background-color: #1a161f;
      .ant-menu-submenu-title {
        color: #78828a;

        :hover {
          // background-color: ${(props) => props.theme.Base_23};

          // color: ${(props) => props.theme.Secondary_04} !important;

          //color: ${(props) => props.theme.Secondary_04};
          // need to look mon this
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
    .ant-menu-item {
      background-color: #1A161F;
      color: #78828a;
      font-weight: 600;
      font-size: 1rem;
      &-selected {
      color: #f9f9f9;
      background-color: #1A161F;
      .ant-menu-item-icon {
        color: #b43feb;
      }
    }
    }
    

    .text{
      &.ant-typography {
      color: #78828a;
    }
    }
    
  }
`;

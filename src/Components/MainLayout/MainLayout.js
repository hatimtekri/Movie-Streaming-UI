"use client";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  CalendarOutlined,
  LinkOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Anchor, Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
import {
  ContentStyle,
  HeaderStyle,
  LayoutStyle,
  SiderStyle,
} from "./MainLayout.style";
import SubMenu from "antd/es/menu/SubMenu";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Button from "../Button/Button";
import SelectedTag from "@/Business_Components/SelectedTag/SelectedTag";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ),
];
const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <LayoutStyle style={{ height: "100vh" }}>
      <HeaderStyle className="customHeader">
        <Title className="title" level={6}>
          {" "}
          CineMax{" "}
        </Title>
        <div className="buttons">
          <Text size="medium">Movies</Text>
          <Text size="medium">Series</Text>
          <Text size="medium">Animation</Text>
          <Text size="medium">Genres</Text>
        </div>
        <div className="profile">
          <Button className="dark-button subscribe-button">Subscribe</Button>
          <Avatar></Avatar>
        </div>
      </HeaderStyle>
      <Layout>
        <SiderStyle
          width={257}
          style={{
            backgroundColor: "#1A161F",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Menu
            style={{
              width: "100%",

              paddingTop: "15px",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <Text>Menu</Text>
            <Menu.Item key="1" icon={<MailOutlined size={24} />}>
              <SelectedTag></SelectedTag> 
              Discovery
            </Menu.Item>

            <Menu.Item key="2" icon={<StarFilled />}>
            <SelectedTag></SelectedTag> 
              Top Rated
            </Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>
            <SelectedTag></SelectedTag> 
              Coming Soon
            </Menu.Item>

            <Text>Library</Text>
            <Menu.Item key="4" icon={<CalendarOutlined />}>
            <SelectedTag></SelectedTag> 
              Recently Played
            </Menu.Item>

            <Menu.Item key="5" icon={<CalendarOutlined />}>
            <SelectedTag></SelectedTag> 
              Downloaded
            </Menu.Item>

            <Menu.Item key="6" icon={<CalendarOutlined />}>
            <SelectedTag></SelectedTag> 
              Dark Mode
            </Menu.Item>

            <Menu.Item key="7" icon={<CalendarOutlined />}>
            <SelectedTag></SelectedTag> 
              Setting
            </Menu.Item>
          </Menu>
        </SiderStyle>
        <Layout>
          <ContentStyle
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              height: "100%",
            }}
          >
            {children}
          </ContentStyle>
        </Layout>
      </Layout>
    </LayoutStyle>
  );
};
export default MainLayout;

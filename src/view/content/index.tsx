import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Button, message } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from "react-router-dom";
import { history } from "@src/utils/router";
import styled from "styled-components";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const MainContent = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const quitLogin = () => {
    message.success("退出登录成功")
    localStorage.removeItem('token')
    history.push("/home")
  }

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Box>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
            博客后台管理系统
          </div>
          <Menu theme="dark" defaultOpenKeys={["article"]} defaultSelectedKeys={['articleList']} mode="inline">

            <SubMenu key="article" icon={<UserOutlined />} title="文章管理">
              <Menu.Item key="articleList">
                <Link to={'/content/articleManage/articleList'}>
                  文章列表
                </Link>
              </Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>

        <Layout className="site-layout">
          <div style={{
            padding: "15px 15px 0 0",
            display: "flex",
            justifyContent: "flex-end"
          }}><Button type="primary" onClick={quitLogin}>退出登录</Button></div>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>

              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}

            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: "95%" }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Box >
  )
}

const Box = styled.div`
.logo {
  height: 32px;
  margin: 16px;
  line-height: 32px;
  color: white;
  cursor: pointer;
}

.site-layout .site-layout-background {
  background: #fff;
}
`
export default MainContent

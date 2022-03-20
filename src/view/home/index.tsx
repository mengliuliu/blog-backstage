import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { history } from "@src/utils/router";
import ModuleApi from "@src/network/index";
import styled from "styled-components";

const Home = () => {
  const onFinish = (values: any) => {
    const params = {
      email: values.email,
      password: values.password
    }

    ModuleApi.login(params).then((res) => {
      // 跳转到内容页面
      // history.push('/content')
      // 存储登录信息
      localStorage.setItem('token', res.data.token)
      history.push('/content/articleManage/articleList')
    }, (err) => {
      console.log("err: ", err)
    })
  };

  return (
    <Box>
      <div className="home">
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .home {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px red solid;
    border-radius: 10px;
    background: transparent;
  }
`;

export default Home;

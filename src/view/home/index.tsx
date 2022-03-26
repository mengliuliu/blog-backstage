import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { Switch, Case } from 'react-if'
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { history } from "@src/utils/router";
import LoginForm from "./components/Login"
import RegisterForm from "./components/Register"
import ModuleApi from "@src/network/index";
import styled from "styled-components";

type PageType = 'login' | 'register' | 'forget'

const Home = () => {
  const [pageType, setPageType] = React.useState('login')
  const checkPageType = (type: PageType) => {
    setPageType(type)
  }

  return (
    <Box>
      <div className="home">
        <div className="title">博客后台管理系统</div>
        <div className="form">
          <Switch>
            <Case condition={pageType === 'login'}>
              <LoginForm checkPageType={checkPageType} />
            </Case>
            {/* <Case condition={pageType === 'forget'}>
              <ForgetForm checkPageType={checkPageType} />
            </Case> */}
            <Case condition={pageType === 'register'}>
              <RegisterForm checkPageType={checkPageType} />
            </Case>
          </Switch>
        </div>
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
	background-image: url(${require('@src/assets/images/loginBg.jpg')});
	background-size: contain;
	background-position: center;
  .home {
    width: 330px;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
		border: 1px solid #ccc;
    border-radius: 5px;
    background: white;
    .title {
      font-size: 20px;
      color: rgba(21, 35, 81, 1);
      font-weight: 600;
    }
  }
`;

export default Home;

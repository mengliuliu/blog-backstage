import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { history } from "@src/utils/router";
import ModuleApi from "@src/network/index";
import styled from "styled-components";

type PageType = 'login' | 'register' | 'forget'
interface PropsStruct {
    checkPageType: (type: PageType) => void
}

const RegisterForm = (props: PropsStruct) => {
    const onFinish = (values: any) => {
        if (values.password !== values.againPassword) {
            return message.error('两次密码输入不一致')
        }
        const params = {
            email: values.email,
            password: values.password
        }
        ModuleApi.register(params).then((res) => {
            // 跳转到内容页面
            // history.push('/content')
            // 存储登录信息
            message.success("注册成功")
            props.checkPageType("login")
        }, (err) => {
            console.log("err: ", err)
        })
    };
    return (
        <Box>
            <Form
                name="register"
                className="registerForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please input your Email!" }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="邮箱"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please input your Password!" }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="密码" visibilityToggle />
                </Form.Item>
                <Form.Item
                    name="againPassword"
                    rules={[{ required: true, message: "Please again input your Password!" }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="请再次输入密码" visibilityToggle />
                </Form.Item>
                <Form.Item>
                    <div className="formFooter">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-button"
                        >
                            注册
                        </Button>
                        <div className="regAcc" onClick={() => { props.checkPageType("login") }}>返回登录</div>
                    </div>
                </Form.Item>
            </Form>
        </Box>
    )
}

const Box = styled.div`
.registerForm {
    width: 270px;
    height: 180px;
    .formFooter {
        display: flex;
        justify-content: space-between;
        .regAcc {
            cursor: pointer;
        }
    }
}
`;

export default RegisterForm;


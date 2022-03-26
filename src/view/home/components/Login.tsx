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

const LoginForm = (props: PropsStruct) => {
    useEffect(() => {
        class BaseException extends Error {
            // 状态码
            status: number;
            // 提示信息
            message: string;
        }

        class NotFoundException extends BaseException {
            status = 404;

            constructor(msg?: string) {
                super();
                this.message = msg || "无此内容";
            }
        }
        const err = new NotFoundException

        console.log('err ', err)
        console.log('err.message ', err.message)
        console.log('err.status ', err.status)
    })
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
            // message.error(err.message)
            message.error("登录失败")
            console.log("err: ", err)
        })
    };
    return (
        <Box>
            <Form
                name="login"
                className="loginForm"
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
                    <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" visibilityToggle />
                </Form.Item>
                <Form.Item>
                    <div className="formFooter">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-button"
                        >
                            登录
                        </Button>
                        <div className="regAcc" onClick={() => { props.checkPageType("register") }}>注册账号</div>
                    </div>
                </Form.Item>
            </Form>
        </Box>
    )
}

const Box = styled.div`
.loginForm {
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
`

export default LoginForm;


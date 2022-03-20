import React, { useEffect } from "react";
import { Modal, Form, Input } from 'antd'
import styled from "styled-components";

const { TextArea } = Input

export interface PropsStruct {
    /**
     * @description 显示/隐藏
     */
    visible: boolean
    /**
     * @description 点击关闭事件
     */
    onCancel: () => void
    /**
     * @description 提交事件
     */
    onSubmit: (values: any) => void
    /**
     * @description 提交时加载
     */
    loading: boolean
    /**
 * @description 回显的数据
 */
    showData: any
}
const UpdateArticle = (props: PropsStruct) => {
    const { visible, onCancel, onSubmit, loading, showData } = props
    const [form] = Form.useForm()

    useEffect(() => {
        if (!loading) {
            form.resetFields()
        }
    }, [loading])

    const submitData = () => {
        form.validateFields().then(
            values => {
                console.log('values', values)
                onSubmit(values)
            },
            err => {
                console.log(err)
            }
        )
    }

    return (
        <Modal
            visible={visible}
            onCancel={() => {
                onCancel()
                form.resetFields()
            }}
            onOk={submitData}
            width="500px"
            bodyStyle={{
                height: '500px',
                padding: '40px',
            }}
            confirmLoading={loading}
        >
            <Box>
                <Form form={form}>
                    <Form.Item
                        className="title"
                        label="标题"
                        name="title"
                        rules={[{ required: true, type: 'string', message: '请输入文章标题', whitespace: false }]}
                        initialValue={showData[0] ? showData[0].title : ''}
                    >
                        <Input placeholder="请输入文章标题" maxLength={64} />
                    </Form.Item>
                    <Form.Item
                        className="content"
                        label="内容"
                        name="content"
                        rules={[{ required: true, type: 'string', message: '请输入文章内容', whitespace: false }]}
                        initialValue={showData[0] ? showData[0].content : ''}
                    >
                        <Input.TextArea allowClear showCount placeholder="请输入文章内容" autoSize={{ minRows: 16, maxRows: 30 }} />
                    </Form.Item>
                </Form>
            </Box>
        </Modal >
    )
}

const Box = styled.div`
  
`;

export default UpdateArticle;


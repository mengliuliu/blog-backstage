import {
    Form,
    Input,
    Button,
    message
} from 'antd';
import ModuleApi from "@src/network/index";
import styled from "styled-components";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const ArticleCreate = () => {

    const onFinish = (value: any) => {
        console.log('value', value)
        const params = {
            title: value.title,
            content: value.content,
            createTime: new Date()
        }
        ModuleApi.createArticle(params).then((res) => {
            message.success("创建成功")
            console.log('res', res)
        }, (err) => {
            console.log('err', err)

        })
    }

    return (
        <Box>
            <Form {...formItemLayout} onFinish={onFinish}>
                <Form.Item
                    className="title"
                    label="标题"
                    name="title"
                    rules={[{ required: true, type: 'string', message: '请输入文章标题', whitespace: false }]}
                    initialValue={''}
                >
                    <Input placeholder="请输入文章标题" maxLength={64} />
                </Form.Item>

                <Form.Item
                    className="content"
                    label="内容"
                    name="content"
                    rules={[{ required: true, type: 'string', message: '请输入文章内容', whitespace: false }]}
                    initialValue={''}
                >
                    <Input.TextArea allowClear showCount placeholder="请输入文章内容" autoSize={{ minRows: 16, maxRows: 30 }} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="createArticleButton" >
                        发布
                    </Button>
                </Form.Item>
            </Form>
        </Box>
    )
}

const Box = styled.div`
.createArticleButton {
    display: flex;
    justify-content: center;
}
`;

export default ArticleCreate;


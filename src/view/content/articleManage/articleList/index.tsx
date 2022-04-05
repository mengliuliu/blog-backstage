import React, { useEffect, useState } from "react";
import { Popconfirm, message, Button } from 'antd'
import { getColumnsByPageName } from "@src/config/TableColumnsConfig"
import { history } from "@src/utils/router";
import BaseTable from "@src/components/BaseTable"
import UpdateArticle from "../components/UpdateArticle"
import ModuleApi from "@src/network/index";
import styled from "styled-components";

const ArticleList = () => {
    const [articleList, setArticleList] = useState<any>([])
    const [showData, setShowData] = useState<any[]>([])
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 })
    const [tableLoading, setTableLoading] = useState(false)

    const [modalLoading, setModalLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const [searchParams, setSearchParams] = useState({})

    useEffect(() => {
        getArticleList()
    }, [pagination.current, pagination.pageSize])

    const getArticleList = () => {
        setTableLoading(true)
        ModuleApi.getArticleList({ all: true }).then((res: any) => {
            setArticleList(res.list)
            pagination.total = res.total
            setPagination({ ...pagination })
            setTableLoading(false)
        }, (err) => {
            console.log('err', err)
            setTableLoading(false)
        })
    }

    const handleDeleteClick = (id: number) => {
        console.log('id', id)
        ModuleApi.deleteArticle({ id }).then((res) => {
            message.success("删除成功")
            getArticleList()
        }, (err) => {
            console.log('err', err)
            message.error("删除失败")

        })
    }
    const submitData = (values: any) => {
        const params = {
            ...values,
            id: showData[0].id
        }
        setModalLoading(true)
        ModuleApi.updateArticle(params).then((res) => {
            console.log('res', res)
            // setArticleList(res.data)
            message.success("更新成功")
            setModalVisible(false)
            setModalLoading(false)
            getArticleList()
        }, (err) => {
            console.log('err', err)
            message.error("更新失败")
            setModalVisible(false)
            setModalLoading(false)

        })
    }

    const handleChange = (current: number) => {
        pagination.current = current
        setPagination({ ...pagination })
    }
    const handleSizeChange = (size: number) => {
        console.log(size)
        pagination.current = 1
        pagination.pageSize = size
        setPagination({ ...pagination })
    }

    const getColumns = () => {
        const columnsDic = {
            content: {
                dataIndex: 'content',
                render: (text: any, record: any) => {
                    return (

                        <div onClick={() => {
                            history.push('/content/articleManage/articleDetail', { articleDetail: record })
                            // setShowData([record])
                        }} style={{
                            cursor: "pointer"
                        }}>
                            {record.content}
                        </div>
                    )
                }
            },
            is_delete: {
                dataIndex: 'is_delete',
                render: (text: any, record: any) => {
                    return (
                        <div>
                            {
                                record.is_delete ? '是' : '否'
                            }
                        </div>
                    )
                }
            },
            operation: {
                title: '操作',
                dataIndex: 'operation',
                render: (text: any, record: any) => <div style={{
                    display: "flex"
                }}>
                    <div onClick={() => {
                        setModalVisible(true)
                        // 设置回显数据
                        setShowData([record])
                    }} style={{
                        cursor: "pointer"
                    }}>修改</div>
                    &nbsp;&nbsp;
                    <div style={{
                        cursor: "pointer"
                    }}>
                        <Popconfirm
                            title="确认要删除这条记录？"
                            onConfirm={() => {
                                handleDeleteClick(record.id)
                            }}
                            onCancel={() => { }}
                            okText="确认"
                            cancelText="取消"
                        >
                            删除
                        </Popconfirm>
                    </div>
                </div>,
            },
        }
        return getColumnsByPageName('articleList', columnsDic)
    }

    const handleCreateClick = () => {
        history.push('/content/articleManage/articleCreate')
    }

    return (
        <Box>
            <div className="buttonCreate">
                <Button onClick={handleCreateClick} type="primary" style={{ display: 'inline-block' }}>
                    新建文章
                </Button>
            </div>
            <BaseTable
                rowKey={'id'}
                onPageChange={handleChange}
                onSizeChange={handleSizeChange}
                loading={tableLoading}
                dataSource={articleList}
                {...pagination}
                columns={getColumns()}
            />
            <UpdateArticle
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onSubmit={submitData}
                loading={modalLoading}
                showData={showData}
            />
        </Box>
    )
}

const Box = styled.div`
.buttonCreate {
    padding-bottom: 15px;
}
`;

export default ArticleList;


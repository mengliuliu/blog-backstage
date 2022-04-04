import React, { useEffect, useState } from "react";
import { Layout, message, Spin } from 'antd'
import ViewMd from '@src/components/ViewMd'
import ModuleApi from "@src/network/index";
import { history } from "@src/utils/router";
import styled from "styled-components";

const ArticleDetail = (props: any) => {
    const [articleDetail, setArticleDetail] = useState<any>({})
    useEffect(() => {
        console.log('articleDeatil', typeof history.location.state.articleDetail)
        setArticleDetail(history.location.state.articleDetail)
    }, [])
    return (
        <Box>
            <ViewMd content={articleDetail.content ? articleDetail.content : ''}></ViewMd>
        </Box>
    )
}

const Box = styled.div`
  
`;

export default ArticleDetail;


// import React, { useEffect, useState } from 'react';
// import { Form, Modal, DatePicker, Input, message } from 'antd';
// import Editor from '@src/utils/editor';
// import moment from '@src/utils/moment'
// import { announcementManageApi } from '@src/pages/sp-client/api';
// import { Button } from 'antd';
// import styled from 'styled-components'
// import Scrollbars from 'react-custom-scrollbars'


// interface Props {
//     /**
//      * 是否隐藏弹窗
//      */
//     visible: boolean;
//     /**
//      * 拉取预览的数据
//      */
//     getviewData: () => any;
//     /**
//      * 取消事件
//      */
//     oncancel: () => void
//     /**
//      * 是否来自编辑预览，右上方关闭标志和footer按钮不一样（列表查看 和 编辑预览）
//      */
//     isFormEdit?: boolean
// }


// const ViewHtml = (props: Props) => {
//     const { visible, oncancel, getviewData, isFormEdit = true } = props
//     const [viewHtml, setViewHtml] = useState<any>(null)

//     useEffect(() => {
//         if (visible) {
//             setViewHtml(getviewData())
//         }
//     }, [visible])


//     return (
//         <Box>
//             <Modal
//                 className='announcement'
//                 visible={visible}
//                 width='700px'
//                 title={isFormEdit ? '公告预览' : '公告详情'}
//                 onCancel={isFormEdit ? () => { } : () => oncancel()}
//                 closable={!isFormEdit}
//                 bodyStyle={{ padding: '20px' }}
//                 footer={isFormEdit ? <div>
//                     <Button type='primary' onClick={() => oncancel()}>
//                         返回
//                     </Button>
//                 </div> : null}
//             >
//                 <Scrollbars
//                     style={{ height: '412px' }}
//                 >
//                     <div className="resetBox">
//                         <div
//                             dangerouslySetInnerHTML={{
//                                 __html: viewHtml
//                             }}></div>
//                     </div>
//                 </Scrollbars>
//             </Modal>
//         </Box>
//     )
// }

// const Box = styled.div`
    
// `


// export default ViewHtml;

import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import styled from 'styled-components'

export interface PropsStruct extends TableProps<any> {
	/**
	 * @description 列表项总数
	 */
	total?: number
	/**
	 * @description 当前页码
	 */
	current?: number
	/**
	 * 页码切换事件
	 */
	onPageChange?: (page: number) => void
	/**
	 * 页条数切换事件
	 */
	onSizeChange?: (size: number) => void
	/**
	 * 是否有分页器
	 */
	havePagination?: boolean
}

const BaseTable = (props: PropsStruct) => {
	const { havePagination = true, total, current, onPageChange, onSizeChange } = props
	//分页配置
	const paginationConfig: any = {
		total: total,
		current: current,
		showSizeChanger: true,
		pageSizeOptions: ['10', '25', '50', '100'],
		onChange: (page: number) => {
			if (onPageChange) onPageChange(page)
		},
		showTotal: () => `共搜索到 ${total} 条数据`,
		onShowSizeChange: (current: number, size: number) => {
			if (onSizeChange) onSizeChange(size)
		},
	}
	//设置表格数据行样式
	const setRowClass = (record: any) => {
		if (record['highLight']) {
			return 'highLight'
		}
		return ''
	}

	return (
		<Box>
			<Table
				{...props}
				rowClassName={record => {
					return setRowClass(record)
				}}
				pagination={havePagination ? paginationConfig : havePagination}
			/>
		</Box>
	)
}

const Box = styled.div`
.ant-table {
	height: calc(100vh - 210px);
    overflow-y: scroll;
}
`

export default BaseTable

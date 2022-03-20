
import { Tooltip } from 'antd'
import { formatDate } from '@src/utils/format'
import { numberToThousands, stampToTime } from '@src/utils/timeFilter'

const invalidVal = '- -'
function _parseFloatText(text: string) {
	// let param = Number.isNaN(Number.parseFloat(text)) ? 0 : Number.parseFloat(text);
	return Number.parseFloat(text)
}

//格式化金额
export const renderAmount = (text: string) => {
	//元
	const param = _parseFloatText(text)
	if (!Number.isNaN(param)) {
		return numberToThousands(param)
	} else {
		return invalidVal
	}
}

//日期 eg:2018/05/05
export function renderDate(text: string) {
	return formatDate.keeMonthAndDay(text)
}

//日期 eg:2018-05-05
export function renderDate_(text: string) {
	return stampToTime(text, 6)
}

//时间 eg: 2018/05/05 14:45:47
export function renderTime(text: string) {
	return formatDate.keepMinutesAndSeconds(text)
}

//分转换为元进行显示
export function renderAmountInCent(text: any) {
	const param = _parseFloatText(text) / 100
	if (!Number.isNaN(param)) {
		return numberToThousands(param)
	} else {
		return invalidVal
	}
}

export function renderTooltip(text: any) {
	return (
		<Tooltip placement="topLeft" title={text}>
			{text}
		</Tooltip>
	)
}

//render 不需要处理的数据
export function renderData(text: any) {
	return text
}


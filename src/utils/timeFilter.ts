const invalidVal = '- -'
function stampToTime(dateNum: any, type: number, otherType = 'seconds', defaultVal = invalidVal) {
	if (!dateNum) {
		if (dateNum !== 0) {
			return defaultVal
		}
	}
	if (typeof dateNum == 'string') {
		if (dateNum.indexOf('-') == -1) {
			if (dateNum.length == 13) {
				dateNum = parseInt(dateNum)
			} else {
				return dateNum
			}
		}
	}
	const date = new Date(dateNum)
	const month = date.getMonth() + 1
	if (type == 1) {
		//2018-5-5 12:07:05
		return (
			date.getFullYear() +
			'-' +
			month +
			'-' +
			date.getDate() +
			' ' +
			fixZero(date.getHours(), 2) +
			':' +
			fixZero(date.getMinutes(), 2) +
			':' +
			fixZero(date.getSeconds(), 2)
		)
	}
	if (type == 2) {
		//2018-05-05 12:07:05
		return (
			date.getFullYear() +
			'-' +
			fixZero(month, 2) +
			'-' +
			fixZero(date.getDate(), 2) +
			' ' +
			fixZero(date.getHours(), 2) +
			':' +
			fixZero(date.getMinutes(), 2) +
			':' +
			fixZero(date.getSeconds(), 2)
		)
	}
	if (type == 3) {
		//2018/5/5 12:07:05
		return (
			date.getFullYear() +
			'/' +
			month +
			'/' +
			date.getDate() +
			' ' +
			fixZero(date.getHours(), 2) +
			':' +
			fixZero(date.getMinutes(), 2) +
			':' +
			fixZero(date.getSeconds(), 2)
		)
	}
	if (type == 4) {
		//2018/05/05 12:07:05
		return (
			date.getFullYear() +
			'/' +
			fixZero(month, 2) +
			'/' +
			fixZero(date.getDate(), 2) +
			' ' +
			fixZero(date.getHours(), 2) +
			':' +
			fixZero(date.getMinutes(), 2) +
			':' +
			fixZero(date.getSeconds(), 2)
		)
	}
	if (type == 5) {
		//2018-5-5
		return date.getFullYear() + '-' + month + '-' + date.getDate()
	}
	if (type == 6) {
		//2018-05-05
		return date.getFullYear() + '-' + fixZero(month, 2) + '-' + fixZero(date.getDate(), 2)
	}
	if (type == 7) {
		//2018/5/5
		return date.getFullYear() + '/' + month + '/' + date.getDate()
	}
	if (type == 8) {
		//2018/05/05
		return date.getFullYear() + '/' + fixZero(month, 2) + '/' + fixZero(date.getDate(), 2)
	}
	if (type == 9) {
		if (otherType == 'seconds') {
			//20180505120705
			return (
				date.getFullYear() +
				fixZero(month, 2) +
				fixZero(date.getDate(), 2) +
				fixZero(date.getHours(), 2) +
				fixZero(date.getMinutes(), 2) +
				fixZero(date.getSeconds(), 2)
			)
		} else if (otherType == 'minutes') {
			//201805051207
			return date.getFullYear() + fixZero(month, 2) + fixZero(date.getDate(), 2) + fixZero(date.getHours(), 2) + fixZero(date.getMinutes(), 2)
		} else if (otherType == 'hours') {
			return date.getFullYear() + fixZero(month, 2) + fixZero(date.getDate(), 2) + fixZero(date.getHours(), 2)
		} else if (otherType == 'day') {
			return date.getFullYear() + fixZero(month, 2) + fixZero(date.getDate(), 2)
		}
	}
	if (type == 10) {
		//2018年05月05日
		return date.getFullYear() + '年' + fixZero(month, 2) + '月' + fixZero(date.getDate(), 2) + '日'
	}
	if (type == 11) {
		//2018年05月05日12时07分05秒
		return (
			date.getFullYear() +
			'年' +
			fixZero(month, 2) +
			'月' +
			fixZero(date.getDate(), 2) +
			'日' +
			fixZero(date.getHours(), 2) +
			'时' +
			fixZero(date.getMinutes(), 2) +
			'分' +
			fixZero(date.getSeconds(), 2) +
			'秒'
		)
	}
	if (type == 12) {
		//180505
		return (date.getFullYear() + '').slice(-2) + fixZero(month, 2) + fixZero(date.getDate(), 2)
	}
	if (type == 13) {
		//2018-05-05 12:07
		return (
			date.getFullYear() +
			'-' +
			fixZero(month, 2) +
			'-' +
			fixZero(date.getDate(), 2) +
			' ' +
			fixZero(date.getHours(), 2) +
			':' +
			fixZero(date.getMinutes(), 2)
		)
	}
}

function fixZero(num: number, length: number) {
	const str = '' + num
	const len = str.length
	let s = ''
	for (let i = length; i-- > len;) {
		s += '0'
	}
	return s + str
}

//时间转时间戳，type值为begin（开始时间），end（结束时间）
function timeToStamp(time: Date, type?: string) {
	const date = new Date(time)
	if (type && type == 'begin') {
		const year = date.getFullYear()
		const month = date.getMonth()
		const day = date.getDate()
		return +new Date(year, month, day)
	}
	if (type && type == 'end') {
		date.setHours(23)
		date.setMinutes(59)
		date.setSeconds(59)
		date.setMilliseconds(0)
		return +date
	}
	return +date
}


//计算时间差值（type取值day,hour,min,second）
function timeCalculate(beginTime: number, endTime: number, type: string) {
	const newBegin: any = new Date(stampToTime(endTime, 5)!)
	const newEnd: any = new Date(stampToTime(beginTime, 5)!)
	const calculate = newBegin - newEnd
	let result = 0
	if (type == 'day') {
		result = calculate / 1000 / 60 / 60 / 24
		return Math.abs(Math.round(result))
	}
	if (type == 'hour') {
		result = calculate / 1000 / 60 / 60
		return Math.abs(Math.round(result))
	}
	if (type == 'min') {
		result = calculate / 1000 / 60
		return Math.abs(Math.round(result))
	}
	if (type == 'second') {
		result = calculate / 1000
		return Math.abs(Math.round(result))
	}
}

//数字千分位格式化函数(暂且不支持小数位的千分位格式化)
function numberToThousands(number: any) {
	if (!number && parseFloat(number) != 0) {
		return invalidVal
	}
	if (number == invalidVal) {
		return invalidVal
	}
	const numberStr = number.toString()
	const splitList = numberStr.split('.')
	let intPart = splitList[0]
	let floatPart = '00'
	if (splitList.length > 1) {
		floatPart = splitList[1]
	}
	intPart = intPart.replace(/(\d{1,3})(?=(\d{3})+$)/g, function (s: any) {
		return s + ','
	})
	// floatPart = floatPart ? "." + floatPart : floatPart;
	// 保留两位小数
	floatPart = floatPart ? '.' + (floatPart + '00').slice(0, 2) : floatPart
	const result = intPart + floatPart
	return result
}


//金额干分位字符转数字
function changeNumber(val: any) {
	if (val) {
		let a = (val + "").replace(/,/g, "");
		return Number(a).toFixed(2)
	} else {
		return Number(0).toFixed(2)
	}
};

export { timeToStamp, numberToThousands, timeCalculate, stampToTime, changeNumber }

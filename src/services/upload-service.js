import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/' : 'http://localhost:3030/api/'

export const uploadService = {
	enrichData,
	formatData,
}

async function enrichData(data) {
	const res = await axios.post(`${BASE_URL}enrich`, { data })
	return res.data
}

function formatData(data) {
	const dataArr = data.split('\r\n')
	const headers = dataArr[0].split(',')
	const rows = dataArr.splice(1).filter(r => r)
	return rows.map(row => {
		const rowArr = row.split(',')
		return {
			[headers[0]]: +rowArr[0],
			[headers[1]]: rowArr[1],
			[headers[2]]: rowArr[2],
			[headers[3]]: +rowArr[3],
			[headers[4]]: +rowArr[4],
			[headers[5]]: rowArr[5],
			[headers[6]]: +rowArr[6],
			[headers[7]]: +rowArr[7],
			[headers[8]]: +rowArr[8],
			[headers[9]]: +rowArr[9],
			[headers[10]]: +rowArr[10],
			[headers[11]]: rowArr[11] ? +rowArr[11] : '',
			[headers[12]]: +rowArr[12],
			[headers[13]]: +rowArr[13],
		}
	})
}

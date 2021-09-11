import { useSelector } from 'react-redux'

export default function Table() {
	const { data, header } = useSelector(state => state.tableModule)

	if (!data)
		return (
			<section className='table-empty'>
				<span>No Data Available, please </span>
				<label htmlFor='file'>upload a CSV file</label>
				<span> first.</span>
			</section>
		)

	const getRowData = row => {
		const strHtmls = []
		for (const key in row) {
			strHtmls.push(row[key])
		}
		return strHtmls.map((str, idx) => <td key={idx}>{str ?? ''}</td>)
	}

	const headers = data[0] ? Object.keys(data[0]) : []
	return (
		<section className='table-container'>
			{header && <h2>{header}</h2>}
			<table>
				<thead>
					<tr>
						{headers.map(header => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, idx) => (
						<tr key={idx}>{getRowData(row)}</tr>
					))}
				</tbody>
			</table>
		</section>
	)
}

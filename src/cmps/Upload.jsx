import { useDispatch } from 'react-redux'
import { setTableData, setTableHeader } from '../store/actions/tableActions.js'
import { setErrorUserMsg } from '../store/actions/userMsgActions.js'

export default function Upload() {
	const dispatch = useDispatch()

	const onInputChange = ev => {
		const file = ev.target.files[0]
		if (file) {
			if (file.type !== 'text/csv') {
				return dispatch(setErrorUserMsg())
			}
			dispatch(setTableHeader(file.name))
			processFile(file)
		}
	}

	const processFile = file => {
		var reader = new FileReader()
		reader.onload = () => {
			dispatch(setTableData(reader.result, true))
		}
		reader.readAsText(file)
	}

	return (
		<section className='upload'>
			<label htmlFor='file'>Choose File</label>
			<input type='file' id='file' name='file' onChange={onInputChange} />
		</section>
	)
}

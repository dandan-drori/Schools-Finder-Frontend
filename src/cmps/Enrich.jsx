import { setTableData } from '../store/actions/tableActions.js'
import { useSelector, useDispatch } from 'react-redux'

export default function Enrich() {
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.tableModule)
	const userMsg = useSelector(state => state.userMsgModule)

	const onEnrich = async () => {
		dispatch(setTableData(data))
	}

	return (
		<section className='enrich'>
			<button disabled={!data.length || userMsg.type !== 'done'} onClick={onEnrich}>
				Find Schools
			</button>
		</section>
	)
}

import { useSelector } from 'react-redux'

export default function UserMsg() {
	const { msg, highlight, type } = useSelector(state => state.userMsgModule)
	return (
		<section className={'user-msg ' + type}>
			<p>
				{msg} <span>{highlight}</span>
			</p>
		</section>
	)
}

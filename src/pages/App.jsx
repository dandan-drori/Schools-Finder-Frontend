import Header from '../cmps/Header'
import Upload from '../cmps/Upload'
import Table from '../cmps/Table'
import Enrich from '../cmps/Enrich'
import UserMsg from '../cmps/UserMsg'

function App() {
	return (
		<main className='app'>
			<Header />
			<section className='content'>
				<Upload />
				<Enrich />
				<Table />
				<UserMsg />
			</section>
		</main>
	)
}

export default App

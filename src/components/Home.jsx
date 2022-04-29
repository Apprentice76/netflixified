import Header from './Header'
import Banner from './Banner'
import Row from './Row'
import requests from '../config/requests'

const Home = () => {
	return (
		<>
			<Header />
			{/* header */}
			<Banner type='movie' />
			{/* banner */}
			<Row
				title='NETFLIX ORIGINALS'
				movieType={requests.fetchOriginals}
				large
			/>
			<Row title='Action Movies' movieType={requests.action} />
			<Row title='Comedy Movies' movieType={requests.comedy} />
		</>
	)
}

export default Home

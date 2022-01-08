import Header from './Header'
import Banner from './Banner'
import Row from './Row'
import requests from '../config/requests'

const Home = () => {
    return (
		<>
			<Header />
			{/* header */}
			<Banner />
			{/* banner */}
			<Row title='NETFLIX ORIGINALS' movieType={requests.fetchOriginals} large/>
			<Row title='Action Movies' movieType={requests.action} />
		</>
	)
}

export default Home

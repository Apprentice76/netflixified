import Header from './Header'
import Banner from './Banner'
import Row from './Row'

const Home = () => {
    return (
		<>
			<Header />
			{/* header */}
			<Banner />
			{/* banner */}
			<Row title='Netflix Originals' movieType='netflix-originals' />
		</>
	)
}

export default Home

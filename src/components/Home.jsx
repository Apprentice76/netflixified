import Header from './Header'
import Banner from './Banner'
import Row from './Row'
import requests from '../config/requests'
import { useState } from 'react'

const Home = () => {
  const [list, setList] = useState([])
  
	return (
		<>
			<Header />
			{/* header */}
			<Banner type='movie' />
			{/* banner */}
			<Row
				title='NETFLIX ORIGINALS'
				movieType={requests.fetchOriginals}
				list={list}
				setList={setList}
				large
			/>
			<Row
				title='Action Movies'
				movieType={requests.action}
				list={list}
				setList={setList}
			/>
			<Row
				title='Comedy Movies'
				movieType={requests.comedy}
				list={list}
				setList={setList}
			/>
		</>
	)
}

export default Home

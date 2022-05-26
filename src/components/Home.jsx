import Header from './Header'
import Banner from './Banner'
import Row from './Row'
import Modal from './Modal'
import requests from '../config/requests'
import { useState, useEffect } from 'react'

const Home = () => {
	const [list, setList] = useState([])
	const [modalOpen, setModalOpen] = useState(false)
	const [movie, setMovie] = useState({})

	useEffect(() => {
		const swiperNext = document.querySelectorAll('.swiper-button-next')
		if (modalOpen)
			for (let i = 0; i < swiperNext.length; i++)
				swiperNext[i].style.background = 'none'
		else {
			for (let i = 0; i < swiperNext.length; i++)
				swiperNext[i].style.background = 'rgba(0, 0, 0, 0.6)'
		}
	}, [modalOpen])

	const closeModal = () => {
		setModalOpen(false)
		setMovie({})
	}
	const openModal = () => {
		setModalOpen(true)
	}

	return (
		<>
			<Modal
				modalOpen={modalOpen}
				movie={movie}
				list={list}
				setList={setList}
				handleClose={closeModal}
			/>
			<Header />
			{/* header */}
			<Banner type='movie' setMovie={setMovie} openModal={openModal} />
			{/* banner */}
			<Row
				title='NETFLIX ORIGINALS'
				movieType={requests.fetchOriginals}
				list={list}
				setList={setList}
				setMovie={setMovie}
				openModal={openModal}
				large
			/>
			<Row
				title='Action Movies'
				movieType={requests.action}
				list={list}
				setList={setList}
				setMovie={setMovie}
				openModal={openModal}
			/>
			<Row
				title='Comedy Movies'
				movieType={requests.comedy}
				list={list}
				setList={setList}
				setMovie={setMovie}
				openModal={openModal}
			/>
		</>
	)
}

export default Home

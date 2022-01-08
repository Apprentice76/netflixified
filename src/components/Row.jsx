import styles from '../styles/Row.module.css'
// import firebaseDb from '../config/firebase'
import axios from 'axios'
import { useState, useEffect } from 'react'

// Swiper Modules
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Pagination } from 'swiper'

// Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Row = (props) => {
	const { title, movieType, large } = props
	const [rowData, setRowData] = useState([])

	const fetchMovies = async (type) => {
		// const moviesRef = firebaseDb.ref(`movies/${type}`)
		// moviesRef.on('value', (snapshot) => {
		//     const movies = snapshot.val()
		//     if (movies && movies.length !== 0) {
		//         setRowData(() => movies)
		//     }
		// })

		const response = await axios.get(type)
		setRowData(() => response.data.results)
		return response
	}

	useEffect(() => {
		fetchMovies(movieType)
	}, [movieType])

	return (
		<div className={styles.row}>
			<h3 className={styles.row__title}>{title}</h3>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={0}
				slidesPerView={6}
				speed={800}
				breakpoints={{
					320: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					670: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					900: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1100: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					1400: {
						slidesPerView: 6,
						slidesPerGroup: 6,
					},
				}}
				navigation
				pagination={{
					clickable: true,
				}}>
				{rowData.map(
					(movie) =>
						((large && movie.poster_path) ||
							(!large && movie.backdrop_path)) && (
							<SwiperSlide key={movie.poster_path}>
								<img
									// key={movie.poster_path}
									className={
										large
											? styles.row__poster_large
											: styles.row__poster
									}
									src={
										large
											? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
											: `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
									}
									alt={movie.original_title}
								/>
							</SwiperSlide>
						)
				)}
			</Swiper>
		</div>
	)
}

export default Row

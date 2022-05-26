import styles from '../styles/Row.module.css'
import { getGenre } from '../config/requests'
import {
	ExpandCircleDown,
	AddCircleRounded,
	CheckCircleOutline,
} from '@mui/icons-material'
// import firebaseDb from '../config/firebase'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion/dist/framer-motion'

// Swiper Modules
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Pagination } from 'swiper'

// Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Row = (props) => {
	const { title, movieType, list, setList, setMovie, openModal, large } =
		props
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
				spaceBetween={10}
				slidesPerView={6}
				breakpoints={{
					0: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					620: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					800: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1000: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					1200: {
						slidesPerView: 6,
						slidesPerGroup: 6,
					},
				}}
				navigation
				pagination={{
					clickable: true,
				}}
				className={styles.swiper_wrapper}>
				{rowData.map(
					(movie) =>
						((large && movie.poster_path) ||
							(!large && movie.backdrop_path)) && (
							<SwiperSlide key={movie.poster_path}>
								<div
									className={
										large
											? styles.row__poster_large
											: styles.row__poster
									}
									style={
										large
											? {
													backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`,
											  }
											: {
													backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.backdrop_path})`,
											  }
									}>
									<div className={styles.poster__description}>
										<div
											className={
												styles.poster__description_content
											}>
											<div
												className={
													styles.poster__description_text
												}>
												{getGenre(movie.genre_ids[0])}
												{movie.genre_ids[1] && (
													<>
														&bull;
														{getGenre(
															movie.genre_ids[1]
														)}
													</>
												)}
												{movie.genre_ids[2] && (
													<>
														&bull;
														{getGenre(
															movie.genre_ids[2]
														)}
													</>
												)}
											</div>
											{/* poster description text */}
											<ExpandCircleDown
												className={
													styles.poster__description_icon_expand
												}
												onClick={() => {
													openModal()
													setMovie(movie)
												}}
											/>
											{list.find(
												(id) => id === movie.id
											) ? (
												<>
													<CheckCircleOutline
														className={
															styles.poster__description_icon
														}
														onClick={() =>
															setList((prev) =>
																prev.filter(
																	(id) =>
																		id !==
																		movie.id
																)
															)
														}
													/>
												</>
											) : (
												<>
													<AddCircleRounded
														className={
															styles.poster__description_icon
														}
														onClick={() =>
															setList((prev) => [
																...prev,
																movie.id,
															])
														}
													/>
												</>
											)}
										</div>
										{/* poster description content */}
									</div>
									{/* poster description */}
								</div>
								{/* row poster */}
							</SwiperSlide>
						)
				)}
			</Swiper>
		</div>
		// row
	)
}

export default Row

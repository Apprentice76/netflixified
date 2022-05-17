import styles from '../styles/Row.module.css'
import { getGenre } from '../config/requests'
import {
	ExpandCircleDown,
	// AddCircleOutlineRounded,
	AddCircleRounded,
	CheckCircleOutline,
} from '@mui/icons-material'
// import firebaseDb from '../config/firebase'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

// Swiper Modules
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Pagination } from 'swiper'

// Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Row = (props) => {
	const { title, movieType, list, setList, large } = props
	const [rowData, setRowData] = useState([])
	// const [onHover, setOnHover] = useState({})
	// const [hovered, setHovered] = useState(null)
	// const [prevHovered, setPrevHovered] = useState(null)

	// useEffect(() => {
	// 	const slides = document.querySelectorAll('.swiper-slide')
	// 	slides.forEach((slide) => {
	// 		slide.firstChild.style.boxShadow = 'none'
	// 	})
	// 	if (
	// 		hovered &&
	// 		(hovered.classList.contains(styles.row__poster) ||
	// 			hovered.classList.contains(styles.row__poster_large))
	// 	) {
	// 		const siblings = hovered?.parentNode.parentNode.childNodes
	// 		// if (siblings)
	// 		for (let i = 0; i < siblings.length; i++) {
	// 			// if (siblings[i].firstChild !== hovered)
	// 			siblings[i].firstChild.style.boxShadow =
	// 				'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
	// 		}
	// 		hovered.style.boxShadow = 'none'
	// 	} else if (
	// 		prevHovered &&
	// 		(prevHovered.classList.contains(styles.row__poster) ||
	// 			prevHovered.classList.contains(styles.row__poster_large))
	// 	) {
	// 		const siblings = prevHovered?.parentNode.parentNode.childNodes
	// 		// if (siblings)
	// 		for (let i = 0; i < siblings.length; i++) {
	// 			// if (!siblings[i].firstChild) break
	// 			siblings[i].firstChild.style.boxShadow = 'none'
	// 		}
	// 	}
	// }, [hovered, prevHovered])

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
											{
												list.find(
													(id) => id === movie.id
												) ? (
													<>
														<ExpandCircleDown
															className={[
																styles.poster__description_icon,
																styles.poster__description_icon_expand,
															]}
														/>
														<CheckCircleOutline
															className={
																styles.poster__description_icon
															}
															onClick={() =>
																setList(
																	(prev) =>
																		prev.filter(
																			(
																				id
																			) =>
																				id !==
																				movie.id
																		)
																)
															}
														/>
													</>
												) : (
													// onHover[movie.poster_path] ?
													<>
														<ExpandCircleDown
															className={[
																styles.poster__description_icon,
																styles.poster__description_icon_expand,
															]}
														/>
														<AddCircleRounded
															className={
																styles.poster__description_icon
															}
															// onMouseOut={() => {
															// 	setOnHover(
															// 		(prev) => ({
															// 			...prev,
															// 			[`${movie.poster_path}`]: false,
															// 		})
															// 	)
															// }}
															onClick={() =>
																setList(
																	(prev) => [
																		...prev,
																		movie.id,
																	]
																)
															}
														/>
													</>
												)
												// : (
												// 	<>
												// 		<ExpandCircleDown
												// 			className={[
												// 				styles.poster__description_icon,
												// 				styles.poster__description_icon_expand,
												// 			]}
												// 		/>
												// 		<AddCircleOutlineRounded
												// 			className={
												// 				styles.poster__description_icon
												// 			}
												// 			onMouseOver={(e) => {
												// 				setOnHover(
												// 					(prev) => ({
												// 						...prev,
												// 						[`${movie.poster_path}`]: true,
												// 					})
												// 				)
												// 			}}
												// 		/>
												// 	</>
												// )
											}
										</div>
									</div>
								</div>
							</SwiperSlide>
						)
				)}
			</Swiper>
		</div>
	)
}

export default Row

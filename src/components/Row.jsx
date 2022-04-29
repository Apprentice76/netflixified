import styles from '../styles/Row.module.css'
import {
	PlayCircleOutlineRounded,
	AddCircleOutlineRounded,
} from '@material-ui/icons'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
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
	const [onHover, setOnHover] = useState({})

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

	const slides = document.querySelectorAll('.swiper-slide')
	const posters = document.querySelectorAll('.swiper-slide > div')

	for (let i = 0; i < slides.length; i++) {
		slides[i].addEventListener('mouseenter', (e) => {
			const siblings = e.target.parentNode.childNodes
			e.target.style.boxShadow = 'none'
			for (let j = 0; j < siblings.length; j++) {
				if (siblings[j] !== e.target) {
					siblings[j].firstChild.style.boxShadow =
						'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
				}
			}
		})
		slides[i].addEventListener('mouseleave', (e) => {
			const siblings = e.target.parentNode.childNodes
			for (let j = 0; j < siblings.length; j++) {
				siblings[j].firstChild.style.boxShadow = 'none'
			}
		})
		posters[i].addEventListener('mouseleave', (e) => {
			const siblings = e.target.parentNode.parentNode.childNodes
			for (let j = 0; j < siblings.length; j++) {
				siblings[j].firstChild.firstChild.style.boxShadow = 'none'
			}
		})
	}

	return (
		<div className={styles.row}>
			<h3 className={styles.row__title}>{title}</h3>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={10}
				slidesPerView={6}
				speed={800}
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
									}
									// onMouseOver={() => console.log(movie)}
								>
									{/* <div className={styles.row__poster_overlay}> */}
									<div className={styles.poster__description}>
										<div
											className={
												styles.poster__description_icons
											}>
											{onHover[movie.poster_path] ? (
												<>
													<PlayCircleOutlineRounded
														className={
															styles.poster__description_icon
														}
													/>
													<AddCircleRoundedIcon
														className={
															styles.poster__description_icon
														}
														onMouseLeave={() =>
															setOnHover(
																(prev) => ({
																	...prev,
																	[`${movie.poster_path}`]: false,
																})
															)
														}
													/>
												</>
											) : (
												<>
													<PlayCircleOutlineRounded
														className={
															styles.poster__description_icon
														}
													/>
													<AddCircleOutlineRounded
														className={
															styles.poster__description_icon
														}
														onMouseOver={() =>
															setOnHover(
																(prev) => ({
																	...prev,
																	[`${movie.poster_path}`]: true,
																})
															)
														}
													/>
												</>
											)}
										</div>
									</div>
									{/* </div> */}
									{/* <img
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
									/> */}
								</div>
							</SwiperSlide>
						)
				)}
			</Swiper>
		</div>
	)
}

export default Row

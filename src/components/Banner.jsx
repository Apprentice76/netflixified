import styles from '../styles/Banner.module.css'
// import component from 'styled-components'
import bg from '../img/banner_img.jpg'
import { useState, useEffect } from 'react'
import requests from '../config/requests'
import axios from 'axios'

const Banner = () => {
	const [loaded, setLoaded] = useState(false)
	const [bannerData, setBannerData] = useState({})

	console.log(bg)
	const [originals, setOriginals] = useState([])

	useEffect(() => {
		axios.get(requests.fetchOriginals).then((response) => {
			if (!response) return
			setLoaded(true)

			const movies = response.data.results
			setOriginals(() => movies)

			const rand = Math.floor(Math.random() * (movies.length - 1))
			setBannerData(() => movies[rand])
		})
	}, [])

	// const BannerStyle = component.div`
	//     background: linear-gradient(
	//                 to bottom,
	//                 rgba(239, 239, 239, 0) 0%,
	//                 rgba(10, 10, 10, 1) 90%
	//             ), url('https://image.tmdb.org/t/p/original/${bannerImg}') no-repeat center;
	//     background-size: cover;
	//     height: 60vh;
	//     padding: 0 25px;
	// 	backgroundImage:
	// `
	console.log(bannerData.backdrop_path)
    const bannerStyle = {
		background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(10, 10, 10, 1) 90%), url('https://image.tmdb.org/t/p/original/${bannerData.backdrop_path}') no-repeat center center/cover`,
		height: '60vh',
		padding: '0 25px',
	}

	return (
		<div className={styles.banner} style={bannerStyle}>
			{/* <BannerStyle> */}
			<div className={styles.banner__content}>
				<div className={styles.banner__title}>
					{loaded ? bannerData.original_title : 'Movie Title'}
				</div>
				<div className={styles.banner__button_container}>
					<button className={styles.banner__button}>Play</button>
					<button className={styles.banner__button}>
						Add to List
					</button>
				</div>
				<div className={styles.banner__description}>
					{loaded
						? bannerData.overview?.length > 150
							? bannerData.overview.substr(0, 150) + '...'
							: bannerData.overview
						: 'Movie Description...'}
				</div>
			</div>
			{/* </BannerStyle> */}
		</div>
	)
}

export default Banner

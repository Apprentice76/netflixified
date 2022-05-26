import styles from '../styles/Banner.module.css'
import { PlayArrow, InfoOutlined } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import requests from '../config/requests'
import axios from 'axios'

const Banner = ({ type, setMovie, openModal }) => {
	const [loaded, setLoaded] = useState(false)
	const [bannerData, setBannerData] = useState({})

	useEffect(() => {
		axios.get(requests.fetchOriginals).then((response) => {
			if (!response) return
			setLoaded(true)

			const movies = response.data.results

			const rand = Math.floor(Math.random() * (movies.length - 1))
			setBannerData(() => movies[rand])
		})
	}, [])

	const bannerStyle = {
		background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(10, 10, 10, 1) 90%), url('https://image.tmdb.org/t/p/original/${bannerData.backdrop_path}') no-repeat center top/cover`,
		height: '90vh',
		padding: '0 25px',
	}

	return (
		<div className={styles.banner} style={loaded ? bannerStyle : {}}>
			{/* <BannerStyle> */}
			{type && (
				<div className={styles.category}>
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select id='genre' name='genre'>
						<option>Genre</option>
						<option value='adventure'>Adventure</option>
						<option value='action'>Action</option>
						<option value='horror'>Horror</option>
						<option value='comedy'>Comedy</option>
						<option value='documentary'>Documentary</option>
					</select>
				</div>
			)}
			<div className={styles.banner__content}>
				<div className={styles.banner__title}>
					{loaded ? bannerData.original_title : 'Movie Title'}
				</div>
				<div className={styles.banner__description}>
					{loaded
						? bannerData.overview?.length > 150
							? bannerData.overview.substr(0, 150) + '...'
							: bannerData.overview
						: 'Movie Description...'}
				</div>
				<div className={styles.banner__button_container}>
					<button
						className={styles.banner__button_play}
						onClick={() => {
							setMovie(bannerData)
							openModal()
						}}>
						<PlayArrow className={styles.banner__button_icon} />
						<span>Play</span>
					</button>
					<button
						className={styles.banner__button_info}
						onClick={() => {
							setMovie(bannerData)
							openModal()
						}}>
						<InfoOutlined
							className={styles.banner__button_icon}
						/>
						<span>Info</span>
					</button>
				</div>
			</div>
			{/* </BannerStyle> */}
		</div>
	)
}

export default Banner

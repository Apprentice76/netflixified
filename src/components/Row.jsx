import styles from '../styles/Row.module.css'
// import firebaseDb from '../config/firebase'
import axios from 'axios'
import { useState, useEffect } from 'react'

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

    const scroll = (event, dir) => {
        if (dir === 'right') {
            const container = event.target.previousElementSibling
            container.scrollLeft += container.clientWidth
        } else {
            const container = event.target.nextElementSibling
			container.scrollLeft -= container.clientWidth
        }
	}

	useEffect(() => {
		fetchMovies(movieType)
	}, [movieType])

	return (
		<div className={styles.row}>
			<h3 className={styles.row__title}>{title}</h3>
			<div className={styles.row__wrapper}>
				<button
					className={styles.row__poster_left_scroll}
                    type='button'
                    onClick={(e) => scroll(e, 'left')}
                >
					&lt;
				</button>
				<div className={styles.row__poster_container}>
					{rowData.map(
						(movie) =>
							((large && movie.poster_path) ||
								(!large && movie.backdrop_path)) && (
								<img
									key={movie.poster_path}
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
							)
					)}
				</div>
				<button
					className={styles.row__poster_right_scroll}
					type='button'
					onClick={(e) => scroll(e, 'right')}>
					&gt;
				</button>
			</div>
		</div>
	)
}

export default Row

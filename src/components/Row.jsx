import styles from '../styles/Row.module.css'
import firebaseDb from '../config/firebase'
import { useState, useEffect } from 'react'

const Row = (props) => {
    const { title, movieType } = props
    const [rowData, setRowData] = useState([])

    const fetchMovies = (type) => {
        const moviesRef = firebaseDb.ref(`movies/${type}`)
        moviesRef.on('value', (snapshot) => {
            const movies = snapshot.val()
            if (movies && movies.length !== 0) {
                setRowData(() => movies)
            }
        })
    }

    useEffect(() => {
        fetchMovies(movieType)
    }, [movieType])

	return (
		<div className={styles.row}>
			<h3 className={styles.row__title}>{title}</h3>
			<div className={styles.row__poster_container}>
				{rowData.map((movie) => (
					<img
						key={movie.original_name}
						className={styles.row__poster}
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						alt={movie.original_title}
					/>
				))}
			</div>
		</div>
	)
}

export default Row

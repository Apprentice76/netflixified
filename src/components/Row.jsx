import styles from '../styles/Row.module.css'

const Row = () => {
	return (
		<div className={styles.row}>
			<h3 className={styles.row__title}>Netflix Originals</h3>
			<div className={styles.row__poster_container}>
				<img src='https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//34FaY8qpjBAVysSfrJ1l7nrAQaD.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//mYsWyfiIMxx4HDm0Wck7oJ9ckez.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//asDqvkE66EegtKJJXIRhBJPxscr.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg' alt='' className={styles.row__poster} />
				<img src='https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg' alt='' className={styles.row__poster} />
			</div>
		</div>
	)
}

export default Row

import styles from '../styles/Banner.module.css'

const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.banner__content}>
				<div className={styles.banner__title}>Ginny &amp; Georgia</div>
				<div className={styles.banner__button_container}>
					<div className={styles.banner__button}>Play</div>
					<div className={styles.banner__button}>Add to List</div>
				</div>
				<div className={styles.banner__description}>
					Angsty and awkward fifteen year old Ginny Miller often feels
					more mature than her thirty year old mother, the
					irresistible and dynamic Georgia Miller...
				</div>
			</div>
		</div>
	)
}

export default Banner

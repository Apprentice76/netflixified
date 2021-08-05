import styles from '../styles/Banner.module.css'

const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.banner_content}>
				<div className={styles.banner_title}>Ginny &amp; Georgia</div>
				<div className={styles.banner_buttons}>
					<div className={styles.button}>Play</div>
					<div className={styles.button}>Add to List</div>
				</div>
				<div className={styles.banner_description}>
					Angsty and awkward fifteen year old Ginny Miller often feels
					more mature than her thirty year old mother, the
					irresistible and dynamic Georgia Miller...
				</div>
			</div>
		</div>
	)
}

export default Banner
